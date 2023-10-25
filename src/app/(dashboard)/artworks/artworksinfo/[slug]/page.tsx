'use client';
import React, { useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import { usePathname } from 'next/navigation';
import ImageCom from '@/components/common/ImageCom';
import Link from 'next/link';
import { Breadcrumbs, DataInfo } from '@/components/common';
import galleryIcon from '@/assets/icons/gallery.svg';
import { ModalBox } from '@/components';
import { modalBoxQNA } from '@/constants/ques';
import editIcon from '@/assets/icons/edit.svg';
import { ModalBoxStyleFun } from '@/utils/ModalBox';

const ArtworkInfo = () => {
  const currentPath = usePathname();

  const [showDeleteModalBox, setShowDeleteModalBox] = useState<boolean>(false);

  const handleModalBox = () => setShowDeleteModalBox(!showDeleteModalBox);

  return (
    <section id="artworkinfo" className="pt-10 relative">
      <ModalBox
        cn={ModalBoxStyleFun(showDeleteModalBox)}
        {...modalBoxQNA}
        closeFun={handleModalBox}
      />

      <section className="px-3">
        <Breadcrumbs
          icon={galleryIcon}
          breadcrumbs={['gallery', 'artwork infos']}
        />

        <nav className="flex justify-between mt-4">
          <div className="flex gap-5 items-center">
            <p className="text-primary font-serif">Artwork Infos</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link href={`${currentPath}/editartwork`}>
              <CTAButton icon={editIcon} title="edit artwork" />{' '}
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

export default ArtworkInfo;
