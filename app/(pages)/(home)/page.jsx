"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

//components
import SliderAnalytics from "@/components/SliderAnalytics";

//css
import "swiper/css";
import "swiper/css/pagination";
import "../../globals.css";

export default function Home() {
  const [data1, setData1] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  const [data2, setData2] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  });
  const [data3, setData3] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <main className="main-body">
      <SliderAnalytics
        data={[
          "Slider1",
          "Slider2",
          "Slider3",
          "Slider4",
          "Slider5",
          "Slider6",
          "Slider7",
        ]}
      />
      <div className="analytics-grid-1">
        <div className="card card-1">
          <h3>Test analytics 1</h3>
          <div className="chart-1">
            <Chart
              options={data1.options}
              series={data1.series}
              type="bar"
              height="350"
              width="100%"
            />
          </div>
        </div>
        <div className="card card-2">
          <h3>Test analytics 2</h3>
          <div className="chart-1">
            <Chart
              options={data2.options}
              series={data2.series}
              type="donut"
              height="150"
              width="100%"
            />
          </div>
        </div>
        <div className="card card-3">
          <h3>Test analytics 3</h3>
          <div className="chart-1">
            <Chart
              options={data3.options}
              series={data3.series}
              type="area"
              height="150"
              width="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
