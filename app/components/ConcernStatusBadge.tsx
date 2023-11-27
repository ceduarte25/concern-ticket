import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const concernStatusMap: Record<Status, { label: string, color: 'green' | 'red' | 'teal' }> = {
  OPEN: { label: 'Open', color: 'green' },
  CLOSED: { label: 'Closed', color: 'red' },
  IN_PROGRESS: { label: 'In Progress', color: 'teal' }
}

export default function ConcernStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={concernStatusMap[status].color}>{concernStatusMap[status].label}</Badge>
  )
}