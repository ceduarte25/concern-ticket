import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ConcernDetails from "./ConcernDetails";
import DeleteConcernButton from "./DeleteConcernButton";
import EditConcernButton from "./EditConcernButton";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string }
};

export default async function ConcernDetailsPage({ params }: Props) {
  const session = await getServerSession(authOptions)

  const concern = await prisma.concern.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!concern) notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
      <Box className='md:col-span-4'>
        <ConcernDetails concern={concern} />
      </Box>
      {session &&
        <Box>
          <Flex direction='column' gap='2'>
            <AssigneeSelect />
            <EditConcernButton concernId={concern.id} />
            <DeleteConcernButton concernId={concern.id} />
          </Flex>
        </Box>
      }
    </Grid>
  )
}