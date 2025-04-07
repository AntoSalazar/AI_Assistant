
import React, { useState } from 'react';
import { Search, Plus, UserCheck, Shield, ShieldX, MoreHorizontal, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import Pagination from './Pagination';

// Mock admin user data
const adminUsers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    initials: 'SJ',
    role: 'super-admin',
    status: 'active',
    lastLogin: '10 minutes ago',
    department: 'Executive',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    initials: 'MC',
    role: 'admin',
    status: 'active',
    lastLogin: '2 hours ago',
    department: 'Customer Support',
  },
  {
    id: '3',
    name: 'Anna Rodriguez',
    email: 'anna.r@example.com',
    initials: 'AR',
    role: 'moderator',
    status: 'active',
    lastLogin: '1 day ago',
    department: 'Sales',
  },
  {
    id: '4',
    name: 'Robert Wilson',
    email: 'robert.w@example.com',
    initials: 'RW',
    role: 'admin',
    status: 'inactive',
    lastLogin: '3 days ago',
    department: 'IT',
  },
  {
    id: '5',
    name: 'Elena Petrov',
    email: 'elena.p@example.com',
    initials: 'EP',
    role: 'moderator',
    status: 'inactive',
    lastLogin: '1 week ago',
    department: 'Marketing',
  },
];

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Filter admin users based on search and filters
  const filteredUsers = adminUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Get current users for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super-admin':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'admin':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'moderator':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div>
      {/* Search and Filter Panel */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input 
            placeholder="Search admin users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="super-admin">Super Admin</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> New Admin
        </Button>
      </div>

      {/* Admin Users List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[25%]">Admin User</TableHead>
              <TableHead className="w-[15%]">Department</TableHead>
              <TableHead className="w-[15%]">Role</TableHead>
              <TableHead className="w-[15%]">Status</TableHead>
              <TableHead className="w-[15%]">Last Login</TableHead>
              <TableHead className="w-[15%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      {user.initials}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getRoleBadgeColor(user.role)}>
                    {user.role === 'super-admin' && <Shield size={14} className="mr-1" />}
                    {user.role === 'admin' && <UserCheck size={14} className="mr-1" />}
                    {user.role === 'moderator' && <UserCheck size={14} className="mr-1" />}
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                      user.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                    }`}></span>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </div>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Change Role</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-2 sm:mb-0">
              Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} admin users
            </p>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
