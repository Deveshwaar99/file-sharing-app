import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'

function RouteHeader() {
  return (
    <header className="flex flex-row items-center justify-between max-w-full px-12 border-b">
      <div className="flex items-center object-contain md:hidden">
        <MobileSidebar />
      </div>
      <div className="flex items-center object-contain h-20 md:gap-12">
        <Link href="/">
          <Image src={'/image/logo.png'} width={150} height={125} alt="logo" />
        </Link>
      </div>
      <div className="">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

export default RouteHeader
