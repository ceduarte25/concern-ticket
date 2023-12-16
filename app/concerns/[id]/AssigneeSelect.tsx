'use client'
import { Skeleton } from '@/app/components'
import { User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function AssigneeSelect() {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  })

  if (isLoading) return <Skeleton height='2rem' />

  if (error) return null

  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign...' />
      <Select.Content position='popper'>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              <Avatar src={user.image!} fallback='?' radius='full' size='1' />{' '}
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}