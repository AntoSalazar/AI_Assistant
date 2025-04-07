
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, FileDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AnalyticsFilters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-700">Date Range:</span>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px] border-gray-200">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="ytd">Year to date</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-700">Bot Model:</span>
        <Select defaultValue="gpt4">
          <SelectTrigger className="w-[140px] border-gray-200">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt4">GPT-4</SelectItem>
            <SelectItem value="llama2">LLaMA 2</SelectItem>
            <SelectItem value="all">All Models</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-700">Export:</span>
        <Button variant="outline" className="border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
          <FileDown className="h-4 w-4 mr-1" />
          PDF
        </Button>
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 text-white">
          <FileDown className="h-4 w-4 mr-1" />
          CSV
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsFilters;
