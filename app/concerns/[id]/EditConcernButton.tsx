import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function EditConcernButton({ concernId }: { concernId: number }) {
  return (
    <Button>
      <Link href={`/concerns/${concernId}/edit`}><Pencil2Icon /></Link>
      <Link href={`/concerns/${concernId}/edit`}>Edit Button</Link>
    </Button>
  )
}