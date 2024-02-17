'use client'
import isEmail from 'validator/es/lib/isEmail'
import { useState } from 'react'
import { Button } from '../ui/button'
import { sendEmail, sendEmailParams } from '@/lib/server-actions/fileDetails.actions/sendEmail'
import { toast } from 'sonner'
import { getFormattedDateTime } from '@/lib/utils'
import { Toaster } from '../ui/sonner'
import { useRouter } from 'next/navigation'

type EmailInputParams = {
  fileName: string
  fileType: string
  createdAt: string
  downloadUrl: string
  userName: string
}

function EmailInput({ fileType, createdAt, fileName, downloadUrl, userName }: EmailInputParams) {
  const router = useRouter()
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [showError, setShowError] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  async function handleSendEmail() {
    setShowError(false)
    const isValidEmail = isEmail(String(email))
    if (!isValidEmail) return setShowError(true)
    await sendEmail({
      fileType,
      createdAt,
      fileName,
      downloadUrl,
      userName,
      reciever: email!,
    })
    toast('Email sent with the speed of light (well, almost)! ⚡', {
      description: getFormattedDateTime(),
    })
  }

  return (
    <div>
      <label className="text-md text-slate-500">Send download link to email</label>
      <div className="flex flex-row w-full gap-2 py-2 ">
        <input
          type="email"
          placeholder="example@email.com"
          className=" w-auto py-2 pl-3 pr-12 text-gray-500 bg-transparent border border-gray-300 rounded-lg shadow-sm outline-none bg-violet-50 focus:border-indigo-600"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          disabled={disableButton}
          onClick={() => handleSendEmail()}
          className=" bg-violet-500"
        >
          Send
        </Button>
      </div>
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
      <Toaster />
    </div>
  )
}

export default EmailInput
