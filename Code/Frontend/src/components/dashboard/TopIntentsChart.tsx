import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Data (assuming this structure comes from an API or prop - values not translated)
// The 'name' field provides the Y-axis labels directly. For these to be translated,
// the data source would need to include translation keys, or a mapping would be needed here.
// Based on the request, we won't translate the axis labels derived from this data.
const data = [
  { name: 'Product Inquiry', value: 32 },
  { name: 'Order Status', value: 26 },
  { name: 'Support Query', value: 22 },
  { name: 'Pricing Info', value: 15 },
  { name: 'Other', value: 5 },
];

// Colors remain unchanged
const colors = ['#25D366', '#34B7F1', '#5DADE2', '#8E44AD', '#E74C3C'];

const TopIntentsChart = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    // Styles remain unchanged
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-[280px]">
      {/* Chart Title - UI Text - Translated */}
      <h3 className="font-semibold text-gray-700 mb-3">
        {t('chartTitleTopUserIntents', 'Top User Intents')}
      </h3>
      {/* Chart Container - Styles remain unchanged */}
      <div className="h-[220px]">
         {/* Recharts components and configuration remain unchanged */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data} // Data passed directly - not translated
            margin={{
              top: 5,
              right: 30,
              left: 20, // Adjusted left margin slightly if YAxis labels were long
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
             {/* XAxis displays numerical range - not translated here */}
            <XAxis type="number" axisLine={false} tickLine={false} />
             {/* YAxis uses dataKey="name" - labels derived from data, not translated here */}
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
             {/* Tooltip formatter uses translated label */}
            <Tooltip formatter={(value: number) => [`${value}%`, t('tooltipLabelPercentage', 'Percentage')]} />
            <Bar dataKey="value" barSize={25} radius={[0, 4, 4, 0]}>
               {/* Cell mapping remains unchanged */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopIntentsChart;