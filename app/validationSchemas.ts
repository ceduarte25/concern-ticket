import { Status } from '@prisma/client'
import { z } from 'zod'

export const concernSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is required').max(65535),
})

export const patchConcernSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255).optional(),
  status: z.nativeEnum(Status).optional(),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, 'Invalid user.')
    .max(255)
    .optional()
    .nullable(),
})
