import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell, // Not used directly, but used by AgentListItem
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AgentListItem from './AgentListItem'; // Default import for the component
import type { AgentProps } from './AgentListItem'; // <-- Use curly braces {} and 'type'
import AgentStatistics from './AgentStatistics'; // Assuming this component handles its own i18n
// Pagination component is imported but not rendered in the provided code snippet
// import Pagination from './Pagination';

// --- Mock agents data (unchanged) ---
const agents: AgentProps[] = [
  { id: '1', name: 'Robert Johnson', email: 'robert.j@company.com', initials: 'RJ', phone: '+1 (555) 987-6543', department: 'Technical Support', status: 'online', load: 75, },
  { id: '2', name: 'Lisa Garcia', email: 'lisa.g@company.com', initials: 'LG', phone: '+1 (555) 876-5432', department: 'Sales Support', status: 'online', load: 40, },
  { id: '3', name: 'Thomas Nelson', email: 'thomas.n@company.com', initials: 'TN', phone: '+1 (555) 765-4321', department: 'Customer Support', status: 'offline', load: 0, },
  { id: '4', name: 'Maria Chen', email: 'maria.c@company.com', initials: 'MC', phone: '+1 (555) 654-3210', department: 'Technical Support', status: 'online', load: 90, },
  { id: '5', name: 'David Brown', email: 'david.b@company.com', initials: 'DB', phone: '+1 (555) 543-2109', department: 'Sales Support', status: 'meeting', load: 60, },
  { id: '6', name: 'Sarah Parker', email: 'sarah.p@company.com', initials: 'SP', phone: '+1 (555) 432-1098', department: 'Customer Support', status: 'offline', load: 0, },
];

// --- Structure for select options ---
const statusOptions = [
    { value: 'all', labelKey: 'supportAgentsStatusOptAll', fallback: 'All Statuses' },
    { value: 'online', labelKey: 'supportAgentsStatusOptOnline', fallback: 'Online' },
    { value: 'offline', labelKey: 'supportAgentsStatusOptOffline', fallback: 'Offline' },
    { value: 'meeting', labelKey: 'supportAgentsStatusOptMeeting', fallback: 'In Meeting' },
];

const departmentOptions = [
    { value: 'all', labelKey: 'supportAgentsDeptOptAll', fallback: 'All Departments' },
    { value: 'technical-support', labelKey: 'supportAgentsDeptOptTech', fallback: 'Technical Support' },
    { value: 'sales-support', labelKey: 'supportAgentsDeptOptSales', fallback: 'Sales Support' },
    { value: 'customer-support', labelKey: 'supportAgentsDeptOptCustomer', fallback: 'Customer Support' },
];


const SupportAgents = () => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (unchanged) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1); // State exists but pagination UI is not rendered
  const agentsPerPage = 6; // Config unchanged

  // --- Filtering Logic (unchanged) ---
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter;
    // Ensure department matching handles potential case/space differences if needed
    const matchesDepartment = departmentFilter === 'all' || agent.department.toLowerCase().replace(/\s+/g, '-') === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  // --- Pagination Logic (unchanged, used only for slicing if needed) ---
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  // Use filteredAgents directly if no pagination UI is present
  const currentAgents = filteredAgents; // .slice(indexOfFirstAgent, indexOfLastAgent);

  // --- Statistics Calculation (unchanged) ---
  const totalAgents = agents.length;
  const onlineAgents = agents.filter(agent => agent.status === 'online').length;
  // Handle division by zero if totalAgents is 0
  const averageLoad = totalAgents > 0 ? agents.reduce((total, agent) => total + agent.load, 0) / totalAgents : 0;

  return (
    <div>
      {/* Search and Filter Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            // Placeholder - Translated
            placeholder={t('supportAgentsSearchPlaceholder', 'Search agents...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            aria-label={t('supportAgentsSearchPlaceholder', 'Search agents...')}
          />
        </div>
        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-44" aria-label={t('supportAgentsStatusSelectLabel', 'Filter by status')}>
            {/* Placeholder - Translated */}
            <SelectValue placeholder={t('supportAgentsPlaceholderAllStatuses', 'All Statuses')} />
          </SelectTrigger>
          <SelectContent>
             {/* Options - Translated */}
            {statusOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                    {t(opt.labelKey, opt.fallback)}
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Department Filter */}
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-full md:w-44" aria-label={t('supportAgentsDeptSelectLabel', 'Filter by department')}>
            {/* Placeholder - Translated */}
            <SelectValue placeholder={t('supportAgentsPlaceholderAllDepts', 'All Departments')} />
          </SelectTrigger>
          <SelectContent>
             {/* Options - Translated */}
            {departmentOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                    {t(opt.labelKey, opt.fallback)}
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Add Button */}
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> {t('supportAgentsButtonAddNew', 'Add New')}
        </Button>
      </div>

      {/* Agents List Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              {/* Headers - Translated */}
              <TableHead className="w-[30%]">{t('supportAgentsHeaderAgent', 'Agent')}</TableHead>
              <TableHead className="w-[15%]">{t('supportAgentsHeaderPhone', 'Phone Number')}</TableHead>
              <TableHead className="w-[15%]">{t('supportAgentsHeaderDept', 'Department')}</TableHead>
              <TableHead className="w-[10%]">{t('supportAgentsHeaderStatus', 'Status')}</TableHead>
              <TableHead className="w-[10%]">{t('supportAgentsHeaderLoad', 'Load')}</TableHead>
              <TableHead className="w-[20%] text-right">{t('supportAgentsHeaderActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Render AgentListItem - Assumes internal i18n */}
            {currentAgents.map(agent => (
              <AgentListItem key={agent.id} agent={agent} />
            ))}
             {/* No Results Row */}
            {currentAgents.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                        {t('supportAgentsNoResults', 'No agents found matching your criteria.')}
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Agent Statistics Component - Assumes internal i18n */}
        <AgentStatistics
          totalAgents={totalAgents}
          onlineAgents={onlineAgents}
          averageLoad={averageLoad}
        />

        {/* Pagination UI (Not present in original snippet, but logic exists) */}
        {/* {filteredAgents.length > 0 && totalPages > 1 && (
            <div className="bg-white p-4 border-t border-gray-200"> ... Pagination component here ... </div>
        )} */}
      </div>
    </div>
  );
};

export default SupportAgents;