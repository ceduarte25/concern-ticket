'use client'
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createConcernSchema } from "@/app/validationSchemas";
import { z } from "zod";

type ConcernForm = z.infer<typeof createConcernSchema>;

export default function NewConcern() {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<ConcernForm>({
    resolver: zodResolver(createConcernSchema)
  });
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/concerns', data);
            router.push('/concerns');
          } catch (error) {
            setError('An unexpected error occurred.');
          }
        })}>
        <TextField.Root>
          <TextField.Input placeholder='Title' {...register('title')} />
        </TextField.Root>
        {errors && <Text color='red' as='p'>{errors.title?.message}</Text>}
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
        />
        {errors && <Text color='red' as='p'>{errors.description?.message}</Text>}
        <Button>Submit New Concern</Button>
      </form>
    </div>
  )
}