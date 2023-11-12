import { usePathname } from 'next/navigation';
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import format from 'date-fns/format';
import { useArtWorkStore } from '@/store/artStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const URL = 'http://localhost:8000/artwork';

export const useArtWork = () => {
  const {
    artworks,
    allArtworks,
    setAllWork,
    setPageSize,
    handleDateFilterData,
  } = useArtWorkStore();

  const fetchArtwork = async () => {
    return await axios
      .get(URL)
      .then((resp) => resp.data)
      .catch((err) => err);
  };

  const { data, isLoading, isFetching, refetch } = useQuery(
    ['artworks'],
    fetchArtwork,
  );

  //set to the state
  useEffect(() => {
    if (data !== undefined) {
      setAllWork(data);
      setPageSize(data.length);
    }
  }, [isLoading, isFetching]);

  const multiDeleteArtwork = async (id: string[]) => {
    // await axios.delete(`${URL}/1`);
    // refetch();
    alert('delete data is in comment condition');
  };

  const path = usePathname();
  const ref = useRef();
  const [quickAction, setQuickAction] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [filterDate, setFilterDate] = useState<any>(null);

  useMemo(() => {
    if (filterDate) {
      const start = format(filterDate?.startDate, 'dd/MM/yy').split('/');
      const end = format(filterDate?.endDate, 'dd/MM/yy').split('/');
      handleDateFilterData(start, end);
    }
  }, [filterDate]);

  const nextBtnFun = () => {
    // check the page is only one or the page_number reach to the end
    if (page_number === pagiBtnQty) {
      //disabled the next button
      return null;
    } else {
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevBtnFun = () => {
    // check the page is only one or the page_number reach to the end
    if (page_number === 1) {
      //disabled the next button
      return null;
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleMultipleDeleteAction = useCallback(() => {
    multiDeleteArtwork(selectedRow);
    // const newData = artwork.filter(
    //   (d: any) => !selectedRow.includes(d.artwork_name),
    // );
    // setQuickAction(false);
    // setSelectedRow([]);
    refetch();
  }, [selectedRow]);

  return {
    artworks,
    path,
    ref,
    quickAction,
    showFilterBox,
    filterDate,
    selectedRow,
    isLoading,
    setSelectedRow,
    setQuickAction,
    setFilterDate,
    handleMultipleDeleteAction,
    prevBtnFun,
    nextBtnFun,
    setShowFilterBox,
  };
};
