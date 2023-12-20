import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import ConcernsStatusFilter from './ConcernsStatusFilter'

export default function ConcernsAction() {
  return (
    <Flex justify='between'>
      <ConcernsStatusFilter />
      <Button asChild>
        <Link href='/concerns/new'>New Concern</Link>
      </Button>
    </Flex>
  )
}
