import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ConcernDetails from "./ConcernDetails";
import EditConcernButton from "./EditConcernButton";
import DeleteConcernButton from "./DeleteConcernButton";

interface Props {
  params: { id: string }
};

export default async function ConcernDetailsPage({ params }: Props) {
  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!concern) notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
      <Box className='md:col-span-4'>
        <ConcernDetails concern={concern} />
      </Box>
      <Box>
        <Flex direction='column' gap='2'>
          <EditConcernButton concernId={concern.id} />
          <DeleteConcernButton concernId={concern.id} />
        </Flex>
      </Box>
    </Grid>
  )
}