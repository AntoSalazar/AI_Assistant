import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Data (assuming this structure comes from an API or prop - values not translated)
const data = [
  { name: 'Mar 20', conversations: 400 }, // 'name' values are used as axis labels - not translated
  { name: 'Mar 21', conversations: 580 },
  { name: 'Mar 22', conversations: 520 },
  { name: 'Mar 23', conversations: 600 },
  { name: 'Mar 24', conversations: 700 },
  { name: 'Mar 25', conversations: 650 },
  { name: 'Mar 26', conversations: 780 },
];

const ConversationsChart = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    // Styles remain unchanged
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-[280px]">
       {/* Chart Title - UI Text - Translated */}
      <h3 className="font-semibold text-gray-700 mb-3">
        {t('chartTitleConversationsOverTime', 'Conversations Over Time')}
      </h3>
       {/* Chart Container - Styles remain unchanged */}
      <div className="h-[220px]">
        {/* Recharts components and configuration remain unchanged */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data} // Data passed directly - not translated
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
             {/* XAxis uses dataKey="name" - labels derived from data, not translated here */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
             {/* YAxis displays numerical range - not translated here */}
            <YAxis axisLine={false} tickLine={false} />
             {/* Tooltip displays data values based on dataKeys - not translated here */}
            <Tooltip />
            <Line
              type="monotone"
              dataKey="conversations" // dataKey identifies data field - not translated
              stroke="#25D366"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              // Tooltip/Legend name could be added/translated if needed, but not present in original
              // name={t('tooltipConversations', 'Conversations')}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversationsChart;