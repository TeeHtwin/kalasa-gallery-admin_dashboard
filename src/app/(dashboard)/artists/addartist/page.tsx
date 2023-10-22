import React from 'react';
import { Breadcrumbs, PageheaderSubnav } from '@/components/common';
import { FormControl } from '@/components';
import artIcon from '@/assets/icons/artists.svg';

const RegisterArtist = () => {
  return (
    <section className="py-6 mb-3 pr-4 px-3">
      <div className="w-full border mb-6" />
      <Breadcrumbs icon={artIcon} breadcrumbs={['artists', "artist's infos"]} />
      <PageheaderSubnav
        link={''}
        headerLabel="create artist"
        btnLabel="Submit"
      />

      <article className="font-ariel mt-5">
        <div>
          <p className="text-medium capitalize">add a profile image</p>
          <div className="w-[300px] h-[300px] bg-black"></div>
        </div>

        <div className="w-[30%] my-4">
          <FormControl label="artist's name" name="artist_name" />
        </div>

        <div className="w-[80%]">
          <label
            htmlFor="artist_desc"
            className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary"
          >
            Description
          </label>
          <textarea
            name="artist_desc"
            id="artist_desc"
            className="w-full h-32 border py-0.5 border-grey-100 rounded-sm px-2 outline-none"
          ></textarea>
        </div>
      </article>

      <div className="w-full border mt-3" />
    </section>
  );
};

export default RegisterArtist;
