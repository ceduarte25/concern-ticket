import { ConcernStatusBadge } from "@/app/components";
import { Concern } from "@prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

export default function ConcernDetails({ concern }: { concern: Concern }) {
  return (
    <>
      <Heading>{concern.title}</Heading>
      <Flex gap='3' my='2' >
        <ConcernStatusBadge status={concern.status} />
        <p>{concern.createdAt.toDateString()}</p>
      </Flex>
      <Card className='prose max-w-full' mt='4'>
        <ReactMarkdown>{concern.description}</ReactMarkdown>
      </Card>
    </>
  )
}