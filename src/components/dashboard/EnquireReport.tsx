import Chart from "./Chart";

const EnquireReport = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="text-heading font-heading text-primary"
        style={{
          //* just temporary
          fontFamily: 'cardo',
        }}
      >
        Inquire Report
      </h2>

      <section>
        <Chart />
      </section>
    </div>
  );
};
export default EnquireReport;
