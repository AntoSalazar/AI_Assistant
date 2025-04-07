
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Product Inquiry', value: 32 },
  { name: 'Order Status', value: 26 },
  { name: 'Support Query', value: 22 },
  { name: 'Pricing Info', value: 15 },
  { name: 'Other', value: 5 },
];

const colors = ['#25D366', '#34B7F1', '#5DADE2', '#8E44AD', '#E74C3C'];

const TopIntentsChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-[280px]">
      <h3 className="font-semibold text-gray-700 mb-3">Top User Intents</h3>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
            <Bar dataKey="value" barSize={25} radius={[0, 4, 4, 0]}>
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