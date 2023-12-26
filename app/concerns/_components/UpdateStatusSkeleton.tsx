'use client'

import { Skeleton } from '@/app/components'
import { usePathname } from 'next/navigation'

export default function UpdateStatusSkeleton() {
  const path = usePathname()

  return (
    <>
      {path !== `/concerns/new` && (
        <Skeleton height='1.75rem' width='7.75rem' className='mt-3' />
      )}
    </>
  )
}
