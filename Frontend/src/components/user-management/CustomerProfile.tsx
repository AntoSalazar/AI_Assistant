import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import hook
import Sidebar from '@/components/Sidebar'; // Assuming internal i18n
import DashboardHeader from '@/components/DashboardHeader'; // Assuming internal i18n
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator'; // Added import
import { ArrowLeft, Edit, MessageSquare } from 'lucide-react';

// --- Types (assuming defined elsewhere, e.g., CustomerListItem) ---
type CustomerStatus = 'active' | 'inactive' | 'blocked';
type CustomerSegment = 'standard' | 'premium' | 'enterprise';

// --- Mock customer data (unchanged) ---
const customer = { id: '1', name: 'John Doe', email: 'johndoe@example.com', initials: 'JD', phone: '+1 (555) 123-4567', whatsapp: '+1 (555) 123-4567', location: 'San Francisco, CA, USA', lastInteraction: 'Today, 10:42 AM', status: 'active', segment: 'premium', joinDate: 'March 15, 2024',
  engagementStats: { totalConversations: 27, avgResponseTime: '2.1s', resolutionRate: '92%', humanEscalations: '8%', },
  recentActivity: [ { id: '1', type: 'conversation', title: 'Product Inquiry', description: 'Asked about wireless headphones battery life...', date: 'Today, 10:42 AM', }, { id: '2', type: 'conversation', title: 'Order Status', description: 'Checked status of order #45678...', date: 'Yesterday, 3:15 PM', }, { id: '3', type: 'account_update', title: 'Account Update', description: 'Upgraded from Standard to Premium segment', date: 'March 20, 2025', }, ], };
// --- End Mock Data ---

// --- Helper functions for translation keys (reuse if defined elsewhere) ---
const getStatusTranslationInfo = (status: CustomerStatus | string): { key: string; fallback: string } => {
    const map: Partial<Record<CustomerStatus, { key: string; fallback: string }>> = {
        active: { key: 'customerStatusActive', fallback: 'Active' },
        inactive: { key: 'customerStatusInactive', fallback: 'Inactive' },
        blocked: { key: 'customerStatusBlocked', fallback: 'Blocked' },
    };
    return map[status as CustomerStatus] || { key: status, fallback: status };
};

const getSegmentTranslationInfo = (segment: CustomerSegment | string): { key: string; fallback: string } => {
    const map: Partial<Record<CustomerSegment, { key: string; fallback: string }>> = {
        standard: { key: 'customerSegmentStandard', fallback: 'Standard' },
        premium: { key: 'customerSegmentPremium', fallback: 'Premium' },
        enterprise: { key: 'customerSegmentEnterprise', fallback: 'Enterprise' },
    };
    return map[segment as CustomerSegment] || { key: segment, fallback: segment };
};


const CustomerProfile = () => {
  const { customerId } = useParams(); // Unchanged
  const navigate = useNavigate(); // Unchanged
  const { t } = useTranslation(); // Initialize hook
  const [activeTab, setActiveTab] = useState('overview'); // State - unchanged
  const [sidebarOpen, setSidebarOpen] = useState(true); // State - unchanged

  // --- Sidebar observer logic (unchanged) ---
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

  // Get translated texts for badges
  const statusInfo = getStatusTranslationInfo(customer.status);
  const translatedStatusText = t(statusInfo.key, statusInfo.fallback);
  const segmentInfo = getSegmentTranslationInfo(customer.segment);
  const translatedSegmentText = t(segmentInfo.key, segmentInfo.fallback);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Child components assume internal i18n */}
      <DashboardHeader />
      <Sidebar />
      {/* Main layout styling unchanged */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1400px] mx-auto">
          {/* Header Card */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
               {/* Title - Translated */}
              <CardTitle className="text-2xl font-bold text-gray-800">
                {t('customerProfileTitle', 'Customer Profile')}
              </CardTitle>
              <div className="flex flex-wrap gap-2"> {/* Added flex-wrap */}
                 {/* Buttons - Translated */}
                <Button variant="outline" onClick={() => navigate('/users/customers')} className="flex items-center gap-2">
                  <ArrowLeft size={16} /> {t('customerProfileButtonBack', 'Back')}
                </Button>
                <Button variant="default" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Edit size={16} /> {t('customerProfileButtonEdit', 'Edit')}
                </Button>
                <Button variant="default" className="flex items-center gap-2 bg-whatsapp-primary hover:bg-green-600">
                  <MessageSquare size={16} /> {t('customerProfileButtonMessage', 'Message')}
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Main Profile Content */}
          <div className="bg-white rounded-lg shadow-sm">
            {/* Profile header */}
            <div className="p-6 bg-slate-50 border-b rounded-t-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                 {/* Avatar and Name - Data - Not Translated */}
                <Avatar className="h-20 w-20"><AvatarFallback className="text-2xl">{customer.initials}</AvatarFallback></Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{customer.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                     {/* Badges - Text Translated */}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {translatedStatusText}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {translatedSegmentText}
                    </span>
                  </div>
                   {/* Join Date Label - Translated */}
                  <p className="text-gray-600 mt-1">
                    {t('customerProfileJoinedLabel', 'Customer since:')} {customer.joinDate} {/* Data */}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                 {/* Buttons - Translated */}
                <Button variant="outline" className="w-full sm:w-auto">{t('customerProfileButtonChangeStatus', 'Change Status')}</Button>
                <Button variant="outline" className="w-full sm:w-auto">{t('customerProfileButtonChangeSegment', 'Change Segment')}</Button>
              </div>
            </div>

            {/* Tabs Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
              <TabsList className="mb-6">
                 {/* Tab Triggers - Translated */}
                <TabsTrigger value="overview" className="px-6 data-[state=active]:bg-whatsapp-primary data-[state=active]:text-white">{t('customerProfileTabOverview', 'Overview')}</TabsTrigger>
                <TabsTrigger value="conversations" className="px-6">{t('customerProfileTabConvos', 'Conversations')}</TabsTrigger>
                <TabsTrigger value="preferences" className="px-6">{t('customerProfileTabPrefs', 'Preferences')}</TabsTrigger>
                <TabsTrigger value="activity" className="px-6">{t('customerProfileTabActivity', 'Activity Log')}</TabsTrigger>
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information Card */}
                  <Card>
                    <CardHeader><CardTitle className="text-lg">{t('customerProfileCardTitleContact', 'Contact Information')}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Labels translated, values are data */}
                        <div className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium w-24 shrink-0">{t('customerProfileContactLabelEmail', 'Email:')}</span><span>{customer.email}</span></div>
                        <div className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium w-24 shrink-0">{t('customerProfileContactLabelPhone', 'Phone:')}</span><span>{customer.phone}</span></div>
                        <div className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium w-24 shrink-0">{t('customerProfileContactLabelWhatsApp', 'WhatsApp:')}</span><span>{customer.whatsapp}</span></div>
                        <div className="flex flex-col sm:flex-row sm:items-center"><span className="font-medium w-24 shrink-0">{t('customerProfileContactLabelLocation', 'Location:')}</span><span>{customer.location}</span></div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Engagement Statistics Card */}
                  <Card>
                    <CardHeader><CardTitle className="text-lg">{t('customerProfileCardTitleEngagement', 'Engagement Statistics')}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                         {/* Labels translated, values are data */}
                        <div className="p-4 bg-slate-50 rounded-md"><p className="text-gray-600 text-sm">{t('customerProfileEngagementLabelTotalConvos', 'Total Conversations')}</p><p className="text-xl font-bold text-whatsapp-primary">{customer.engagementStats.totalConversations}</p></div>
                        <div className="p-4 bg-slate-50 rounded-md"><p className="text-gray-600 text-sm">{t('customerProfileEngagementLabelAvgResponse', 'Avg. Response Time')}</p><p className="text-xl font-bold text-whatsapp-primary">{customer.engagementStats.avgResponseTime}</p></div>
                        <div className="p-4 bg-slate-50 rounded-md"><p className="text-gray-600 text-sm">{t('customerProfileEngagementLabelResolution', 'Resolution Rate')}</p><p className="text-xl font-bold text-whatsapp-primary">{customer.engagementStats.resolutionRate}</p></div>
                        <div className="p-4 bg-slate-50 rounded-md"><p className="text-gray-600 text-sm">{t('customerProfileEngagementLabelEscalations', 'Human Escalations')}</p><p className="text-xl font-bold text-whatsapp-primary">{customer.engagementStats.humanEscalations}</p></div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity Card */}
                  <Card className="md:col-span-2">
                    <CardHeader><CardTitle className="text-lg">{t('customerProfileCardTitleActivity', 'Recent Activity')}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {customer.recentActivity.map((activity) => (
                          <div key={activity.id} className="p-4 bg-slate-50 rounded-md border border-slate-100 flex flex-col sm:flex-row justify-between">
                            <div>
                               {/* Activity title/desc/date are data */}
                              <h3 className="font-semibold">{activity.title}</h3>
                              <p className="text-gray-500 text-sm">{activity.description}</p>
                            </div>
                            <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                              <span className="text-gray-500 text-sm">{activity.date}</span>
                              {activity.type === 'conversation' && (
                                 // Button translated
                                <Button variant="default" size="sm" className="mt-1 bg-blue-600 hover:bg-blue-700" onClick={() => navigate(`/users/customers/${customerId}/chat/${activity.id}`)}>
                                  {t('customerProfileButtonViewChat', 'View Chat')}
                                </Button>
                              )}
                              {activity.type === 'account_update' && (
                                 // Button translated
                                <Button variant="secondary" size="sm" className="mt-1">
                                  {t('customerProfileButtonDetails', 'Details')}
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

              {/* Other Tabs Content - Placeholders translated */}
              <TabsContent value="conversations"><Card><CardContent className="pt-6"><p>{t('customerProfilePlaceholderConvos', 'Conversation history will be displayed here.')}</p></CardContent></Card></TabsContent>
              <TabsContent value="preferences"><Card><CardContent className="pt-6"><p>{t('customerProfilePlaceholderPrefs', 'Customer preferences will be displayed here.')}</p></CardContent></Card></TabsContent>
              <TabsContent value="activity"><Card><CardContent className="pt-6"><p>{t('customerProfilePlaceholderActivity', 'Activity log will be displayed here.')}</p></CardContent></Card></TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerProfile;