import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

export default function ConcernFormSkeleton() {
  return (
    <Box className='max-w-xl'>
      <Skeleton height='1.75rem' />
      <Skeleton height='23rem' className='mt-3' />
    </Box>
  )
}