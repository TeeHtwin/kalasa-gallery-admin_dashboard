'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import FormControl from '@/components/form/FormControl';
import CTAButton from '@/components/common/CTAButton';
import ImageCom from '@/components/common/ImageCom';
import { Breadcrumbs } from '@/components/common';
import galleryIcon from '@/assets/icons/gallery.svg';
import { ModalBox } from '@/components';
import { modalBoxQNA } from '@/constants/ques';
import { useRouter, useParams } from 'next/navigation';
import saveIcon from '@/assets/icons/imgsubmit.svg';

const EditArtwork = () => {
  const router = useRouter();
  const { slug } = useParams();

  const [showDeleteModalBox, setShowDeleteModalBox] = useState<boolean>(false);

  const handleModalBox = () => setShowDeleteModalBox(!showDeleteModalBox);

  const modalBoxStyle = cn({
    'opacity-0 scale-0 invisible': !showDeleteModalBox,
    'opacity-100 scale-100 visible': showDeleteModalBox,
  });

  return (
    <section className="py-10 px-3 lg:text-medium xl:text-btnText">
      <Breadcrumbs
        icon={galleryIcon}
        breadcrumbs={['gallery', 'artwork infos', 'edit an artwork']}
      />

      <ModalBox cn={modalBoxStyle} closeFun={handleModalBox} {...modalBoxQNA} />

      <form className="font-serif">
        <nav className="flex justify-between mt-4">
          <div className="flex gap-5 items-center">
            <p className="text-primary font-ariel text-24 font-subheading">
              Edit Art Work
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <CTAButton
              title="Save"
              icon={saveIcon}
              fun={() => router.replace(`/artworks/artworksinfo/${slug}`)}
            />

            {/* the type of btn will change  */}
            <button className="text-btnText underline underline-offset-4 text-red">
              Delete an artwork
            </button>
          </div>
        </nav>

        <article className="w-full lg:w-[80%] xl:w-[70%] py-7">
          <h4 className="text-sm">Add an artwork</h4>
          <main className="grid grid-cols-2">
            <div className="w-[95%] max-h-[400px] overflow-hidden max-height-[400px] bg-black center text-white capitalize text-sm">
              <ImageCom image="/nature.jpg" />
            </div>
            <div className="w-full flex flex-col gap-3 justify-evenly">
              <FormControl
                label="artwork name"
                name="artwork_name"
                value="Flower And A Frog"
              />
              <FormControl
                label="artist's name"
                name="artist_name"
                value="Aung Khine"
              />
              <FormControl label="year" name="artwork_year" value="1998" />
            </div>
          </main>

          <main className="grid grid-cols-2 mt-3">
            <div className="w-[85%]">
              <FormControl label="medium" name="medium" value="Oil On Canvas" />
            </div>
            <FormControl
              label="artwork's size"
              name="artwork_size"
              value="40 4/5 x 39 1/5 in"
            />
          </main>

          <main className="mt-3">
            <label
              htmlFor="description"
              className="block capitalize text-[18px]"
            >
              Description
            </label>
            <textarea
              value={
                "The Amazon CloudFront distribution is configured to block access from your country. We can't connect to the server for this app or website at this time. There might be too much traffic or a configuration error. Try again later, or contact the app or website owner.If you provide content to customers through CloudFront, you can find steps to troubleshoot and help prevent this error by reviewing the CloudFront documentation."
              }
              className="w-full border rounded-md min-h-[220px] text-ariel text-btnText"
            />
          </main>
        </article>
      </form>
    </section>
  );
};

export default EditArtwork;
