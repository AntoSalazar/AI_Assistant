import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// --- Mock Data (unchanged) ---
const mockData = [
  { date: 'Jan 1', responseTime: 2.4, accuracy: 86, satisfaction: 82 },
  { date: 'Jan 8', responseTime: 2.2, accuracy: 87, satisfaction: 83 },
  { date: 'Jan 15', responseTime: 2.0, accuracy: 89, satisfaction: 85 },
  { date: 'Jan 22', responseTime: 1.9, accuracy: 91, satisfaction: 88 },
  { date: 'Jan 29', responseTime: 1.7, accuracy: 93, satisfaction: 90 },
  { date: 'Feb 5', responseTime: 1.5, accuracy: 94, satisfaction: 92 },
  { date: 'Feb 12', responseTime: 1.4, accuracy: 95, satisfaction: 94 },
];

// Structure for metric card data for easier mapping (optional but cleaner)
const metricCardData = [
    { id: 'responseTime', titleKey: 'llmMetricsTitleResponseTime', titleFallback: 'Average Response Time', value: '1.4s', changeValue: '12%', changeArrow: '↓', changePositive: true, changePhraseKey: 'llmMetricsPhraseFromLastMonth', changePhraseFallback: 'from last month' },
    { id: 'accuracy', titleKey: 'llmMetricsTitleAccuracy', titleFallback: 'Accuracy Score', value: '95%', changeValue: '2%', changeArrow: '↑', changePositive: true, changePhraseKey: 'llmMetricsPhraseFromLastMonth', changePhraseFallback: 'from last month' },
    { id: 'satisfaction', titleKey: 'llmMetricsTitleSatisfaction', titleFallback: 'User Satisfaction', value: '94%', changeValue: '4%', changeArrow: '↑', changePositive: true, changePhraseKey: 'llmMetricsPhraseFromLastMonth', changePhraseFallback: 'from last month' },
];

// Structure for timeframe select options
const timeframeOptions = [
    { value: '7d', labelKey: 'llmMetricsSelectOpt7d', fallback: 'Last 7 days' },
    { value: '1m', labelKey: 'llmMetricsSelectOpt1m', fallback: 'Last month' },
    { value: '3m', labelKey: 'llmMetricsSelectOpt3m', fallback: 'Last 3 months' },
    { value: '1y', labelKey: 'llmMetricsSelectOpt1y', fallback: 'Last year' },
];

// Structure for user intents list
const userIntents = [
    { key: 'llmMetricsIntentProductInfo', fallback: 'Product Information', value: 65 },
    { key: 'llmMetricsIntentOrderStatus', fallback: 'Order Status', value: 42 },
    { key: 'llmMetricsIntentTechSupport', fallback: 'Technical Support', value: 28 },
    { key: 'llmMetricsIntentComplaint', fallback: 'Complaint Handling', value: 15 },
];

// Structure for error categories list
const errorCategories = [
    { key: 'llmMetricsErrorIncorrectInfo', fallback: 'Incorrect Information', value: 38 },
    { key: 'llmMetricsErrorMisunderstoodIntent', fallback: 'Misunderstood Intent', value: 26 },
    { key: 'llmMetricsErrorMissingContext', fallback: 'Missing Context', value: 20 },
    { key: 'llmMetricsErrorHallucinations', fallback: 'Hallucinations', value: 16 },
];


const LLMPerformanceMetrics = () => {
  const { t } = useTranslation(); // Initialize hook

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {metricCardData.map(metric => {
             const translatedPhrase = t(metric.changePhraseKey, metric.changePhraseFallback);
             // Construct change description using translation key and interpolation
             const translatedChangeDesc = t('llmMetricsChangeDesc', '{{arrow}} {{value}} {{phrase}}', {
                 arrow: metric.changeArrow,
                 value: metric.changeValue,
                 phrase: translatedPhrase
             });
             return (
                <Card key={metric.id}>
                  <CardHeader className="pb-2">
                    {/* Title - Translated */}
                    <CardTitle className="text-base font-medium text-gray-500">
                      {t(metric.titleKey, metric.titleFallback)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Value - Data - Not Translated */}
                    <div className="text-3xl font-bold">{metric.value}</div>
                     {/* Change Description - Translated with Interpolation */}
                    <p className={`text-sm ${metric.changePositive ? 'text-green-600' : 'text-red-600'}`}>
                      {translatedChangeDesc}
                    </p>
                  </CardContent>
                </Card>
             );
         })}
      </div>

      {/* Performance Trends Chart */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
             {/* Card Title - Translated */}
            <CardTitle>{t('llmMetricsTitleTrends', 'Performance Trends')}</CardTitle>
            <Select defaultValue="7d"> {/* Default value uses internal identifier */}
              <SelectTrigger className="w-[130px]">
                 {/* Placeholder - Translated */}
                <SelectValue placeholder={t('llmMetricsSelectPlaceholder', 'Select timeframe')} />
              </SelectTrigger>
              <SelectContent>
                 {/* Options - Display text translated, value unchanged */}
                 {timeframeOptions.map(opt => (
                     <SelectItem key={opt.value} value={opt.value}>
                         {t(opt.labelKey, opt.fallback)}
                     </SelectItem>
                 ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockData} // Data - Not Translated
                margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" /> {/* Data */}
                <YAxis yAxisId="left" /> {/* Config */}
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} /> {/* Config */}
                <Tooltip />
                <Legend />
                 {/* Lines - Legend names ('name' prop) translated */}
                <Line yAxisId="left" type="monotone" dataKey="responseTime" name={t('llmMetricsLegendResponseTime', 'Response Time (s)')} stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="accuracy" name={t('llmMetricsLegendAccuracy', 'Accuracy (%)')} stroke="#82ca9d" />
                <Line yAxisId="right" type="monotone" dataKey="satisfaction" name={t('llmMetricsLegendSatisfaction', 'Satisfaction (%)')} stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Intent and Error Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Most Common User Intents */}
        <Card>
          <CardHeader>
             {/* Card Title - Translated */}
            <CardTitle>{t('llmMetricsTitleIntents', 'Most Common User Intents')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               {/* Intent Labels - Translated */}
               {userIntents.map(intent => (
                 <div key={intent.key} className="flex justify-between items-center">
                    <span>{t(intent.key, intent.fallback)}</span>
                    <div className="flex items-center">
                      <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                        {/* Percentage/Width - Data - Not Translated */}
                        <div className="bg-whatsapp-primary h-2.5 rounded-full" style={{ width: `${intent.value}%` }}></div>
                      </div>
                       {/* Percentage Value - Data - Not Translated */}
                      <span className="text-sm">{intent.value}%</span>
                    </div>
                  </div>
               ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Error Categories */}
        <Card>
          <CardHeader>
             {/* Card Title - Translated */}
            <CardTitle>{t('llmMetricsTitleErrors', 'Top Error Categories')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               {/* Error Labels - Translated */}
               {errorCategories.map(error => (
                  <div key={error.key} className="flex justify-between items-center">
                    <span>{t(error.key, error.fallback)}</span>
                    <div className="flex items-center">
                      <div className="w-40 bg-slate-200 rounded-full h-2.5 mr-2">
                         {/* Percentage/Width - Data - Not Translated */}
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${error.value}%` }}></div>
                      </div>
                       {/* Percentage Value - Data - Not Translated */}
                      <span className="text-sm">{error.value}%</span>
                    </div>
                  </div>
               ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LLMPerformanceMetrics;