import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import MetricCard from '@/components/dashboard/MetricCard';
import KnowledgeBaseDonutChart from './charts/KnowledgeBaseDonutChart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const AnalyticsOverview = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    // Styles unchanged
    <div className="space-y-6 animate-fade-in">
      {/* Key Metrics */}
       {/* Styles unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          // Use translation keys for props
          title={t('totalConversations', 'Total Conversations')}
          value="14,328"
          // Use interpolation for change text
          change={t('changeFromPreviousPeriod', '+{{value}} from previous period', { value: '18%' })}
          isPositive={true}
        />
        <MetricCard
          title={t('aiResolutionRate', 'AI Resolution Rate')}
          value="87.2%"
          change={t('changeFromPreviousPeriod', '+{{value}} from previous period', { value: '5.4%' })}
          isPositive={true}
        />
        <MetricCard
          title={t('avgResponseTime', 'Avg. Response Time')}
          value="1.8s"
           // Example: Different key if unit matters, or handle logic outside t()
          change={t('changeSecondsFromPreviousPeriod', '{{value}}s from previous period', { value: '-0.4' })}
          isPositive={true} // Assuming lower is better here, adjust if needed
        />
        <MetricCard
          title={t('userSatisfaction', 'User Satisfaction')}
          value="94%"
          change={t('changeFromPreviousPeriod', '+{{value}} from previous period', { value: '2%' })}
          isPositive={true}
        />
      </div>

      {/* Navigation buttons for specific analytics */}
       {/* Styles unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm"> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
            {/* Use translation keys */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{t('conversationAnalyticsTitle', 'Conversation Analytics')}</h3> {/* STYLE UNCHANGED, Text Translated */}
            <p className="text-sm text-gray-500 mb-4">{t('conversationAnalyticsDesc', 'View detailed conversation trends and patterns')}</p> {/* STYLE UNCHANGED, Text Translated */}
            {/* Styles unchanged */}
            <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
               {/* Use translation key */}
              {t('viewConversationDetails', 'View Conversation Details')}
              <ArrowRight size={16} className="ml-2" /> {/* Icon unchanged */}
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm"> {/* Styles unchanged */}
          <CardContent className="p-6"> {/* Styles unchanged */}
             {/* Use translation keys */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{t('userIntentAnalysisTitle', 'User Intent Analysis')}</h3> {/* STYLE UNCHANGED, Text Translated */}
            <p className="text-sm text-gray-500 mb-4">{t('userIntentAnalysisDesc', 'Explore what your users are asking about')}</p> {/* STYLE UNCHANGED, Text Translated */}
             {/* Styles unchanged */}
            <Button variant="outline" className="w-full border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
               {/* Use translation key */}
              {t('viewIntentDetails', 'View Intent Details')}
              <ArrowRight size={16} className="ml-2" /> {/* Icon unchanged */}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Knowledge Base Performance */}
      <Card className="shadow-sm"> {/* Styles unchanged */}
        <CardHeader className="pb-2"> {/* Styles unchanged */}
          {/* Use translation key */}
          <h3 className="text-lg font-semibold text-gray-700">{t('knowledgeBasePerformanceTitle', 'Knowledge Base Performance')}</h3> {/* STYLE UNCHANGED, Text Translated */}
        </CardHeader>
        <CardContent> {/* Styles unchanged */}
           {/* Styles unchanged */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Styles unchanged */}
            <div className="lg:col-span-1">
              <KnowledgeBaseDonutChart /> {/* Assumes internal translations if any */}
            </div>

            {/* Styles unchanged */}
            <div className="lg:col-span-2">
               {/* Styles unchanged */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Styles unchanged */}
                <Card className="bg-green-50 border border-green-100">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <CheckCircle className="text-green-500" size={20} /> {/* Icon unchanged */}
                       {/* Use translation key with interpolation */}
                      <span className="text-xs text-green-600">{t('changeFromPreviousPeriod', '+{{value}} from previous period', { value: '4%' })}</span> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                     {/* Styles unchanged */}
                    <div className="mt-2">
                       {/* Styles unchanged */}
                      <div className="text-2xl font-bold text-green-700">76%</div>
                       {/* Use translation key */}
                      <div className="text-xs text-green-600">{t('contentUtilized', 'Content Utilized')}</div> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                  </CardContent>
                </Card>

                {/* Styles unchanged */}
                <Card className="bg-red-50 border border-red-100">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <AlertTriangle className="text-red-500" size={20} /> {/* Icon unchanged */}
                       {/* Use translation key with interpolation */}
                      <span className="text-xs text-red-600">{t('fewerThanLastPeriod', '{{count}} fewer than last period', { count: 3 })}</span> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                    {/* Styles unchanged */}
                    <div className="mt-2">
                       {/* Styles unchanged */}
                      <div className="text-2xl font-bold text-red-700">12</div>
                       {/* Use translation key */}
                      <div className="text-xs text-red-600">{t('contentGaps', 'Content Gaps')}</div> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                  </CardContent>
                </Card>

                {/* Styles unchanged */}
                <Card className="bg-amber-50 border border-amber-100">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <Clock className="text-amber-500" size={20} /> {/* Icon unchanged */}
                       {/* Use translation key with interpolation */}
                      <span className="text-xs text-amber-600">{t('changeFromPreviousPeriod', '{{value}} from previous period', { value: '-2%' })}</span> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                     {/* Styles unchanged */}
                    <div className="mt-2">
                       {/* Styles unchanged */}
                      <div className="text-2xl font-bold text-amber-700">8%</div>
                       {/* Use translation key */}
                      <div className="text-xs text-amber-600">{t('outdatedContent', 'Outdated Content')}</div> {/* STYLE UNCHANGED, Text Translated */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Styles unchanged */}
              <Card className="mt-4 bg-slate-50 border border-slate-100">
                <CardContent className="p-4"> {/* Styles unchanged */}
                   {/* Use translation key */}
                  <h4 className="font-medium mb-3">{t('recommendedActionsTitle', 'Recommended Actions')}</h4> {/* STYLE UNCHANGED, Text Translated */}
                   {/* Styles unchanged */}
                  <div className="space-y-3">
                     {/* Styles unchanged */}
                    <div className="flex items-center p-2 bg-red-50 rounded border border-red-100">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div> {/* STYLE UNCHANGED */}
                      {/* Styles unchanged */}
                      <div className="flex-1 text-sm">
                        {/* Use translation key with interpolation for topic */}
                        <div className="font-medium">{t('actionAddressGaps', 'Address content gaps in {{topic}}', { topic: 'International Warranty Terms' })}</div> {/* STYLE UNCHANGED, Text Translated */}
                        {/* Use translation key with interpolation for count */}
                        <div className="text-xs text-gray-500">{t('actionUserQueriesNoAnswers', '{{count}} user queries without answers', { count: 247 })}</div> {/* STYLE UNCHANGED, Text Translated */}
                      </div>
                       {/* Styles unchanged */}
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                         {/* Use translation key */}
                        {t('addContent', 'Add Content')}
                      </Button>
                    </div>
                     {/* Styles unchanged */}
                    <div className="flex items-center p-2 bg-amber-50 rounded border border-amber-100">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div> {/* STYLE UNCHANGED */}
                      {/* Styles unchanged */}
                      <div className="flex-1 text-sm">
                        {/* Use translation key with interpolation for topic */}
                        <div className="font-medium">{t('actionUpdateSpecs', 'Update product specifications for {{topic}}', { topic: 'Wireless Headphones' })}</div> {/* STYLE UNCHANGED, Text Translated */}
                        {/* Use translation key with interpolation for count */}
                        <div className="text-xs text-gray-500">{t('actionLastUpdated', 'Last updated {{count}} days ago', { count: 45 })}</div> {/* STYLE UNCHANGED, Text Translated */}
                      </div>
                      {/* Styles unchanged */}
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                         {/* Use translation key */}
                        {t('update', 'Update')}
                      </Button>
                    </div>
                     {/* Styles unchanged */}
                    <div className="flex items-center p-2 bg-green-50 rounded border border-green-100">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div> {/* STYLE UNCHANGED */}
                      {/* Styles unchanged */}
                      <div className="flex-1 text-sm">
                         {/* Use translation key with interpolation for topic */}
                        <div className="font-medium">{t('actionAddDetails', 'Add more details to FAQs for {{topic}}', { topic: 'Premium Smartphone' })}</div> {/* STYLE UNCHANGED, Text Translated */}
                         {/* Use translation key */}
                        <div className="text-xs text-gray-500">{t('actionNeedsEnhancement', 'High usage content needs enhancement')}</div> {/* STYLE UNCHANGED, Text Translated */}
                      </div>
                       {/* Styles unchanged */}
                      <Button size="sm" variant="outline" className="ml-2 h-8 text-xs">
                         {/* Use translation key */}
                        {t('enhance', 'Enhance')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsOverview;