import eventIcon from '@/assets/icons/events.svg';
import { Breadcrumbs } from '@/components/common';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-4 relative">
      <Breadcrumbs
        icon={eventIcon}
        breadcrumbs={['collection', 'edit collection']}
      />

      {children}
    </section>
  );
};

export default layout;
