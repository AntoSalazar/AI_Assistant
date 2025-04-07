
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import AnalyticsOverview from '@/components/analytics/AnalyticsOverview';
import ConversationsAnalytics from '@/components/analytics/ConversationsAnalytics';
import UserIntentsAnalytics from '@/components/analytics/UserIntentsAnalytics';
import KnowledgeBaseAnalytics from '@/components/analytics/KnowledgeBaseAnalytics';
import PerformanceAnalytics from '@/components/analytics/PerformanceAnalytics';
import AnalyticsFilters from '@/components/analytics/AnalyticsFilters';

type TabOption = 'overview' | 'conversations' | 'user-intents' | 'knowledge-base' | 'performance';

const Analytics = ({ initialTab = "overview" }: { initialTab?: TabOption }) => {
  const [activeTab, setActiveTab] = useState<TabOption>(initialTab as TabOption);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Listen for sidebar state changes
  React.useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Check if sidebar has collapsed class
          const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
          setSidebarOpen(isNowOpen);
        }
      }
    });

    observer.observe(sidebarElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <Sidebar />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1400px] mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
          </div>
          
          <AnalyticsFilters />
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            <TabsList className="mb-4 bg-slate-100 p-1 w-full justify-start">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Overview</TabsTrigger>
              <TabsTrigger value="conversations" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Conversations</TabsTrigger>
              <TabsTrigger value="user-intents" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">User Intents</TabsTrigger>
              <TabsTrigger value="knowledge-base" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Knowledge Base</TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <AnalyticsOverview />
            </TabsContent>
            <TabsContent value="conversations">
              <ConversationsAnalytics />
            </TabsContent>
            <TabsContent value="user-intents">
              <UserIntentsAnalytics />
            </TabsContent>
            <TabsContent value="knowledge-base">
              <KnowledgeBaseAnalytics />
            </TabsContent>
            <TabsContent value="performance">
              <PerformanceAnalytics />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
