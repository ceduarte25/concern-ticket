import { Button } from "@radix-ui/themes";

export default function DeleteConcernButton({ concernId }: { concernId: number }) {
  return (
    <Button color='red' size={{ sm: '1', md: '2' }}>Delete Concern</Button>
  )
}