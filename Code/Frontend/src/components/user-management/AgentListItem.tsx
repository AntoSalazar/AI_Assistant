import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { MoreHorizontal, Trash2 } from 'lucide-react'; // Added Trash2 based on dropdown
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
// Slider is imported but not used in original code for AgentListItem
// import { Slider } from '@/components/ui/slider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator, // Added based on likely usage
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// --- Types (assuming these are defined elsewhere or derived) ---
export type AgentStatus = 'online' | 'offline' | 'meeting';
export type AgentProps = {
  id: string;
  name: string;
  email: string;
  initials: string;
  phone: string;
  department: string;
  status: AgentStatus; // Use specific type
  load: number;
};

// --- Refactored StatusBadge Helper Component ---
// Now accepts translated text via props
interface StatusBadgeProps {
  status: AgentStatus; // Internal value for styling
  statusText: string; // Pre-translated text for display
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status, statusText }) => {
  // Styling logic remains based on the internal status value
  const statusClasses: Record<AgentStatus, string> = {
    online: "bg-green-100 text-green-700",
    offline: "bg-gray-100 text-gray-700",
    meeting: "bg-yellow-100 text-yellow-700"
  };

  return (
    // Renders the translated text passed via props
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status] || 'bg-gray-100 text-gray-700'}`}>
      {statusText}
    </span>
  );
};

// --- LoadIndicator Helper Component (unchanged, no text to translate) ---
const LoadIndicator = ({ load }: { load: number }) => {
  let fillColor = 'bg-green-500';
  // Adjusted logic slightly to be exclusive ranges
  if (load > 95) { // Critical load first
    fillColor = 'bg-red-500';
  } else if (load > 85) { // High load
    fillColor = 'bg-yellow-500';
  } // Default is green

  return (
    <div className="flex items-center">
      <div className="w-24 md:w-36 h-5 bg-gray-200 rounded-full overflow-hidden mr-2">
        <div
          className={`h-full ${fillColor} rounded-full`}
          style={{ width: `${load}%` }}
        />
      </div>
      <span className="text-sm font-medium">{load}%</span> {/* Percentage data */}
    </div>
  );
};

// --- Helper to get status translation info ---
const getStatusTranslationInfo = (status: AgentStatus): { key: string; fallback: string } => {
    const map: Record<AgentStatus, { key: string; fallback: string }> = {
        online: { key: 'agentStatusOnline', fallback: 'Online' },
        offline: { key: 'agentStatusOffline', fallback: 'Offline' },
        meeting: { key: 'agentStatusMeeting', fallback: 'In Meeting' },
    };
    return map[status] || { key: status, fallback: status };
};

// --- Main AgentListItem Component ---
const AgentListItem = ({ agent }: { agent: AgentProps }) => {
  const { t } = useTranslation(); // Initialize hook

  // Get translated status text
  const statusInfo = getStatusTranslationInfo(agent.status);
  const translatedStatusText = t(statusInfo.key, statusInfo.fallback);

  return (
    // Styles remain unchanged
    <TableRow className="hover:bg-gray-50">
      {/* User Info Cell - Data - Not Translated */}
      <TableCell>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
            {agent.initials}
          </div>
          <div>
            <div className="font-medium text-gray-900">{agent.name}</div>
            <div className="text-gray-500 text-sm">{agent.email}</div>
          </div>
        </div>
      </TableCell>
      {/* Phone Cell - Data - Not Translated */}
      <TableCell>{agent.phone}</TableCell>
      {/* Department Cell - Data - Not Translated */}
      <TableCell>{agent.department}</TableCell>
      {/* Status Cell - Uses refactored StatusBadge */}
      <TableCell>
        <StatusBadge status={agent.status} statusText={translatedStatusText} />
      </TableCell>
      {/* Load Cell - Uses unchanged LoadIndicator */}
      <TableCell>
        <LoadIndicator load={agent.load} />
      </TableCell>
      {/* Actions Cell - Buttons and Dropdown items translated */}
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          {/* Buttons - Translated */}
          <Button variant="secondary" size="sm">
            {t('agentListButtonView', 'View')}
          </Button>
          <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            {t('agentListButtonEdit', 'Edit')}
          </Button>
          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label={t('agentListActionMenuLabel', 'More actions')}>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
               {/* Dropdown Items - Translated */}
              <DropdownMenuItem>{t('agentListActionViewDetails', 'View Details')}</DropdownMenuItem>
              <DropdownMenuItem>{t('agentListActionEditProfile', 'Edit Profile')}</DropdownMenuItem>
              <DropdownMenuItem>{t('agentListActionAssignTasks', 'Assign Tasks')}</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">{t('agentListActionDeactivate', 'Deactivate')}</DropdownMenuItem>
              {/* Example if delete was needed */}
              {/* <DropdownMenuSeparator />
                 <DropdownMenuItem className="text-red-600">
                   <Trash2 className="h-4 w-4 mr-2" />
                   {t('agentListActionDelete', 'Delete Agent')}
                 </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AgentListItem;