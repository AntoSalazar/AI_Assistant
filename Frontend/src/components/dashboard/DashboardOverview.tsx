
import React from 'react';
import MetricCard from './MetricCard';
import ConversationsChart from './ConversationsChart';
import TopIntentsChart from './TopIntentsChart';
import RecentConversationsTable from './RecentConversationsTable';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      </div>
      
      <div className="dashboard-grid">
        <MetricCard
          title="Total Conversations"
          value="12,345"
          change="+12% from last week"
          isPositive={true}
        />
        <MetricCard
          title="Avg. Response Time"
          value="2.4s"
          change="-0.3s from last week"
          isPositive={true}
        />
        <MetricCard
          title="Resolution Rate"
          value="87%"
          change="+5% from last week"
          isPositive={true}
        />
        <MetricCard
          title="Human Escalations"
          value="13%"
          change="-2% from last week"
          isPositive={true}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ConversationsChart />
        </div>
        <div>
          <TopIntentsChart />
        </div>
      </div>
      
      <div>
        <RecentConversationsTable />
      </div>
    </div>
  );
};

export default DashboardOverview;
