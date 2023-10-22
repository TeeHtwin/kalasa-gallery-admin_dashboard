'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import artist from '@/assets/dummy/artistprofile.jpg';
import { DataInfo, PageHeader } from '@/components/common';

const ArtistProfile = () => {
  const artDesc =
    'Artist Htoo Aung Kyaw was born in Kyaukpadaung , a small town on the way to Bagan , Mandalay Regain . He is a Bachelor’s degree holder inphilosophy and studied art , especially in paintings , at the State School of Fine Art in Yangon . He has great interest in history and philosophy . Since he was child , he usually goes to Bagan and studied about Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel non tempora est ratione saepe nulla dignissimos quibusdam, eaque numquam.';

  const [artDescription, setArtDescription] = useState(artDesc.slice(0, 350));
  const [btnText, setBtnText] = useState('see more');

  const handleSeeMore = () => {
    setArtDescription(artDesc.slice(0));
    setBtnText('see less');
  };

  const handleSeeLeast = () => {
    setArtDescription(artDesc.slice(0, 350));
    setBtnText('see more');
  };

  return (
    <>
      <section className="flex gap-3 mb-3">
        <div className="w-[240px] h-[240px]">
          <Image
            src={artist}
            alt="artist_img"
            width={1024}
            height={1024}
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <DataInfo label="artist's name" value={'aung myin thein'} />
          <DataInfo label="added date" value={'Sep 18th,2022'} />
          <DataInfo label="total artworks " value={100} />
          <DataInfo label="sold artworks" value={24} />
        </div>
      </section>

      <div className="my-4 border-b" />

      <PageHeader title="Artist's Description" />
      <p className="w-[75%] text-justify text-small text-grey py-3">
        {artDescription}
        <button
          onClick={btnText === 'see more' ? handleSeeMore : handleSeeLeast}
          className="ml-1 text-grey font-semibold text-btnText first-letter:uppercase"
        >
          {btnText} ...
        </button>
      </p>

      <div className="my-4 border-b" />
    </>
  );
};

export default ArtistProfile;
