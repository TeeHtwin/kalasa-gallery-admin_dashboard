import { usePathname } from 'next/navigation';
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { TextSearchFun } from '@/utils';
import format from 'date-fns/format';
import { handleArtworkSort } from '@/utils';

export const useArtWork = (artwork: any) => {
  const path = usePathname();
  const ref = useRef();
  const [quickAction, setQuickAction] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [filterDate, setFilterDate] = useState<any>(null); //that have to be declared define type
  const [page_number, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const page_size = 10;

  const [tableData, setTableData] = useState([]);
  const [pagiBtnQty, setPagiBtnQty] = useState(
    Math.ceil(artwork.length / page_size),
  );

  const filterData = (data: any) =>
    data.slice((page_number - 1) * page_size, page_number * page_size);

  useEffect(() => {
    setLoading(true);
    setTableData(filterData(artwork));
    setLoading(false);
  }, []);

  const sortingFun = useCallback(() => {
    setTableData(filterData(handleArtworkSort(artwork)));
  }, []);

  const handlerPaginQty = (datasize: number) =>
    setPagiBtnQty(Math.ceil(datasize / page_size));

  useMemo(() => {
    setTableData(filterData(artwork));
  }, [page_number]);

  useMemo(() => {
    if (filterDate) {
      const start = format(filterDate?.startDate, 'dd/MM/yy').split('/');
      const end = format(filterDate?.endDate, 'dd/MM/yy').split('/');
      const start_date = new Date(
        parseInt(start[2]),
        parseInt(start[1]) - 1,
        parseInt(start[0]),
      );
      const end_date = new Date(
        parseInt(end[2]),
        parseInt(end[1]) - 1,
        parseInt(end[0]),
      );

      const dateData = artwork.filter((d: any) => {
        const uploadDate = d?.upload_date.split('/');
        const artworkUploadDate = new Date(
          parseInt(uploadDate[2]),
          parseInt(uploadDate[1]) - 1,
          parseInt(uploadDate[0]),
        );
        if (artworkUploadDate >= start_date && artworkUploadDate <= end_date) {
          return d;
        }
      });
      handlerPaginQty(dateData.length);
      setTableData(dateData);
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
    const newData = artwork.filter(
      (d: any) => !selectedRow.includes(d.artwork_name),
    );
    setQuickAction(false);
    setSelectedRow([]);
    setTableData(filterData(newData));
    handlerPaginQty(newData.length);
  }, [selectedRow]);

  const handlerSearch = (e: any) => {
    e.preventDefault();
    const foundData = TextSearchFun(artwork, ref.current);
    setTableData(filterData(foundData));
    handlerPaginQty(foundData.length);
  };

  return {
    path,
    ref,
    quickAction,
    showFilterBox,
    filterDate,
    selectedRow,
    page_number,
    pagiBtnQty,
    tableData,
    loading,
    sortingFun,
    setPageNumber,
    setSelectedRow,
    setQuickAction,
    setFilterDate,
    handleMultipleDeleteAction,
    prevBtnFun,
    nextBtnFun,
    handlerSearch,
    setShowFilterBox,
  };
};
