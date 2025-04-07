
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import ConversationsList from '@/components/conversations/ConversationsList';
import ConversationsFilters from '@/components/conversations/ConversationsFilters';

type TabOption = 'all' | 'active' | 'escalated' | 'resolved' | 'saved';

const Conversations = ({ initialTab = "all" }: { initialTab?: TabOption }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">Conversations</h1>
          </div>
          
          <ConversationsFilters />
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            <TabsList className="mb-4 bg-slate-100 p-1 w-full justify-start">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">All Conversations</TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Active</TabsTrigger>
              <TabsTrigger value="escalated" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Escalated</TabsTrigger>
              <TabsTrigger value="resolved" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Resolved</TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ConversationsList status="all" />
            </TabsContent>
            <TabsContent value="active">
              <ConversationsList status="active" />
            </TabsContent>
            <TabsContent value="escalated">
              <ConversationsList status="escalated" />
            </TabsContent>
            <TabsContent value="resolved">
              <ConversationsList status="resolved" />
            </TabsContent>
            <TabsContent value="saved">
              <ConversationsList status="saved" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Conversations;
