import React from 'react';
import Image from 'next/image';

const ImageIconCom = ({ src }: any) => {
  return (
    <Image
      src={src}
      alt={`${src}_icon`}
      width={20}
      height={20}
      quality={100}
      objectFit="cover"
    />
  );
};

export default ImageIconCom;
