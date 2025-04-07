
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, Calendar } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const ConversationsFilters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-2 flex-grow max-w-md">
        <Input 
          placeholder="Search conversations..." 
          className="border-gray-200" 
        />
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
          <Search className="h-4 w-4" />
          <span className="ml-1">Search</span>
        </Button>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-700">Status:</span>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px] border-gray-200">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="escalated">Escalated</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-700">Date:</span>
        <Select defaultValue="7days">
          <SelectTrigger className="w-[150px] border-gray-200">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Last 7 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 ml-auto">
        <Plus className="h-4 w-4 mr-1" />
        New Message
      </Button>
    </div>
  );
};

export default ConversationsFilters;
