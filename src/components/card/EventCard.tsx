import React from 'react';
import Image from 'next/image';
import gallery from '@/assets/dummy/gallery.png';
import calendarIcon from '@/assets/icons/calendar.svg';
import Link from 'next/link';

const EventCard = () => {
  return (
    <article className="flex flex-col md:flex-row gap-8 border rounded-md p-3">
      <div className="w-full md:w-[240px]">
        <Image
          src={gallery}
          quality={100}
          alt="gallery_image"
          width={1024}
          height={240}
        />
      </div>

      <div className="desc flex-1">
        <nav className="flex justify-between flex-wrap">
          <h6 className="font-primary text-20 font-bold">
            POSTer-colonial Rangoon
          </h6>
          <button className="bg-purple text-medium text-white px-4 py-1 rounded">
            Upcoming
          </button>
        </nav>

        <div className="text-medium flex gap-1 my-2">
          <Image
            src={calendarIcon}
            width={25}
            height={25}
            alt="event_calendar"
          />
          <p>Feb 16 - Mar 6,2023</p>
        </div>

        <p className="text-btnText mt-2">
          The Amazon CloudFront distribution is configured to block access from
          your country. We can't connect to the server for this app or website
          at this time. There might be too much traffic or a configuration.. see
          more
        </p>

        <Link href={'/events/eventinfos/1'}>
          <button className="text-primary underline underline-offset-4 text-small">
            View Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
