import prisma from "@/prisma/client"
import { notFound } from "next/navigation";

interface Props {
  params: { id: string }
};

export default async function ConcernDetailsPage({ params }: Props) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!concern) notFound();

  return (
    <div>
      <p>{concern.title}</p>
      <p>{concern.description}</p>
      <p>{concern.status}</p>
      <p>{concern.createdAt.toDateString()}</p>
    </div>
  )
}