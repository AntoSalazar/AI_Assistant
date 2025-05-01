
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HourlyDistributionChartProps {
  data: {
    hour: number;
    conversations: number;
  }[];
}

const HourlyDistributionChart: React.FC<HourlyDistributionChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="hour" 
          tickFormatter={(hour) => `${hour < 10 ? '0' : ''}${hour}`} 
          axisLine={false}
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          formatter={(value) => [`${value} conversations`, `Hour ${value}`]}
          labelFormatter={(hour) => `${hour < 10 ? '0' : ''}${hour}:00`}
        />
        <Bar
          dataKey="conversations"
          fill="#25D366"
          radius={[4, 4, 0, 0]}
          maxBarSize={10}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HourlyDistributionChart;
