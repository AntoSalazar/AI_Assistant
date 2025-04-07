
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CustomerChatView from '@/components/user-management/CustomerChatView';
import { ArrowLeft } from 'lucide-react';

const ConversationView = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  const navigate = useNavigate();

  if (!conversationId) {
    return <div>No conversation ID provided</div>;
  }

  return (
    <div className="p-6 max-w-[1400px] mx-auto mt-16">
      <div className="ml-16 bg-white p-5 rounded-lg shadow-sm mb-6 flex justify-between items-center">
        <h1 className="ml-16 text-2xl font-bold text-gray-800">Conversation Details</h1>
        <Button 
          variant="outline" 
          onClick={() => navigate('/conversations')} 
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Conversations
        </Button>
      </div>
      
      <div className="h-[calc(100vh-200px)]">
        <CustomerChatView />
      </div>
    </div>
  );
};

export default ConversationView;
