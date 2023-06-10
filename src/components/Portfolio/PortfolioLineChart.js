import React from 'react'
import { Line } from "react-chartjs-2";
// import Chart from "chart.js/auto";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
  ],

  datasets: [

    {
      label: "Active",
      data: [
        500, 1400, 1000, 1250, 950, 1600, 1700,
      ],
      backgroundColor: "#009967",
      borderColor: "#009967",
      borderWidth: 4,
      pointRadius: 0,
      tension: 0,
      pointStyle: 'circle'

    },
    {
      label: "Closed",
      data: [
        1300, 750, 1150, 950, 1100, 1300, 1400,
      ],
      backgroundColor: "#99007E",
      borderColor: "#99007E",
      borderWidth: 4,
      pointRadius: 0,
      tension: 0,
      pointStyle: 'circle'
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 7.5,
          color: "#343434",
        },
        position: "right",
        usePointStyle: true,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.parsed.y.toString(); // Display the data value as the tooltip label
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 8,
          color: "#343434",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 8,
          color: "#343434",
        },
        maxTicksLimit: 5,
      },
    },
  },
};


const PortfolioLineChart = () => {
    return (
        <div className="line-chart-container2">
          <Line data={data} options={options} />
        </div>
      );
}

export default PortfolioLineChart