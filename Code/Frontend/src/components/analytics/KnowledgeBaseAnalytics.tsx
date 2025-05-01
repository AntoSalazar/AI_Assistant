import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, AlertTriangle, CheckCircle, Clock, Search } from 'lucide-react';
import KnowledgeBaseDonutChart from './charts/KnowledgeBaseDonutChart'; // Ensure this path is correct

const KnowledgeBaseAnalytics = () => {
  const { t } = useTranslation(); // Get translation function

  // Example dynamic data (in a real app, this would come from API/state)
  // We are not translating these specific topic names here.
  const topPerformingContent = [
    { name: "Product specifications", resolution: 98 },
    { name: "Shipping policies", resolution: 95 },
    { name: "Return procedures", resolution: 92 },
    { name: "FAQ - Premium products", resolution: 90 },
  ];
  const contentGapAreas = [
    { name: "International warranty terms" },
    { name: "New product compatibility guides" },
    { name: "Advanced troubleshooting steps" },
    { name: "Extended care programs" },
  ];
  const mostSearched = { name: "Wireless Headphones", count: 426 };


  return (
    // Styles unchanged
    <div className="space-y-6">
      <Card> {/* Styles unchanged */}
        <CardHeader className="pb-2"> {/* Styles unchanged */}
          {/* Use translation key */}
          <h2 className="text-xl font-semibold">{t('knowledgeBaseAnalyticsTitle', 'Knowledge Base Analytics')}</h2> {/* STYLE UNCHANGED, Text Translated */}
        </CardHeader>
        <CardContent> {/* Styles unchanged */}
           {/* Styles unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Styles unchanged */}
            <div className="col-span-1 md:col-span-2">
              {/* Styles unchanged */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                 {/* Styles unchanged */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-2xl font-bold">76%</span> {/* STYLE UNCHANGED */}
                      <CheckCircle className="h-6 w-6 text-green-600" /> {/* Icon unchanged */}
                    </div>
                     {/* Use translation key */}
                    <div className="text-sm font-medium mt-1">{t('contentUtilized', 'Content Utilized')}</div> {/* STYLE UNCHANGED, Text Translated */}
                    {/* Use translation key with interpolation */}
                    <div className="text-xs text-gray-500 mt-1">{t('changePercentFromLastPeriod', '+{{value}} from last period', { value: '4%' })}</div> {/* STYLE UNCHANGED, Text Translated */}
                  </CardContent>
                </Card>

                 {/* Styles unchanged */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 text-2xl font-bold">12</span> {/* STYLE UNCHANGED */}
                      <AlertTriangle className="h-6 w-6 text-red-600" /> {/* Icon unchanged */}
                    </div>
                    {/* Use translation key */}
                    <div className="text-sm font-medium mt-1">{t('contentGaps', 'Content Gaps')}</div> {/* STYLE UNCHANGED, Text Translated */}
                     {/* Use translation key with interpolation */}
                    <div className="text-xs text-gray-500 mt-1">{t('fewerThanLastPeriod', '{{count}} fewer than last period', { count: 3 })}</div> {/* STYLE UNCHANGED, Text Translated */}
                  </CardContent>
                </Card>

                 {/* Styles unchanged */}
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-4"> {/* Styles unchanged */}
                     {/* Styles unchanged */}
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 text-2xl font-bold">8%</span> {/* STYLE UNCHANGED */}
                      <Clock className="h-6 w-6 text-amber-600" /> {/* Icon unchanged */}
                    </div>
                     {/* Use translation key */}
                    <div className="text-sm font-medium mt-1">{t('outdatedContent', 'Outdated Content')}</div> {/* STYLE UNCHANGED, Text Translated */}
                     {/* Use translation key with interpolation */}
                    <div className="text-xs text-gray-500 mt-1">{t('changePercentFromLastPeriod', '{{value}} from last period', { value: '-2%' })}</div> {/* STYLE UNCHANGED, Text Translated */}
                  </CardContent>
                </Card>
              </div>

              <Card> {/* Styles unchanged */}
                <CardHeader className="pb-2"> {/* Styles unchanged */}
                  {/* Use translation key */}
                  <h3 className="text-lg font-medium">{t('knowledgeBaseCoverageTitle', 'Knowledge Base Coverage')}</h3> {/* STYLE UNCHANGED, Text Translated */}
                </CardHeader>
                <CardContent> {/* Styles unchanged */}
                  {/* Styles unchanged */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div> {/* Styles unchanged */}
                      {/* Use translation key */}
                      <h4 className="font-medium mb-2">{t('topPerformingContentTitle', 'Top Performing Content')}</h4> {/* STYLE UNCHANGED, Text Translated */}
                      <ul className="space-y-2"> {/* Styles unchanged */}
                        {topPerformingContent.map((item) => (
                          // Styles unchanged
                          <li key={item.name} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" /> {/* Icon unchanged */}
                            {/* Display dynamic topic name, translate suffix */}
                            {item.name} {t('resolutionPercentage', '({{value}}% resolution)', { value: item.resolution })}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div> {/* Styles unchanged */}
                       {/* Use translation key */}
                      <h4 className="font-medium mb-2">{t('contentGapAreasTitle', 'Content Gap Areas')}</h4> {/* STYLE UNCHANGED, Text Translated */}
                      <ul className="space-y-2"> {/* Styles unchanged */}
                        {contentGapAreas.map((item) => (
                          // Styles unchanged
                          <li key={item.name} className="flex items-center text-sm">
                            <AlertTriangle className="h-4 w-4 text-red-600 mr-2" /> {/* Icon unchanged */}
                             {/* Display dynamic topic name */}
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Styles unchanged */}
            <div className="col-span-1">
              <Card className="h-full"> {/* Styles unchanged */}
                <CardHeader className="pb-2"> {/* Styles unchanged */}
                   {/* Use translation key */}
                  <h3 className="text-lg font-medium">{t('visualSummaryTitle', 'Visual Summary')}</h3> {/* STYLE UNCHANGED, Text Translated */}
                </CardHeader>
                <CardContent> {/* Styles unchanged */}
                  {/* Styles unchanged */}
                  <div className="h-[300px]">
                    <KnowledgeBaseDonutChart /> {/* Assumes translation handled internally */}
                  </div>

                   {/* Styles unchanged */}
                  <div className="mt-4">
                    <Card className="bg-gray-50"> {/* Styles unchanged */}
                      <CardContent className="p-4"> {/* Styles unchanged */}
                         {/* Styles unchanged */}
                        <div className="flex items-center">
                          <Search className="h-5 w-5 text-gray-600 mr-3" /> {/* Icon unchanged */}
                          <div> {/* Styles unchanged */}
                            {/* Use translation key */}
                            <div className="font-medium text-sm">{t('mostSearched', 'Most Searched')}</div> {/* STYLE UNCHANGED, Text Translated */}
                            {/* Display dynamic topic name, translate suffix */}
                            <div className="text-xs text-gray-600 mt-1">{mostSearched.name} {t('searchCount', '({{count}} searches)', { count: mostSearched.count })}</div> {/* STYLE UNCHANGED, Text Translated */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Styles unchanged */}
                  <Button variant="outline" className="w-full mt-4 border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
                    {/* Use translation key */}
                    {t('knowledgeBaseInsightsButton', 'Knowledge Base Insights')} {/* Text Translated */}
                    <ChevronRight className="ml-2 h-4 w-4" /> {/* Icon unchanged */}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KnowledgeBaseAnalytics;