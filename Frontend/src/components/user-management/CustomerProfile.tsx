import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Edit, MessageSquare } from 'lucide-react';

// Mock customer data
const customer = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  initials: 'JD',
  phone: '+1 (555) 123-4567',
  whatsapp: '+1 (555) 123-4567',
  location: 'San Francisco, CA, USA',
  lastInteraction: 'Today, 10:42 AM',
  status: 'active',
  segment: 'premium',
  joinDate: 'March 15, 2024',
  engagementStats: {
    totalConversations: 27,
    avgResponseTime: '2.1s',
    resolutionRate: '92%',
    humanEscalations: '8%',
  },
  recentActivity: [
    {
      id: '1',
      type: 'conversation',
      title: 'Product Inquiry',
      description: 'Asked about wireless headphones battery life and color options',
      date: 'Today, 10:42 AM',
    },
    {
      id: '2',
      type: 'conversation',
      title: 'Order Status',
      description: 'Checked status of order #45678 - Premium Smartphone',
      date: 'Yesterday, 3:15 PM',
    },
    {
      id: '3',
      type: 'account_update',
      title: 'Account Update',
      description: 'Upgraded from Standard to Premium segment',
      date: 'March 20, 2025',
    },
  ],
};

const CustomerProfile = () => {
  const { customerId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
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
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl font-bold text-gray-800">Customer Profile</CardTitle>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/users/customers')} 
                  className="flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Back
                </Button>
                <Button 
                  variant="default" 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Edit size={16} /> Edit
                </Button>
                <Button 
                  variant="default"
                  className="flex items-center gap-2 bg-whatsapp-primary hover:bg-green-600"
                >
                  <MessageSquare size={16} /> Message
                </Button>
              </div>
            </CardHeader>
          </Card>

          <div className="bg-white rounded-lg shadow-sm">
            {/* Profile header */}
            <div className="p-6 bg-slate-50 border-b rounded-t-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">{customer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{customer.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Active
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      Premium
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">Customer since: {customer.joinDate}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">Change Status</Button>
                <Button variant="outline" className="w-full sm:w-auto">Change Segment</Button>
              </div>
            </div>

            {/* Tabs Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <TabsList className="mb-6">
                <TabsTrigger 
                  value="overview" 
                  className="px-6 data-[state=active]:bg-whatsapp-primary data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="conversations" className="px-6">Conversations</TabsTrigger>
                <TabsTrigger value="preferences" className="px-6">Preferences</TabsTrigger>
                <TabsTrigger value="activity" className="px-6">Activity Log</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab Content */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-medium w-24">Email:</span>
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-medium w-24">Phone:</span>
                          <span>{customer.phone}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-medium w-24">WhatsApp:</span>
                          <span>{customer.whatsapp}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className="font-medium w-24">Location:</span>
                          <span>{customer.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Engagement Statistics */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Engagement Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-md">
                          <p className="text-gray-600 text-sm">Total Conversations</p>
                          <p className="text-xl font-bold text-whatsapp-primary">
                            {customer.engagementStats.totalConversations}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-md">
                          <p className="text-gray-600 text-sm">Avg. Response Time</p>
                          <p className="text-xl font-bold text-whatsapp-primary">
                            {customer.engagementStats.avgResponseTime}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-md">
                          <p className="text-gray-600 text-sm">Resolution Rate</p>
                          <p className="text-xl font-bold text-whatsapp-primary">
                            {customer.engagementStats.resolutionRate}
                          </p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-md">
                          <p className="text-gray-600 text-sm">Human Escalations</p>
                          <p className="text-xl font-bold text-whatsapp-primary">
                            {customer.engagementStats.humanEscalations}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Recent Activity */}
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {customer.recentActivity.map((activity) => (
                          <div 
                            key={activity.id} 
                            className="p-4 bg-slate-50 rounded-md border border-slate-100 flex flex-col sm:flex-row justify-between"
                          >
                            <div>
                              <h3 className="font-semibold">{activity.title}</h3>
                              <p className="text-gray-500 text-sm">{activity.description}</p>
                            </div>
                            <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                              <span className="text-gray-500 text-sm">{activity.date}</span>
                              {activity.type === 'conversation' && (
                                <Button 
                                  variant="default" 
                                  size="sm" 
                                  className="mt-1 bg-blue-600 hover:bg-blue-700"
                                  onClick={() => navigate(`/users/customers/${customerId}/chat/${activity.id}`)}
                                >
                                  View Chat
                                </Button>
                              )}
                              {activity.type === 'account_update' && (
                                <Button variant="secondary" size="sm" className="mt-1">
                                  Details
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Other tabs content - these would be implemented in a full solution */}
              <TabsContent value="conversations">
                <Card>
                  <CardContent className="pt-6">
                    <p>Conversation history will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card>
                  <CardContent className="pt-6">
                    <p>Customer preferences will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity">
                <Card>
                  <CardContent className="pt-6">
                    <p>Activity log will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerProfile;
