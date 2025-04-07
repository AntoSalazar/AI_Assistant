
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ResponseTimeTrendChartProps {
  data: {
    day: number;
    gpt4: number;
    llama2: number;
  }[];
}

const ResponseTimeTrendChart: React.FC<ResponseTimeTrendChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
          dataKey="day" 
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false}
          domain={[0, 5]}
        />
        <Tooltip />
        <Legend />
        <Line
          name="GPT-4"
          type="monotone"
          dataKey="gpt4"
          stroke="#34B7F1"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={false}
        />
        <Line
          name="LLaMA 2"
          type="monotone"
          dataKey="llama2"
          stroke="#8E44AD"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResponseTimeTrendChart;
