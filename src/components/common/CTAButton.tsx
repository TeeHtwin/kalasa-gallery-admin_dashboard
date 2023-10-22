import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ICTAButton {
  icon?: StaticImageData;
  title: string;
  fun?: () => void;
}

const CTAButton = ({ icon, title, fun }: ICTAButton) => {
  return (
    <button
      type="button"
      onClick={fun}
      className="gap-2 bg-primary center capitalize text-btnText font-semibold rounded py-1.5 px-3 text-white"
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          quality={100}
          objectFit="cover"
        />
      )}
      <span>{title}</span>
    </button>
  );
};

export default CTAButton;
