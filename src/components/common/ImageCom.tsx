'use client';
import Image, { StaticImageData } from 'next/image';

const ImageCom = ({ image }: { image: StaticImageData | string }) => {
  return (
    <Image src={image} alt="image" width={400} height={400} quality={100} />
  );
};

export default ImageCom;
