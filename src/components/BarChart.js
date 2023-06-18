import React, {PureComponent} from 'react'
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from "recharts"

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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          fontSize={8.5}
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 10,
          }}
        >
          <XAxis dataKey="month">
            <Label
              value="Period"
              position="insideBottom"
              offset={-5}
              fontSize={14}
              fontWeight="bold"
            />
          </XAxis>
          <YAxis>
            <Label
              value="Qty"
              position="insideLeft"
              angle={-90}
              offset={20}
              fontSize={14}
              fontWeight="bold"
            />
          </YAxis>
          <Tooltip cursor={false}/>
          <Bar dataKey="Qty" fill="#99007E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart