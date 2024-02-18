import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { app } from '@/firebaseConfig'
//
import { FileType } from '../types'
import { Dispatch, SetStateAction } from 'react'
//utils
import { compressFiles } from './compressFiles'
import { uploadInfoToDb } from '../server-actions/fileDetails.actions/uploadInfoToDb'
import _ from 'lodash'

export async function uploadFilesToStorage(
  files: FileType[],
  fileId: string,
  setProgress: Dispatch<SetStateAction<number>>
) {
  let url = ''
  try {
    const zippedFiles = await compressFiles(files, fileId)
    const { type, size } = zippedFiles
    console.log('files zipped--', zippedFiles)

    const storage = getStorage(app)
    console.log('got the app', app)
    const metadata = {
      contentType: '	application/x-zip-compressed',
    }

    const storageRef = ref(storage, `${fileId}.zip`)
    const uploadTask = uploadBytesResumable(storageRef, zippedFiles, metadata)

    // Throttled progress updates
    const throttledSetProgress = _.throttle((progress: number) => setProgress(progress), 500)

    //start upload
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        throttledSetProgress(Number(progress.toFixed(2)))
      },
      error => {
        console.error('Upload error:', error)
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

        uploadInfoToDb({ fileId, size, type, downloadURL })
      }
    )
  } catch (error) {
    console.error('Overall upload error:', error)
  }
}

// export async function downloadBlob(blob: Blob, fileName: string): Promise<void> {
//   const url = window.URL.createObjectURL(blob)
//   const link = document.createElement('a')
//   link.href = url
//   link.download = fileName
//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)
//   window.URL.revokeObjectURL(url)
// }
