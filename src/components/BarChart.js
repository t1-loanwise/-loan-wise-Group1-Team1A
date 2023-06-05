import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Total loans",
      data: [
        400, 100, 450, 625, 20, 520, 850, 830, 200, 250, 90, 900,
      ],
      backgroundColor: "#99007E",
      borderColor: "#99007E",
      borderWidth: 0,
    },
  ],
};

const options = {
  indexAxis: "x", // Set the index axis to 'y' for a vertical bar chart
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Period", // Add the title for the x-axis
      },
      ticks: {
        font: {
          size: 7,
          color: "#343434",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Qty", // Add the title for the x-axis
      },
      ticks: {
        font: {
          size: 7,
          color: "#343434",
        },
        stepSize: 250,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Remove the legend
    },
  },
};

const Barchart = () => {

  return (
    <div className="line-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

export default Barchart