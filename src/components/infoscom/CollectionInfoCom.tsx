import React from 'react';
import Image from 'next/image';
import collection from '@/assets/dummy/collection2.png';
import { DataInfo } from '../common';
import { PageHeader } from '../common';

const CollectionInfoCom = () => {
  return (
    <>
      <section className="h-fit flex gap-7 mb-3">
        <div className="w-[300px] max-h-[320px]">
          <Image
            src={collection}
            alt="collection_info_img"
            width={1024}
            height={1024}
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3 pb-4">
          <h4>Blessing & Peace Among Chaos</h4>
          <DataInfo label="Title" value={'Blessing & Peace Among Chaos'} />
        </div>
      </section>

      <div className="my-4 border-b" />

      <PageHeader title="Description" />
      <p className="w-[75%] text-justify text-small text-grey py-3">
        {/* {artDescription} */}
        Artist Htoo Aung Kyaw was born in Kyaukpadaung , a small town on the way
        to Bagan , Mandalay Regain . He is a Bachelor’s degree holder in
        philosophy and studied art , especially in paintings , at the State
        School of Fine Art in Yangon . He has great interest in history and
        philosophy . Since he was child , he usually goes to Bagan and studied
        about See more...
        <button
          // onClick={btnText === 'see more' ? handleSeeMore : handleSeeLeast}
          className="ml-1 text-grey font-semibold text-btnText first-letter:uppercase"
        >
          {/* {btnText} ... */}See More
        </button>
      </p>

      <div className="my-4 border-b" />
    </>
  );
};

export default CollectionInfoCom;
