import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Search, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CustomerListItem from './CustomerListItem'; // Import the component (default export)
import type { CustomerProps } from './CustomerListItem'; // <-- Use curly braces {}
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
  TableCell, // TableCell is not directly used here, but in CustomerListItem
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Pagination from './Pagination'; // Assuming this component handles its own i18n

// --- Mock customer data (unchanged) ---
const customers: CustomerProps[] = [ // <--- Add type annotation here
  { id: '1', name: 'John Doe', email: 'johndoe@example.com', initials: 'JD', phone: '+1 (555) 123-4567', lastInteraction: 'Today, 10:42 AM', status: 'active', segment: 'premium'},
  { id: '2', name: 'Sara Smith', email: 'sara.smith@example.com', initials: 'SS', phone: '+1 (555) 234-5678', lastInteraction: 'Today, 9:15 AM', status: 'active', segment: 'premium'},
  { id: '3', name: 'Mike Johnson', email: 'mike.j@example.com', initials: 'MJ', phone: '+1 (555) 345-6789', lastInteraction: 'Yesterday, 4:30 PM', status: 'active', segment: 'standard'},
  { id: '4', name: 'Anna Robinson', email: 'anna.r@example.com', initials: 'AR', phone: '+1 (555) 456-7890', lastInteraction: '2 days ago', status: 'inactive', segment: 'standard'},
  { id: '5', name: 'David Thompson', email: 'david.t@example.com', initials: 'DT', phone: '+1 (555) 567-8901', lastInteraction: '5 days ago', status: 'blocked', segment: 'standard'},
  { id: '6', name: 'Emily Wilson', email: 'emily.w@example.com', initials: 'EW', phone: '+1 (555) 678-9012', lastInteraction: '1 week ago', status: 'active', segment: 'enterprise'},
  { id: '7', name: 'Jack Brown', email: 'jack.b@example.com', initials: 'JB', phone: '+1 (555) 789-0123', lastInteraction: '2 weeks ago', status: 'inactive', segment: 'standard'},
];

// --- Structure for select options ---
const statusOptions = [
    { value: 'all', labelKey: 'customerMgmtStatusOptAll', fallback: 'All Statuses' },
    { value: 'active', labelKey: 'customerMgmtStatusOptActive', fallback: 'Active' },
    { value: 'inactive', labelKey: 'customerMgmtStatusOptInactive', fallback: 'Inactive' },
    { value: 'blocked', labelKey: 'customerMgmtStatusOptBlocked', fallback: 'Blocked' },
];

const segmentOptions = [
    { value: 'all', labelKey: 'customerMgmtSegmentOptAll', fallback: 'All Segments' },
    { value: 'standard', labelKey: 'customerMgmtSegmentOptStandard', fallback: 'Standard' },
    { value: 'premium', labelKey: 'customerMgmtSegmentOptPremium', fallback: 'Premium' },
    { value: 'enterprise', labelKey: 'customerMgmtSegmentOptEnterprise', fallback: 'Enterprise' },
];

const CustomerManagement = () => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (unchanged) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [segmentFilter, setSegmentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 7;

  // --- Filtering Logic (unchanged) ---
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter;
    return matchesSearch && matchesStatus && matchesSegment;
  });

  // --- Pagination Logic (unchanged) ---
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  // --- Generate Pagination Text ---
  const paginationText = t('customerMgmtPaginationInfo', 'Showing {{start}}-{{end}} of {{total}} customers', {
      start: filteredCustomers.length > 0 ? indexOfFirstCustomer + 1 : 0,
      end: Math.min(indexOfLastCustomer, filteredCustomers.length),
      total: filteredCustomers.length
  });

  return (
    <div>
      {/* Search and Filter Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
         {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
             // Placeholder - Translated
            placeholder={t('customerMgmtSearchPlaceholder', 'Search customers...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            aria-label={t('customerMgmtSearchPlaceholder', 'Search customers...')}
          />
        </div>
         {/* Status Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-44" aria-label={t('customerMgmtStatusSelectLabel', 'Filter by status')}>
             {/* Placeholder - Translated */}
            <SelectValue placeholder={t('customerMgmtPlaceholderAllStatuses', 'All Statuses')} />
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
         {/* Segment Filter */}
        <Select value={segmentFilter} onValueChange={setSegmentFilter}>
          <SelectTrigger className="w-full md:w-44" aria-label={t('customerMgmtSegmentSelectLabel', 'Filter by segment')}>
             {/* Placeholder - Translated */}
            <SelectValue placeholder={t('customerMgmtPlaceholderAllSegments', 'All Segments')} />
          </SelectTrigger>
          <SelectContent>
             {/* Options - Translated */}
            {segmentOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                    {t(opt.labelKey, opt.fallback)}
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
         {/* Add Button */}
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> {t('customerMgmtButtonAddNew', 'Add New')}
        </Button>
      </div>

      {/* Customer List Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
               {/* Headers - Translated */}
              <TableHead className="w-[30%]">{t('customerMgmtHeaderCustomer', 'Customer')}</TableHead>
              <TableHead className="w-[15%]">{t('customerMgmtHeaderPhone', 'Phone Number')}</TableHead>
              <TableHead className="w-[15%]">{t('customerMgmtHeaderInteraction', 'Last Interaction')}</TableHead>
              <TableHead className="w-[10%]">{t('customerMgmtHeaderStatus', 'Status')}</TableHead>
              <TableHead className="w-[10%]">{t('customerMgmtHeaderSegment', 'Segment')}</TableHead>
              <TableHead className="w-[20%] text-right">{t('customerMgmtHeaderActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {/* Render CustomerListItem - Assumes internal i18n */}
            {currentCustomers.map(customer => (
              <CustomerListItem key={customer.id} customer={customer} />
            ))}
             {/* No Results Row */}
            {currentCustomers.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                        {t('customerMgmtNoResults', 'No customers found matching your criteria.')}
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {filteredCustomers.length > 0 && totalPages > 1 && (
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                 {/* Pagination Info - Translated */}
                <p className="text-sm text-gray-600 mb-2 sm:mb-0">
                  {paginationText}
                </p>
                 {/* Pagination Component - Assumes internal i18n */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default CustomerManagement;