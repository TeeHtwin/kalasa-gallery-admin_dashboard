import React from 'react';
import { CTAButton } from '..';
import Link from 'next/link';
import subIcon from '@/assets/icons/imgsubmit.svg';

interface IPageheaderSN {
  link: string;
  headerLabel: string;
  btnLabel: string;
  deleteLabel?: string;
}

const PageheaderSubNav = ({
  link,
  headerLabel,
  btnLabel,
  deleteLabel,
}: IPageheaderSN) => {
  return (
    <nav className="mt-4 capitalize">
      <div className="flex justify-between gap-5 items-center">
        <p className="text-primary font-serif">{headerLabel}</p>
        <Link href={link}>
          <CTAButton title={btnLabel} icon={subIcon} />{' '}
          {/* the type of btn will change  */}
        </Link>
      </div>

      {deleteLabel && (
        <div className="flex justify-end mt-3 gap-2">
          <button
            // onClick={handleModalBox}
            className="text-btnText underline underline-offset-4 text-red"
          >
            Delete an artwork
          </button>
        </div>
      )}
    </nav>
  );
};

export default PageheaderSubNav;
