'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Header from '@/components/common/PageHeader';
import CTAButton from '@/components/common/CTAButton';
import ImageCom from '@/components/common/ImageCom';
import cn from 'classnames';
import Link from 'next/link';

const ArtworkInfo = () => {
  const [showDeleteModalBox, setShowDeleteModalBox] = useState<boolean>(false);

  const handleModalBox = () => setShowDeleteModalBox(!showDeleteModalBox);

  const modalBoxStyle = cn(
    'bg-overlay cursor-pointer w-full h-full absolute top-0 center duration-150',
    {
      'opacity-0 scale-0 invisible': !showDeleteModalBox,
      'opacity-100 scale-100 visible': showDeleteModalBox,
    },
  );

  return (
    <section id="artworkinfo" className="pt-10 relative">
      <div onClick={handleModalBox} className={modalBoxStyle}>
        <article className="w-5/12 p-3 bg-white rounded-md">
          <p className="text-primary font-primary">
            Are you sure do you want to delete this artwork from your database?
          </p>
          <p className="text-black-100 text-sm font-ariel leading-6">
            Please make sure to check the artwork before deleting it. Because it
            will be wiped out permanently and there’s no way to recover it back.
          </p>

          <div className="flex gap-5 mt-4">
            <CTAButton title="Go Back" fun={handleModalBox} />
            <CTAButton title="Confirm" />
          </div>
        </article>
      </div>

      <section className="px-3">
        <Header title="Gallery creates" />

        <nav className="flex justify-between mt-4">
          <div className="flex gap-5 items-center">
            <p className="text-primary font-serif">Artwork Infos</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link href={'/artworks/artworkinfo/editartwork'}>
              <CTAButton title="edit artwork" />{' '}
              {/* the type of btn will change  */}
            </Link>
            <button
              onClick={handleModalBox}
              className="text-btnText underline underline-offset-4 text-red"
            >
              Delete an artwork
            </button>
          </div>
        </nav>

        <article className="w-full pt-7">
          <main className="w-[70%] grid grid-cols-2">
            <div className="w-[95%] max-h-[400px] overflow-hidden max-height-[400px] bg-black center text-white capitalize text-sm">
              <ImageCom image="/nature.jpg" />
            </div>
            <div className="w-auto">
              <h5 className="mb-3">Flower And A Frog</h5>
              <div className="w-[90%] flex gap-4 font-primary items-center">
                <DataInfo label="content email" value={21} />
                <button className="underline text-md text-primary capitalize">
                  view
                </button>
              </div>
            </div>
          </main>

          <main className="mt-8 border-t-2 pt-3">
            <h4 className="font-serif text-primary font-semibold">
              Post Information
            </h4>

            <div className="grid grid-cols-2 py-2">
              <article className="flex flex-col gap-5">
                <DataInfo label="artwork name" value="flower and frog" />
                <DataInfo label="artwork's year" value={1998} />
                <DataInfo label="medium" value={'painting'} />
                <DataInfo label="size" value={'40 4/5x39 1/5 in'} />
              </article>
              <article className="flex flex-col gap-5">
                <DataInfo label="post status" value="available" />
                <DataInfo label="artist's name" value={'aung naing tun'} />
                <DataInfo label="post date" value={'Sep 18th,2022'} />
              </article>
            </div>
          </main>
        </article>
      </section>
    </section>
  );
};

const DataInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <p className="flex gap-2 capitalize">
      <span className="min-w-[220px] font-primary text-black-100 capitalize text-sm font-extralight flex justify-between items-center">
        {label}
        <span className="ml-3 inline-block w-1.5 h-1.5 rounded-full bg-red" />
      </span>
      <span
        className={`flex-1 text-sm ${
          label === "artist's name" && 'underline text-primary'
        }`}
      >
        {value}
      </span>
    </p>
  );
};

export default ArtworkInfo;
