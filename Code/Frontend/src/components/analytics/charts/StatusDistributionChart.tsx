
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface StatusDistributionChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const StatusDistributionChart: React.FC<StatusDistributionChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={1}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
            labelLine={{ stroke: '#666', strokeWidth: 1, strokeDasharray: '2 2' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Percentage']}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-4 w-full">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div 
              className="w-3 h-3 mr-2"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-sm">{entry.name}: {entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusDistributionChart;
