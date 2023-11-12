import { usePathname } from 'next/navigation';
import { useState, useRef, useCallback, useMemo } from 'react';
import { TextSearchFun } from '@/utils';

export const useArtist = (artists: any) => {
  const path = usePathname();
  const searchText = useRef();
  const [foundData, setFoundData] = useState(artists);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setFoundData(TextSearchFun(foundData, searchText.current));
  };

  return { path, searchText, foundData, setFoundData, handleSearch };
};
