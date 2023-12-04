'use client'

import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";

export default function DeleteConcernButton({ concernId }: { concernId: number }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color='red'><Text size={{ sm: '1', md: '2' }}>Delete Concern</Text></Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Concern #{concernId}</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this concern? This action cannot be undone.
        </AlertDialog.Description>
        <Flex mt='4' gap='3'>
          <AlertDialog.Cancel>
            <Button color='gray' variant='soft'>Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color='red'>Delete</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}