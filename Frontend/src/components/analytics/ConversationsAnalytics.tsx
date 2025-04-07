
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import MetricCard from '@/components/dashboard/MetricCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import StatusDistributionChart from './charts/StatusDistributionChart';
import HourlyDistributionChart from './charts/HourlyDistributionChart';
import ResponseTimeByTopicChart from './charts/ResponseTimeByTopicChart';

const statusDistributionData = [
  { name: 'Resolved (AI)', value: 72.4, color: '#28a745' },
  { name: 'Resolved (Human)', value: 12.8, color: '#17a2b8' },
  { name: 'Abandoned', value: 6.3, color: '#dc3545' },
  { name: 'Active', value: 5.2, color: '#ffc107' },
  { name: 'Scheduled Follow-up', value: 3.3, color: '#6c757d' },
];

const hourlyDistributionData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  conversations: Math.floor(
    i === 0 ? 15 :
    i < 6 ? 10 + Math.random() * 20 :
    i < 12 ? 40 + Math.random() * 60 :
    i < 18 ? 80 + Math.random() * 70 :
    i < 22 ? 50 + Math.random() * 70 :
    10 + Math.random() * 20
  )
}));

const responseTimeByTopicData = [
  { topic: 'Product Inquiry', time: 1.8 },
  { topic: 'Order Status', time: 1.5 },
  { topic: 'Support Query', time: 2.8 },
  { topic: 'Warranty Claim', time: 3.6 },
  { topic: 'Return Request', time: 2.4 },
  { topic: 'Technical Issue', time: 4.0 },
];

const ConversationsAnalytics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Conversations" 
          value="14,328" 
          change="+18% from previous period" 
          isPositive={true} 
        />
        <MetricCard 
          title="Average Messages" 
          value="8.3" 
          change="per conversation"
          isPositive={undefined} 
        />
        <MetricCard 
          title="Avg. Duration" 
          value="4.2m" 
          change="per conversation"
          isPositive={undefined} 
        />
        <MetricCard 
          title="Human Escalations" 
          value="12.8%" 
          change="-3.2% from previous period" 
          isPositive={true} 
        />
      </div>

      {/* Status Distribution & Hourly Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold text-gray-700">Conversation Status Distribution</h3>
            <p className="text-sm text-gray-500">Last 30 days</p>
          </CardHeader>
          <CardContent>
            <StatusDistributionChart data={statusDistributionData} />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold text-gray-700">Hourly Conversation Distribution</h3>
            <p className="text-sm text-gray-500">Average by hour of day</p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <HourlyDistributionChart data={hourlyDistributionData} />
              {/* Peak Hours Annotation */}
              <div className="text-center mt-2">
                <span className="text-sm font-medium text-gray-700">Peak: 12-14h</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Time by Topic */}
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold text-gray-700">Response Time by Conversation Topic</h3>
          <p className="text-sm text-gray-500">Average response time (seconds)</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ResponseTimeByTopicChart data={responseTimeByTopicData.slice(0, 3)} />
            </div>
            <div>
              <ResponseTimeByTopicChart data={responseTimeByTopicData.slice(3)} />
            </div>
          </div>

          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Avg. Response Time</TableHead>
                <TableHead>Total Conversations</TableHead>
                <TableHead>Resolution Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responseTimeByTopicData.map((item, index) => (
                <TableRow key={`table-topic-${index}`}>
                  <TableCell className="font-medium">{item.topic}</TableCell>
                  <TableCell>{item.time}s</TableCell>
                  <TableCell>{Math.floor(1000 + Math.random() * 2000)}</TableCell>
                  <TableCell>{Math.floor(75 + Math.random() * 20)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversationsAnalytics;
