import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
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
  const { t } = useTranslation(); // Initialize translation hook

  // Define options structure for easier mapping and translation
  const statusOptions = [
    { value: 'all', labelKey: 'filterStatusAll', fallback: 'All' },
    { value: 'active', labelKey: 'filterStatusActive', fallback: 'Active' },
    { value: 'escalated', labelKey: 'filterStatusEscalated', fallback: 'Escalated' },
    { value: 'resolved', labelKey: 'filterStatusResolved', fallback: 'Resolved' },
    { value: 'pending', labelKey: 'filterStatusPending', fallback: 'Pending' },
  ];

  const dateOptions = [
    { value: 'today', labelKey: 'filterDateToday', fallback: 'Today' },
    { value: '7days', labelKey: 'filterDateLast7Days', fallback: 'Last 7 days' },
    { value: '30days', labelKey: 'filterDateLast30Days', fallback: 'Last 30 days' },
    { value: 'custom', labelKey: 'filterDateCustomRange', fallback: 'Custom range' },
  ];

  // Find the default labels based on keys for placeholders
  const defaultStatusLabel = statusOptions.find(opt => opt.value === 'all');
  const defaultDateLabel = dateOptions.find(opt => opt.value === '7days');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
      {/* Search Input and Button */}
      <div className="flex items-center gap-2 flex-grow sm:flex-grow-0 sm:w-auto max-w-md"> {/* Adjust flex growth */}
        <Input
          // Placeholder - UI Text - Translated
          placeholder={t('filterSearchPlaceholder', 'Search conversations...')}
          className="border-gray-200"
          aria-label={t('filterSearchPlaceholder', 'Search conversations...')} // Accessibility
        />
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
          <Search className="h-4 w-4" />
          {/* Search Button Text - UI Text - Translated */}
          <span className="ml-1 hidden sm:inline">{t('filterSearchButton', 'Search')}</span> {/* Hide text on very small screens */}
        </Button>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-3">
        {/* Status Label - UI Text - Translated */}
        <span className="font-semibold text-gray-700">{t('filterStatusLabel', 'Status:')}</span>
        <Select defaultValue="all"> {/* Default value uses the internal identifier */}
          <SelectTrigger className="w-[130px] border-gray-200"> {/* Increased width slightly */}
             {/* Placeholder will show the translated text of the default selected item */}
            <SelectValue placeholder={t(defaultStatusLabel?.labelKey || 'filterStatusAll', defaultStatusLabel?.fallback || 'All')} />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map(option => (
              // Select Item: Value is internal identifier (NOT translated), Text Content IS translated
              <SelectItem key={option.value} value={option.value}>
                {t(option.labelKey, option.fallback)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Filter */}
      <div className="flex items-center gap-3">
         {/* Date Label - UI Text - Translated */}
        <span className="font-semibold text-gray-700">{t('filterDateLabel', 'Date:')}</span>
        <Select defaultValue="7days"> {/* Default value uses the internal identifier */}
          <SelectTrigger className="w-[160px] border-gray-200"> {/* Increased width slightly */}
            <Calendar className="h-4 w-4 mr-2 text-gray-500" /> {/* Added color */}
            {/* Placeholder will show the translated text of the default selected item */}
            <SelectValue placeholder={t(defaultDateLabel?.labelKey || 'filterDateLast7Days', defaultDateLabel?.fallback || 'Last 7 days')} />
          </SelectTrigger>
          <SelectContent>
             {dateOptions.map(option => (
              // Select Item: Value is internal identifier (NOT translated), Text Content IS translated
              <SelectItem key={option.value} value={option.value}>
                {t(option.labelKey, option.fallback)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* New Message Button */}
      {/* Use ml-auto on the button itself or wrap filters to push it right */}
      <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90 md:ml-auto"> {/* ml-auto pushes it right on medium screens and up */}
        <Plus className="h-4 w-4 mr-1" />
         {/* Button Text - UI Text - Translated */}
        {t('filterNewMessageButton', 'New Message')}
      </Button>
    </div>
  );
};

export default ConversationsFilters;