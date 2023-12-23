import { Pagination } from '@/app/components'
import prisma from '@/prisma/client'
import { Status } from '@prisma/client'
import { Flex } from '@radix-ui/themes'
import { Metadata } from 'next'
import ConcernsAction from './ConcernsAction'
import ConcernsTable, { ConcernQuery, columnValues } from './ConcernsTable'

interface Props {
  searchParams: ConcernQuery
}

export default async function Concerns({ searchParams }: Props) {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const where = { status }

  const orderBy = columnValues.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined

  const page = parseInt(searchParams.page) || 1
  const pageSize = 10

  const concerns = await prisma.concern.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const concernCount = await prisma.concern.count({ where })

  return (
    <Flex direction='column' gap='4'>
      <ConcernsAction />
      <ConcernsTable searchParams={searchParams} concerns={concerns} />
      <Pagination
        itemCount={concernCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </Flex>
  )
}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ConcernTicket - Concern List',
  description: 'View all the list of concerns',
  creator: 'Christian Eduarte',
  icons: {
    icon: '/concernTicket.png',
  },
}
