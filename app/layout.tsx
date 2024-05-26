
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from '@clerk/nextjs'
import Header from '@/components/shared/Header'




const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--fonts-poppoins',
})

export const metadata: Metadata = {
  title: 'Event.Book',
  description: 'Event.Book is a platform for event organizers to manage their events and attendees.',
  icons: {
    icon: 'assets/images/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>

  )
}
