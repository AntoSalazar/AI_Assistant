
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type CustomerProps = {
  id: string;
  name: string;
  email: string;
  initials: string;
  phone: string;
  lastInteraction: string;
  status: string;
  segment: string;
};

const StatusBadge = ({ status }: { status: string }) => {
  const statusClasses = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-yellow-100 text-yellow-700",
    blocked: "bg-red-100 text-red-700"
  };
  
  const statusText = {
    active: "Active",
    inactive: "Inactive",
    blocked: "Blocked"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status as keyof typeof statusClasses]}`}>
      {statusText[status as keyof typeof statusText]}
    </span>
  );
};

const SegmentBadge = ({ segment }: { segment: string }) => {
  const segmentClasses = {
    standard: "bg-gray-100 text-gray-700",
    premium: "bg-blue-100 text-blue-700",
    enterprise: "bg-purple-100 text-purple-700"
  };
  
  const segmentText = {
    standard: "Standard",
    premium: "Premium",
    enterprise: "Enterprise"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${segmentClasses[segment as keyof typeof segmentClasses]}`}>
      {segmentText[segment as keyof typeof segmentText]}
    </span>
  );
};

const CustomerListItem = ({ customer }: { customer: CustomerProps }) => {
  const navigate = useNavigate();
  
  const viewCustomerProfile = () => {
    navigate(`/users/customers/${customer.id}`);
  };

  return (
    <TableRow className="hover:bg-gray-50">
      <TableCell>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
            {customer.initials}
          </div>
          <div>
            <div className="font-medium text-gray-900">{customer.name}</div>
            <div className="text-gray-500 text-sm">{customer.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{customer.phone}</TableCell>
      <TableCell>{customer.lastInteraction}</TableCell>
      <TableCell>
        <StatusBadge status={customer.status} />
      </TableCell>
      <TableCell>
        <SegmentBadge segment={customer.segment} />
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={viewCustomerProfile}>View</Button>
          <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-50">Edit</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={viewCustomerProfile}>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Block Customer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CustomerListItem;
