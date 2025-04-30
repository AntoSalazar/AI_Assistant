import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Input is imported but not used in the original code
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator'; // Separator is imported but not used
import {
  Calendar, // Calendar is imported but not used
  Download,
  Filter,
  BarChart3 // BarChart3 is imported but not used
} from 'lucide-react';

// --- Types remain unchanged ---
type FrequencyOrPriority = 'High' | 'Medium' | 'Low'; // Internal values

type ContentMetric = {
  title: string; // Mapped to translation key
  value: string; // Data - Not translated
  valueColor: string; // Style - Not translated
};

type UsedContent = {
  name: string; // Data - Not translated
  usagePercentage: number; // Data - Not translated
};

type ContentGap = {
  issue: string; // Data - Not translated
  frequency: FrequencyOrPriority; // Internal value
};

type UpdateRecommendation = {
  content: string; // Data - Not translated
  issue: string; // Data - Not translated
  lastUpdated: string; // Data - Not translated
  priority: FrequencyOrPriority; // Internal value
};

// --- Sample Data remains unchanged ---
const metrics: ContentMetric[] = [
  { title: 'Total Knowledge Items', value: '162', valueColor: 'text-whatsapp-primary' },
  { title: 'Content Usage Rate', value: '76%', valueColor: 'text-whatsapp-primary' },
  { title: 'Avg. Content Age', value: '42 days', valueColor: 'text-whatsapp-primary' },
  { title: 'Content Gaps', value: '12', valueColor: 'text-red-600' },
];
const mostUsedContent: UsedContent[] = [
  { name: 'Return Policy', usagePercentage: 89 },
  { name: 'Wireless Headphones Guide', usagePercentage: 82 },
  { name: 'Shipping Information', usagePercentage: 76 },
  { name: 'Smart Watch Features', usagePercentage: 68 },
  { name: 'Warranty Claims', usagePercentage: 59 },
];
const contentGaps: ContentGap[] = [
  { issue: 'International warranty process', frequency: 'High' },
  { issue: 'Smart Speaker compatibility with third-party apps', frequency: 'High' },
  { issue: 'Premium Smartphone battery replacement', frequency: 'Medium' },
  { issue: 'Wireless Headphones water resistance', frequency: 'Medium' },
];
const updateRecommendations: UpdateRecommendation[] = [
  { content: 'Spring Sale 2025 Promotion Details', issue: 'Outdated pricing information', lastUpdated: '45 days ago', priority: 'High' },
  { content: 'Ultrabook Laptop Specifications', issue: 'New model information missing', lastUpdated: '67 days ago', priority: 'High' },
];

// --- Helper function for badge color (unchanged) ---
const getFrequencyBadgeColor = (level: FrequencyOrPriority) => {
    switch(level) {
      case 'High': return 'bg-red-100 text-red-600 hover:bg-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-600 hover:bg-amber-200';
      case 'Low': return 'bg-green-100 text-green-600 hover:bg-green-200';
      default: return 'bg-slate-100 text-slate-600 hover:bg-slate-200';
    }
};

// --- Helper functions for mapping data values to translation keys ---
const getMetricTitleKey = (title: string): string => {
    const keyMap: { [key: string]: string } = {
        'Total Knowledge Items': 'contentInsightsMetricTitleTotalItems',
        'Content Usage Rate': 'contentInsightsMetricTitleUsageRate',
        'Avg. Content Age': 'contentInsightsMetricTitleAvgAge',
        'Content Gaps': 'contentInsightsMetricTitleGaps',
    };
    return keyMap[title] || title;
};

const getLevelTranslationKey = (level: FrequencyOrPriority): string => {
    const keyMap: Record<FrequencyOrPriority, string> = {
        High: 'levelHigh',
        Medium: 'levelMedium',
        Low: 'levelLow',
    };
    return keyMap[level] || level;
};


const ContentInsights = () => {
  const { t } = useTranslation(); // Initialize hook
  const [dateRange, setDateRange] = useState('last-30');
  const [contentType, setContentType] = useState('all');

  // Filter options structure for easier mapping
  const dateRangeOptions = [
      { value: 'last-7', labelKey: 'contentInsightsFilterDateRangeOpt7', fallback: 'Last 7 Days' },
      { value: 'last-30', labelKey: 'contentInsightsFilterDateRangeOpt30', fallback: 'Last 30 Days' },
      { value: 'last-90', labelKey: 'contentInsightsFilterDateRangeOpt90', fallback: 'Last 90 Days' },
      { value: 'custom', labelKey: 'contentInsightsFilterDateRangeOptCustom', fallback: 'Custom Range' },
  ];
  const contentTypeOptions = [
      { value: 'all', labelKey: 'contentInsightsFilterContentTypeOptAll', fallback: 'All Content' },
      { value: 'faqs', labelKey: 'contentInsightsFilterContentTypeOptFaqs', fallback: 'FAQs' },
      { value: 'products', labelKey: 'contentInsightsFilterContentTypeOptProducts', fallback: 'Product Information' },
      { value: 'policies', labelKey: 'contentInsightsFilterContentTypeOptPolicies', fallback: 'Policies' },
  ];

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      {/* Filter Controls */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              {/* Date Range Filter */}
              <div className="w-full sm:w-auto space-y-1.5">
                 {/* Label - Translated */}
                <label htmlFor="date-range" className="text-sm font-medium">
                    {t('contentInsightsFilterDateRangeLabel', 'Date Range')}
                </label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger id="date-range" className="w-full sm:w-[200px]">
                     {/* Placeholder - Translated */}
                    <SelectValue placeholder={t('contentInsightsFilterDateRangePlaceholder', 'Select period')} />
                  </SelectTrigger>
                  <SelectContent>
                     {/* Options - Display text translated, value unchanged */}
                    {dateRangeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {t(opt.labelKey, opt.fallback)}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Content Type Filter */}
              <div className="w-full sm:w-auto space-y-1.5">
                {/* Label - Translated */}
                <label htmlFor="content-type" className="text-sm font-medium">
                    {t('contentInsightsFilterContentTypeLabel', 'Content Type')}
                </label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger id="content-type" className="w-full sm:w-[200px]">
                    {/* Placeholder - Translated */}
                    <SelectValue placeholder={t('contentInsightsFilterContentTypePlaceholder', 'Select content type')} />
                  </SelectTrigger>
                  <SelectContent>
                     {/* Options - Display text translated, value unchanged */}
                     {contentTypeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {t(opt.labelKey, opt.fallback)}
                        </SelectItem>
                     ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              {/* Apply Button - Translated */}
              <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 flex-grow sm:flex-grow-0">
                <Filter className="mr-2 h-4 w-4" />
                {t('contentInsightsApplyButton', 'Apply')}
              </Button>
               {/* Export Button - Translated */}
              <Button variant="secondary" className="flex-grow sm:flex-grow-0">
                <Download className="mr-2 h-4 w-4" />
                {t('contentInsightsExportButton', 'Export Report')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4 sm:p-6">
               {/* Metric Title - Mapped and Translated */}
              <h3 className="font-medium text-sm sm:text-base">
                  {t(getMetricTitleKey(metric.title), metric.title)}
              </h3>
               {/* Metric Value - Data - Not Translated */}
              <p className={`text-2xl sm:text-3xl font-bold mt-2 ${metric.valueColor}`}>
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Most Used Content and Content Gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Used Content */}
        <Card>
          <CardHeader className="pb-2">
             {/* Section Title - Translated */}
            <h2 className="text-lg font-semibold">
                {t('contentInsightsMostUsedTitle', 'Most Used Content')}
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mostUsedContent.map((content, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                     {/* Content Name - Data - Not Translated */}
                    <span className="text-sm font-medium">{content.name}</span>
                     {/* Usage Percentage - Data - Not Translated */}
                    <span className="text-sm font-medium">{content.usagePercentage}%</span>
                  </div>
                  {/* Progress bar styling unchanged */}
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-whatsapp-primary"
                      style={{ width: `${content.usagePercentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Gaps */}
        <Card>
          <CardHeader className="pb-2">
             {/* Section Title - Translated */}
            <h2 className="text-lg font-semibold">
                {t('contentInsightsGapsTitle', 'Content Gaps')}
            </h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                   {/* Table Headers - Translated */}
                  <TableHead>{t('contentInsightsGapsHeaderIssue', 'Missing Information')}</TableHead>
                  <TableHead className="text-right">{t('contentInsightsGapsHeaderFrequency', 'Frequency')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contentGaps.map((gap, index) => (
                  <TableRow key={index}>
                     {/* Gap Issue - Data - Not Translated */}
                    <TableCell className="font-medium">{gap.issue}</TableCell>
                    <TableCell className="text-right">
                       {/* Frequency Badge - Text translated, style logic unchanged */}
                      <Badge variant="outline" className={getFrequencyBadgeColor(gap.frequency)}>
                         {t(getLevelTranslationKey(gap.frequency), gap.frequency)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Update Recommendations */}
      <Card>
        <CardHeader className="pb-2">
           {/* Section Title - Translated */}
          <h2 className="text-lg font-semibold">
              {t('contentInsightsRecommendationsTitle', 'Content Update Recommendations')}
          </h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                 {/* Table Headers - Translated */}
                <TableHead>{t('contentInsightsRecommendationsHeaderItem', 'Content Item')}</TableHead>
                <TableHead>{t('contentInsightsRecommendationsHeaderIssue', 'Issue')}</TableHead>
                <TableHead>{t('contentInsightsRecommendationsHeaderLastUpdated', 'Last Updated')}</TableHead>
                <TableHead>{t('contentInsightsRecommendationsHeaderPriority', 'Priority')}</TableHead>
                <TableHead className="text-right">{t('contentInsightsRecommendationsHeaderAction', 'Action')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updateRecommendations.map((item, index) => (
                <TableRow key={index}>
                   {/* Content Item, Issue, Last Updated - Data - Not Translated */}
                  <TableCell className="font-medium">{item.content}</TableCell>
                  <TableCell>{item.issue}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                  <TableCell>
                     {/* Priority Badge - Text translated, style logic unchanged */}
                    <Badge variant="outline" className={getFrequencyBadgeColor(item.priority)}>
                       {t(getLevelTranslationKey(item.priority), item.priority)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                     {/* Update Button - Translated */}
                    <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                        {t('contentInsightsUpdateButton', 'Update')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentInsights;