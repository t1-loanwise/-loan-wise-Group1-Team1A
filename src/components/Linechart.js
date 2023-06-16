import React, {PureComponent} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Text
} from "recharts";

const data = [
  {
    month: "Jan",
    "Total loans": 2100,
    "Approved": 4000 ,
    "Declined": 6000,
  },
  {
    month: "Feb",
    "Total loans": 1800,
    "Approved": 5500,
    "Declined": 7500,
  },
  {
    month: "Mar",
    "Total loans": 600,
     "Approved": 4050,
    "Declined": 6050,
  },
  {
    month: "Apr",
    "Total loans": 1200,
    "Approved": 3950,
    "Declined": 5950,
  },
  {
    month: "May",
    "Total loans": 500,
     "Approved": 5600 ,
    "Declined": 7600,
  },
  {
    month: "Jun",
    "Total loans": 1800,
    "Approved": 4800,
    "Declined": 6800,
  },
  {
    month: "Jul",
    "Total loans": 2500,
    "Approved": 4500,
    "Declined": 6500,
  },
  {
    month: "Aug",
    "Total loans": 2200,
    "Approved": 4000,
    "Declined": 6000,
  },
  {
    month: "Sep",
    "Total loans": 1600,
    "Approved": 4700,
    "Declined": 6700,
  },
  {
    month: "Oct",
    "Total loans": 2400,
    "Approved": 5000,
    "Declined": 7000,
  },
  {
    month: "Nov",
    "Total loans": 1200,
    "Approved": 4800,
    "Declined": 6800,
  },
  {
    month: "Dec",
    "Total loans": 2400,
    "Approved": 6800,
    "Declined": 7800,
  },
];

const Linechart = () => {
  return (
    <div className="line-chart-container">
      <ResponsiveContainer width="100%">
        <LineChart
          data={data}
          fontSize={8.5}
          width="100%"
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 10,
          }}
        >
          <XAxis dataKey="month" tickLine={false} strokeWidth={1}>
            <Label
              value="Period"
              position="insideBottom"
              offset={-5}
              fontSize={14}
              fontWeight="bold"
            />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Label position={"insideTopLeft"} value="Card Title" />
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <Legend
            verticalAlign="top"
            fontSize={8}
            align="right"
            iconType="circle"
            iconSize={7}
          />

          <Line
            type="monotone"
            dataKey="Total loans"
            stroke="#009967"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Approved"
            stroke="#99007E"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Declined"
            stroke="#003299"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
