'use client'

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiTicket } from 'react-icons/hi2'

export default function NavBar() {
  const path = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Concerns', href: '/concerns' },
  ]

  return (
    <nav className='border-b mb-5 px-5 py-5'>
      <Container>
        <Flex justify='between'>
          <Flex gap='5' align='center'>
            <Link href='/'><HiTicket /></Link>
            <ul className='flex space-x-6'>
              {links.map(link =>
                <li key={link.href}>
                  <Link
                    className={classNames({
                      'text-zinc-900': path === link.href,
                      'text-zinc-500': path !== link.href,
                      'hover:text-zinc-800 transition-colors': true
                    })}
                    href={link.href}>{link.label}</Link>
                </li>)}
            </ul>
          </Flex>
          <Box>
            {status === 'authenticated' &&
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className='cursor-pointer'>
                  <Avatar src={session.user!.image!} fallback='?' size='2' radius='full' />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size='2'>{session.user!.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item asChild>
                    <Link href='/api/auth/signout'>
                      <Text size='2'>Sign out</Text>
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>

            }
            {status === 'unauthenticated' && <Link href='/api/auth/signin'>Sign in</Link>}
          </Box>
        </Flex>
      </Container>
    </nav>
  )
}