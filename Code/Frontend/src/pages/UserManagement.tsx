import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomerManagement from '@/components/user-management/CustomerManagement';
import SupportAgents from '@/components/user-management/SupportAgents';
import AdminUsers from '@/components/user-management/AdminUsers';

// Internal type definition remains in English
type TabOption = 'customers' | 'support-agents' | 'admin-users';

const UserManagement = ({ initialTab = "customers" }: { initialTab?: TabOption }) => {
  const { t } = useTranslation(); // Get translation function
  // State and hooks remain in English
  const [activeTab, setActiveTab] = useState<TabOption>(initialTab as TabOption);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar state listener logic remains the same
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
            <h1 className="text-2xl font-bold text-gray-800">{t('userManagementTitle', 'User Management')}</h1> {/* STYLE UNCHANGED, Text Translated */}
          </div>

          {/* Tab values remain in English */}
           {/* Styles unchanged */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            <TabsList className="mb-4"> {/* Styles unchanged */}
              {/* Use translation keys for Trigger text, keep 'value' prop */}
              <TabsTrigger value="customers" className="px-6">{t('customers', 'Customers')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="support-agents" className="px-6">{t('supportAgents', 'Support Agents')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="admin-users" className="px-6">{t('adminUsers', 'Admin Users')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
            </TabsList>

             {/* Tab content values remain in English */}
            <TabsContent value="customers">
              <CustomerManagement /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="support-agents">
              <SupportAgents /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="admin-users">
              <AdminUsers /> {/* Assumes translation handled internally */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;