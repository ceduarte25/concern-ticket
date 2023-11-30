import { ConcernStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import Link from "next/link";
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
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Box>
        <Heading>{concern.title}</Heading>
        <Flex gap='3' my='2' >
          <ConcernStatusBadge status={concern.status} />
          <p>{concern.createdAt.toDateString()}</p>
        </Flex>
        <Card className='prose' mt='4'>
          <ReactMarkdown>{concern.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/concerns/${concern.id}/edit`}>Edit Button</Link>
        </Button>
      </Box>
    </Grid>
  )
}