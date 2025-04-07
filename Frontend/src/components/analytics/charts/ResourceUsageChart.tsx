
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResourceUsageChartProps {
  data: {
    day: number;
    tokens: number;
  }[];
}

const ResourceUsageChart: React.FC<ResourceUsageChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey="day" 
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tickFormatter={(value) => `${value / 1000}K`}
        />
        <Tooltip 
          formatter={(value) => [`${(value as number).toLocaleString()} tokens`, 'Consumption']}
          labelFormatter={(day) => `Day ${day}`}
        />
        <Area 
          type="monotone" 
          dataKey="tokens" 
          stroke="#25D366" 
          fill="#25D366" 
          fillOpacity={0.2} 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ResourceUsageChart;
