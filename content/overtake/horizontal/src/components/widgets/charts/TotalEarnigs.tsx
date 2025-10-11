
import CardBox from 'src/components/shared/CardBox';
import Chart from 'react-apexcharts';

const TotalEarningChart = () => {
  const ChartData: any = {
    series: [
      {
        name: "projects",
        data: [9, 19, 18, 15, 12, 18, 19, 14, 11, 20, 17],
      },
    ],
    chart: {
      type: "bar",
      height: 55,
      fontFamily: `inherit`,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--color-secondary)"],

    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "60%",
        distributed: true,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  return (
    <>
      <CardBox className="overflow-hidden">
        <div className="flex justify-between items-end">
          <div>
            <p className="card-subtitle">Total Earning</p>
            <h5 className="card-title">$78,298</h5>
          </div>
        </div>

        <Chart
          options={ChartData}
          series={ChartData.series}
          type="bar"
          height='68px'
          width='100%'
          className="mt-8"
        />
      </CardBox>
    </>
  );
};

export default TotalEarningChart;
