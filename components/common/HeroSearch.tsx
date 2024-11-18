'use client';
import Image from 'next/image';
import searchIcon from '@/assets/icons/search.svg';
import React, { useState, useCallback, useEffect } from 'react';

type HeroSearchProps = {
  name: string;
  placeholder: string;
  setKeyword: (keyword: string) => void;
};

const HeroSearch = ({ name, placeholder, setKeyword }: HeroSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearch = useCallback(
    (value: string) => {
      const handler = setTimeout(() => {
        setKeyword(value);
      }, 300); // 300ms debounce time

      return () => {
        clearTimeout(handler);
      };
    },
    [setKeyword],
  );

  useEffect(() => {
    return debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="block relative sm:flex justify-between items-center gap-40 py-8">
      <input
        className="peer block bg-transparent w-full rounded-md border pl-10 text-sm lg:text-base text-primary focus-visible:outline-none py-1 placeholder:text-primary/50 font-medium"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <div className="absolute left-2 w-7 pointer-events-none pr-3 2xl:w-10">
        <Image src={searchIcon} width={50} height={50} alt="icon" />
      </div>
    </div>
  );
};

export default HeroSearch;
