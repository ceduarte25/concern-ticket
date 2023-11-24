'use client'
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface ConcernForm {
  title: string;
  description: string;
}

export default function NewConcern() {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<ConcernForm>();

  return (
    <form   
      className='space-y-3 max-w-xl' 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/concerns', data);
        router.push('/concerns');
      })}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <Controller 
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE placeholder='Description' {...field} /> }
      />
      <Button>Submit New Concern</Button>
    </form>
  )
}