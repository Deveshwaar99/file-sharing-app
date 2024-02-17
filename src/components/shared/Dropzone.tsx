import { v4 as uuidv4 } from 'uuid'
import { Dispatch, SetStateAction, useState } from 'react'
import { FileType } from '@/lib/types'

type DropzoneProps = {
  setFiles: Dispatch<SetStateAction<FileType[]>>
}
export default function Dropzone({ setFiles }: DropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    const files = event.dataTransfer.files
    handleFiles(files)
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const files = event.target.files
    handleFiles(files!)
  }

  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files).map(file => ({ id: uuidv4(), file }))
    setFiles(prev => [...prev, ...newFiles])
  }

  return (
    <div>
      <div className="flex items-center justify-center w-3/4 mx-auto my-9">
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
            isDragOver ? 'bg-gray-200' : null
          } `}
        >
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="flex flex-col items-center justify-center pt-5 pb-6"
          >
            <svg
              className="w-8 h-8 mb-4 text-indigo-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-indigo-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-indigo-500 dark:text-gray-400">
              IMAGE, PDF, MP3 or GIF (MAX SIZE 40MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            multiple
            onChange={e => handleFileInputChange(e)}
            className="hidden"
          />
        </label>
      </div>
    </div>
  )
}
