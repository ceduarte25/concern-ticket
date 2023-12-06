'use client'

import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteConcernButton({ concernId }: { concernId: number }) {
  const router = useRouter()
  const [error, setError] = useState(false)

  const deleteConcern = async () => {
    try {
      await axios.delete(`/api/concerns/${concernId}`)
      router.push('/concerns')
      router.refresh()
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
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
              <Button color='red' onClick={deleteConcern}>Delete</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>This concern cannot be deleted.</AlertDialog.Description>
          <Button color='gray' variant='soft' mt='2' onClick={() => setError(false)}>OK</Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}