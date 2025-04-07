
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  isNegative?: boolean;
};

const MetricCard = ({ title, value, change, isPositive, isNegative }: MetricCardProps) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-3xl font-bold text-whatsapp-primary mb-1">{value}</p>
      <div className="flex items-center">
        <span className={cn(
          "text-sm flex items-center gap-1",
          isPositive && !isNegative ? "text-green-600" : "",
          isNegative ? "text-red-600" : ""
        )}>
          {isPositive && !isNegative && <TrendingUp size={16} />}
          {isNegative && <TrendingDown size={16} />}
          {change}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
