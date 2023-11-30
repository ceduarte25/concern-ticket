import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function EditConcernButton({ concernId }: { concernId: number }) {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/concerns/${concernId}/edit`}>Edit Button</Link>
    </Button>
  )
}