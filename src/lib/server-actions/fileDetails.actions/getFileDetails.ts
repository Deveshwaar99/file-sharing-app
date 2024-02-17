'use server'
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite'
import { app } from '@/firebaseConfig'

export async function getFileDetails(fileId: string) {
  const db = getFirestore(app)
  try {
    const docRef = doc(db, 'fileUploads', fileId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return undefined
    }
  } catch (error) {
    console.error('Error in getting file info', error)
  }
}
