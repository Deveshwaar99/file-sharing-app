'use server'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { clerkClient } from '@clerk/nextjs/server'
import { getFirestore, doc, setDoc } from 'firebase/firestore/lite'
import { app } from '@/firebaseConfig'
import { getFormattedDateTime } from '@/lib/utils'

type UploadInfoToDbParams = {
  fileId: string
  size: number
  type: string
  downloadURL: string
  userEmail?: string
}

export async function uploadInfoToDb({
  fileId,
  size,
  type,
  downloadURL,
  userEmail,
}: UploadInfoToDbParams) {
  const { userId } = auth()
  const user = await clerkClient.users.getUser(userId!)
  const email = user.emailAddresses[0].emailAddress

  const db = getFirestore(app)

  const fileInfo = {
    id: fileId,
    size,
    fileType: type,
    Url: downloadURL,
    userEmail: email,
    password: '',
    shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'download/' + fileId,
    createdAt: getFormattedDateTime(),
  }

  try {
    const newFileRef = doc(db, 'fileUploads', fileId)
    await setDoc(newFileRef, fileInfo)
  } catch (error) {
    console.error('Error in uploading fileInfo to the db', error)
  }

  redirect(`/file-preview/${fileId}`)
}
