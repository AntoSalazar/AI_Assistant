
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomerManagement from '@/components/user-management/CustomerManagement';
import SupportAgents from '@/components/user-management/SupportAgents';
import AdminUsers from '@/components/user-management/AdminUsers';

type TabOption = 'customers' | 'support-agents' | 'admin-users';

const UserManagement = ({ initialTab = "customers" }: { initialTab?: TabOption }) => {
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
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          </div>
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="customers" className="px-6">Customers</TabsTrigger>
              <TabsTrigger value="support-agents" className="px-6">Support Agents</TabsTrigger>
              <TabsTrigger value="admin-users" className="px-6">Admin Users</TabsTrigger>
            </TabsList>
            
            <TabsContent value="customers">
              <CustomerManagement />
            </TabsContent>
            <TabsContent value="support-agents">
              <SupportAgents />
            </TabsContent>
            <TabsContent value="admin-users">
              <AdminUsers />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
