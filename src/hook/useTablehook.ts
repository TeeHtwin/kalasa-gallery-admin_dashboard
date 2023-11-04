import { useCallback, useEffect, useMemo, useState } from 'react';

export const useTableCustomHook = (dataArray: any[]) => {
  const [quickAction, setQuickAction] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [filterDate, setFilterDate] = useState(null);
  const [page_number, setPageNumber] = useState<number>(1);

  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  // actual return data
  const [foundData, setFoundData] = useState<any[]>([]);

  useEffect(() => {
    setFoundData(dataArray);
  }, []);

  // this will be call when the user typing the key work in the search bar;
  const handleSearch = useCallback((e: HTMLInputElement) => {
    // setSearchKeyWord(e.target.value.toString())
  }, []);

  // this will run also when the user start typing in the search bar
  const foundDatahanlder = useMemo(() => {}, [searchKeyWord]);

  const handleMultipleDeleteAction = useCallback(() => {
    const newData = dataArray.filter(
      (d) => !selectedRow.includes(d.artwork_name),
    );
    // setQuickAction(false);
    return { quickAction: false, selectedRow: [], tableData: newData };
    // setSelectedRow([]);
    // setTableData(newData);
  }, [selectedRow]);

  //       const handlerSearch = (e: FormEvent) => {
  //     e.preventDefault();
  //     setTableData(TextSearchFun(artwork, ref.current));

  return { foundData };
};
