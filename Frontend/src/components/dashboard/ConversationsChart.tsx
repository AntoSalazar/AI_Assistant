
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mar 20', conversations: 400 },
  { name: 'Mar 21', conversations: 580 },
  { name: 'Mar 22', conversations: 520 },
  { name: 'Mar 23', conversations: 600 },
  { name: 'Mar 24', conversations: 700 },
  { name: 'Mar 25', conversations: 650 },
  { name: 'Mar 26', conversations: 780 },
];

const ConversationsChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-[280px]">
      <h3 className="font-semibold text-gray-700 mb-3">Conversations Over Time</h3>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="conversations"
              stroke="#25D366"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversationsChart;
