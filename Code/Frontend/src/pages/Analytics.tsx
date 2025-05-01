import React, { useState, useEffect } from 'react'; // Added useEffect
import { useTranslation } from 'react-i18next'; // Import the hook
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import AnalyticsOverview from '@/components/analytics/AnalyticsOverview';
import ConversationsAnalytics from '@/components/analytics/ConversationsAnalytics';
import UserIntentsAnalytics from '@/components/analytics/UserIntentsAnalytics';
import KnowledgeBaseAnalytics from '@/components/analytics/KnowledgeBaseAnalytics';
import PerformanceAnalytics from '@/components/analytics/PerformanceAnalytics';
import AnalyticsFilters from '@/components/analytics/AnalyticsFilters';

// TabOption type remains the same
type TabOption = 'overview' | 'conversations' | 'user-intents' | 'knowledge-base' | 'performance';

const Analytics = ({ initialTab = "overview" }: { initialTab?: TabOption }) => {
  const { t } = useTranslation(); // Get translation function
  const [activeTab, setActiveTab] = useState<TabOption>(initialTab as TabOption);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Listen for sidebar state changes (logic unchanged)
  useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
          setSidebarOpen(isNowOpen);
        }
      }
    });

    observer.observe(sidebarElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    // Styles unchanged
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader /> {/* Assumes translation handled internally */}
      <Sidebar />       {/* Assumes translation handled internally */}
      {/* Styles unchanged */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        {/* Styles unchanged */}
        <div className="p-6 max-w-[1400px] mx-auto">
           {/* Styles unchanged */}
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            {/* Use translation key for the title */}
            <h1 className="text-2xl font-bold text-gray-800">{t('analyticsTitle', 'Analytics Dashboard')}</h1> {/* STYLE UNCHANGED, Text Translated */}
          </div>

          <AnalyticsFilters /> {/* Assumes translation handled internally */}

          {/* Tabs component: value and onValueChange logic unchanged */}
          {/* Styles unchanged */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            {/* Styles unchanged */}
            <TabsList className="mb-4 bg-slate-100 p-1 w-full justify-start">
              {/* Use translation keys for Trigger text, keep 'value' prop */}
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('overview', 'Overview')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="conversations" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('conversations', 'Conversations')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="user-intents" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('userIntents', 'User Intents')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="knowledge-base" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('knowledgeBase', 'Knowledge Base')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('performance', 'Performance')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
            </TabsList>

            {/* TabsContent components: value props unchanged */}
            <TabsContent value="overview">
              <AnalyticsOverview /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="conversations">
              <ConversationsAnalytics /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="user-intents">
              <UserIntentsAnalytics /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="knowledge-base">
              <KnowledgeBaseAnalytics /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="performance">
              <PerformanceAnalytics /> {/* Assumes translation handled internally */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Analytics;