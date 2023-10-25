import React from 'react';
import { CTAButton } from '..';
import Link from 'next/link';
import subIcon from '@/assets/icons/imgsubmit.svg';

const PageheaderSubNav = ({
  link,
  headerLabel,
  btnLabel,
  icon,
  handleModalBox,
  deleteLabel,
}: IPageheaderSN) => {
  return (
    <nav className="mt-4 capitalize">
      <div className="flex justify-between gap-5 items-center">
        <p className="text-primary font-serif">{headerLabel}</p>
        <Link href={link}>
          <CTAButton title={btnLabel} icon={icon || subIcon} />{' '}
          {/* the type of btn will change  */}
        </Link>
      </div>

      {deleteLabel && (
        <div className="flex justify-end mt-3 gap-2">
          <button
            onClick={handleModalBox}
            className="text-btnText underline underline-offset-4 text-red"
          >
            {deleteLabel}
          </button>
        </div>
      )}
    </nav>
  );
};

export default PageheaderSubNav;
