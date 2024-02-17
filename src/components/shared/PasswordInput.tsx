'use client'

//ui
import { useState } from 'react'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import PasswordField from './PasswordField'

import { addPassword } from '@/lib/server-actions/fileDetails.actions/addPassword'
import { getFormattedDateTime } from '@/lib/utils'

function PasswordInput({ fileId }: { fileId: string }) {
  const [password, setPassword] = useState<string | undefined>('')
  const [disableButton, setDisableButton] = useState(false)

  async function handleAddPassword() {
    setDisableButton(true)
    await addPassword({ password, fileId })
    toast('Voila! Password added like magic ✨', {
      description: getFormattedDateTime(),
    })
    setDisableButton(false)
  }

  return (
    <div className="">
      <label className="text-md text-slate-500">Password</label>
      <div className="flex flex-row w-full gap-2 py-2 ">
        <PasswordField password={password} setPassword={setPassword} />
        <Button
          disabled={password === undefined || password.length < 3 || disableButton}
          onClick={() => handleAddPassword()}
          className=" bg-violet-500"
        >
          Add
        </Button>
      </div>
      <Toaster />
    </div>
  )
}

export default PasswordInput
