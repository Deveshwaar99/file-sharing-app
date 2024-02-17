'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator'

const items = [
  {
    id: 1,
    title: 'Upload',
    icon: '/icons/upload.svg',
    path: '/upload',
  },
  {
    id: 2,
    title: 'My Files',
    icon: '/icons/files.svg',
    path: '/files',
  },
  {
    id: 3,
    title: 'Upgrade',
    icon: '/icons/upgrade.svg',
    path: '/upgrade',
  },
]

function Sidenav() {
  const pathName = usePathname()
  return (
    <div className="flex flex-col items-start w-30 ml-12 h-screen md:ml-20  md:w-48  mt-[50px]">
      <div className="flex-col w-full ">
        {items.map((item, index) => {
          const isCurrentRoute = pathName == item.path
          return (
            <Link key={index} href={item.path}>
              <div
                className={`flex items-center justify-start  h-16 gap-7 transition-colors duration-200 hover:text-indigo-400 ${
                  isCurrentRoute ? 'text-my-custom-purple' : ''
                }`}
              >
                <Image src={item.icon} alt={item.title} width={20} height={20} />
                <h2 className="text-xl font-medium text-nowrap">{item.title}</h2>
              </div>
            </Link>
          )
        })}
        <Separator />
      </div>
    </div>
  )
}

export default Sidenav
