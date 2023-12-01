'use client'

import { ErrorMessage, Spinner } from '@/app/components';
import { concernSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Concern } from '@prisma/client';
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const SimpleMDE = dynamic(
  () => import('react-simplemde-editor'),
  { ssr: false }
)

type ConcernFormData = z.infer<typeof concernSchema>;

export default function ConcernForm({ concern }: { concern?: Concern }) {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<ConcernFormData>({
    resolver: zodResolver(concernSchema)
  });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);

      if (concern)
        await axios.patch(`/api/concerns/${concern.id}`, data)
      else
        await axios.post('/api/concerns', data);

      router.push('/concerns');
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.');
    }
  })

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        className='space-y-3'
        onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input defaultValue={concern?.title} placeholder='Title' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          defaultValue={concern?.description}
          render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {concern ? 'Update Concern' : 'Submit New Concern'}{' '}{isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  )
}