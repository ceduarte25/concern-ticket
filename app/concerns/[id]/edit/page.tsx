import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ConcernForm from "../../_components/ConcernForm";

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