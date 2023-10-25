import { Breadcrumbs, PageHeader } from '@/components/common';
import React from 'react';
import eventIcon from '@/assets/icons/events.svg';
import galleryIcon from '@/assets/icons/galleryWhite.svg';
import { CTAButton } from '@/components';
import CreateEventForm from './Form';

const EventCreate = () => {
  return (
    <section className="p-4">
      <Breadcrumbs
        icon={eventIcon}
        breadcrumbs={['events', 'create an event']}
      />
      <div className="flex justify-between items-center my-3">
        <PageHeader title="Create an Event" />
        <CTAButton icon={galleryIcon} title="upload now" />
      </div>

      <CreateEventForm />
    </section>
  );
};

export default EventCreate;
