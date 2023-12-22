import prisma from '@/prisma/client'
import LatestConcerns from './LatestConcerns'
import ConcernsChart from './ConcernsChart'

export default async function Home() {
  const open = await prisma.concern.count({ where: { status: 'OPEN' } })
  const closed = await prisma.concern.count({ where: { status: 'CLOSED' } })
  const inProgress = await prisma.concern.count({
    where: { status: 'IN_PROGRESS' },
  })

  return <ConcernsChart open={open} inProgress={inProgress} closed={closed} />
}
