import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Pagination from '@/components/user-management/Pagination'; // Assuming this handles its own internal i18n or receives translated props if needed
import { useNavigate } from 'react-router-dom';

// Type for conversation status (Internal values - NOT translated)
type ConversationStatus = 'active' | 'escalated' | 'completed' | 'pending';

// Type for conversation data (Represents API data structure)
interface Conversation {
  id: string; // API data
  user: {
    name: string;     // API data - Do not translate
    initials: string; // API data - Do not translate
    phone: string;    // API data - Do not translate
  };
  time: string;       // API data - Do not translate (Formatting might be needed separately)
  topic: string;      // API data - Do not translate
  status: ConversationStatus; // API data (Internal value)
  handledBy: string;  // API data - Do not translate (AI or Agent name)
}

// Sample data simulation (Represents data fetched from API)
const conversationsData: Conversation[] = [
  // ... (Keep sample data exactly as before) ...
  {
    id: '1',
    user: { name: 'John Doe', initials: 'JD', phone: '+1 555-123-4567' },
    time: '10:42 AM', topic: 'Product Inquiry', status: 'active', handledBy: 'AI Assistant',
  },
  {
    id: '2',
    user: { name: 'Sarah Smith', initials: 'SS', phone: '+1 555-987-6543' },
    time: '10:38 AM', topic: 'Support Query', status: 'escalated', handledBy: 'Maria G. (Agent)',
  },
  {
    id: '3',
    user: { name: 'Mike Johnson', initials: 'MJ', phone: '+1 555-765-4321' },
    time: '10:35 AM', topic: 'Order Status', status: 'completed', handledBy: 'AI Assistant',
  },
  {
    id: '4',
    user: { name: 'Emily Wilson', initials: 'EW', phone: '+1 555-234-5678' },
    time: '10:28 AM', topic: 'Return Request', status: 'pending', handledBy: 'AI Assistant',
  },
  {
    id: '5',
    user: { name: 'Robert Kim', initials: 'RK', phone: '+1 555-876-5432' },
    time: '10:15 AM', topic: 'Technical Issue', status: 'escalated', handledBy: 'James T. (Agent)',
  },
  {
    id: '6',
    user: { name: 'Anna Patel', initials: 'AP', phone: '+1 555-345-6789' },
    time: '10:08 AM', topic: 'Pricing Inquiry', status: 'completed', handledBy: 'AI Assistant',
  },
];

// Total items simulation (replace with actual total from API if available)
const TOTAL_ENTRIES = 128;

interface ConversationsListProps {
  status: 'all' | 'active' | 'escalated' | 'resolved' | 'saved'; // Filter values - internal
}

const ConversationsList: React.FC<ConversationsListProps> = ({ status }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<Conversation[]>([]); // Initialize empty

  // Filter data based on status prop
  useEffect(() => {
    let dataToFilter = conversationsData; // Start with all data
    let result: Conversation[];

    if (status === 'all') {
      result = dataToFilter;
    } else if (status === 'resolved') {
      // Map 'resolved' filter prop to 'completed' internal status
      result = dataToFilter.filter(item => item.status === 'completed');
    } else if (status === 'saved') {
      // Example: Filter for specific saved IDs (logic might vary)
      const savedIds = ['3', '6']; // Example saved IDs
      result = dataToFilter.filter(item => savedIds.includes(item.id));
    } else {
      // Filter directly using 'active' or 'escalated' status prop
      result = dataToFilter.filter(item => item.status === status);
    }
    setFilteredData(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [status]);

  // --- Helper Function to Get Status Badge with Translated Text ---
  const getStatusBadge = (statusValue: ConversationStatus) => {
    let badgeTextKey: string;
    let fallbackText: string;
    let badgeClasses: string;

    switch (statusValue) {
      case 'active':
        badgeTextKey = 'statusActive';
        fallbackText = 'Active';
        badgeClasses = 'bg-green-100 text-green-700 border-green-200 hover:bg-green-100';
        break;
      case 'escalated':
        badgeTextKey = 'statusEscalated';
        fallbackText = 'Escalated';
        badgeClasses = 'bg-red-100 text-red-700 border-red-200 hover:bg-red-100';
        break;
      case 'completed':
        badgeTextKey = 'statusCompleted';
        fallbackText = 'Completed';
        badgeClasses = 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100';
        break;
      case 'pending':
        badgeTextKey = 'statusPending';
        fallbackText = 'Pending';
        badgeClasses = 'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100';
        break;
      default:
        return null; // Or a default badge if needed
    }

    // Return Badge component with translated text inside
    return (
      <Badge variant="outline" className={badgeClasses}>
        {t(badgeTextKey, fallbackText)}
      </Badge>
    );
  };

  // Navigate to conversation detail page
  const handleView = (id: string) => {
    navigate(`/conversations/${id}`);
  };

  // TODO: Implement pagination logic if needed (e.g., slicing filteredData)
  // For now, it shows all filtered items on one page. Pagination controls are present.
  const itemsPerPage = 10; // Example: Define items per page
  const totalPages = Math.ceil(TOTAL_ENTRIES / itemsPerPage); // Calculate total pages based on ALL entries
  //const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); // Use this if paginating frontend data

  // Text for pagination info
  const paginationInfoText = t('paginationShowingInfo', 'Showing {{start}} to {{end}} of {{total}} entries', {
     // Adjust start/end based on actual pagination logic if implemented
     start: filteredData.length > 0 ? 1 : 0, // Simple example showing 1
     end: filteredData.length,                // Simple example showing total filtered count
     total: TOTAL_ENTRIES                     // Use the total count
  });


  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"> {/* Added overflow hidden */}
      <div className="overflow-x-auto"> {/* Make table scrollable horizontally on small screens */}
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              {/* Table Headers - UI Text - Translated */}
              <TableHead className="w-1/4 whitespace-nowrap">{t('tableHeaderUser', 'User')}</TableHead>
              <TableHead className="w-1/12 whitespace-nowrap">{t('tableHeaderTime', 'Time')}</TableHead>
              <TableHead className="w-1/6 whitespace-nowrap">{t('tableHeaderTopic', 'Topic')}</TableHead>
              <TableHead className="w-1/12 whitespace-nowrap">{t('tableHeaderStatus', 'Status')}</TableHead>
              <TableHead className="w-1/6 whitespace-nowrap">{t('tableHeaderHandledBy', 'Handled By')}</TableHead>
              <TableHead className="w-1/5 text-right whitespace-nowrap">{t('tableHeaderActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Render table rows using data */}
            {/* Use currentItems if paginating frontend data, otherwise use filteredData */}
            {filteredData.map((conversation) => (
              <TableRow key={conversation.id} className="hover:bg-slate-50">
                {/* User Info Cell - Data from API - NOT Translated */}
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
                {/* Time Cell - Data from API - NOT Translated */}
                <TableCell className="whitespace-nowrap">{conversation.time}</TableCell>
                 {/* Topic Cell - Data from API - NOT Translated */}
                <TableCell>{conversation.topic}</TableCell>
                {/* Status Cell - Uses helper to get badge with translated text */}
                <TableCell>{getStatusBadge(conversation.status)}</TableCell>
                 {/* Handled By Cell - Data from API - NOT Translated */}
                <TableCell>{conversation.handledBy}</TableCell>
                 {/* Actions Cell - Buttons have translated text */}
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    {/* View Button */}
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleView(conversation.id)}
                    >
                      {t('actionButtonView', 'View')}
                    </Button>
                    {/* Conditional Buttons */}
                    {conversation.status === 'active' || conversation.status === 'pending' ? (
                      <Button size="sm" variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                         {t('actionButtonEnd', 'End')}
                      </Button>
                    ) : conversation.status === 'escalated' ? (
                      <Button size="sm" variant="outline" className="text-gray-500 border-gray-500 hover:bg-gray-50">
                         {t('actionButtonTake', 'Take')}
                      </Button>
                    ) : ( // Assuming completed status maps here for the 'Save' action based on original logic
                      <Button size="sm" variant="outline" className="text-cyan-500 border-cyan-500 hover:bg-cyan-50">
                         {t('actionButtonSave', 'Save')}
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
             {/* Add row for no results */}
             {filteredData.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                        {t('tableNoResults', 'No conversations found matching the criteria.')}
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Pagination Info Text - UI Text - Translated with Interpolation */}
        <div className="text-sm text-gray-500">
          {paginationInfoText}
        </div>
        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages} // Use calculated total pages
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ConversationsList;