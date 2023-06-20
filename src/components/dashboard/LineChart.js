import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import SideButton from "../common/SideButton";
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      cubicInterpolationMode: "monotone",
    },
    {
      label: "My First dataset",
      backgroundColor: "rgb(190, 99, 132)",
      borderColor: "rgb(190, 99, 132)",
      data: [20, 1, 9, 14, 20, 28, 15],
      cubicInterpolationMode: "monotone",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxHeight: 5,
      },
    },
    tooltip: {
      enabled: true,
      position: "nearest",
    },
  },

  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const LineChart = ({ title }) => {
  return (
    <div className="relative bg-white rounded-2xl p-4 lg:py-7 lg:px-10" style={{ height: "359px" }}>
      <h4 className="font-montserrat md:text-base lg:text-lg font-bold mb-1">{title}</h4>
      <SideButton text="May - June 2021" icon={<DownArrow />}/>
      <div style={{ height: "247px" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
