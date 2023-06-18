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
