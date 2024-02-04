import Chart from './Chart';
import YearBtn from './YearBtn';

const InquireReport = () => {
  const years = ['2023', '2022', '2021'];

  const series = [
    {
      name: 'Total',
      data: [123, 345, 567, 89, 234, 100, 456, 123, 78, 180, 345, 567],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2
          className="text-heading font-heading text-primary"
          style={{
            //* just temporary
            fontFamily: 'cardo',
          }}
        >
          Inquire Report
        </h2>
        <YearBtn years={years} />
      </div>

      <section>
        <Chart series={series} />
      </section>
    </div>
  );
};

export default InquireReport;
