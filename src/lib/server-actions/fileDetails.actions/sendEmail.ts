'use server'
export type sendEmailParams = {
  fileName: string
  fileType: string
  createdAt: string
  downloadUrl: string
  userName: string
  reciever: string
}

export async function sendEmail({
  fileName,
  fileType,
  createdAt,
  downloadUrl,
  userName,
  reciever,
}: sendEmailParams) {
  const data = {
    fileName,
    fileType,
    createdAt,
    downloadUrl,
    userName,
    reciever,
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/send`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    // Handle successful response here
  } catch (error) {
    // Handle errors gracefully
    console.error('Error:', error)
  }
}
