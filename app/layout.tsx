import { Container, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import QueryClientProvider from './QueryClientProvider'
import AuthProvider from './auth/Provider'
import './globals.css'
import './theme-config.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Concern Ticket',
  description: 'Create and track concerns',
  creator: 'Christian Eduarte',
  icons: {
    icon: '/concernTicket.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme>
              <NavBar />
              <main className='p-5'>
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
