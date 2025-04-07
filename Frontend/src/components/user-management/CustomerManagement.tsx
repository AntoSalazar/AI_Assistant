
import React, { useState } from 'react';
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CustomerListItem from './CustomerListItem';
import Pagination from './Pagination';

// Mock customer data
const customers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    initials: 'JD',
    phone: '+1 (555) 123-4567',
    lastInteraction: 'Today, 10:42 AM',
    status: 'active',
    segment: 'premium',
  },
  {
    id: '2',
    name: 'Sara Smith',
    email: 'sara.smith@example.com',
    initials: 'SS',
    phone: '+1 (555) 234-5678',
    lastInteraction: 'Today, 9:15 AM',
    status: 'active',
    segment: 'premium',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    initials: 'MJ',
    phone: '+1 (555) 345-6789',
    lastInteraction: 'Yesterday, 4:30 PM',
    status: 'active',
    segment: 'standard',
  },
  {
    id: '4',
    name: 'Anna Robinson',
    email: 'anna.r@example.com',
    initials: 'AR',
    phone: '+1 (555) 456-7890',
    lastInteraction: '2 days ago',
    status: 'inactive',
    segment: 'standard',
  },
  {
    id: '5',
    name: 'David Thompson',
    email: 'david.t@example.com',
    initials: 'DT',
    phone: '+1 (555) 567-8901',
    lastInteraction: '5 days ago',
    status: 'blocked',
    segment: 'standard',
  },
  {
    id: '6',
    name: 'Emily Wilson',
    email: 'emily.w@example.com',
    initials: 'EW',
    phone: '+1 (555) 678-9012',
    lastInteraction: '1 week ago',
    status: 'active',
    segment: 'enterprise',
  },
  {
    id: '7',
    name: 'Jack Brown',
    email: 'jack.b@example.com',
    initials: 'JB',
    phone: '+1 (555) 789-0123',
    lastInteraction: '2 weeks ago',
    status: 'inactive',
    segment: 'standard',
  },
];

const CustomerManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [segmentFilter, setSegmentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 7;

  // Filter customers based on search query and filters
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery);
    
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter;
    
    return matchesSearch && matchesStatus && matchesSegment;
  });

  // Get current customers for pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <div>
      {/* Search and Filter Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input 
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>
        <Select value={segmentFilter} onValueChange={setSegmentFilter}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="All Segments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Segments</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> Add New
        </Button>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[30%]">Customer</TableHead>
              <TableHead className="w-[15%]">Phone Number</TableHead>
              <TableHead className="w-[15%]">Last Interaction</TableHead>
              <TableHead className="w-[10%]">Status</TableHead>
              <TableHead className="w-[10%]">Segment</TableHead>
              <TableHead className="w-[20%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCustomers.map(customer => (
              <CustomerListItem key={customer.id} customer={customer} />
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-2 sm:mb-0">
              Showing {indexOfFirstCustomer + 1}-{Math.min(indexOfLastCustomer, filteredCustomers.length)} of {filteredCustomers.length} customers
            </p>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredCustomers.length / customersPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
