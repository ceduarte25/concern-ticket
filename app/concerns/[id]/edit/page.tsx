import prisma from '@/prisma/client'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import ConcernFormSkeleton from '../../_components/ConcernFormSkeleton'

const ConcernForm = dynamic(() => import('../../_components/ConcernForm'), {
  ssr: false,
  loading: () => <ConcernFormSkeleton />,
})

interface Props {
  params: { id: string }
}

export default async function EditConcernPage({ params }: Props) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!concern) notFound()

  return <ConcernForm concern={concern} />
}

export async function generateMetadata({ params }: Props) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) },
  })

  return {
    title: `Edit ${concern?.title}`,
    description: `Edit concern ${concern?.id}`,
    creator: 'Christian Eduarte',
    icons: {
      icon: '/concernTicket.png',
    },
  }
}
