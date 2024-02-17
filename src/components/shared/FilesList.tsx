import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { FileType } from '@/lib/types'

type FilesListProps = {
  files: FileType[]
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

function FilesList({ files, setFiles }: FilesListProps) {
  function handleDeleteFile(id: string) {
    files = files.filter(file => file.id !== id)
    setFiles([...files])
  }

  return (
    <div className="px-4 md:px-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm bg-white divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-2 md:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">No</th>
              <th className="px-2 md:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                Name
              </th>
              <th className="px-2 md:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                Type
              </th>
              <th className="px-2 md:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                Size
              </th>
              <th className="px-2 md:px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {files.map(({ id, file }, index) => {
              const size = (file.size / 1024).toFixed(2)

              return (
                <tr key={id}>
                  <td className="px-2 md:px-4 py-2 font-medium text-gray-900">{index + 1}</td>
                  <td className="px-2 md:px-4 py-2 font-medium text-gray-900">{file.name}</td>
                  <td className="px-2 md:px-4 py-2 text-gray-700">{file.type}</td>
                  <td className="px-2 md:px-4 py-2 text-gray-700 whitespace-nowrap">{size} KB</td>

                  <td className="px-2 md:px-4 py-2 whitespace-nowrap">
                    <Button
                      onClick={() => handleDeleteFile(id)}
                      className="inline-block px-2 md:px-4 py-2 text-xs font-medium bg-inherit hover:bg-inherit rounded"
                    >
                      <Image src={'/icons/delete.svg'} alt="delete" width={20} height={15} />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default FilesList
