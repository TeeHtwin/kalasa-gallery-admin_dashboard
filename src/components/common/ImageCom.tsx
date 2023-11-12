'use client';
import Image, { StaticImageData } from 'next/image';

const ImageCom = ({ image }: { image: StaticImageData | string }) => {
  return (
    <Image
      src={image}
      alt="image"
      width={1024}
      height={1024}
      quality={100}
      priority
      className="w-full h-full object-cover"
    />
  );
};

export default ImageCom;
