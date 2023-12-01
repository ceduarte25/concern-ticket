import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ConcernFormSkeleton from "../../_components/ConcernFormSkeleton";

const ConcernForm = dynamic(
  () => import('../../_components/ConcernForm'),
  {
    ssr: false,
    loading: () => <ConcernFormSkeleton />
  }

)

interface Props {
  params: { id: string }
}

export default async function EditConcernPage({ params }: Props) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!concern) notFound()

  return (
    <ConcernForm concern={concern} />
  )
}