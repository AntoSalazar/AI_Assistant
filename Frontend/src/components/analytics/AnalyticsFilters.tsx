import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
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
  const { t } = useTranslation(); // Get translation function

  return (
    // Styles unchanged
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
       {/* Styles unchanged */}
      <div className="flex items-center gap-3">
        {/* Use translation key */}
        <span className="font-semibold text-gray-700">{t('dateRange', 'Date Range:')}</span> {/* STYLE UNCHANGED, Text Translated */}
        {/* Select value remains English */}
        <Select defaultValue="30days">
           {/* Styles unchanged */}
          <SelectTrigger className="w-[180px] border-gray-200">
            <Calendar className="h-4 w-4 mr-2" /> {/* Icon unchanged */}
            {/* Use translation key for placeholder */}
            <SelectValue placeholder={t('selectPeriodPlaceholder', 'Select period')} /> {/* Text Translated */}
          </SelectTrigger>
          <SelectContent>
            {/* SelectItem values remain English, Text uses translation keys */}
            <SelectItem value="7days">{t('last7Days', 'Last 7 days')}</SelectItem>
            <SelectItem value="30days">{t('last30Days', 'Last 30 days')}</SelectItem>
            <SelectItem value="90days">{t('last90Days', 'Last 90 days')}</SelectItem>
            <SelectItem value="ytd">{t('yearToDate', 'Year to date')}</SelectItem>
            <SelectItem value="custom">{t('customRange', 'Custom range')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

       {/* Styles unchanged */}
      <div className="flex items-center gap-3">
        {/* Use translation key */}
        <span className="font-semibold text-gray-700">{t('aiModel', 'AI Model:')}</span> {/* STYLE UNCHANGED, Text Translated */}
         {/* Select value remains English */}
        <Select defaultValue="gpt4">
           {/* Styles unchanged */}
          <SelectTrigger className="w-[140px] border-gray-200">
             {/* Use translation key for placeholder */}
            <SelectValue placeholder={t('selectModelPlaceholder', 'Select model')} /> {/* Text Translated */}
          </SelectTrigger>
          <SelectContent>
            {/* Keep model names as they are proper identifiers */}
            {/* Use translation key for 'All Models' */}
            <SelectItem value="gpt4">GPT-4</SelectItem> {/* Model Name Kept */}
            <SelectItem value="llama2">LLaMA 2</SelectItem> {/* Model Name Kept */}
            <SelectItem value="all">{t('allModels', 'All Models')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Styles unchanged */}
      <div className="flex items-center gap-3">
        {/* Use translation key */}
        <span className="font-semibold text-gray-700">{t('exportLabel', 'Export:')}</span> {/* STYLE UNCHANGED, Text Translated */}
        {/* Styles unchanged */}
        <Button variant="outline" className="border-whatsapp-primary text-whatsapp-primary hover:bg-whatsapp-primary/10">
          <FileDown className="h-4 w-4 mr-1" /> {/* Icon unchanged */}
          PDF {/* Acronym Kept */}
        </Button>
         {/* Styles unchanged */}
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 text-white">
          <FileDown className="h-4 w-4 mr-1" /> {/* Icon unchanged */}
          CSV {/* Acronym Kept */}
        </Button>
      </div>
    </div>
  );
};

export default AnalyticsFilters;