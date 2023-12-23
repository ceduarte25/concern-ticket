import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ConcernFormSkeleton from './loading'

const ConcernForm = dynamic(
  () => import('@/app/concerns/_components/ConcernForm'),
  {
    ssr: false,
    loading: () => <ConcernFormSkeleton />,
  }
)

export default function NewConcernPage() {
  return <ConcernForm />
}

export const metadata: Metadata = {
  title: 'ConcernTicket - New Concern',
  description: 'Submit a new concern',
  creator: 'Christian Eduarte',
  icons: {
    icon: '/concernTicket.png',
  },
}
