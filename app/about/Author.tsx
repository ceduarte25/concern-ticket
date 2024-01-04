import { Avatar, Em, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const links: { Icon: IconType; path: string }[] = [
  { Icon: IoLogoGithub, path: 'https://github.com/ceduarte25' },
  { Icon: IoLogoLinkedin, path: 'https://www.linkedin.com/in/ceduarte25/' },
]

export default function Author() {
  return (
    <Flex direction='column' gap='1'>
      <Heading>Author</Heading>
      <Flex gap='3' align='center'>
        <Avatar fallback='?' src='/avatar/creator.jpg' size='9' />
        <Flex direction='column'>
          <Text size='4'>Christian Eduarte</Text>
          <Em>Creator</Em>
          <Em>Full-Stack Developer</Em>
          <Flex>
            {links.map((link) => (
              <Link key={link.path} href={link.path} target='_blank'>
                <link.Icon size={25} />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
