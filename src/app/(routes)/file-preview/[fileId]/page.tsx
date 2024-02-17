import EmailInput from '@/components/shared/EmailInput'
import FileCard from '@/components/shared/FileCard'
import InputwithCopy from '@/components/shared/InputwithCopy'
import PasswordInput from '@/components/shared/PasswordInput'
import { getFileDetails } from '@/lib/server-actions/fileDetails.actions/getFileDetails'
import { auth } from '@clerk/nextjs'
import { clerkClient } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

async function FilePreview({ params }: { params: { fileId: string } }) {
  const { fileId } = params
  const fileDetails = await getFileDetails(fileId)
  if (!fileDetails) notFound()
  const { size, userEmail, fileType, shortUrl, createdAt } = JSON.parse(JSON.stringify(fileDetails))

  const { userId } = auth()
  const user = await clerkClient.users.getUser(userId!)
  const email = user.emailAddresses[0].emailAddress
  if (userEmail !== email) notFound()

  return (
    <>
      <div className=" m-auto my-12 w-3/4 sm:w-auto md:w-3/4 flex justify-center hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
        <div className=" bg-slate-50 flex flex-col md:flex-row  gap-4 mx-auto h-3/4 ">
          <FileCard fileName={fileId} fileSize={size} creationDate={createdAt} />
          <div className="flex flex-col gap-8 m-8 mx-4 h-3/4">
            <InputwithCopy text={shortUrl} />
            <PasswordInput fileId={fileId} />
            <EmailInput
              fileType={fileType}
              createdAt={createdAt}
              fileName={fileId}
              downloadUrl={shortUrl}
              userName={userEmail}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilePreview
