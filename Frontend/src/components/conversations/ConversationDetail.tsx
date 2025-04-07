
import React from 'react';
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
  senderName: string;
  content: string;
  timestamp: string;
}

interface ConversationDetailProps {
  conversationId: string;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({ conversationId }) => {
  const navigate = useNavigate();
  
  // Dummy data for the conversation
  const conversationData = {
    id: conversationId,
    user: {
      name: 'John Doe',
      initials: 'JD',
      phone: '+1 555-123-4567',
    },
    status: 'active',
    topic: 'Product Inquiry',
    startedAt: 'Today at 10:42 AM',
    messages: [
      {
        id: '1',
        sender: 'user',
        senderName: 'John Doe',
        content: 'Hi, I\'m interested in your new smartphone model. Could you tell me about the battery life?',
        timestamp: '10:42 AM'
      },
      {
        id: '2',
        sender: 'ai',
        senderName: 'AI Assistant',
        content: 'Hello John! I\'d be happy to help you with information about our new smartphone model. The battery life is excellent - it features a 5000mAh battery that can last up to 48 hours on normal usage. Would you like to know more specific details about the battery or any other features?',
        timestamp: '10:42 AM'
      },
      {
        id: '3',
        sender: 'user',
        senderName: 'John Doe',
        content: 'That sounds great! What about the camera specs?',
        timestamp: '10:45 AM'
      },
      {
        id: '4',
        sender: 'ai',
        senderName: 'AI Assistant',
        content: 'The smartphone comes with a triple camera setup: a 108MP main camera, a 12MP ultra-wide angle lens, and a 5MP macro lens. The front camera is 32MP for high-quality selfies. It can record videos up to 8K resolution at 24fps or 4K at 60fps. The camera also features night mode, portrait mode, and advanced AI scene recognition.',
        timestamp: '10:46 AM'
      }
    ] as ConversationMessage[]
  };

  const getMessageStyle = (sender: string) => {
    switch (sender) {
      case 'user':
        return 'bg-gray-100 ml-auto';
      case 'ai':
        return 'bg-whatsapp-light text-gray-800';
      case 'agent':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-gray-100">
            <AvatarFallback className="text-gray-500">{conversationData.user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-gray-700">{conversationData.user.name}</div>
            <div className="text-sm text-gray-500">{conversationData.user.phone}</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
            {conversationData.status.charAt(0).toUpperCase() + conversationData.status.slice(1)}
          </Badge>
          <Button variant="outline" onClick={() => navigate('/conversations')}>
            Back to List
          </Button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">Topic: </span>
            <span className="font-medium text-gray-700">{conversationData.topic}</span>
          </div>
          <div className="text-sm text-gray-500">Started {conversationData.startedAt}</div>
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto bg-slate-50">
        <div className="space-y-4">
          {conversationData.messages.map((message) => (
            <div 
              key={message.id} 
              className={`max-w-[80%] rounded-lg p-3 ${getMessageStyle(message.sender)}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-sm">
                  {message.sender === 'user' ? message.senderName : 
                   message.sender === 'ai' ? 'AI Assistant' : message.senderName}
                </span>
                <span className="text-xs text-gray-500 ml-2">{message.timestamp}</span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <PaperclipIcon className="h-4 w-4" />
          </Button>
          <Input 
            placeholder="Type your message..." 
            className="flex-grow"
          />
          <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
        
        <div className="mt-3 flex justify-between">
          <div className="text-xs text-gray-500">
            Handled by: <span className="font-medium">AI Assistant</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">
              End Conversation
            </Button>
            <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
              Escalate to Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationDetail;
