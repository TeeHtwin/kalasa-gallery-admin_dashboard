import React from 'react';
import { Breadcrumbs } from '@/components/common';
import ArtistProfile from './components/ArtistProfile';
import ArtworkMasonary from './components/ArtworkMasonary';
import artIcon from '@/assets/icons/artists.svg';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-10 pr-4">
      <Breadcrumbs icon={artIcon} breadcrumbs={['artists', "artist's infos"]} />

      {children}

      <ArtistProfile />

      <ArtworkMasonary />

      <div className="flex gap-2 justify-end items-center mb-3">
        <button
          // disabled={page_number === 1}
          className={`page_prev_btn w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 `}
          // ${page_number === 1 && 'cursor-not-allowed bg-gray-100'}
        >
          <IconChevron />
        </button>
        <PagiBtn title="1" />
        <button
          // disabled={page_number === 1}
          className={`page_next_btn w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 `}
          // ${page_number === 1 && 'cursor-not-allowed bg-gray-100'}
        >
          <IconChevron />
        </button>
      </div>
    </section>
  );
};

export default layout;
