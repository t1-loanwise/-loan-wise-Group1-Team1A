import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { Line } from "react-chartjs-2";
// // import Chart from "chart.js/auto";

// const data = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//   ],

//   datasets: [

//     {
//       label: "Active",
//       data: [
//         500, 1400, 1000, 1250, 950, 1600, 1700,
//       ],
//       backgroundColor: "#009967",
//       borderColor: "#009967",
//       borderWidth: 4,
//       pointRadius: 0,
//       tension: 0,
//       pointStyle: 'circle'

//     },
//     {
//       label: "Closed",
//       data: [
//         1300, 750, 1150, 950, 1100, 1300, 1400,
//       ],
//       backgroundColor: "#99007E",
//       borderColor: "#99007E",
//       borderWidth: 4,
//       pointRadius: 0,
//       tension: 0,
//       pointStyle: 'circle'
//     },
//   ],
// };

// const options = {
//   plugins: {
//     legend: {
//       labels: {
//         font: {
//           size: 7.5,
//           color: "#343434",
//         },
//         position: "right",
//         usePointStyle: true,
//       },
//     },
//     tooltip: {
//       callbacks: {
//         label: function (context) {
//           return context.parsed.y.toString(); // Display the data value as the tooltip label
//         },
//       },
//     },
//   },
//   scales: {
//     x: {
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
//         maxTicksLimit: 5,
//       },
//     },
//   },
// };

const data = [
  {
    month: "Jan",
    Overview: 500,
    Declined: 1300,
  },
  {
    month: "Feb",
    Overview: 1400,
    Declined: 750,
  },
  {
    month: "Mar",
    Overview: 1000,
    Declined: 1150,
  },
  {
    month: "Apr",
    Overview: 1250,
    Declined: 950,
  },
  {
    month: "May",
    Overview: 950,
    Declined: 1100,
  },
  {
    month: "Jun",
    Overview: 1600,
    Declined: 1300,
  },
  {
    month: "Jul",
    Overview: 1700,
    Declined: 1400,
  },
];

const PortfolioAreaChart = () => {
  return (
    <div className="line-chart-container2">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          fontSize={8.5}
          margin={{
            top: 0,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            fontSize={7.5}
            align="right"
            iconType="circle"
            iconSize={7}
          />
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <defs>
            <linearGradient id="colorOverview" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#009967" stopOpacity={0.38} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDeclined" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#99007E" stopOpacity={0.2982} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="Overview"
            stroke="#009967"
            dot={false}
            strokeWidth={4}
            fill="url(#colorOverview)"
            fillOpacity={1}
          />
          <Area
            type="linear"
            dataKey="Declined"
            stroke="#99007E"
            dot={false}
            strokeWidth={4}
            fill="url(#colorDeclined)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioAreaChart;
