'use client'

import { getFormattedDateTime } from '@/lib/utils'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'

function InputwithCopy({ text }: { text: string }) {
  const handleButtonClick = () => {
    navigator.clipboard.writeText(text)
    toast("✅ Copied! It's in your clipboard now.", {
      description: getFormattedDateTime(),
    })
  }

  return (
    <div>
      <div className="my-2 text-md text-slate-500 ">Url</div>
      <div className="flex flex-row items-center justify-between py-2 border border-gray-300 rounded-md shadow-sm w-fit bg-violet-50 sm:text-sm">
        <p className="px-2">{text}</p>
        <span className="px-3 ">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
            onClick={() => handleButtonClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoi="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </span>
      </div>
      <Toaster />
    </div>
  )
}

export default InputwithCopy
