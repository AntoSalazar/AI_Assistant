
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Content Used', value: 76, color: '#25D366' },
  { name: 'Content Gaps', value: 12, color: '#E74C3C' },
  { name: 'Outdated Content', value: 8, color: '#F39C12' },
  { name: 'Unused Content', value: 4, color: '#8E44AD' }
];

const chartConfig = {
  kb: {
    label: "Knowledge Base",
  }
};

const KnowledgeBaseDonutChart = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-full h-[240px]">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-3 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }}></div>
            <div className="text-sm text-gray-700">
              {item.name}: <span className="font-semibold">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBaseDonutChart;
