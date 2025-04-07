
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
import AgentListItem from './AgentListItem';
import AgentStatistics from './AgentStatistics';
import Pagination from './Pagination';

// Mock agents data
const agents = [
  {
    id: '1',
    name: 'Robert Johnson',
    email: 'robert.j@company.com',
    initials: 'RJ',
    phone: '+1 (555) 987-6543',
    department: 'Technical Support',
    status: 'online',
    load: 75,
  },
  {
    id: '2',
    name: 'Lisa Garcia',
    email: 'lisa.g@company.com',
    initials: 'LG',
    phone: '+1 (555) 876-5432',
    department: 'Sales Support',
    status: 'online',
    load: 40,
  },
  {
    id: '3',
    name: 'Thomas Nelson',
    email: 'thomas.n@company.com',
    initials: 'TN',
    phone: '+1 (555) 765-4321',
    department: 'Customer Support',
    status: 'offline',
    load: 0,
  },
  {
    id: '4',
    name: 'Maria Chen',
    email: 'maria.c@company.com',
    initials: 'MC',
    phone: '+1 (555) 654-3210',
    department: 'Technical Support',
    status: 'online',
    load: 90,
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.b@company.com',
    initials: 'DB',
    phone: '+1 (555) 543-2109',
    department: 'Sales Support',
    status: 'meeting',
    load: 60,
  },
  {
    id: '6',
    name: 'Sarah Parker',
    email: 'sarah.p@company.com',
    initials: 'SP',
    phone: '+1 (555) 432-1098',
    department: 'Customer Support',
    status: 'offline',
    load: 0,
  },
];

const SupportAgents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 6;

  // Filter agents based on search query and filters
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.phone.includes(searchQuery);
    
    const matchesStatus = statusFilter === 'all' || agent.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || agent.department.toLowerCase().replace(' ', '-') === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  // Get current agents for pagination
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);

  // Calculate agent statistics
  const totalAgents = agents.length;
  const onlineAgents = agents.filter(agent => agent.status === 'online').length;
  const averageLoad = agents.reduce((total, agent) => total + agent.load, 0) / totalAgents;

  return (
    <div>
      {/* Search and Filter Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input 
            placeholder="Search agents..."
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
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="meeting">In Meeting</SelectItem>
          </SelectContent>
        </Select>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="technical-support">Technical Support</SelectItem>
            <SelectItem value="sales-support">Sales Support</SelectItem>
            <SelectItem value="customer-support">Customer Support</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> Add New
        </Button>
      </div>

      {/* Agents List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[30%]">Agent</TableHead>
              <TableHead className="w-[15%]">Phone Number</TableHead>
              <TableHead className="w-[15%]">Department</TableHead>
              <TableHead className="w-[10%]">Status</TableHead>
              <TableHead className="w-[10%]">Load</TableHead>
              <TableHead className="w-[20%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentAgents.map(agent => (
              <AgentListItem key={agent.id} agent={agent} />
            ))}
          </TableBody>
        </Table>
        
        {/* Agent Statistics */}
        <AgentStatistics 
          totalAgents={totalAgents}
          onlineAgents={onlineAgents}
          averageLoad={averageLoad}
        />
      </div>
    </div>
  );
};

export default SupportAgents;
