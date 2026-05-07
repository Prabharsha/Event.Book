import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-grey-50/50 bg-white/95 backdrop-blur-md shadow-sm'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image
            src='/assets/images/logo.svg' width={128} height={38}
            alt='Event-Book'
          />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className='rounded-full bg-primary-500 text-white hover:bg-primary-500/90 shadow-crimson' size='lg'>
              <Link href='/sign-in'>Sign In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
