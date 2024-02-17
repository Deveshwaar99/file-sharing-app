import Link from 'next/link'
//ui
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-right"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="9" y1="12" y2="12" />
            <line x1="21" x2="7" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Image src={logoImg} width={120} height={50} alt="logo" />
        <Separator className="my-5" />
        <NavItems />
        <div className="hidden w-full mx-auto my-8 sm:flex">
          <Link href="/sign-up">
            <Button className="flex-1 bg-indigo-500 rounded-full ">Register</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
