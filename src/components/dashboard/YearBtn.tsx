'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const YearBtn = ({ years }: { years: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside as (event: MouseEvent) => void,
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as (event: MouseEvent) => void,
      );
    };
  }, []);

  const handleOnclick = (option: string) => {
    console.log(`change year to ${option}`);
  };

  return (
    <div
      className="relative inline-block border rounded-3xl w-28 h-10"
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      <div className="flex justify-center items-center w-full h-full gap-4">
        <div className="text-gray-800 text-md font-light">{currentYear}</div>
        <Image src="/dropdown.svg" width={10} height={10} alt="arrow" />
      </div>

      {isOpen && (
        <div
          className="absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 w-28 mt-1.5 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {years.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOnclick(option)}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default YearBtn;
