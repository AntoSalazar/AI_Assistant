
import React from 'react';
import { Button } from '@/components/ui/button';

type Conversation = {
  id: string;
  user: string;
  time: string;
  intent: string;
  status: 'active' | 'escalated' | 'completed';
  resolution: 'AI Handled' | 'Human Agent';
};

const conversations: Conversation[] = [
  {
    id: '1',
    user: 'John Doe',
    time: '10:42 AM',
    intent: 'Product Inquiry',
    status: 'active',
    resolution: 'AI Handled',
  },
  {
    id: '2',
    user: 'Sara Smith',
    time: '10:38 AM',
    intent: 'Support Query',
    status: 'escalated',
    resolution: 'Human Agent',
  },
  {
    id: '3',
    user: 'Mike Johnson',
    time: '10:35 AM',
    intent: 'Order Status',
    status: 'completed',
    resolution: 'AI Handled',
  },
];

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

const RecentConversationsTable = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200">
        <h3 className="font-semibold text-gray-700">Recent Conversations</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">User</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">Time</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">Intent</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-left p-4 text-sm font-semibold text-gray-700">Resolution</th>
              <th className="text-right p-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {conversations.map((conversation) => (
              <tr key={conversation.id} className="hover:bg-slate-50">
                <td className="p-4 text-sm text-gray-700">{conversation.user}</td>
                <td className="p-4 text-sm text-gray-700">{conversation.time}</td>
                <td className="p-4 text-sm text-gray-700">{conversation.intent}</td>
                <td className="p-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      conversation.status
                    )}`}
                  >
                    {conversation.status.charAt(0).toUpperCase() + conversation.status.slice(1)}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-700">{conversation.resolution}</td>
                <td className="p-4 text-right">
                  <Button size="sm" variant="default">View</Button>
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
