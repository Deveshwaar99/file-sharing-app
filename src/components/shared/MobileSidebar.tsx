import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import Sidenav from './Sidenav'
import { UserButton } from '@clerk/nextjs'

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Image src="/icons/navleft.svg" width={20} height={20} alt="mobile-nav" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <div className="flex flex-col gap-4">
          <UserButton afterSignOutUrl="/" />
          <Sidenav />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
