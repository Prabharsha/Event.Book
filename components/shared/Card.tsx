"use client"
import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="relative flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500 min-h-[220px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </Link>

      {isEventCreator && !hidePrice && (
        <div className="absolute right-3 top-3 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-card transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2 flex-wrap">
            <span className="p-semibold-14 w-auto rounded-full bg-teal-50 px-4 py-1 text-teal-500">
              {event.isFree ? 'FREE' : `${event.price} LKR`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-50 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 text-grey-500">
          <Image src="/assets/icons/calendar.svg" alt="calendar" width={16} height={16} />
          <p className="p-medium-14">{formatDateTime(event.startDateTime).dateTime}</p>
        </div>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:text-primary-500 transition-colors">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full mt-auto">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex items-center gap-2 text-primary-500 hover:text-primary-500/80 transition-colors">
              <p className="p-semibold-14">Order Details</p>
              <Image src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
