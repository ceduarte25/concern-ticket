'use client'
import { Select } from "@radix-ui/themes";

export default function AssigneeSelect() {
  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign...' />
      <Select.Content position='popper'>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value='1'>bigxmark</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}