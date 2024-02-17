'use client'

import FileCard from '@/components/shared/FileCard'
import PasswordField from '@/components/shared/PasswordField'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type FileMetadata = {
  fileName: string
  fileSize: string
  createdAt: string
  downloadUrl: string
  passwordkey: string
}

function DownloadPreview({
  fileName,
  fileSize,
  createdAt,
  downloadUrl,
  passwordkey,
}: FileMetadata) {
  const [password, setPassword] = useState<string | undefined>('')
  const [disableButton, setDisableButton] = useState(false)
  const [showError, setShowError] = useState(false)

  function handleDownloadButtonClick() {
    setShowError(false)
    if (password !== passwordkey) return setShowError(true)
    window.open(downloadUrl)
  }

  return (
    <div className="flex flex-col w-screen h-screen gap-4 justify-center items-center">
      <Link href="/">
        <Image src="/image/logo.png" alt="logo" width={200} height={160} />
      </Link>
      <article className=" w-1/3 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4  sm:p-6 w-full flex flex-col gap-3 justify-center items-center">
          <FileCard fileName={fileName} fileSize={fileSize} creationDate={createdAt} />
          {passwordkey && <PasswordField password={password} setPassword={setPassword} />}
          {showError && (
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-red-600 font-semibold text-xs mt-1 mx-1">
                Invalid please enter a correct email.
              </span>
            </div>
          )}

          <Button
            onClick={() => handleDownloadButtonClick()}
            className="  bg-violet-500 w-full rounded-full hover:bg-violet-700"
          >
            Download
          </Button>
        </div>
      </article>
    </div>
  )
}

export default DownloadPreview
