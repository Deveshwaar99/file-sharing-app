import JSZip from 'jszip' // Ensure correct import path
import { FileType } from '../types'

export async function compressFiles(files: FileType[], zipFileName: string): Promise<Blob> {
  // Input validation:
  if (!files || !Array.isArray(files) || !files.length) {
    throw new Error('Invalid files array: must be a non-empty array of File objects')
  }
  if (!zipFileName || typeof zipFileName !== 'string') {
    throw new Error('Invalid zipFileName: must be a non-empty string')
  }

  const zip = new JSZip()
  const folder = zip.folder('Files')

  files.forEach(({ id, file }, index) => {
    folder?.file(file.name, file)
  })

  const finalBlob = await zip.generateAsync({ type: 'blob' })

  return finalBlob
}
