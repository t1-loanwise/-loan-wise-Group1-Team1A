import React from 'react'
import { Card, BarChart, Title} from "@tremor/react";

const Barchart = () => {
    const chartdata = [
  {
    name: "Jan",
    "Qty": 400,
  },
  {
    name: "Feb",
    "Qty": 100,
  },
  {
    name: "March",
    "Qty": 400,
  },
  {
    name: "April",
    "Qty": 400,
  },
  {
    name: "May",
    "Qty": 400,
  },
  {
    name: "June",
    "Qty": 400,
  },
  {
    name: "July",
    "Qty": 400,
  },
  {
    name: "August",
    "Qty": 400,
  },
  {
    name: "September",
    "Qty": 400,
  },
  {
    name: "October",
    "Qty": 400,
  },
  {
    name: "November",
    "Qty": 400,
  },
  {
    name: "December",
    "Qty": 400,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
  return (
    <Card>
      <Title>Loan Default Count Trend</Title>
      <BarChart
        className="w-full h-10"
        data={chartdata}
        index="name"
        categories={["Qty"]}
        valueFormatter={dataFormatter}
        yAxisWidth={24}
      />
    </Card>
  );
}

export default Barchart