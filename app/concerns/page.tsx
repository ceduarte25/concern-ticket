import prisma from "@/prisma/client"
import { Button, Table } from "@radix-ui/themes"
import classNames from "classnames";
import Link from "next/link"

export default async function Concerns() {
  const concerns = await prisma.concern.findMany();

  return (
    <div>
      <div className='mb-5'>
        <Button><Link href='/concerns/new'>New Concern</Link></Button>
      </div>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Concern</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {concerns.map(concern => (
            <Table.Row key={concern.id}>
              <Table.Cell>
                {concern.title}
                <div className={classNames({
                  'block md:hidden': true,
                  'text-green-600': concern.status === 'OPEN',
                  'text-red-600': concern.status === 'CLOSED',
                  'text-orange-600': concern.status === 'IN_PROGRESS'
                })}>
                  {concern.status}
                </div>
              </Table.Cell>
              <Table.Cell className={classNames({
                'hidden md:table-cell': true,
                'text-green-600': concern.status === 'OPEN',
                'text-red-600': concern.status === 'CLOSED',
                'text-orange-600': concern.status === 'IN_PROGRESS'
              })}>
                {concern.status}
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{concern.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}