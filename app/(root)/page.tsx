import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.action'
import Image from 'next/image'
import Link from 'next/link'
import { SearchParamProps } from '@/types';
import Search from '@/components/shared/Search'
import CategoryFilter from '@/components/shared/CategoryFilter'

export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className='relative overflow-hidden bg-cream-50 py-16 md:py-24'>

        {/* Decorative blobs */}
        <div className='pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-500/8 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl' />
        <div className='pointer-events-none absolute top-1/2 left-1/3 h-[300px] w-[300px] rounded-full bg-navy-500/5 blur-3xl' />

        <div className='wrapper grid grid-cols-1 items-center gap-10 md:grid-cols-2 2xl:gap-0'>

          {/* Left: Text */}
          <div className='flex flex-col gap-6 animate-fade-up'>
            <div className='inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-500'>
              <span className='h-2 w-2 rounded-full bg-primary-500 animate-pulse' />
              Sri Lanka&apos;s #1 Event Platform
            </div>

            <h1 className='h1-bold text-navy-500'>
              Host, Connect,{' '}
              <span className='text-primary-500'>Celebrate:</span>
              <br />
              Your Events, Our Platform!
            </h1>

            <p className='p-regular-20 max-w-lg text-grey-600'>
              Discover and book tickets to the best events in Sri Lanka.
              Connect with a vibrant community and enjoy unforgettable experiences curated just for you.
            </p>

            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button asChild size='lg' className='rounded-full bg-primary-500 text-white hover:bg-primary-500/90 shadow-crimson sm:w-fit'>
                <Link href='#events'>Explore Events</Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='rounded-full border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white sm:w-fit'>
                <Link href='/events/create'>Host an Event</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className='flex items-center gap-8 border-t border-grey-400/30 pt-6'>
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-navy-500'>500+</span>
                <span className='text-sm text-grey-500'>Events Listed</span>
              </div>
              <div className='h-10 w-px bg-grey-400/40' />
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-navy-500'>10K+</span>
                <span className='text-sm text-grey-500'>Happy Attendees</span>
              </div>
              <div className='h-10 w-px bg-grey-400/40' />
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-navy-500'>25+</span>
                <span className='text-sm text-grey-500'>Cities</span>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className='flex-center relative'>
            <Image
              src='/assets/images/hero.png'
              alt='hero-image'
              height={1000}
              width={1000}
              className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] animate-float'
            />
          </div>

        </div>
      </section>

      {/* ── Events ───────────────────────────────────────────── */}
      <section id='events' className='wrapper my-12 flex flex-col gap-8 md:gap-12'>

        <div className='flex flex-col gap-2'>
          <div className='section-title'>
            <div className='section-title-bar' />
            <h2 className='h2-bold text-navy-500'>Discover Events</h2>
          </div>
          <p className='p-regular-16 ml-4 text-grey-500'>Find your next unforgettable experience</p>
        </div>

        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle='No Events Found'
          emptyStateSubtext='Check back soon — exciting events are on the way!'
          collectionType='All_Events'
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  )
}
