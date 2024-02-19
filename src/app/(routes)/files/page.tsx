import { getUserFiles } from '@/lib/server-actions/fileDetails.actions/getFileDetails'
import { auth, clerkClient } from '@clerk/nextjs'
import Link from 'next/link'

import { notFound } from 'next/navigation'

async function Files() {
  const { userId } = auth()
  const user = await clerkClient.users.getUser(userId!)
  const email = user.emailAddresses[0].emailAddress
  if (!email) notFound()

  const fileList = await getUserFiles(email)

  return (
    <div className="overflow-x-auto md:my-10 sm:my-4 w-auto mx-auto text-left">
      {fileList.length > 0 ? (
        <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200 border border-slate-200 ">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Url</th>
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Size</th>
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Created At</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {fileList?.map((item: any) => {
              const size = (item.size / 1024).toFixed(2)
              return (
                <tr key={item.id}>
                  <td className="px-4 py-2 text-gray-700 ">{item?.shortUrl}</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{size} KB</td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item?.createdAt}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <Link
                      href={`file-preview/${item.id}`}
                      className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center mx-auto text-lg">
          Zero files in sight! Time to jazz it up with some uploads! 📁🎉 Dont leave this space
          empty!
        </div>
      )}
    </div>
  )
}

export default Files
