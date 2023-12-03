import { Button, Text } from "@radix-ui/themes";

export default function DeleteConcernButton({ concernId }: { concernId: number }) {
  return (
    <Button color='red'><Text size={{ sm: '1', md: '2' }}>Delete Concern</Text></Button>
  )
}