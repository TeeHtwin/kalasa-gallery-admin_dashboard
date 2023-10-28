import { Breadcrumbs, PageHeader } from '@/components/common';
import React from 'react';
import eventIcon from '@/assets/icons/events.svg';
import galleryIcon from '@/assets/icons/galleryWhite.svg';
import { CTAButton, FormControl } from '@/components';
import Image from 'next/image';

const CreateBlog = () => {
  const image = false;
  return (
    <section className="p-4">
      <Breadcrumbs icon={eventIcon} breadcrumbs={['blogs', 'create blog']} />
      <div className="flex justify-between items-center my-3">
        <PageHeader title="Create a Blog" />
        <CTAButton icon={galleryIcon} title="Submit" />
      </div>

      <form action="">
        <main className="min-h-[340px]">
          <p className="text-medium capitalize">add a cover image</p>

          {image ? (
            <div className="w-[300px] max-h-[240px]">
              <Image
                src={image}
                alt="event_poster_img"
                width={1024}
                height={1024}
                quality={100}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-[50%] h-[340px] bg-black-300 center text-white">
              Add an Image
            </div>
          )}
        </main>

        <div className="w-2/6 mb-2 font-primary">
          <FormControl label="title" name="collection_titile" />
        </div>
        <div className="w-[80%]">
          <label className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary">
            Description
          </label>
          <textarea
            name="collection_desc"
            className="w-full h-[240px] border py-0.5 border-grey-100 rounded-sm px-2 outline-none resize-none"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateBlog;
