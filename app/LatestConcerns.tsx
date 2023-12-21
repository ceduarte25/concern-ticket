import prisma from '@/prisma/client'
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes'
import Link from 'next/link'
import { ConcernStatusBadge } from './components'

export default async function LatestConcerns() {
  const concerns = await prisma.concern.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      assignedToUser: true,
    },
  })
  return (
    <Card>
      <Heading size='4' mb='1'>
        Latest Concerns
      </Heading>
      <Table.Root>
        <Table.Body>
          {concerns.map((concern) => (
            <Table.Row key={concern.id}>
              <Table.Cell>
                <Flex justify='between'>
                  <Flex direction='column' align='start' gap='2'>
                    <Link href={`/concerns/${concern.id}`}>
                      {concern.title}
                    </Link>
                    <ConcernStatusBadge status={concern.status} />
                  </Flex>
                  {concern.assignedToUser && (
                    <Avatar
                      src={concern.assignedToUser.image!}
                      fallback='?'
                      radius='full'
                      size='2'
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  )
}
