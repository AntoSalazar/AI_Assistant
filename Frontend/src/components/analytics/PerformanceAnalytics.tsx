import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts'; // Removed unused Cell import

// Sample data (structure unchanged, added keys for translatable intents)
const responseTimeData = [
  { day: '1', GPT4: 2.1, LLaMA2: 2.8 }, { day: '5', GPT4: 2.0, LLaMA2: 2.6 },
  { day: '10', GPT4: 1.9, LLaMA2: 2.5 }, { day: '15', GPT4: 1.7, LLaMA2: 2.3 },
  { day: '20', GPT4: 1.8, LLaMA2: 2.2 }, { day: '25', GPT4: 1.6, LLaMA2: 2.1 },
  { day: '30', GPT4: 1.5, LLaMA2: 2.0 }
];

const originalFailingIntentsData = [
  { key: 'intentTechnicalSupport', errorRate: 7.8 }, // Added key
  { key: 'intentWarrantyClaims', errorRate: 6.5 },   // Added key
  { key: 'intentDeviceCompatibility', errorRate: 5.4 } // Added key
];

const resourceUsageData = [
  { day: '1', tokens: 450 }, { day: '5', tokens: 470 }, { day: '10', tokens: 460 },
  { day: '15', tokens: 490 }, { day: '20', tokens: 510 }, { day: '25', tokens: 500 },
  { day: '30', tokens: 520 }
];

// --- Chart Components (Internal translations would be needed here) ---

interface ResponseTimeTrendChartProps {
  data: { day: string; GPT4: number; LLaMA2: number; }[];
}
// TODO: Refactor ResponseTimeTrendChart internally with useTranslation for axes, tooltip, legend
const ResponseTimeTrendChart: React.FC<ResponseTimeTrendChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="GPT4" stroke="#34B7F1" activeDot={{ r: 8 }} name="GPT-4" /> {/* Example: Legend name */}
      <Line type="monotone" dataKey="LLaMA2" stroke="#8E44AD" activeDot={{ r: 8 }} name="LLaMA 2" /> {/* Example: Legend name */}
    </LineChart>
  </ResponsiveContainer>
);

interface FailingIntentsChartProps {
  data: { intent: string; errorRate: number; }[]; // Expects translated 'intent'
}
// TODO: Refactor FailingIntentsChart internally with useTranslation for axes, tooltip
const FailingIntentsChart: React.FC<FailingIntentsChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={150}>
    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="intent" width={80} /> {/* Display translated intent */}
      <Tooltip />
      <Bar dataKey="errorRate" fill="#E74C3C" name="Error Rate" /> {/* Example: Bar name */}
    </BarChart>
  </ResponsiveContainer>
);

interface ResourceUsageChartProps {
  data: { day: string; tokens: number; }[];
}
// TODO: Refactor ResourceUsageChart internally with useTranslation for axes, tooltip, legend
const ResourceUsageChart: React.FC<ResourceUsageChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={120}>
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="tokens" stroke="#25D366" strokeWidth={2} dot={{ r: 3 }} name="Tokens" /> {/* Example: Line name */}
    </LineChart>
  </ResponsiveContainer>
);

// --- Main Component ---

const PerformanceAnalytics = () => {
  const { t } = useTranslation(); // Get translation function

  // Translate dynamic intent data
  const translatedFailingIntentsData = originalFailingIntentsData.map(item => ({
    ...item,
    intent: t(item.key, item.key.replace('intent', '')) // Translate intent using key
  }));

  return (
    // Styles unchanged
    <div className="space-y-6">
      {/* Key Metrics */}
       {/* Styles unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
            <div className="text-2xl font-bold text-whatsapp-primary">1.8s</div> {/* Style unchanged */}
            {/* Use translation keys */}
            <p className="text-base font-medium mt-1">{t('avgResponseTime', 'Avg. Response Time')}</p> {/* Style unchanged, Text Translated */}
            <p className="text-sm text-muted-foreground mt-1">{t('changeSecondsFromPreviousPeriod', '{{value}}s from previous period', { value: '-0.4' })}</p> {/* Style unchanged, Text Translated */}
          </CardContent>
        </Card>

        <Card> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
            <div className="text-2xl font-bold text-whatsapp-primary">246</div> {/* Style unchanged */}
            {/* Use translation keys */}
            <p className="text-base font-medium mt-1">{t('avgTokenUsage', 'Avg. Token Usage')}</p> {/* Style unchanged, Text Translated */}
            <p className="text-sm text-muted-foreground mt-1">{t('perResponse', 'per response')}</p> {/* Style unchanged, Text Translated */}
          </CardContent>
        </Card>

        <Card> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
            <div className="text-2xl font-bold text-whatsapp-primary">87.2%</div> {/* Style unchanged */}
            {/* Use translation keys */}
            <p className="text-base font-medium mt-1">{t('resolutionRate', 'Resolution Rate')}</p> {/* Style unchanged, Text Translated */}
            <p className="text-sm text-muted-foreground mt-1">{t('changePercentFromPreviousPeriod', '{{value}} from previous period', { value: '+5.4%' })}</p> {/* Style unchanged, Text Translated */}
          </CardContent>
        </Card>

        <Card> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
            <div className="text-2xl font-bold text-whatsapp-primary">2.3%</div> {/* Style unchanged */}
            {/* Use translation keys */}
            <p className="text-base font-medium mt-1">{t('errorRate', 'Error Rate')}</p> {/* Style unchanged, Text Translated */}
            <p className="text-sm text-muted-foreground mt-1">{t('changePercentFromPreviousPeriod', '{{value}} from previous period', { value: '-1.1%' })}</p> {/* Style unchanged, Text Translated */}
          </CardContent>
        </Card>
      </div>

      {/* Styles unchanged */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Response Time Trend Chart */}
        <Card className="lg:col-span-3"> {/* Styles unchanged */}
          <CardHeader> {/* Styles unchanged */}
             {/* Use translation key */}
            <CardTitle>{t('responseTimeTrendTitle', 'Response Time Trend')}</CardTitle> {/* Style unchanged, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
            <ResponseTimeTrendChart data={responseTimeData} /> {/* Assumes internal translation */}
          </CardContent>
        </Card>

        {/* Model Comparison */}
        <Card className="lg:col-span-1"> {/* Styles unchanged */}
          <CardHeader> {/* Styles unchanged */}
             {/* Use translation key */}
            <CardTitle>{t('modelComparisonTitle', 'Model Comparison')}</CardTitle> {/* Style unchanged, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
            {/* Styles unchanged */}
            <div className="overflow-x-auto">
              <table className="min-w-full"> {/* Styles unchanged */}
                <thead> {/* Styles unchanged */}
                  <tr> {/* Styles unchanged */}
                     {/* Use translation key */}
                    <th className="text-left py-2">{t('metric', 'Metric')}</th> {/* Style unchanged, Text Translated */}
                     {/* Model names kept */}
                    <th className="text-center py-2 text-blue-500">GPT-4</th> {/* Style unchanged */}
                    <th className="text-center py-2 text-purple-600">LLaMA 2</th> {/* Style unchanged */}
                  </tr>
                </thead>
                <tbody> {/* Styles unchanged */}
                   {/* Use translation keys for metric names */}
                  <tr className="border-t"> {/* Styles unchanged */}
                    <td className="py-2">{t('responseTime', 'Response Time')}</td> {/* Style unchanged, Text Translated */}
                    <td className="text-center">1.8s</td> {/* Style unchanged */}
                    <td className="text-center">2.5s</td> {/* Style unchanged */}
                  </tr>
                  <tr className="border-t"> {/* Styles unchanged */}
                    <td className="py-2">{t('tokenUsage', 'Token Usage')}</td> {/* Style unchanged, Text Translated */}
                    <td className="text-center">246</td> {/* Style unchanged */}
                    <td className="text-center">224</td> {/* Style unchanged */}
                  </tr>
                  <tr className="border-t"> {/* Styles unchanged */}
                    <td className="py-2">{t('resolutionRate', 'Resolution Rate')}</td> {/* Style unchanged, Text Translated */}
                    <td className="text-center">87%</td> {/* Style unchanged */}
                    <td className="text-center">79%</td> {/* Style unchanged */}
                  </tr>
                  <tr className="border-t"> {/* Styles unchanged */}
                    <td className="py-2">{t('errorRate', 'Error Rate')}</td> {/* Style unchanged, Text Translated */}
                    <td className="text-center">2.3%</td> {/* Style unchanged */}
                    <td className="text-center">3.8%</td> {/* Style unchanged */}
                  </tr>
                  <tr className="border-t"> {/* Styles unchanged */}
                    <td className="py-2">{t('avgConfidence', 'Avg. Confidence')}</td> {/* Style unchanged, Text Translated */}
                    <td className="text-center">94%</td> {/* Style unchanged */}
                    <td className="text-center">89%</td> {/* Style unchanged */}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

       {/* Styles unchanged */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failing Intents */}
        <Card> {/* Styles unchanged */}
          <CardHeader> {/* Styles unchanged */}
             {/* Use translation key */}
            <CardTitle>{t('topFailingIntentsTitle', 'Top Failing Intents')}</CardTitle> {/* Style unchanged, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
             {/* Pass translated data */}
            <FailingIntentsChart data={translatedFailingIntentsData} /> {/* Assumes internal translation */}
          </CardContent>
        </Card>

        {/* Resource Usage */}
        <Card> {/* Styles unchanged */}
          <CardHeader> {/* Styles unchanged */}
            {/* Use translation key */}
            <CardTitle>{t('resourceUsageTitle', 'Resource Usage')}</CardTitle> {/* Style unchanged, Text Translated */}
             {/* Use translation key */}
            <div className="text-sm text-muted-foreground">{t('dailyTokenTrendDesc', 'Daily token consumption trend')}</div> {/* Style unchanged, Text Translated */}
          </CardHeader>
          <CardContent> {/* Styles unchanged */}
            <ResourceUsageChart data={resourceUsageData} /> {/* Assumes internal translation */}
             {/* Styles unchanged */}
            <div className="flex justify-between mt-4">
              {/* Use translation keys with interpolation */}
              <div className="text-sm text-muted-foreground">{t('averageTokensDaily', 'Avg: {{value}} tokens/day', { value: '486K' })}</div> {/* Style unchanged, Text Translated */}
              <div className="text-sm text-muted-foreground">{t('totalTokens', 'Total: {{value}} tokens', { value: '14.6M' })}</div> {/* Style unchanged, Text Translated */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;