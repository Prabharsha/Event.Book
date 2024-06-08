"use client"
import EventForum from '@/components/shared/EventForum'
import { useUser } from '@clerk/nextjs';


import React from 'react'

const CreateEvent = () => {

    const { user } = useUser();
    const userId = user?.id || '';


    return (
        <>
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper h3-bold text-center sm:text-left'> Create Event</h3>
            </section>

            <div className='wrapper my-8'>
                <EventForum userId={userId} type="Create" />
            </div>
        </>
    )
}

export default CreateEvent
