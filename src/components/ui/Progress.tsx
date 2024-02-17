import React from 'react'

function Progress({ progress }: { progress: number }) {
  return (
    <div className=" bg-gray-200 rounded-full dark:bg-gray-700 w-3/5">
      <div
        className="bg-my-custom-purple  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  )
}

export default Progress
