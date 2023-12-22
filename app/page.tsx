import prisma from '@/prisma/client'
import LatestConcerns from './LatestConcerns'
import ConcernsChart from './ConcernsChart'
import { Flex, Grid } from '@radix-ui/themes'
import ConcernsSummary from './ConcernsSummary'

export default async function Home() {
  const open = await prisma.concern.count({ where: { status: 'OPEN' } })
  const closed = await prisma.concern.count({ where: { status: 'CLOSED' } })
  const inProgress = await prisma.concern.count({
    where: { status: 'IN_PROGRESS' },
  })

  const statusesCount = { open, closed, inProgress }

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Flex direction='column' gap='5'>
        <ConcernsSummary {...statusesCount} />
        <ConcernsChart {...statusesCount} />
      </Flex>
      <LatestConcerns />
    </Grid>
  )
}
