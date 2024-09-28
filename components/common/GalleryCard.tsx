import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryCard = ({ info }: any) => {
  const hrefId = info.id;
  return (
    <div>
      <div className="relative break-inside-avoid border p-2">
        <Image
          src={info?.image}
          width={300}
          height={300}
          alt={info?.name}
          priority={true}
          blurDataURL={info?.image}
          placeholder="blur"
          className={
            'w-full bg-indigo-100 object-cover object-center flex items-center justify-center mx-auto'
          }
        />

        <div className="flex flex-col-reverse lg:flex-row py-6 px-3 items-start justify-between w-full lg:items-center gap-3">
          <div>
            <h2 className="text-primary text-base lg:text-xl font-semibold lg:mb-4">
              {info?.name}
            </h2>
            <div>
              <p className="text-xs text-primary leading-tight">{info?.size}</p>
            </div>
          </div>
          <div
            className={`py-1 px-2 text-xs lg:py-3 border-[1.5px] lg:px-7 ${
              info?.sold
                ? 'border-red-500 text-red-500'
                : 'border-green-500 text-green-500'
            } text-xs tracking-wider`}
          >
            {info?.sold ? 'Sold out' : 'Available'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
