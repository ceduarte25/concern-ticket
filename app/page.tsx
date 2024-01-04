import prisma from '@/prisma/client'
import { Flex, Grid } from '@radix-ui/themes'
import { Metadata } from 'next'
import ConcernsChart from './ConcernsChart'
import ConcernsSummary from './ConcernsSummary'
import LatestConcerns from './LatestConcerns'
import SignInPrompt from './SignInPrompt'

export default async function Home() {
  const open = await prisma.concern.count({ where: { status: 'OPEN' } })
  const closed = await prisma.concern.count({ where: { status: 'CLOSED' } })
  const inProgress = await prisma.concern.count({
    where: { status: 'IN_PROGRESS' },
  })

  const statusesCount = { open, closed, inProgress }

  return (
    <Flex direction='column' gap='4'>
      <SignInPrompt />
      <Grid columns={{ initial: '1', md: '2' }} gap='5'>
        <Flex direction='column' gap='5'>
          <ConcernsSummary {...statusesCount} />
          <ConcernsChart {...statusesCount} />
        </Flex>
        <LatestConcerns />
      </Grid>
    </Flex>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ConcernTicket - Navigate Your Worries',
  description:
    'View a summarized data of all of the current and previous concerns',
  creator: 'Christian Eduarte',
  icons: {
    icon: '/concernTicket.png',
  },
}
 