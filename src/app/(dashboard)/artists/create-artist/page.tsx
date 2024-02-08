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
  const [formData, setFormData] = useState({
    name: '',
    profile_image: '',
    description: '',
    status: '1',
  });
  const [descriptionError, setDescriptionError] = useState<any>('');
  const [nameError, setNameError] = useState<any>('');
  const [profileError, setProfileError] = useState<any>('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.profile_image) {
      setProfileError('The profile image must be an image.');
      return;
    }
    if (formData.description.length < 4) {
      setDescriptionError('The description must be at least 4 characters.');
      return;
    }
    if (formData.name.length < 4) {
      setNameError('The artist name must be at least 4 characters.');
      return;
    }

    const data = await POSTFetcher<ResponseType>(
      'admin/artist',
      formData,
      true,
    );
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
            name: 'Artists',
            url: '/artists',
            icon: '/IconGallery.svg',
          },
          {
            name: 'Create an artist',
          },
        ]}
      />
      <form onSubmit={handleSubmit} className="flex justify-between pr-8">
        <TypographyH1>Create Artist</TypographyH1>
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
              file={formData.profile_image}
              setFile={(file) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  profile_image: file,
                }))
              }
              name="profile_image"
            />
            {profileError && <p className="text-red-700 ">{profileError}</p>}
          </div>
        </div>
        <div className="grid mt-5 grid-cols-1 gap-4 ">
          <CustomInput
            onChange={handleChange}
            font="serif"
            name="name"
            title="Artist Name"
            errorMessage={nameError}
          />

          <div className="flex flex-col gap-2 my-5">
            <label className="text-lg font-[cardo]">Description</label>
            <Textarea name="description" onChange={handleChange} />
            {descriptionError && (
              <p className="text-red-700 ">{descriptionError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
