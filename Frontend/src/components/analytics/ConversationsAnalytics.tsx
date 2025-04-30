import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import MetricCard from '@/components/dashboard/MetricCard';
import KnowledgeBaseDonutChart from './charts/KnowledgeBaseDonutChart'; // Assuming this was meant to be StatusDistributionChart based on usage? Corrected below.
import StatusDistributionChart from './charts/StatusDistributionChart';
import HourlyDistributionChart from './charts/HourlyDistributionChart';
import ResponseTimeByTopicChart from './charts/ResponseTimeByTopicChart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Original data structures (keep English keys/values if they represent internal states/categories)
const originalStatusDistributionData = [
  { key: 'statusResolvedAI', value: 72.4, color: '#28a745' }, // Added key for translation
  { key: 'statusResolvedHuman', value: 12.8, color: '#17a2b8' },
  { key: 'statusAbandoned', value: 6.3, color: '#dc3545' },
  { key: 'statusActive', value: 5.2, color: '#ffc107' },
  { key: 'statusScheduledFollowUp', value: 3.3, color: '#6c757d' },
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
})); // Data structure unchanged

const originalResponseTimeByTopicData = [
  { key: 'topicProductInquiry', time: 1.8 }, // Added key for translation
  { key: 'topicOrderStatus', time: 1.5 },
  { key: 'topicSupportQuery', time: 2.8 },
  { key: 'topicWarrantyClaim', time: 3.6 },
  { key: 'topicReturnRequest', time: 2.4 },
  { key: 'topicTechnicalIssue', time: 4.0 },
]; // Time values unchanged

const ConversationsAnalytics = () => {
  const { t } = useTranslation(); // Get translation function

  // Translate dynamic data names/topics using the t function
  const translatedStatusDistributionData = originalStatusDistributionData.map(item => ({
    ...item,
    name: t(item.key, item.key.replace('status', '')) // Translate name using key, provide fallback
  }));

  const translatedResponseTimeByTopicData = originalResponseTimeByTopicData.map(item => ({
    ...item,
    topic: t(item.key, item.key.replace('topic', '')) // Translate topic using key, provide fallback
  }));


  return (
    // Styles unchanged
    <div className="space-y-6 animate-fade-in">
      {/* Key Metrics */}
       {/* Styles unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          // Use translation keys, reuse if available
          title={t('totalConversations', 'Total Conversations')}
          value="14,328"
          change={t('changeFromPreviousPeriod', '+{{value}} from previous period', { value: '18%' })}
          isPositive={true}
        />
        <MetricCard
          title={t('averageMessages', 'Average Messages')}
          value="8.3"
          change={t('perConversation', 'per conversation')}
          isPositive={undefined}
        />
        <MetricCard
          title={t('avgDuration', 'Avg. Duration')}
          value="4.2m"
          change={t('perConversation', 'per conversation')}
          isPositive={undefined}
        />
        <MetricCard
          title={t('humanEscalations', 'Human Escalations')}
          value="12.8%"
          change={t('changePercentFromPreviousPeriod', '{{value}} from previous period', { value: '-3.2%' })} // Potentially different key for % change
          isPositive={true} // Assuming lower is better here
        />
      </div>

      {/* Status Distribution & Hourly Distribution */}
       {/* Styles unchanged */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm"> {/* Styles unchanged */}
          <CardHeader className="pb-2"> {/* Styles unchanged */}
            {/* Use translation keys */}
            <h3 className="text-lg font-semibold text-gray-700">{t('conversationStatusDistributionTitle', 'Conversation Status Distribution')}</h3> {/* STYLE UNCHANGED, Text Translated */}
            <p className="text-sm text-gray-500">{t('last30Days', 'Last 30 days')}</p> {/* STYLE UNCHANGED, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
             {/* Pass translated data to chart */}
            <StatusDistributionChart data={translatedStatusDistributionData} /> {/* Assumes chart uses 'name' field */}
          </CardContent>
        </Card>

        <Card className="shadow-sm"> {/* Styles unchanged */}
          <CardHeader className="pb-2"> {/* Styles unchanged */}
             {/* Use translation keys */}
            <h3 className="text-lg font-semibold text-gray-700">{t('hourlyConversationDistributionTitle', 'Hourly Conversation Distribution')}</h3> {/* STYLE UNCHANGED, Text Translated */}
            <p className="text-sm text-gray-500">{t('averageByHourOfDay', 'Average by hour of day')}</p> {/* STYLE UNCHANGED, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
             {/* Styles unchanged */}
            <div className="h-[300px]">
              <HourlyDistributionChart data={hourlyDistributionData} /> {/* Assumes chart handles internal labels */}
              {/* Peak Hours Annotation */}
              {/* Styles unchanged */}
              <div className="text-center mt-2">
                 {/* Use translation key with interpolation */}
                <span className="text-sm font-medium text-gray-700">{t('peakHours', 'Peak: {{hours}}h', { hours: '12-14' })}</span> {/* STYLE UNCHANGED, Text Translated */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Time by Topic */}
      <Card className="shadow-sm"> {/* Styles unchanged */}
        <CardHeader className="pb-2"> {/* Styles unchanged */}
           {/* Use translation keys */}
          <h3 className="text-lg font-semibold text-gray-700">{t('responseTimeByTopicTitle', 'Response Time by Conversation Topic')}</h3> {/* STYLE UNCHANGED, Text Translated */}
          <p className="text-sm text-gray-500">{t('avgResponseTimeSeconds', 'Average response time (seconds)')}</p> {/* STYLE UNCHANGED, Text Translated */}
        </CardHeader>
        <CardContent> {/* Styles unchanged */}
           {/* Styles unchanged */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Pass translated data to charts */}
            <div> {/* Styles unchanged */}
              <ResponseTimeByTopicChart data={translatedResponseTimeByTopicData.slice(0, 3)} /> {/* Assumes chart uses 'topic' field */}
            </div>
            <div> {/* Styles unchanged */}
              <ResponseTimeByTopicChart data={translatedResponseTimeByTopicData.slice(3)} /> {/* Assumes chart uses 'topic' field */}
            </div>
          </div>

          {/* Styles unchanged */}
          <Table className="mt-6">
            <TableHeader> {/* Styles unchanged */}
              <TableRow> {/* Styles unchanged */}
                 {/* Use translation keys */}
                <TableHead>{t('topic', 'Topic')}</TableHead> {/* STYLE UNCHANGED, Text Translated */}
                <TableHead>{t('avgResponseTime', 'Avg. Response Time')}</TableHead> {/* STYLE UNCHANGED, Text Translated */}
                <TableHead>{t('totalConversations', 'Total Conversations')}</TableHead> {/* STYLE UNCHANGED, Text Translated */}
                <TableHead>{t('resolutionRate', 'Resolution Rate')}</TableHead> {/* STYLE UNCHANGED, Text Translated */}
              </TableRow>
            </TableHeader>
            <TableBody> {/* Styles unchanged */}
               {/* Render table using translated topic */}
              {translatedResponseTimeByTopicData.map((item, index) => (
                <TableRow key={`table-topic-${index}`}> {/* Styles unchanged */}
                  <TableCell className="font-medium">{item.topic}</TableCell> {/* Display translated topic */} {/* STYLE UNCHANGED */}
                  <TableCell>{item.time}s</TableCell> {/* STYLE UNCHANGED */}
                  <TableCell>{Math.floor(1000 + Math.random() * 2000)}</TableCell> {/* STYLE UNCHANGED */}
                  <TableCell>{Math.floor(75 + Math.random() * 20)}%</TableCell> {/* STYLE UNCHANGED */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversationsAnalytics