import React from 'react';
import plusIcon from '@/assets/icons/plus.svg';
import CTAButton from '@/components/common/CTAButton';
import Link from 'next/link';

interface IPageTotalListBoxDTO {
  totalLabel: string;
  totalValue: number | string;
  path: string;
  ctaBtnTitle: string;
}

const PageTotalListBox = ({
  totalLabel,
  totalValue,
  path,
  ctaBtnTitle,
}: IPageTotalListBoxDTO) => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-5 items-center">
        <p className="text-primary font-primary text-20 font-semibold">
          {totalLabel}
        </p>
        <div className="w-12 rounded-md border text-primary font-heading font-ariel h-7 flex justify-center items-center">
          {totalValue}
        </div>
      </div>
      <Link href={path}>
        <CTAButton icon={plusIcon} title={ctaBtnTitle} />
      </Link>
    </nav>
  );
};

export default PageTotalListBox;
