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
