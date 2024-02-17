import Image from 'next/image'

type FileCardProps = {
  fileName: string
  fileType?: string
  fileSize: string
  creationDate: string
}
function FileCard({
  fileName = 'Unknown',
  fileType = 'Zip file',
  fileSize = 'Unknown',
  creationDate = 'Unknown',
}: FileCardProps) {
  return (
    <article className="flex flex-col items-center text-center justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-archive"
      >
        <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="10" cy="20" r="2" />
        <path d="M10 7V6" />
        <path d="M10 12v-1" />
        <path d="M10 18v-2" />
      </svg>

      <h2 className="my-2 text-2xl font-semibold truncate text-wrap">{fileName}</h2>
      <p className="text-base opacity-75">
        <em>{fileType} </em> <br />
        Created: {creationDate}
      </p>
      <p className="text-base opacity-75">Size: {(Number(fileSize) / 1024).toFixed(2)} KB</p>
    </article>
  )
}

export default FileCard
