import Link from 'next/link'
import React from 'react'
import { HiTicket } from 'react-icons/hi2'

const NavBar = () => {
  const links = [
    { label: 'Home', href: '/'},
    { label: 'Concerns', href: '/concerns'},
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'><HiTicket /></Link>
      <ul className='flex space-x-6'>
        {links.map(link => 
        <Link key={link.href}
        className='text-zinc-500 hover:text-zinc-800 transition-colors'
        href={link.href}>{link.label}</Link>)}
      </ul>
    </nav>
  )
}

export default NavBar;