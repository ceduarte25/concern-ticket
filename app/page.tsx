import prisma from '@/prisma/client'
import ConcernsSummary from './ConcernsSummary'
import LatestConcerns from './LatestConcerns'

export default async function Home() {
  const open = await prisma.concern.count({ where: { status: 'OPEN' } })
  const closed = await prisma.concern.count({ where: { status: 'CLOSED' } })
  const inProgress = await prisma.concern.count({
    where: { status: 'IN_PROGRESS' },
  })

  return <ConcernsSummary open={open} inProgress={inProgress} closed={closed} />
}
