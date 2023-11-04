'use client';

import dynamic from 'next/dynamic';
import ListBoxCom from '../common/ListBox';
import { useEnquiry } from '@/hook/useEnquiry';

const BarChart = dynamic(() => import('./chars/BarChart'), { ssr: false });

const EnquireReport = () => {
  const {
    data,
    loading,
    reportMonth,
    handleEnquiryYear: setReportMonth,
  } = useEnquiry();

  return (
    <main>
      <div className="flex justify-between items-center">
        <h2 className="m-0 p-0 text-heading font-heading text-primary font-primary">
          Enquire Report
        </h2>

        <div className="min-w-[120px] w-fit h-[35px] relative border rounded-full">
          <ListBoxCom
            reportMonth={reportMonth}
            setReportMonth={setReportMonth}
          />
        </div>
      </div>
      <section>
        {loading ? <h1>Loading...</h1> : <BarChart data={data} />}
      </section>
    </main>
  );
};
export default EnquireReport;
