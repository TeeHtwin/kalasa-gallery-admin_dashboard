'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type BreadcrumbProps = {
  items: Array<{ name: string; url?: string; icon?: string }>;
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav
      className="hidden md:flex text-primary py-10 bg-neutral-light w-full"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <img
                src={clsx(index === 0 ? `${item?.icon}` : '/vector.svg')}
                width={15}
                height={15}
                alt="icon"
              />
              {item.url ? (
                <Link
                  href={item.url}
                  className="ms-1 text-sm font-medium  md:ms-2"
                  aria-disabled={true}
                >
                  {item.name}
                </Link>
              ) : (
                <p className="ms-1 text-sm font-medium  md:ms-2">{item.name}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
