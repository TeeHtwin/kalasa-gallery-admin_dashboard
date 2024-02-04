'use client';

import ReactApexChart from 'react-apexcharts';

interface SeriesProp {
  name: string;
  data: number[];
}

const Chart = ({ series }: { series: SeriesProp[] }) => {

  const options = {
    colors: ['#9B4205', '#A95419'],
    chart: {
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: false,
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
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#9B4205',
            colorTo: '#A95419',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    // title: {
    //   text: 'Monthly Inflation in Argentina, 2002',
    //   floating: true,
    //   offsetY: 330,
    //   style: {
    //     color: '#444',
    //   },
    // },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
