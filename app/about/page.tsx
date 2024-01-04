import { Flex } from '@radix-ui/themes'
import About from './About'
import Author from './Author'
import TechnologyUsed from './TechnologyUsed'
import { Metadata } from 'next'

export default function AboutPage() {
  return (
    <Flex direction='column' gap='5'>
      <About />
      <Author />
      <TechnologyUsed />
    </Flex>
  )
}

export const metadata: Metadata = {
  title: 'ConcernTicket - About',
  description:
    'View the description of ConcernTicket Web App with detailed Author and Technology information',
  creator: 'Christian Eduarte',
  icons: {
    icon: '/concernTicket.png',
  },
}
