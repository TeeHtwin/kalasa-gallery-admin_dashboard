import { useCallback, useEffect, useState } from 'react';
import enquireData from '@/data/enquiry.json';

export const useEnquiry = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [reportMonth, setReportMonth] = useState<Number>(2023);

  function FilterEnquiryData(filterYear: Number) {
    setLoading(true);
    const { year, data } = enquireData.filter(
      ({ year }) => Number(year) === filterYear,
    )[0];
    setData(data);
    setReportMonth(year);
    setLoading(false);
  }
  //calulate the report data
  useEffect(() => {
    FilterEnquiryData(reportMonth);
  }, []);

  const handleEnquiryYear = useCallback((e: Number) => {
    // setReportMonth(2018);
    FilterEnquiryData(e);
  }, []);

  return {
    loading,
    data,
    reportMonth,
    handleEnquiryYear,
  };
};
