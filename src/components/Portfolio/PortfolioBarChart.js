import React from 'react'
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

  datasets: [
    {
      label: "Active",
      data: [600, 900, 250, 325, 350, 580, 580],
      backgroundColor: "#99007E",
      borderColor: "#99007E",
      borderWidth: 0,
      barThickness: 15,
      stack: "Stack 1",
    },
    {
      label: "Active",
      data: [1100, 1080, 1450, 1050, 1400, 900, 850, ,],
      backgroundColor: "#009967",
      borderColor: "#009967",
      borderWidth: 0,
      pointRadius: 0,
      tension: 0.3,
      barThickness: 15,
      borderRadius: 10,
      stack: "Stack 1",
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
        stepSize: 500,
      },
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Remove the legend
      borderRadius: 10,
    },
  },
};


const PortfolioBarChart = () => {
  return (
    <div className="line-chart-container2">
      <Bar data={data} options={options} />
    </div>
  );
}

export default PortfolioBarChart