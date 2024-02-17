'use server'
import { doc, getFirestore, updateDoc } from 'firebase/firestore/lite'
import { app } from '@/firebaseConfig'

export async function addPassword({
  password,
  fileId,
}: {
  password: string | undefined
  fileId: string
}) {
  if (password === undefined) return
  const db = getFirestore(app)
  try {
    const docRef = doc(db, 'fileUploads', fileId)
    await updateDoc(docRef, { password })
  } catch (error) {
    console.error('Error in adding password', error)
  }
}
