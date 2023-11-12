import { useRef } from 'react';

export const useEvent = () => {
  const searchText = useRef();

  const handleSearch = () => {};

  return { searchText, handleSearch };
};
