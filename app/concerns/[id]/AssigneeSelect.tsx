'use client'
import { Skeleton } from '@/app/components'
import { Concern, User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function AssigneeSelect({ concern }: { concern: Concern }) {
  const { data: users, error, isLoading } = useFetchUsers()

  if (isLoading) return <Skeleton height='2rem' />

  if (error) return null

  const assignUser = (userId: String) => {
    axios
      .patch(`/api/concerns/${concern.id}`, {
        assignedToUserId: userId === 'unassigned' ? null : userId,
      })
      .catch(() => {
        toast.error('Changes could not be saved.')
      })
  }

  return (
    <>
      <Select.Root
        defaultValue={concern.assignedToUserId || 'unassigned'}
        onValueChange={assignUser}
      >
        <Select.Trigger placeholder='Assign...' />
        <Select.Content position='popper'>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value='unassigned'>Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                <Avatar src={user.image!} fallback='?' radius='full' size='1' />{' '}
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  )
}

const useFetchUsers = () =>
  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  })
