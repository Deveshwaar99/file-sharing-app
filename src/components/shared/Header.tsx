import Image from 'next/image'
import Link from 'next/link'

//ui
import NavItems from './NavItems'
import { Button } from '../ui/button'
import logoImg from '../../../public/image/logo.png'
import MobileNav from './MobileNav'
import { Separator } from '../ui/separator'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <>
      <header className="my-4 bg-white ">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center object-contain h-20 md:gap-12">
              <Link href="/">
                <Image src={logoImg} width={150} height={125} alt="logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <nav>
                <NavItems />
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <SignedOut>
                  <Link href={'/sign-in'}>
                    <Button className="bg-indigo-500 hover:bg-indigo-400 ">Login</Button>
                  </Link>

                  <div className="hidden sm:flex">
                    <Link href="/sign-up">
                      <Button className="text-indigo-500 border border-indigo-500 border-solid hover:bg-indigo-100 bg-inherit">
                        Register
                      </Button>
                    </Link>
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>

              <div className="block md:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
          <Separator className="my-4" />
        </div>
      </header>
    </>
  )
}

export default Header
