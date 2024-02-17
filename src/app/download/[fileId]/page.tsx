import { getFileDetails } from '@/lib/server-actions/fileDetails.actions/getFileDetails'
import { notFound } from 'next/navigation'
import React from 'react'
import DownloadPreview from './DownloadPreview'

async function DownloadPage({ params }: { params: { fileId: string } }) {
  const { fileId } = params
  const fileDetails = await getFileDetails(fileId)
  if (!fileDetails) notFound()
  const { size, userEmail, fileType, shortUrl, createdAt, password, Url } = JSON.parse(
    JSON.stringify(fileDetails)
  )
  console.log({ size, userEmail, fileType, shortUrl, password, Url })

  return (
    <DownloadPreview
      fileName={fileId}
      fileSize={size}
      createdAt={createdAt}
      passwordkey={password}
      downloadUrl={Url}
    />
  )
}

export default DownloadPage
