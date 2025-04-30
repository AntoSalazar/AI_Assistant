import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Search, Plus, UserCheck, Shield, MoreHorizontal, Trash2 } from 'lucide-react'; // Removed ShieldX if not used
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
import Pagination from './Pagination'; // Assuming this component handles its own internal i18n

// --- Types (Assuming these roles/statuses are defined elsewhere or derive from data) ---
type UserRole = 'super-admin' | 'admin' | 'moderator';
type UserStatus = 'active' | 'inactive';
interface AdminUser {
    id: string;
    name: string;
    email: string;
    initials: string;
    role: UserRole;
    status: UserStatus;
    lastLogin: string;
    department: string;
}

// --- Mock Data (unchanged) ---
const adminUsers: AdminUser[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah.j@example.com', initials: 'SJ', role: 'super-admin', status: 'active', lastLogin: '10 minutes ago', department: 'Executive', },
  { id: '2', name: 'Michael Chen', email: 'michael.c@example.com', initials: 'MC', role: 'admin', status: 'active', lastLogin: '2 hours ago', department: 'Customer Support', },
  { id: '3', name: 'Anna Rodriguez', email: 'anna.r@example.com', initials: 'AR', role: 'moderator', status: 'active', lastLogin: '1 day ago', department: 'Sales', },
  { id: '4', name: 'Robert Wilson', email: 'robert.w@example.com', initials: 'RW', role: 'admin', status: 'inactive', lastLogin: '3 days ago', department: 'IT', },
  { id: '5', name: 'Elena Petrov', email: 'elena.p@example.com', initials: 'EP', role: 'moderator', status: 'inactive', lastLogin: '1 week ago', department: 'Marketing', },
];

// --- Helper function for role badge color (unchanged) ---
const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super-admin': return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'admin': return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'moderator': return 'bg-green-100 text-green-800 hover:bg-green-100';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
};

// --- Helper functions for translation keys ---
const getRoleTranslationInfo = (role: UserRole): { key: string; fallback: string } => {
    const map: Record<UserRole, { key: string; fallback: string }> = {
        'super-admin': { key: 'adminUsersRoleSuper', fallback: 'Super Admin' },
        'admin': { key: 'adminUsersRoleAdmin', fallback: 'Admin' },
        'moderator': { key: 'adminUsersRoleModerator', fallback: 'Moderator' },
    };
    return map[role] || { key: role, fallback: role };
};

const getStatusTranslationInfo = (status: UserStatus): { key: string; fallback: string } => {
    const map: Record<UserStatus, { key: string; fallback: string }> = {
        'active': { key: 'adminUsersStatusActive', fallback: 'Active' },
        'inactive': { key: 'adminUsersStatusInactive', fallback: 'Inactive' },
    };
    return map[status] || { key: status, fallback: status };
};

const AdminUsers = () => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (unchanged) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // --- Filtering Logic (unchanged) ---
  const filteredUsers = adminUsers.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // --- Pagination Logic (unchanged) ---
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // --- Generate Pagination Text ---
  const paginationText = t('adminUsersPaginationInfo', 'Showing {{start}}-{{end}} of {{total}} admin users', {
      start: filteredUsers.length > 0 ? indexOfFirstUser + 1 : 0,
      end: Math.min(indexOfLastUser, filteredUsers.length),
      total: filteredUsers.length
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
            placeholder={t('adminUsersSearchPlaceholder', 'Search admin users...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            aria-label={t('adminUsersSearchPlaceholder', 'Search admin users...')}
          />
        </div>
        {/* Role Filter Select */}
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-full md:w-44">
             {/* Placeholder - Translated */}
            <SelectValue placeholder={t('adminUsersPlaceholderAllRoles', 'All Roles')} />
          </SelectTrigger>
          <SelectContent>
             {/* Options - Translated */}
            <SelectItem value="all">{t('adminUsersRoleOptAll', 'All Roles')}</SelectItem>
            <SelectItem value="super-admin">{t('adminUsersRoleOptSuper', 'Super Admin')}</SelectItem>
            <SelectItem value="admin">{t('adminUsersRoleOptAdmin', 'Admin')}</SelectItem>
            <SelectItem value="moderator">{t('adminUsersRoleOptModerator', 'Moderator')}</SelectItem>
          </SelectContent>
        </Select>
        {/* Status Filter Select */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-44">
             {/* Placeholder - Translated */}
            <SelectValue placeholder={t('adminUsersPlaceholderAllStatuses', 'All Statuses')} />
          </SelectTrigger>
          <SelectContent>
             {/* Options - Translated */}
            <SelectItem value="all">{t('adminUsersStatusOptAll', 'All Statuses')}</SelectItem>
            <SelectItem value="active">{t('adminUsersStatusOptActive', 'Active')}</SelectItem>
            <SelectItem value="inactive">{t('adminUsersStatusOptInactive', 'Inactive')}</SelectItem>
          </SelectContent>
        </Select>
        {/* New Admin Button */}
        <Button className="w-full md:w-auto bg-whatsapp-primary hover:bg-green-600">
          <Plus size={16} className="mr-1" /> {t('adminUsersButtonNew', 'New Admin')}
        </Button>
      </div>

      {/* Admin Users List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              {/* Table Headers - Translated */}
              <TableHead className="w-[25%]">{t('adminUsersHeaderUser', 'Admin User')}</TableHead>
              <TableHead className="w-[15%]">{t('adminUsersHeaderDept', 'Department')}</TableHead>
              <TableHead className="w-[15%]">{t('adminUsersHeaderRole', 'Role')}</TableHead>
              <TableHead className="w-[15%]">{t('adminUsersHeaderStatus', 'Status')}</TableHead>
              <TableHead className="w-[15%]">{t('adminUsersHeaderLogin', 'Last Login')}</TableHead>
              <TableHead className="w-[15%] text-right">{t('adminUsersHeaderActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map(user => {
                const roleInfo = getRoleTranslationInfo(user.role);
                const statusInfo = getStatusTranslationInfo(user.status);
                return (
                  <TableRow key={user.id}>
                    {/* User Cell - Data - Not Translated */}
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
                    {/* Department Cell - Data - Not Translated */}
                    <TableCell>{user.department}</TableCell>
                    {/* Role Cell - Badge Text Translated */}
                    <TableCell>
                      <Badge variant="outline" className={getRoleBadgeColor(user.role)}>
                        {user.role === 'super-admin' && <Shield size={14} className="mr-1" />}
                        {(user.role === 'admin' || user.role === 'moderator') && <UserCheck size={14} className="mr-1" />}
                        {t(roleInfo.key, roleInfo.fallback)}
                      </Badge>
                    </TableCell>
                    {/* Status Cell - Badge Text Translated */}
                    <TableCell>
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                          user.status === 'active' ? 'bg-green-600' : 'bg-gray-600'
                        }`}></span>
                        {t(statusInfo.key, statusInfo.fallback)}
                      </div>
                    </TableCell>
                     {/* Last Login Cell - Data - Not Translated */}
                    <TableCell>{user.lastLogin}</TableCell>
                    {/* Actions Cell - Dropdown Items Translated */}
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0" aria-label={t('adminUsersActionMenuLabel', 'User Actions')}>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>{t('adminUsersActionEdit', 'Edit')}</DropdownMenuItem>
                          <DropdownMenuItem>{t('adminUsersActionChangeRole', 'Change Role')}</DropdownMenuItem>
                          <DropdownMenuItem>{t('adminUsersActionResetPassword', 'Reset Password')}</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            {t('adminUsersActionDelete', 'Delete')}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
            })}
            {/* No Results Row */}
            {currentUsers.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                        {t('adminUsersNoResults', 'No admin users found matching your criteria.')}
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {filteredUsers.length > 0 && totalPages > 1 && (
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

export default AdminUsers;