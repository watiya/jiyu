
import CardBox from 'src/components/shared/CardBox';
import Chart from 'react-apexcharts';

const ViewsChart = () => {
  const ChartData: any = {
    series: [
        {
            name: '',
            data: [26, 21, 36, 31, 16, 24, 24, 21, 18, 16]
        }
    ],
    chart: {
        type: 'bar',
        height: 80,
        fontFamily: `inherit`,
        sparkline: {
            enabled: true
        }
    },
    colors: ['var(--color-lightsecondary)', 'var(--color-lightsecondary)', 'var(--color-secondary)', 'var(--color-lightsecondary)', 'var(--color-lightsecondary)', 'var(--color-lightsecondary)'],

    plotOptions: {
        bar: {
            borderRadius: 4,
            columnWidth: '50%',
            distributed: true,
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'dark'
    }
  };
  return (
    <>
      <CardBox className="overflow-hidden">
        <div className="flex justify-between items-end">
          <div>
            <h5 className="card-title">15,480</h5>
            <p className="card-subtitle">Views</p>
          </div>
          <span className="text-error text-sm">-4.150%</span>
        </div>

        <Chart
          options={ChartData}
          series={ChartData.series}
          type="bar"
          height='92px'
          width='100%'
          className="mt-2"
        />
      </CardBox>
    </>
  );
};

export default ViewsChart;
