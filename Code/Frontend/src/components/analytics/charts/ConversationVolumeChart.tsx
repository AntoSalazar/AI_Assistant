
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { day: '1', total: 400, resolved: 350 },
  { day: '2', total: 430, resolved: 370 },
  { day: '3', total: 450, resolved: 380 },
  { day: '4', total: 470, resolved: 390 },
  { day: '5', total: 480, resolved: 400 },
  { day: '6', total: 500, resolved: 420 },
  { day: '7', total: 520, resolved: 430 },
  { day: '8', total: 540, resolved: 450 },
  { day: '9', total: 560, resolved: 470 },
  { day: '10', total: 570, resolved: 480 },
  { day: '11', total: 590, resolved: 490 },
  { day: '12', total: 610, resolved: 510 },
  { day: '13', total: 590, resolved: 500 },
  { day: '14', total: 620, resolved: 520 },
  { day: '15', total: 640, resolved: 530 },
  { day: '16', total: 660, resolved: 550 },
  { day: '17', total: 680, resolved: 570 },
  { day: '18', total: 700, resolved: 590 },
  { day: '19', total: 720, resolved: 610 },
  { day: '20', total: 740, resolved: 630 },
  { day: '21', total: 760, resolved: 650 },
  { day: '22', total: 780, resolved: 670 },
  { day: '23', total: 800, resolved: 690 },
  { day: '24', total: 820, resolved: 710 },
  { day: '25', total: 840, resolved: 730 },
  { day: '26', total: 860, resolved: 750 },
  { day: '27', total: 880, resolved: 770 },
  { day: '28', total: 900, resolved: 790 },
  { day: '29', total: 920, resolved: 810 },
  { day: '30', total: 940, resolved: 820 }
];

const chartConfig = {
  total: {
    label: "Total Conversations",
    color: "#25D366"
  },
  resolved: {
    label: "AI Resolved",
    color: "#34B7F1"
  }
};

const ConversationVolumeChart = () => {
  return (
    <div className="h-full">
      <h3 className="font-semibold text-gray-700 mb-1">Conversation Volume Trend</h3>
      <p className="text-sm text-gray-500 mb-4">Last 30 days</p>
      <div className="h-[300px]">
        <ChartContainer config={chartConfig}>
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
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                name="Total Conversations"
                type="monotone"
                dataKey="total"
                stroke="#25D366"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={false}
              />
              <Line
                name="AI Resolved"
                type="monotone"
                dataKey="resolved"
                stroke="#34B7F1"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ConversationVolumeChart;
