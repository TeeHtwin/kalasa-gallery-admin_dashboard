import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { BtnType } from '@/constants/constant';

interface ICTAButton {
  icon?: StaticImageData;
  title: string;
  style?: string;
  type?: BtnType;
  fun?: () => void;
}

const CTAButton = ({
  icon,
  type = BtnType.BUTTON,
  title,
  style,
  fun,
}: ICTAButton) => {
  return (
    <button
      type={type}
      onClick={fun}
      className={`gap-2 bg-primary center capitalize text-btnText font-semibold rounded py-1.5 px-3 text-white ${style}`}
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
