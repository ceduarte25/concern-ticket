import { Concern, Status } from '@prisma/client'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'
import NextLink from 'next/link'
import { ConcernStatusBadge, Link } from '../components'

export interface ConcernQuery {
  status: Status
  orderBy: keyof Concern
  page: string
}

interface Props {
  searchParams: ConcernQuery
  concerns: Concern[]
}

export default function ConcernsTable({ searchParams, concerns }: Props) {
  return (
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
  )
}

const columns: { label: string; value: keyof Concern; className?: string }[] = [
  { label: 'Concern', value: 'title' },
  { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
  {
    label: 'Created',
    value: 'createdAt',
    className: 'hidden md:table-cell',
  },
]

export const columnValues = columns.map((column) => column.value)
