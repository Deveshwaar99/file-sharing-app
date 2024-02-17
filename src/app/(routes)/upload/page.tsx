'use client'
//ui
import Dropzone from '@/components/shared/Dropzone'
import FilesList from '@/components/shared/FilesList'
import { Button } from '@/components/ui/button'
import Progress from '@/components/ui/Progress'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

import { useState } from 'react'
import { FileType } from '@/lib/types'

import { uploadFilesToStorage } from '@/lib/client-actions/uploadFilesToStorage'
import { v4 as uuidv4 } from 'uuid'
import { getFormattedDateTime } from '@/lib/utils'

function Upload() {
  const [files, setFiles] = useState<FileType[]>([])
  const [progress, setProgress] = useState(0)

  const handleUploadFiles = async () => {
    await uploadFilesToStorage(files, uuidv4(), setProgress)
  }
  if (progress === 100) {
    toast('🎊 Files have been uploaded', {
      description: getFormattedDateTime(),
    })
    setProgress(0)
  }
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-full pointer-events-none blur-xl "
        style={{
          background:
            'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }}
      ></div>

      <div className="flex flex-col text-center items-center">
        <h1 className="text-3xl my-7">Upload</h1>
        <div className=" w-full ">
          <Dropzone setFiles={setFiles} />
        </div>

        {files.length ? <FilesList files={files} setFiles={setFiles} /> : null}

        {progress === 0 || progress === 100 ? (
          <Button
            onClick={() => handleUploadFiles()}
            disabled={!files.length}
            className=" bg-my-custom-purple w-3/5 rounded-2xl"
          >
            Upload
          </Button>
        ) : (
          <Progress progress={progress} />
        )}
        <Toaster />
      </div>
    </div>
  )
}

export default Upload
