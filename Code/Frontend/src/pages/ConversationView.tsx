import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook
import { Button } from '@/components/ui/button';
import CustomerChatView from '@/components/user-management/CustomerChatView';
import { ArrowLeft } from 'lucide-react';

const ConversationView = () => {
  const { t } = useTranslation(); // Get translation function
  const { conversationId } = useParams<{ conversationId: string }>();
  const navigate = useNavigate();

  if (!conversationId) {
    // Use translation key for the error message
    return <div>{t('noConversationIdProvided', 'No conversation ID provided')}</div>; // Text Translated
  }

  return (
    // Note: Assuming the mt-16 and ml-16 are handling layout around a sidebar not included in this component's definition.
    // If this component is meant to be within the main content area handled by the layout in previous examples,
    // you might not need mt-16 and ml-16 here. Adjust as needed for your layout.
    // Styles unchanged
    <div className="p-6 max-w-[1400px] mx-auto mt-16"> {/* Potentially adjust mt-16 */}
      {/* Potentially adjust ml-16 if this is inside the <main> tag from previous examples */}
      {/* Styles unchanged */}
      <div className="ml-16 bg-white p-5 rounded-lg shadow-sm mb-6 flex justify-between items-center">
        {/* Use translation key for the title */}
        <h1 className="ml-16 text-2xl font-bold text-gray-800">{t('conversationDetailsTitle', 'Conversation Details')}</h1> {/* Potentially adjust ml-16, STYLE UNCHANGED, Text Translated */}
        <Button
          variant="outline"
          onClick={() => navigate('/conversations')}
          className="flex items-center gap-2" // Styles unchanged
        >
          <ArrowLeft size={16} />
          {/* Use translation key for button text */}
          {t('backToConversations', 'Back to Conversations')} {/* Text Translated */}
        </Button>
      </div>

      {/* This height calculation might need adjustment based on actual surrounding layout */}
      {/* Styles unchanged */}
      <div className="h-[calc(100vh-200px)]">
        <CustomerChatView /> {/* Assumes translation handled internally */}
      </div>
    </div>
  );
};

export default ConversationView;