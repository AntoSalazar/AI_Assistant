
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Product Inquiry', value: 34 },
  { name: 'Order Status', value: 28 },
  { name: 'Support Query', value: 22 },
  { name: 'Pricing Info', value: 15 },
  { name: 'Other', value: 6 },
];

const colors = ['#25D366', '#34B7F1', '#5DADE2', '#8E44AD', '#E74C3C'];

const chartConfig = {
  intent: {
    label: "Top User Intents",
    color: "#25D366"
  }
};

const TopIntentsChart = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis 
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}%`} 
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                width={70}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" barSize={25} radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      
    </div>
  );
};

export default TopIntentsChart;
