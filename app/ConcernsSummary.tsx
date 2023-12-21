import { Status } from '@prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'

interface Props {
  open: number
  inProgress: number
  closed: number
}

export default function ConcernsSummary({ open, inProgress, closed }: Props) {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Open Concerns', value: open, status: 'OPEN' },
    { label: 'In-progress Concerns', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed Concerns', value: closed, status: 'CLOSED' },
  ]

  return (
    <Flex gap='3'>
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction='column' gap='1'>
            <Link
              href={`/concerns?status=${container.status}`}
              className='text-sm font-medium'
            >
              {container.label}
            </Link>
            <Text size='5' className='font-bold'>
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}
