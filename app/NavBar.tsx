'use client'

import Link from 'next/link'
import { HiTicket } from 'react-icons/hi2'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

export default function NavBar() {
  const path = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Concerns', href: '/concerns' },
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'><HiTicket /></Link>
      <ul className='flex space-x-6'>
        {links.map(link =>
          <Link key={link.href}
            className={classNames({
              'text-zinc-900': path === link.href,
              'text-zinc-500': path !== link.href,
              'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>{link.label}</Link>)}
      </ul>
    </nav>
  )
}