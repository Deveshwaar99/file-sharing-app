'use server'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite'
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
export async function getUserFiles(userEmail: string) {
  const db = getFirestore(app)
  try {
    const q = query(collection(db, 'fileUploads'), where('userEmail', '==', userEmail))
    let docs: any = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      // Get the doc data and add some playful touches
      const docData = doc.data()
      docs.push(docData)
    })
    return docs
  } catch (error) {
    console.error('Error in user files', error)
  }
}
