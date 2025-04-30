import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import MetricCard from './MetricCard'; // Assuming this component handles its own internal i18n for title/change props
import ConversationsChart from './ConversationsChart'; // Assuming this component handles its own internal i18n
import TopIntentsChart from './TopIntentsChart'; // Assuming this component handles its own internal i18n
import RecentConversationsTable from './RecentConversationsTable'; // Assuming this component handles its own internal i18n

const DashboardOverview = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="space-y-6">
      <div className="mb-4">
         {/* Main Heading - UI Text - Translated */}
        <h1 className="text-2xl font-bold text-gray-800">
          {t('dashboardOverviewTitle', 'Dashboard Overview')}
        </h1>
      </div>

      {/* Metric Cards Section */}
      {/* Props passed to MetricCard are treated as data/config here. */}
      {/* The MetricCard component itself should handle translating its 'title' and formatting/translating the 'change' string if necessary. */}
      <div className="dashboard-grid">
        <MetricCard
          title="Total Conversations" // Prop passed - Not translated here
          value="12,345"            // Prop passed - Not translated here
          change="+12% from last week" // Prop passed - Not translated here
          isPositive={true}
        />
        <MetricCard
          title="Avg. Response Time" // Prop passed - Not translated here
          value="2.4s"             // Prop passed - Not translated here
          change="-0.3s from last week" // Prop passed - Not translated here
          isPositive={true} // Logic might need adjusting based on decrease being positive
        />
        <MetricCard
          title="Resolution Rate"  // Prop passed - Not translated here
          value="87%"            // Prop passed - Not translated here
          change="+5% from last week" // Prop passed - Not translated here
          isPositive={true}
        />
        <MetricCard
          title="Human Escalations" // Prop passed - Not translated here
          value="13%"             // Prop passed - Not translated here
          change="-2% from last week" // Prop passed - Not translated here
          isPositive={true} // Logic might need adjusting based on decrease being positive
        />
      </div>

       {/* Charts Section - Child components handle their own i18n */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ConversationsChart />
        </div>
        <div>
          <TopIntentsChart />
        </div>
      </div>

       {/* Recent Conversations Table Section - Child component handles its own i18n */}
      <div>
        <RecentConversationsTable />
      </div>
    </div>
  );
};

export default DashboardOverview;