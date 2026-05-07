import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Twitter, Instagram, Facebook, Linkedin, Mail, MapPin, Plus } from 'lucide-react'

const Footer = () => {
  const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'Browse Events', href: '/#events' },
    { label: 'Create Event', href: '/events/create' },
    { label: 'My Profile', href: '/profile' },
  ]

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className='bg-navy-500 text-white'>
      <div className='h-1 bg-gradient-to-r from-primary-500 via-terra-500 to-teal-500' />

      <div className='wrapper py-12'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>

          {/* Brand */}
          <div className='flex flex-col gap-5'>
            <Link href='/'>
              <Image
                src='/assets/images/logo.svg'
                alt='Event.Book'
                width={128}
                height={38}
                className='filter-white'
              />
            </Link>
            <p className='text-sm leading-relaxed text-white/60'>
              Sri Lanka&apos;s premier event discovery and ticketing platform. Connecting communities through unforgettable experiences.
            </p>
            <div className='flex gap-3'>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='flex h-9 w-9 flex-center rounded-full bg-white/10 transition-colors hover:bg-primary-500'
                >
                  <Icon className='h-4 w-4 text-cream-500' />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-semibold uppercase tracking-widest text-cream-500'>
              Explore
            </h3>
            <ul className='flex flex-col gap-3'>
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className='text-sm text-white/60 transition-colors hover:text-cream-500'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-semibold uppercase tracking-widest text-cream-500'>
              Support
            </h3>
            <ul className='flex flex-col gap-3'>
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className='text-sm text-white/60 transition-colors hover:text-cream-500'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-semibold uppercase tracking-widest text-cream-500'>
              Get in Touch
            </h3>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2 text-sm text-white/60'>
                <Mail className='h-4 w-4 text-terra-500 shrink-0' />
                hello@event.book
              </div>
              <div className='flex items-center gap-2 text-sm text-white/60'>
                <MapPin className='h-4 w-4 text-terra-500 shrink-0' />
                Colombo, Sri Lanka
              </div>
              <div className='mt-2'>
                <Link
                  href='/events/create'
                  className='inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2 text-sm text-white transition-colors hover:bg-primary-500/90'
                >
                  <Plus className='h-4 w-4' />
                  Host an Event
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row'>
          <p className='text-sm text-white/40'>
            &copy; 2024 Event.Book. All rights reserved.
          </p>
          <p className='text-sm text-white/40'>
            Made with ♥ in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
