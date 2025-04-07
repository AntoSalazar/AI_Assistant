
import React from 'react';

interface FailingIntentsChartProps {
  data: {
    intent: string;
    errorRate: number;
  }[];
}

const FailingIntentsChart: React.FC<FailingIntentsChartProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={`failing-${index}`} className="flex flex-col">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.intent}</span>
            <span className="text-sm text-gray-700">{item.errorRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full" 
              style={{ width: `${Math.min(item.errorRate * 10, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FailingIntentsChart;
