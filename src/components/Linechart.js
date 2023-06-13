// import React from "react";
// import { Line } from "react-chartjs-2";
// import Chart from "chart.js/auto";

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
//         2100, 1800, 600, 1200, 500, 1800, 2500, 2200, 1600, 2400, 1200, 2400,
//       ],
//       backgroundColor: "#009967",
//       borderColor: "#009967",
//       borderWidth: 2,
//       pointRadius: 0,
//       tension: 0.3,
//       pointStyle: 'circle'
//     },
//     {
//       label: "Approved",
//       data: [
//         4000, 5500, 4050, 3950, 5600, 4800, 4500, 4000, 4700, 5200, 5800, 6300,
//       ],
//       backgroundColor: "#99007E",
//       borderColor: "#99007E",
//       borderWidth: 2,
//       pointRadius: 0,
//       tension: 0.3,
//       pointStyle: 'circle'
//     },
//     {
//       label: "Declined",
//       data: [
//         6000, 7500, 6050, 5950, 7600, 6800, 6500, 6000, 6700, 7200, 7800, 7300,
//       ],
//       backgroundColor: "#003299",
//       borderColor: "#003299",
//       borderWidth: 2,
//       pointRadius: 0,
//       tension: 0.3,
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
//     title: {
//       display: true,
//       text: "Total loans vs. Approved vs. Declined",
//       font: {
//         size: 9.5,
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
//           size: 7,
//           color: "#343434",
//         },
//       },
//       grid: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "Period",
//     },
// },
//     y: {
//       ticks: {
//         font: {
//           size: 7,
//           color: "#343434",
//         },
//         maxTicksLimit: 5,
//       },
//     },
//   },
// };

// const Linechart = () => {
//   return (
//     <div className="line-chart-container">
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default Linechart;
