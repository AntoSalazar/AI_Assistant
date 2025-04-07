
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

// Sample data for the charts
const responseTimeData = [
  { day: '1', GPT4: 2.1, LLaMA2: 2.8 },
  { day: '5', GPT4: 2.0, LLaMA2: 2.6 },
  { day: '10', GPT4: 1.9, LLaMA2: 2.5 },
  { day: '15', GPT4: 1.7, LLaMA2: 2.3 },
  { day: '20', GPT4: 1.8, LLaMA2: 2.2 },
  { day: '25', GPT4: 1.6, LLaMA2: 2.1 },
  { day: '30', GPT4: 1.5, LLaMA2: 2.0 }
];

const failingIntentsData = [
  { intent: 'Technical Support', errorRate: 7.8 },
  { intent: 'Warranty Claims', errorRate: 6.5 },
  { intent: 'Device Compatibility', errorRate: 5.4 }
];

const resourceUsageData = [
  { day: '1', tokens: 450 },
  { day: '5', tokens: 470 },
  { day: '10', tokens: 460 },
  { day: '15', tokens: 490 },
  { day: '20', tokens: 510 },
  { day: '25', tokens: 500 },
  { day: '30', tokens: 520 }
];

interface ResponseTimeTrendChartProps {
  data: {
    day: string;
    GPT4: number;
    LLaMA2: number;
  }[];
}

const ResponseTimeTrendChart: React.FC<ResponseTimeTrendChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="GPT4" stroke="#34B7F1" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="LLaMA2" stroke="#8E44AD" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

interface FailingIntentsChartProps {
  data: {
    intent: string;
    errorRate: number;
  }[];
}

const FailingIntentsChart: React.FC<FailingIntentsChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={150}>
    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="intent" />
      <Tooltip />
      <Bar dataKey="errorRate" fill="#E74C3C" />
    </BarChart>
  </ResponsiveContainer>
);

interface ResourceUsageChartProps {
  data: {
    day: string;
    tokens: number;
  }[];
}

const ResourceUsageChart: React.FC<ResourceUsageChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={120}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="tokens" stroke="#25D366" strokeWidth={2} dot={{ r: 3 }} />
    </LineChart>
  </ResponsiveContainer>
);

const PerformanceAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-whatsapp-primary">1.8s</div>
            <p className="text-base font-medium mt-1">Avg. Response Time</p>
            <p className="text-sm text-muted-foreground mt-1">-0.4s from previous period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-whatsapp-primary">246</div>
            <p className="text-base font-medium mt-1">Avg. Token Usage</p>
            <p className="text-sm text-muted-foreground mt-1">per response</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-whatsapp-primary">87.2%</div>
            <p className="text-base font-medium mt-1">Resolution Rate</p>
            <p className="text-sm text-muted-foreground mt-1">+5.4% from previous period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-whatsapp-primary">2.3%</div>
            <p className="text-base font-medium mt-1">Error Rate</p>
            <p className="text-sm text-muted-foreground mt-1">-1.1% from previous period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Response Time Trend Chart */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Response Time Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponseTimeTrendChart data={responseTimeData} />
          </CardContent>
        </Card>

        {/* Model Comparison */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Model Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Metric</th>
                    <th className="text-center py-2 text-blue-500">GPT-4</th>
                    <th className="text-center py-2 text-purple-600">LLaMA 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Response Time</td>
                    <td className="text-center">1.8s</td>
                    <td className="text-center">2.5s</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Token Usage</td>
                    <td className="text-center">246</td>
                    <td className="text-center">224</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Resolution Rate</td>
                    <td className="text-center">87%</td>
                    <td className="text-center">79%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Error Rate</td>
                    <td className="text-center">2.3%</td>
                    <td className="text-center">3.8%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Avg. Confidence</td>
                    <td className="text-center">94%</td>
                    <td className="text-center">89%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failing Intents */}
        <Card>
          <CardHeader>
            <CardTitle>Top Failing Intents</CardTitle>
          </CardHeader>
          <CardContent>
            <FailingIntentsChart data={failingIntentsData} />
          </CardContent>
        </Card>

        {/* Resource Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <div className="text-sm text-muted-foreground">Daily token consumption trend</div>
          </CardHeader>
          <CardContent>
            <ResourceUsageChart data={resourceUsageData} />
            <div className="flex justify-between mt-4">
              <div className="text-sm text-muted-foreground">Avg: 486K tokens/day</div>
              <div className="text-sm text-muted-foreground">Total: 14.6M tokens</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
