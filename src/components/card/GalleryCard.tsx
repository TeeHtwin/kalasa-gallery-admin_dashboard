import React from 'react';
import Image from 'next/image';

const GalleryCard = () => {
  return (
    <div className="mb-3 bg-secondary-100 border border-secondary p-1 pb-3">
      <Image
        src={'/artwork.jpg'}
        alt="artwork"
        width={1024}
        height={1024}
        quality={100}
        objectFit="conver"
      />

      <div className="p-2 mt-1s">
        <h5 className="text-btnText font-heading text-primary tracking-wide">
          Art of Mother By Word
        </h5>

        <p className="text-small my-2 font-light text-primary">
          <span>By Artist</span>
          <span>Khin Maung Yin</span>
        </p>

        <button className="block border-2 text-small text-primary border-primary px-3 py-1">
          View Details
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
