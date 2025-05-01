
import React from 'react';

interface ResponseTimeByTopicChartProps {
  data: {
    topic: string;
    time: number;
  }[];
}

const ResponseTimeByTopicChart: React.FC<ResponseTimeByTopicChartProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={`topic-${index}`} className="flex items-center">
          <div className="w-1/3 text-sm text-gray-700">{item.topic}</div>
          <div className="w-2/3">
            <div className="flex items-center">
              <div 
                className="h-5 bg-whatsapp-secondary mr-2" 
                style={{ width: `${Math.min(item.time * 50, 200)}px` }}
              ></div>
              <span className="text-sm">{item.time}s</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseTimeByTopicChart;
