import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function ConcernsAction() {
  return (
    <div className='mb-5'>
      <Button asChild><Link href='/concerns/new'>New Concern</Link></Button>
    </div>
  )
}