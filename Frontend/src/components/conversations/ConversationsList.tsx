
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Pagination from '@/components/user-management/Pagination';
import { useNavigate } from 'react-router-dom';

// Type for conversation status
type ConversationStatus = 'active' | 'escalated' | 'completed' | 'pending';

// Type for conversation data
interface Conversation {
  id: string;
  user: {
    name: string;
    initials: string;
    phone: string;
  };
  time: string;
  topic: string;
  status: ConversationStatus;
  handledBy: string;
}

// Sample data for conversations
const conversationsData: Conversation[] = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      initials: 'JD',
      phone: '+1 555-123-4567',
    },
    time: '10:42 AM',
    topic: 'Product Inquiry',
    status: 'active',
    handledBy: 'AI Assistant',
  },
  {
    id: '2',
    user: {
      name: 'Sarah Smith',
      initials: 'SS',
      phone: '+1 555-987-6543',
    },
    time: '10:38 AM',
    topic: 'Support Query',
    status: 'escalated',
    handledBy: 'Maria G. (Agent)',
  },
  {
    id: '3',
    user: {
      name: 'Mike Johnson',
      initials: 'MJ',
      phone: '+1 555-765-4321',
    },
    time: '10:35 AM',
    topic: 'Order Status',
    status: 'completed',
    handledBy: 'AI Assistant',
  },
  {
    id: '4',
    user: {
      name: 'Emily Wilson',
      initials: 'EW',
      phone: '+1 555-234-5678',
    },
    time: '10:28 AM',
    topic: 'Return Request',
    status: 'pending',
    handledBy: 'AI Assistant',
  },
  {
    id: '5',
    user: {
      name: 'Robert Kim',
      initials: 'RK',
      phone: '+1 555-876-5432',
    },
    time: '10:15 AM',
    topic: 'Technical Issue',
    status: 'escalated',
    handledBy: 'James T. (Agent)',
  },
  {
    id: '6',
    user: {
      name: 'Anna Patel',
      initials: 'AP',
      phone: '+1 555-345-6789',
    },
    time: '10:08 AM',
    topic: 'Pricing Inquiry',
    status: 'completed',
    handledBy: 'AI Assistant',
  },
];

interface ConversationsListProps {
  status: 'all' | 'active' | 'escalated' | 'resolved' | 'saved';
}

const ConversationsList: React.FC<ConversationsListProps> = ({ status }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<Conversation[]>(conversationsData);
  
  // Filter data based on status
  React.useEffect(() => {
    if (status === 'all') {
      setFilteredData(conversationsData);
    } else if (status === 'resolved') {
      setFilteredData(conversationsData.filter(item => item.status === 'completed'));
    } else if (status === 'saved') {
      // For demo purposes, let's assume saved conversations are a subset of completed ones
      const savedIds = ['3', '6'];
      setFilteredData(conversationsData.filter(item => savedIds.includes(item.id)));
    } else {
      setFilteredData(conversationsData.filter(item => item.status === status));
    }
  }, [status]);

  const getStatusBadge = (status: ConversationStatus) => {
    switch (status) {
      case 'active':
        return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">Active</Badge>;
      case 'escalated':
        return <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 hover:bg-red-100">Escalated</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">Completed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100">Pending</Badge>;
      default:
        return null;
    }
  };

  const handleView = (id: string) => {
    navigate(`/conversations/${id}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="w-1/4">User</TableHead>
            <TableHead className="w-1/12">Time</TableHead>
            <TableHead className="w-1/6">Topic</TableHead>
            <TableHead className="w-1/12">Status</TableHead>
            <TableHead className="w-1/6">Handled By</TableHead>
            <TableHead className="w-1/5 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((conversation) => (
            <TableRow key={conversation.id} className="hover:bg-slate-50">
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10 bg-slate-100">
                    <AvatarFallback className="text-gray-500">{conversation.user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-700">{conversation.user.name}</div>
                    <div className="text-sm text-gray-500">{conversation.user.phone}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{conversation.time}</TableCell>
              <TableCell>{conversation.topic}</TableCell>
              <TableCell>{getStatusBadge(conversation.status)}</TableCell>
              <TableCell>{conversation.handledBy}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleView(conversation.id)}
                  >
                    View
                  </Button>
                  {conversation.status === 'active' || conversation.status === 'pending' ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-red-500 border-red-500 hover:bg-red-50"
                    >
                      End
                    </Button>
                  ) : conversation.status === 'escalated' ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-gray-500 border-gray-500 hover:bg-gray-50"
                    >
                      Take
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-cyan-500 border-cyan-500 hover:bg-cyan-50"
                    >
                      Save
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          Showing 1 to {filteredData.length} of 128 entries
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(128 / 10)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ConversationsList;
