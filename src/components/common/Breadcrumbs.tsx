import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/icons/nature.svg';

const Breadcrumbs = ({
  icon,
  breadcrumbs,
}: {
  icon: string;
  breadcrumbs: string[];
}) => {
  return (
    <main>
      <div className="flex gap-2">
        <Image src={icon} width={25} height={25} alt="breadcrumbs_arrow" />

        <div className="flex w-fit gap-3 items-center capitalize text-medium">
          {breadcrumbs.map((i: string, idx: number) => (
            <div
              className="font-medium flex items-center gap-3"
              key={`${i}_${idx}`}
            >
              <span className="text-primary font-inter">{i}</span>
              {/* if the current element is not the last element of the array */}
              {idx !== breadcrumbs.length - 1 && (
                <Image
                  src={arrow}
                  width={25}
                  height={25}
                  alt="breadcrumbs_arrow"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Breadcrumbs;
