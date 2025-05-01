
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const responseTimeData = [
  { name: 'GPT-4', value: 1.8, fill: '#34B7F1' },
  { name: 'LLaMA 2', value: 2.5, fill: '#8E44AD' },
];

const resolutionRateData = [
  { name: 'GPT-4', value: 87, fill: '#34B7F1' },
  { name: 'LLaMA 2', value: 79, fill: '#8E44AD' },
];

const chartConfig = {
  model: {
    label: "Model Comparison",
  }
};

const ModelComparisonChart = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-1/4">
            <h4 className="text-sm font-medium text-gray-600">Response Time</h4>
          </div>
          <div className="w-3/4 h-[50px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="horizontal"
                  data={responseTimeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Bar dataKey="value" background={{ fill: "#f5f5f5" }}>
                    <LabelList dataKey="value" position="right" formatter={(value) => `${value}s`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-1/4">
            <h4 className="text-sm font-medium text-gray-600">Resolution Rate</h4>
          </div>
          <div className="w-3/4 h-[50px]">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="horizontal"
                  data={resolutionRateData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <Bar dataKey="value" background={{ fill: "#f5f5f5" }}>
                    <LabelList dataKey="value" position="right" formatter={(value) => `${value}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
      
      <div className="flex justify-start mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-[#34B7F1] mr-2"></div>
          <span className="text-sm text-gray-600">GPT-4</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-[#8E44AD] mr-2"></div>
          <span className="text-sm text-gray-600">LLaMA 2</span>
        </div>
      </div>
    </div>
  );
};

export default ModelComparisonChart;
