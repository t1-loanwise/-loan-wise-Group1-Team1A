import React, {PureComponent} from 'react'
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts"
// import Chart from "chart.js/auto";
// import { Bar } from "react-chartjs-2";

// const data = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],

//   datasets: [
//     {
//       label: "Total loans",
//       data: [
//         400, 100, 450, 625, 20, 520, 850, 830, 200, 250, 90, 900,
//       ],
//       backgroundColor: "#99007E",
//       borderColor: "#99007E",
//       borderWidth: 0,
//     },
//   ],
// };

// const options = {
//   indexAxis: "x", // Set the index axis to 'y' for a vertical bar chart
//   scales: {
//     x: {
//       beginAtZero: true,
//       title: {
//         display: true,
//         text: "Period", // Add the title for the x-axis
//       },
//       ticks: {
//         font: {
//           size: 7,
//           color: "#343434",
//         },
//       },
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       beginAtZero: true,
//       title: {
//         display: true,
//         text: "Qty", // Add the title for the x-axis
//       },
//       ticks: {
//         font: {
//           size: 7,
//           color: "#343434",
//         },
//         stepSize: 250,
//       },
//       grid: {
//         display: false,
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       display: false, // Remove the legend
//     },
//   },
// };

const data = [
  {
    month: "Jan",
    Qty: 400,
  },
  {
    month: "Feb",
    Qty: 100,
  },
  {
    month: "Mar",
    Qty: 450,
  },
  {
    month: "Apr",
    Qty: 625,
  },
  {
    month: "May",
    Qty: 20,
  },
  {
    month: "Jun",
    Qty: 520,
  },
  {
    month: "Jul",
    Qty: 850,
  },
  {
    month: "Aug",
    Qty: 830,
  },
  {
    month: "Sep",
    Qty: 200,
  },
  {
    month: "Oct",
    Qty: 250,
  },
  {
    month: "Nov",
    Qty: 90,
  },
  {
    month: "Dec",
    Qty: 100,
  },
]

const Barchart = () => {

  return (
    <div className="line-chart-container">
      <ResponsiveContainer>
        <BarChart>
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip/>
          <Legend/>
          <Bar dataKey="Qty" fill='#99007E'/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart