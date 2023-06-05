import React from 'react'
import { Card, Title, LineChart } from "@tremor/react";

const Linechart = () => {
     const chartdata = [
       {
         month: "Jan",
         "Total loans": 400,
         "Approved": 350,
         "Declined": 100,
       },
       {
         month: "Feb",
         "Total loans": 400,
         "Approved": 350,
         "Declined": 100,
       },
       {
         month: "March",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "April",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "May",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "June",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "July",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "August",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "September",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "October",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "November",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
       {
         month: "December",
         "Total loans": 400,
         "Approved": 200,
         "Declined": 500,
       },
     ];

    const dataFormatter = (number) =>
      `${Intl.NumberFormat("us").format(number).toString()}%`;

  return (
    <Card>
      <Title>Total loans vs. Approved vs. Declined</Title>
      <LineChart
        // className="mt-6 h-200"
        data={chartdata}
        index="month"
        categories={["Total loans", "Approved", "Declined"]}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
}

export default Linechart