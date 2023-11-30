import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ConcernDetails from "./ConcernDetails";
import EditConcernButton from "./EditConcernButton";

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
        <ConcernDetails concern={concern} />
      </Box>
      <Box>
        <EditConcernButton concernId={concern.id} />
      </Box>
    </Grid>
  )
}