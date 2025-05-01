import React, { useState, useEffect } from 'react'; // Added useEffect
import { useTranslation } from 'react-i18next'; // Import the hook
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import ConversationsList from '@/components/conversations/ConversationsList';
import ConversationsFilters from '@/components/conversations/ConversationsFilters';

// TabOption type remains the same
type TabOption = 'all' | 'active' | 'escalated' | 'resolved' | 'saved';

const Conversations = ({ initialTab = "all" }: { initialTab?: TabOption }) => {
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
            {/* Use translation key */}
            <h1 className="text-2xl font-bold text-gray-800">{t('conversationsTitle', 'Conversations')}</h1> {/* STYLE UNCHANGED, Text Translated */}
          </div>

          <ConversationsFilters /> {/* Assumes translation handled internally */}

          {/* Tabs component: value and onValueChange logic unchanged */}
          {/* Styles unchanged */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
             {/* Styles unchanged */}
            <TabsList className="mb-4 bg-slate-100 p-1 w-full justify-start">
              {/* Use translation keys for Trigger text, keep 'value' prop */}
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('allConversations', 'All Conversations')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('activeConversations', 'Active')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="escalated" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('escalatedConversations', 'Escalated')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="resolved" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('resolvedConversations', 'Resolved')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="saved" className="data-[state=active]:bg-white data-[state=active]:text-whatsapp-primary px-6">{t('savedConversations', 'Saved')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
            </TabsList>

            {/* TabsContent components: value props unchanged */}
            {/* These likely need translation handling within ConversationsList */}
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