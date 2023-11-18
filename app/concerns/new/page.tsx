'use client'
import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewConcern() {
  return (
    <div className='space-y-3 max-w-xl'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      <TextArea placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  )
}