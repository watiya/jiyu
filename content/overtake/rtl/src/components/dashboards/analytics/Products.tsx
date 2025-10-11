
import CardBox from "../../shared/CardBox";
import { Badge } from "flowbite-react";
import { useContext } from "react";
import Chart from "react-apexcharts"
import { CustomizerContext } from "src/context/CustomizerContext";
const Products = () => {
  const {activeMode} = useContext(CustomizerContext)
  const ChartData: any = {
    color: "#adb5bd",
    series: [70, 18, 12], 
    labels: ["2024", "2023", "2022"],
    chart: {
      height: 175,
      type: "donut",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "85%",
        },
      },
    },
    stroke: {
      show: true,
      colors: `${activeMode === "light" ? "var(--color-surface-ld)" : "var(--color-darkgray)"}`,
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: [
      "var(--color-primary)",
      "var(--color-success)",
      "var(--color-error)",
    ],

    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  return (
    <>
      <CardBox>
        <div className="flex items-baseline  justify-between">
          <div>
            <h5 className="card-title">Products</h5>
            <p className="card-subtitle">Last 7 days</p>
          </div>
          <div className="text-end">
            <h5 className="card-title text-base">12,389</h5>
            <Badge color={"lightsuccess"}>+26.5%</Badge>
          </div>
        </div>

        <Chart
          options={ChartData}
          series={ChartData.series}
          type="donut"
          height='175px'
          width='100%'
          className="my-4"
        />
        <p className="text-xs text-darklink text-center">Profit more than last month</p>
      </CardBox>
    </>
  );
};

export default Products;
