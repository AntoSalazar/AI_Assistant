import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';

// Type for conversation status (Internal values - NOT translated)
type ConversationStatus = 'active' | 'escalated' | 'completed';

// Type for conversation data (Represents API data structure)
type Conversation = {
  id: string;         // API data
  user: string;       // API data - Do not translate
  time: string;       // API data - Do not translate
  intent: string;     // API data - Do not translate
  status: ConversationStatus; // API data (Internal value)
  resolution: 'AI Handled' | 'Human Agent'; // API data (Value mapped for display translation)
};

// Sample data simulation (Represents data fetched from API)
const conversations: Conversation[] = [
  { id: '1', user: 'John Doe', time: '10:42 AM', intent: 'Product Inquiry', status: 'active', resolution: 'AI Handled' },
  { id: '2', user: 'Sara Smith', time: '10:38 AM', intent: 'Support Query', status: 'escalated', resolution: 'Human Agent' },
  { id: '3', user: 'Mike Johnson', time: '10:35 AM', intent: 'Order Status', status: 'completed', resolution: 'AI Handled' },
];

// Function remains unchanged - uses internal status values for styling
const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-status-active bg-opacity-20 text-status-active';
    case 'escalated':
      return 'bg-status-escalated bg-opacity-20 text-status-escalated';
    case 'completed':
      return 'bg-status-completed bg-opacity-20 text-status-completed';
    default:
      return '';
  }
};

// Helper function to map internal status value to translation key
const getStatusTranslationKey = (status: ConversationStatus): string => {
    const keyMap: Record<ConversationStatus, string> = {
        active: 'statusActive',
        escalated: 'statusEscalated',
        completed: 'statusCompleted',
    };
    return keyMap[status] || status; // Fallback to status value itself
}

// Helper function to map resolution value to translation key
const getResolutionTranslationKey = (resolution: 'AI Handled' | 'Human Agent'): string => {
    const keyMap: Record<'AI Handled' | 'Human Agent', string> = {
        'AI Handled': 'resolutionAiHandled',
        'Human Agent': 'resolutionHumanAgent',
    };
    return keyMap[resolution] || resolution; // Fallback to resolution value itself
}


const RecentConversationsTable = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    // Styles remain unchanged
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200">
         {/* Table Title - UI Text - Translated */}
        <h3 className="font-semibold text-gray-700">
            {t('recentConversationsTitle', 'Recent Conversations')}
        </h3>
      </div>
      {/* Styles remain unchanged */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Styles remain unchanged */}
          <thead className="bg-slate-50">
            <tr>
              {/* Table Headers - UI Text - Translated */}
              <th className="text-left p-4 text-sm font-semibold text-gray-700">{t('tableHeaderUser', 'User')}</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">{t('tableHeaderTime', 'Time')}</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">{t('tableHeaderIntent', 'Intent')}</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">{t('tableHeaderStatus', 'Status')}</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">{t('tableHeaderResolution', 'Resolution')}</th>
              <th className="text-right p-4 text-sm font-semibold text-gray-700">{t('tableHeaderActions', 'Actions')}</th>
            </tr>
          </thead>
          {/* Styles remain unchanged */}
          <tbody className="divide-y divide-slate-100">
            {conversations.map((conversation) => (
              <tr key={conversation.id} className="hover:bg-slate-50">
                {/* Data cells - User, Time, Intent - Not Translated */}
                <td className="p-4 text-sm text-gray-700">{conversation.user}</td>
                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">{conversation.time}</td> {/* Added whitespace-nowrap */}
                <td className="p-4 text-sm text-gray-700">{conversation.intent}</td>
                {/* Status Cell - Uses helper for color, translates display text */}
                <td className="p-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      conversation.status // Styling based on internal value
                    )}`}
                  >
                     {/* Display text translated via helper mapping */}
                    {t(getStatusTranslationKey(conversation.status), conversation.status)}
                  </span>
                </td>
                 {/* Resolution Cell - Translates display text */}
                <td className="p-4 text-sm text-gray-700">
                    {t(getResolutionTranslationKey(conversation.resolution), conversation.resolution)}
                </td>
                 {/* Actions Cell - Button text translated */}
                <td className="p-4 text-right">
                  <Button size="sm" variant="default">
                     {t('actionButtonView', 'View')}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentConversationsTable;