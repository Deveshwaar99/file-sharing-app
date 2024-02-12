import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Image from 'next/image'
import logoImg from '../../../public/image/logo.png'
import NavItems from './NavItems'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Image src={logoImg} width={120} height={50} alt="logo" />
        <Separator className="my-5" />
        <NavItems />
        <div className="hidden w-full mx-auto my-8 sm:flex">
          <Button className="flex-1 bg-indigo-500 rounded-full ">Register</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
