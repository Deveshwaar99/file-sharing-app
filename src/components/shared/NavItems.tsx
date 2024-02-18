import Link from 'next/link'
import React from 'react'

function NavItems() {
  const navigation = [
    { title: 'Upload', path: '/upload' },
    { title: 'My files', path: '/files' },
    { title: 'About', path: '/' },
  ]
  return (
    <ul className="flex flex-col space-y-8 items-left md:flex-row md:space-x-6 md:space-y-0">
      {navigation.map((item, idx) => {
        return (
          <li key={idx} className="text-gray-700 hover:text-indigo-500 ">
            <Link href={item.path} className="block">
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
