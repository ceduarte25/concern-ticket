'use client'

import { Link } from '@/app/components'
import { Blockquote, Em, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'

export default function SignInPrompt() {
  const { status } = useSession()

  return (
    <>
      {status === 'unauthenticated' && (
        <Blockquote weight='medium'>
          <Text size='2'>
            <Link href='/api/auth/signin'>Sign in</Link> to access all of the
            features{' '}
            <Text size='2'>
              <Em>{`(You don't need to create an account, and your account data will NOT be stored because this is only for showcasing the project features :>)`}</Em>
            </Text>
          </Text>
        </Blockquote>
      )}
    </>
  )
}
