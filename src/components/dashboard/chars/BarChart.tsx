'use client';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const dummyData = {
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: 25,
        },
      },
      colors: ['#9B4205'],
      dataLabels: {
        enabled: false,
      },
      chart: {
        id: 'enquire_report',
        toolbar: {
          show: false,
        },
      },
      yaxis: {
        max: 1000,
        min: 0,
        tickAmount: 4, //step size of the chart's yaxis
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
    series: [
      {
        name: 'data',
        data: [850, 800, 750, 700, 650, 600, 650, 700, 750, 800, 850, 900],
      },
    ],
  };
  return (
    <Chart
      options={dummyData.options}
      series={dummyData.series}
      type="bar"
      height={420}
    />
  );
};

export default BarChart;
