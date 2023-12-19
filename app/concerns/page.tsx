import { ConcernStatusBadge, Link, Pagination } from '@/app/components'
import prisma from '@/prisma/client'
import { Concern, Status } from '@prisma/client'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'
import NextLink from 'next/link'
import ConcernsAction from './ConcernsAction'

interface Props {
  searchParams: { status: Status; orderBy: keyof Concern; page: string }
}

export default async function Concerns({ searchParams }: Props) {
  const columns: { label: string; value: keyof Concern; className?: string }[] =
    [
      { label: 'Concern', value: 'title' },
      { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
      {
        label: 'Created',
        value: 'createdAt',
        className: 'hidden md:table-cell',
      },
    ]

  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const where = { status }

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
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
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}{' '}
                  {column.value === searchParams.orderBy && (
                    <ArrowUpIcon className='inline' />
                  )}
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {concerns.map((concern) => (
            <Table.Row key={concern.id}>
              <Table.Cell>
                <Link href={`concerns/${concern.id}`}>{concern.title}</Link>
                <div className='block md:hidden'>
                  <ConcernStatusBadge status={concern.status} />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                <ConcernStatusBadge status={concern.status} />
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>
                {concern.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        itemCount={concernCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  )
}

export const dynamic = 'force-dynamic'
