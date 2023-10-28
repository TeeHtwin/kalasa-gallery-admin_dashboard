import React from 'react';
import Image from 'next/image';

const ImageIconCom = ({
  src,
  width = 20,
  height = 20,
}: {
  src: any;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={src}
      alt={`${src}_icon`}
      width={width}
      height={height}
      quality={100}
      objectFit="cover"
    />
  );
};

export default ImageIconCom;
