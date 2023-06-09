import React from 'react'
// import Chart from "chart.js/auto";
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

  ],

  datasets: [
    {
      label: "Active",
      data: [
        4000, 5500, 4050, 3950, 5600, 4800, 4500, 4000, 4700, 5200, 5800, 6300,
      ],
      backgroundColor: "#99007E",
      borderColor: "#99007E",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.3,
      pointStyle: 'circle'
      
    },
    {
      label: "Active",
      data: [
        400, 100, 450, 625, 20, 520, 850, 830, 200, 250, 90, 900,
      ],
      backgroundColor: "#009967",
      borderColor: "#009967",
      borderWidth: 0,
    },
  ],
};

const options = {
  indexAxis: "x", // Set the index axis to 'y' for a vertical bar chart
  scales: {
    x: {
      beginAtZero: true,
     
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


const PortfolioBarChart = () => {
  return (
    <div className="line-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

export default PortfolioBarChart