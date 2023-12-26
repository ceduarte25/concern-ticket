import { Skeleton } from '@/app/components'
import { Box } from '@radix-ui/themes'
import UpdateStatusSkeleton from './UpdateStatusSkeleton'

export default function ConcernFormSkeleton() {
  return (
    <Box className='max-w-xl'>
      <Skeleton height='1.75rem' />
      <UpdateStatusSkeleton />
      <Skeleton height='23rem' className='mt-3' />
    </Box>
  )
}
