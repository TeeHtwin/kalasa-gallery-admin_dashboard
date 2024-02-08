'use client';
import CustomInput from '@/components/common/CustomInput';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import ImgUpload from '@/components/ui/ImgUpload';
import TypographyH1 from '@/components/ui/TypographyH1';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { useState } from 'react';
import * as React from 'react';
import { POSTFetcher } from '@/fetcher';

export interface IAppProps {}

export default function Page(props: IAppProps) {
  const [imgFile, setImgFile] = useState<File | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    image: imgFile,
    artist_id: '',
    year: '',
    category_id: 2,
    size: '',
    description: '',
    price: '',
    status: 'ok',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const [data] = POSTFetcher('admin/artwork', formData, true);
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Breadcrumb
        items={[
          {
            name: 'Gallery',
            url: '/artworks',
            icon: '/IconGallery.svg',
          },
          {
            name: 'Add an artwork',
          },
        ]}
      />
      <form onSubmit={handleSubmit} className="flex justify-between pr-8">
        <TypographyH1>Create Artwork</TypographyH1>
        <CtaBtn type="submit">
          <Image
            src="/IconGalleryUpload.svg"
            alt="IconGalleryUpload"
            width={15}
            height={15}
          />
          Submit
        </CtaBtn>
      </form>
      <div className="mt-5 w-4/5">
        <div className="flex gap-8 items-center">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-[cardo]">Add an artwork</label>
            <ImgUpload
              file={formData.image}
              setFile={(file) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  image: file,
                }))
              }
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <CustomInput
              onChange={handleChange}
              font="serif"
              name="name"
              title="Artwork Name"
            />
            <CustomInput
              onChange={handleChange}
              font="serif"
              name="artist_id"
              title="Artist Name"
            />
            <CustomInput
              onChange={handleChange}
              font="serif"
              name="year"
              title="Year"
            />
          </div>
        </div>
        <div className="grid mt-5 grid-cols-2 gap-4 ">
          <CustomInput
            onChange={handleChange}
            font="serif"
            name="price"
            title="Medium"
          />
          <CustomInput
            onChange={handleChange}
            font="serif"
            name="size"
            title="Artwork's Size"
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-lg font-[cardo]">Description</label>
          <Textarea name="description" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
