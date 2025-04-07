
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type AgentProps = {
  id: string;
  name: string;
  email: string;
  initials: string;
  phone: string;
  department: string;
  status: string;
  load: number;
};

const StatusBadge = ({ status }: { status: string }) => {
  const statusClasses = {
    online: "bg-green-100 text-green-700",
    offline: "bg-gray-100 text-gray-700",
    meeting: "bg-yellow-100 text-yellow-700"
  };
  
  const statusText = {
    online: "Online",
    offline: "Offline",
    meeting: "In Meeting"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status as keyof typeof statusClasses]}`}>
      {statusText[status as keyof typeof statusText]}
    </span>
  );
};

const LoadIndicator = ({ load }: { load: number }) => {
  // Determine color based on load percentage
  let fillColor = 'bg-green-500';
  if (load > 85) {
    fillColor = 'bg-yellow-500';
  } else if (load > 95) {
    fillColor = 'bg-red-500';
  }

  return (
    <div className="flex items-center">
      <div className="w-24 md:w-36 h-5 bg-gray-200 rounded-full overflow-hidden mr-2">
        <div
          className={`h-full ${fillColor} rounded-full`}
          style={{ width: `${load}%` }}
        />
      </div>
      <span className="text-sm font-medium">{load}%</span>
    </div>
  );
};

const AgentListItem = ({ agent }: { agent: AgentProps }) => {
  return (
    <TableRow className="hover:bg-gray-50">
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
      <TableCell>{agent.phone}</TableCell>
      <TableCell>{agent.department}</TableCell>
      <TableCell>
        <StatusBadge status={agent.status} />
      </TableCell>
      <TableCell>
        <LoadIndicator load={agent.load} />
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="sm">View</Button>
          <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-50">Edit</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem>Assign Tasks</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AgentListItem;
