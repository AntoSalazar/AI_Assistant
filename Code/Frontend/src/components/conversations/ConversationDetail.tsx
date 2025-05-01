import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, PaperclipIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

interface ConversationMessage {
  id: string;
  sender: 'user' | 'ai' | 'agent';
  senderName: string; // Data from API - Do not translate
  content: string;    // Data from API - Do not translate
  timestamp: string;  // Data from API - Do not translate (formatting might be needed separately)
}

interface ConversationDetailProps {
  conversationId: string; // Comes from routing, likely corresponds to API ID
}

// --- Data Simulation (Represents data fetched from an API) ---
const getDummyConversationData = (conversationId: string) => ({
  id: conversationId, // API data
  user: {
    name: 'John Doe',        // API data - Do not translate
    initials: 'JD',          // API data - Do not translate
    phone: '+1 555-123-4567', // API data - Do not translate
  },
  status: 'active',          // API data - Do not translate (raw status)
  topic: 'Product Inquiry',  // API data - Do not translate
  startedAt: 'Today at 10:42 AM', // API data - Do not translate (raw timestamp string)
  messages: [
    {
      id: '1',
      sender: 'user',
      senderName: 'John Doe', // API data
      content: 'Hi, I\'m interested in your new smartphone model. Could you tell me about the battery life?', // API data
      timestamp: '10:42 AM' // API data
    },
    {
      id: '2',
      sender: 'ai',
      senderName: 'AI Assistant', // This *could* be API data (name of the specific AI), or a fixed role. Assuming fixed role for now based on original code.
      content: 'Hello John! I\'d be happy to help you with information about our new smartphone model. The battery life is excellent - it features a 5000mAh battery that can last up to 48 hours on normal usage. Would you like to know more specific details about the battery or any other features?', // API data
      timestamp: '10:42 AM' // API data
    },
    {
      id: '3',
      sender: 'user',
      senderName: 'John Doe', // API data
      content: 'That sounds great! What about the camera specs?', // API data
      timestamp: '10:45 AM' // API data
    },
    {
      id: '4',
      sender: 'ai',
      senderName: 'AI Assistant', // Assuming fixed role
      content: 'The smartphone comes with a triple camera setup: a 108MP main camera, a 12MP ultra-wide angle lens, and a 5MP macro lens. The front camera is 32MP for high-quality selfies. It can record videos up to 8K resolution at 24fps or 4K at 60fps. The camera also features night mode, portrait mode, and advanced AI scene recognition.', // API data
      timestamp: '10:46 AM' // API data
    }
  ] as ConversationMessage[],
  // In a real scenario, this might also come from API
  currentHandler: { type: 'ai', name: 'AI Assistant' } // Assuming fixed role name for now
});


const ConversationDetail: React.FC<ConversationDetailProps> = ({ conversationId }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();

  // Simulate fetching data - In a real app, use useEffect and fetch
  const conversationData = getDummyConversationData(conversationId);

  // Helper function for styling messages based on sender type
  const getMessageStyle = (sender: 'user' | 'ai' | 'agent') => {
    switch (sender) {
      case 'user':
        return 'bg-gray-100 ml-auto'; // User messages align right
      case 'ai':
        return 'bg-whatsapp-light text-gray-800'; // AI messages
      case 'agent':
        return 'bg-blue-100 text-blue-800'; // Agent messages
      default:
        return 'bg-gray-100';
    }
  };

  // Helper function to get the display name for a message sender
  const getSenderDisplayName = (sender: 'user' | 'ai' | 'agent', apiSenderName: string): string => {
      switch (sender) {
          case 'user':
              return apiSenderName; // Use name directly from API data
          case 'ai':
              // Use a translatable role name for the AI if its specific name isn't important or always the same role
              return t('roleAiAssistant', 'AI Assistant');
          case 'agent':
              return apiSenderName; // Use agent name directly from API data
          default:
              return apiSenderName; // Fallback to API data
      }
  }

  // Helper function to get display text for current handler
  const getCurrentHandlerText = (): string => {
      // This logic might depend on how handler info is structured in your API data
      if (conversationData.currentHandler.type === 'ai') {
          return t('roleAiAssistant', 'AI Assistant');
      } else if (conversationData.currentHandler.type === 'agent') {
          return conversationData.currentHandler.name; // Assuming agent name comes from API
      }
      return t('unknownHandler', 'Unknown'); // Fallback translation
  }

  // Capitalize status from API data for display (simple example, could be more complex)
  const displayStatus = conversationData.status.charAt(0).toUpperCase() + conversationData.status.slice(1);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header: User Info & Actions */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-gray-100">
             {/* User Initials from API Data - NOT Translated */}
            <AvatarFallback className="text-gray-500">{conversationData.user.initials}</AvatarFallback>
          </Avatar>
          <div>
             {/* User Name from API Data - NOT Translated */}
            <div className="font-medium text-gray-700">{conversationData.user.name}</div>
             {/* User Phone from API Data - NOT Translated */}
            <div className="text-sm text-gray-500">{conversationData.user.phone}</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
           {/* Status Badge - uses data from API, only capitalization applied - NOT Translated */}
          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
            {displayStatus}
          </Badge>
          {/* Back Button - UI Text - Translated */}
          <Button variant="outline" onClick={() => navigate('/conversations')}>
            {t('backToListButton', 'Back to List')}
          </Button>
        </div>
      </div>

      {/* Metadata Bar: Topic & Start Time */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
             {/* Topic Label - UI Text - Translated */}
            <span className="text-sm text-gray-500">{t('conversationTopicLabel', 'Topic:')} </span>
             {/* Topic Content from API Data - NOT Translated */}
            <span className="font-medium text-gray-700">{conversationData.topic}</span>
          </div>
           {/* Started Label & Time from API Data - Only "Started" part translated */}
          <div className="text-sm text-gray-500">
            {t('conversationStartedLabel', 'Started')} {conversationData.startedAt} {/* Time string from API - NOT Translated */}
          </div>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-grow p-4 overflow-y-auto bg-slate-50">
        <div className="space-y-4">
          {conversationData.messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`} // Use flex to control alignment simply
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${getMessageStyle(message.sender)}`}
              >
                <div className="flex justify-between items-start mb-1">
                  {/* Sender Name - Uses helper function which decides based on type */}
                  <span className="font-medium text-sm">
                    {getSenderDisplayName(message.sender, message.senderName)}
                  </span>
                  {/* Timestamp from API Data - NOT Translated */}
                  <span className="text-xs text-gray-500 ml-2">{message.timestamp}</span>
                </div>
                {/* Message Content from API Data - NOT Translated */}
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area & Footer Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          {/* Attach Button - UI Icon */}
          <Button variant="outline" size="icon" aria-label={t('attachFileButtonLabel', 'Attach File')}>
            <PaperclipIcon className="h-4 w-4" />
          </Button>
           {/* Message Input - Placeholder is UI Text - Translated */}
          <Input
            placeholder={t('typeYourMessagePlaceholder', 'Type your message...')}
            className="flex-grow"
            aria-label={t('messageInputLabel', 'Message Input')}
          />
           {/* Send Button - UI Text & Icon - Translated */}
          <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
            <Send className="h-4 w-4 md:mr-2" /> {/* Hide text on small screens? Add responsive class */}
            <span className="hidden md:inline">{t('sendButton', 'Send')}</span>
          </Button>
        </div>

        <div className="mt-3 flex flex-col md:flex-row justify-between items-center gap-2">
           {/* Handled By Label & Handler Name - UI Text & Role/Data - Translated Label/Role */}
          <div className="text-xs text-gray-500">
            {t('handledByLabel', 'Handled by:')} <span className="font-medium">{getCurrentHandlerText()}</span>
          </div>
          <div className="flex gap-2">
             {/* End Conversation Button - UI Text - Translated */}
            <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">
              {t('endConversationButton', 'End Conversation')}
            </Button>
             {/* Escalate Button - UI Text - Translated */}
            <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              {t('escalateToAgentButton', 'Escalate to Agent')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationDetail;