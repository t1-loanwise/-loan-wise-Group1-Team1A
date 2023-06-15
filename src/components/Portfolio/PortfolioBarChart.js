import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// import { Bar } from "react-chartjs-2";

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

//   datasets: [
//     {
//       label: "Active",
//       data: [600, 900, 250, 325, 350, 580, 580],
//       backgroundColor: "#99007E",
//       borderColor: "#99007E",
//       borderWidth: 0,
//       barThickness: 15,
//       stack: "Stack 1",
//     },
//     {
//       label: "Active",
//       data: [1100, 1080, 1450, 1050, 1400, 900, 850, ,],
//       backgroundColor: "#009967",
//       borderColor: "#009967",
//       borderWidth: 0,
//       pointRadius: 0,
//       tension: 0.3,
//       barThickness: 15,
//       borderRadius: 10,
//       stack: "Stack 1",
//     },
//   ],
// };

// const options = {
//   indexAxis: "x", // Set the index axis to 'y' for a vertical bar chart
//   scales: {
//     x: {
//       beginAtZero: true,

//       ticks: {
//         font: {
//           size: 8,
//           color: "#343434",
//         },
//       },
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       beginAtZero: true,

//       ticks: {
//         font: {
//           size: 8,
//           color: "#343434",
//         },
//         stepSize: 500,
//       },
//       grid: {
//         display: true,
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       display: false, // Remove the legend
//       borderRadius: 10,
//     },
//   },
// };
const data = [
  {
    month: "Jan",
    Active: 600,
    Closed: 1100,
  },
  {
    month: "Feb",
    Active: 900,
    Closed: 1080,
  },
  {
    month: "Mar",
    Active: 250,
    Closed: 1450,
  },
  {
    month: "Apr",
    Active: 325,
    Closed: 1050,
  },
  {
    month: "May",
    Active: 350,
    Closed: 1400,
  },
  {
    month: "Jun",
    Active: 580,
    Closed: 900,
  },
  {
    month: "Jul",
    Active: 580,
    Closed: 850,
  },
];

const PortfolioBarChart = () => {
  return (
    <div className="line-chart-container2">
      <ResponsiveContainer>
        <BarChart
          data={data}
          fontSize={8.5}
          margin={{
            top: 0,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" tickLine={false} strokeWidth={1} />
          <YAxis />
          <Tooltip cursor={false}/>
          <Legend
            verticalAlign="top"
            fontSize={7.5}
            align="right"
            iconType="circle"
            iconSize={7}
          />
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <Bar dataKey="Active" fill="#99007E" stackId="a" barSize={14} />
          <Bar
            dataKey="Closed"
            fill="#009967"
            stackId="a"
            barSize={14}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioBarChart;
