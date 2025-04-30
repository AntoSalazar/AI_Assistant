import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import hook
import Sidebar from '@/components/Sidebar'; // Assuming internal i18n
import DashboardHeader from '@/components/DashboardHeader'; // Assuming internal i18n
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Download, MessageSquare } from 'lucide-react';

// --- Mock data (structure unchanged, values are data) ---
const customer = { id: '1', name: 'John Doe', email: 'johndoe@example.com', initials: 'JD', phone: '+1 (555) 123-4567' };
const chatInfo = {
  id: '1', topic: 'Product Inquiry', startTime: 'Today, 10:42 AM', endTime: 'Today, 10:48 AM', duration: '6 minutes', messageCount: '8 messages', resolution: 'resolved',
  performance: { responseTime: '1.8 seconds', accuracyScore: '97%', intentDetection: 'High confidence', knowledgeUsed: 'Product catalog' },
  relatedConversations: [
    { id: '2', title: 'Order Status #45678', date: 'Yesterday, 3:15 PM' },
    { id: '3', title: 'Technical Support - Setup', date: 'March 18, 2025' },
  ],
  messages: [
    { id: '1', sender: 'customer', text: "Hi, I'm interested in your wireless headphones. How long does the battery last?", time: '10:42 AM' },
    { id: '2', sender: 'ai', text: "Hello John! Our Premium Wireless Headphones have...", time: '10:42 AM' },
    { id: '3', sender: 'customer', text: "What colors do they come in?", time: '10:45 AM' },
    { id: '4', sender: 'ai', text: "Our Premium Wireless Headphones come in 4 colors...", time: '10:46 AM' },
    { id: '5', sender: 'customer', text: "That's perfect. I'll go with the Midnight Black. Thanks!", time: '10:48 AM' },
    { id: '6', sender: 'ai', text: "You're welcome, John! Excellent choice...", time: '10:48 AM' },
  ],
};
// --- End Mock Data ---

// Helper for resolution status text key (expand if more statuses exist)
const getResolutionTranslationKey = (status: string): string => {
    if (status === 'resolved') return 'chatViewResolutionResolved';
    // Add other statuses like 'unresolved', 'escalated' if needed
    // if (status === 'unresolved') return 'chatViewResolutionUnresolved';
    return status; // Fallback
}


const CustomerChatView = () => {
  const { customerId, chatId } = useParams(); // Data - unchanged
  const navigate = useNavigate(); // Unchanged
  const { t } = useTranslation(); // Initialize hook
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
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                 {/* Title Prefix - Translated */}
                <h1 className="text-2xl font-bold text-gray-800">
                    {t('chatViewTitlePrefix', 'Chat History:')} {customer.name} {/* Data */}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                  {/* Buttons - Translated */}
                  <Button variant="outline" onClick={() => navigate(`/users/customers/${customerId}`)} className="flex items-center gap-2">
                    <ArrowLeft size={16} /> {t('chatViewButtonBack', 'Back to Profile')}
                  </Button>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Download size={16} /> {t('chatViewButtonExport', 'Export Chat')}
                  </Button>
                  <Button variant="default" className="flex items-center gap-2 bg-whatsapp-primary hover:bg-green-600">
                    <MessageSquare size={16} /> {t('chatViewButtonSend', 'Send Message')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Chat Info Panel */}
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                {/* Customer Info - Data - Not Translated */}
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16"><AvatarFallback>{customer.initials}</AvatarFallback></Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{customer.name}</h2>
                    <p className="text-gray-600">{customer.phone}</p>
                  </div>
                </div>
                <Separator className="mb-4" />

                {/* Conversation Info Section */}
                <h3 className="font-bold text-base mb-4">{t('chatViewInfoTitleConvo', 'Conversation Info')}</h3>
                <div className="space-y-3">
                   {/* Labels translated, values are data */}
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewInfoLabelStart', 'Start Time:')}</span><span className="text-sm">{chatInfo.startTime}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewInfoLabelEnd', 'End Time:')}</span><span className="text-sm">{chatInfo.endTime}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewInfoLabelDuration', 'Duration:')}</span><span className="text-sm">{chatInfo.duration}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewInfoLabelMessages', 'Messages:')}</span><span className="text-sm">{chatInfo.messageCount}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewInfoLabelTopic', 'Topic:')}</span><span className="text-sm">{chatInfo.topic}</span></div>
                  <div className="grid grid-cols-2">
                    <span className="text-gray-600 text-sm">{t('chatViewInfoLabelResolution', 'Resolution:')}</span>
                    <div>
                       {/* Badge Text - Translated */}
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {t(getResolutionTranslationKey(chatInfo.resolution), chatInfo.resolution)}
                      </span>
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />

                {/* AI Performance Section */}
                <h3 className="font-bold text-base mb-4">{t('chatViewInfoTitlePerf', 'AI Performance')}</h3>
                <div className="space-y-3">
                   {/* Labels translated, values are data */}
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewPerfLabelResponse', 'Response Time:')}</span><span className="text-sm">{chatInfo.performance.responseTime}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewPerfLabelAccuracy', 'Accuracy Score:')}</span><span className="text-sm">{chatInfo.performance.accuracyScore}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewPerfLabelIntent', 'Intent Detection:')}</span><span className="text-sm">{chatInfo.performance.intentDetection}</span></div>
                  <div className="grid grid-cols-2"><span className="text-gray-600 text-sm">{t('chatViewPerfLabelKnowledge', 'Knowledge Used:')}</span><span className="text-sm">{chatInfo.performance.knowledgeUsed}</span></div>
                </div>
                <Separator className="my-4" />

                {/* Related Conversations Section */}
                <h3 className="font-bold text-base mb-4">{t('chatViewInfoTitleRelated', 'Related Conversations')}</h3>
                <div className="space-y-3">
                   {/* Related convo title/date are data - Not Translated */}
                  {chatInfo.relatedConversations.map((convo) => (
                    <div key={convo.id} className="p-3 bg-white border rounded-md cursor-pointer hover:bg-slate-50" onClick={() => navigate(`/users/customers/${customerId}/chat/${convo.id}`)}>
                      <p className="text-sm font-medium">{convo.title}</p>
                      <p className="text-xs text-gray-500">{convo.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Window */}
            <Card className="lg:col-span-3">
              <div className="border-b bg-slate-50 p-4">
                 {/* Title Prefix - Translated */}
                <h2 className="text-lg font-bold">
                    {t('chatViewChatWindowTitlePrefix', 'Conversation:')} {chatInfo.topic} {/* Data */}
                </h2>
                 {/* Start Time - Data - Not Translated */}
                <p className="text-sm text-gray-600 mt-1">{chatInfo.startTime}</p>
              </div>
              <CardContent className="p-6 max-h-[700px] overflow-y-auto">
                <div className="space-y-6">
                  {chatInfo.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}>
                      <div className="max-w-[80%]">
                        <div className={`p-4 rounded-2xl ${message.sender === 'customer' ? 'bg-slate-100 text-slate-800' : 'bg-blue-50 text-slate-800'}`}>
                           {/* Message Text - Data - Not Translated */}
                          <p className="whitespace-pre-wrap">{message.text}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-1">
                           {/* Sender Name - AI part translated */}
                          {message.sender === 'customer' ? customer.name : t('chatViewSenderAiAssistant', 'AI Assistant')} - {message.time} {/* Data */}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerChatView;