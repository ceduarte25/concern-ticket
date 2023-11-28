import ConcernStatusBadge from "@/app/components/ConcernStatusBadge";
import prisma from "@/prisma/client"
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      <Heading>{concern.title}</Heading>
      <Flex gap='3' my='2' >
        <ConcernStatusBadge status={concern.status} />
        <p>{concern.createdAt.toDateString()}</p>
      </Flex>
      <Card className='prose' mt='4'>
        <ReactMarkdown>{concern.description}</ReactMarkdown>
      </Card>
    </div>
  )
}