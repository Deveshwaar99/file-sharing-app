import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Poppins({
  subsets: ['latin'], // Specify other required subsets if needed
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sharewave',
  description: 'File sharing app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
