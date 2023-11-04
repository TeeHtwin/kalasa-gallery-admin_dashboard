'use client';
import { useState } from 'react';
import BarChart from './chars/BarChart';
import ListBoxCom from '../common/ListBox';

const EnquireReport = () => {
  const [reportMonth, setReportMonth] = useState<String | null>('');
  return (
    <main>
      <div className="flex justify-between items-center">
        <h2
          className="m-0 p-0 text-heading font-heading text-primary"
          style={{
            //* just temporary
            fontFamily: 'cardo',
          }}
        >
          Enquire Report
        </h2>

        <div className="min-w-[160px] w-fit h-[45px] relative border rounded-full">
          <ListBoxCom
            reportMonth={reportMonth}
            setReportMonth={setReportMonth}
          />
        </div>
      </div>
      <section>
        <BarChart />
      </section>
    </main>
  );
};
export default EnquireReport;
