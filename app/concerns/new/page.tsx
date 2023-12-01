import dynamic from "next/dynamic"
import ConcernFormSkeleton from "./loading"

const ConcernForm = dynamic(
  () => import('@/app/concerns/_components/ConcernForm'),
  {
    ssr: false,
    loading: () => <ConcernFormSkeleton />
  }
)

export default function NewConcernPage() {
  return <ConcernForm />
}