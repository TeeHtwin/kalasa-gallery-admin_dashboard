'use client';
import React, { FormEvent, useCallback, useState } from 'react';
import CTAButton from '@/components/common/CTAButton';
import FormControl from '@/components/form/FormControl';
import { Breadcrumbs } from '@/components/common';
import galleryIcon from '@/assets/icons/gallery.svg';
import subImg from '@/assets/icons/imgsubmit.svg';
import { BtnType } from '@/constants/constant';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const ARTWORK_IMAGE_OPTIONS = {
  accept: {
    'image/jpeg': [],
    'image/png': [],
    'image/jpg': [],
  },
  multiple: false,
  maxFiles: 1,
  maxSize: 1024 * 1024 * 10,
};

const ArtWorkCreate = () => {
  const [artworkImage, setArtworkImage] = useState<{
    preview: string;
    upload: File | any;
  }>({ preview: '', upload: null });

  const dropImage = useCallback((acceptedFile: any, fileRejections: any) => {
    if (fileRejections.length) alert('your file format is wrong');
    const preview = URL.createObjectURL(acceptedFile[0]);
    setArtworkImage({ preview, upload: acceptedFile[0] });
  }, []);

  const { getRootProps } = useDropzone({
    onDrop: dropImage,
    ...ARTWORK_IMAGE_OPTIONS,
  });

  const handleArtworkCreate = (e: FormEvent) => {
    e.preventDefault();
    const elements = e.target as typeof e.target & ArtworkCreateForm;

    const artwork_name = elements.artwork_name.value;
    const artist_name = elements.artist_name.value;
    const year = elements.artwork_year.value;
    const medium = elements.medium.value;
    const artwork_size = elements.artwork_size.value;
    const artwork_desciption = elements.artwork_desciption.value;

    const newArtwork = {
      artwork_desciption,
      year: Number(year),
      artwork_size,
      medium,
      artist_name,
      artwork_name,
      artwork_image: artworkImage.upload,
    };
    console.log(newArtwork);

    //call tha create api here;

    //clear out the input value after subbmission is completed;
    elements.artwork_name.value = '';
    elements.artist_name.value = '';
    elements.artwork_year.value = '';
    elements.medium.value = '';
    elements.artwork_size.value = '';
    elements.artwork_desciption.value = '';
  };

  return (
    <section className="py-10 px-3">
      <Breadcrumbs
        icon={galleryIcon}
        breadcrumbs={['gallery', 'add an artwork']}
      />

      <form onSubmit={handleArtworkCreate} className="font-serif">
        <nav className="flex justify-between mt-4">
          <div className="flex gap-5 items-center">
            <p className="text-primary font-serif">Create Art Work</p>
          </div>

          <CTAButton icon={subImg} title="Submit" type={BtnType.SUBMIT} />
        </nav>

        <article className="w-[70%] py-7">
          <h4 className="text-btnText font-primary font-semibold">
            Add an artwork
          </h4>
          <main className="grid grid-cols-2">
            <div
              {...getRootProps()}
              className="w-[85%] h-[400px] bg-black center text-white capitalize font-primary font-medium"
            >
              {/* add an image */}
              {!!artworkImage.preview.trim().length ? (
                <Image
                  src={artworkImage.preview}
                  alt="artwork_preview"
                  width={1024}
                  height={1024}
                  className="w-full h-full max-h-full object-cover"
                />
              ) : (
                <p>add an image</p>
              )}
            </div>

            <div className="w-full flex pt-2 flex-col gap-5">
              <FormControl label="artwork name" name="artwork_name" />
              <FormControl label="artist's name" name="artist_name" />
              <FormControl label="year" name="artwork_year" />
            </div>
          </main>

          <main className="grid grid-cols-2 mt-3">
            <div className="w-[85%]">
              <FormControl label="medium" name="medium" />
            </div>
            <FormControl label="artwork's size" name="artwork_size" />
          </main>

          <main className="mt-3">
            <label
              htmlFor="description"
              className="block capitalize text-btnText mb-1 font-semibold tracking-wider font-primary"
            >
              Description
            </label>
            <textarea
              name="artwork_desciption"
              className="w-full border rounded-md min-h-[220px] text-btnText tracking-wide outline-none resize-none p-3"
              placeholder="Lorem ipsum dolor sit, amet...."
            />
          </main>
        </article>
      </form>
    </section>
  );
};

export default ArtWorkCreate;
