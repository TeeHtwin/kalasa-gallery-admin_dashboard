'use client';

import { useDebouncedCallback } from 'use-debounce';
import Image from 'next/image';
import searchIcon from '@/assets/icons/search.svg';

type HeroSearchProps = {
  name: string;
  placeholder: string;
  setKeyword: any;
};

const HeroSearch = ({ name, placeholder, setKeyword }: HeroSearchProps) => {
  const handleSearch = useDebouncedCallback((term) => {
    setKeyword(term);
  }, 500);

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
