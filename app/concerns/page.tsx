import { Pagination } from '@/app/components'
import prisma from '@/prisma/client'
import { Status } from '@prisma/client'
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
    <div>
      <ConcernsAction />
      <ConcernsTable searchParams={searchParams} concerns={concerns} />
      <Pagination
        itemCount={concernCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  )
}

export const dynamic = 'force-dynamic'
