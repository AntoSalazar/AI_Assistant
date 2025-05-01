import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import hook
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// --- Types (assuming defined elsewhere or derived) ---
export type CustomerStatus = 'active' | 'inactive' | 'blocked';
export type CustomerSegment = 'standard' | 'premium' | 'enterprise';
export type CustomerProps = {
  id: string;
  name: string;
  email: string;
  initials: string;
  phone: string;
  lastInteraction: string;
  status: CustomerStatus; // Use specific type
  segment: CustomerSegment; // Use specific type
};

// --- Refactored StatusBadge Helper Component ---
// Accepts translated text via props
interface StatusBadgeProps {
  status: CustomerStatus; // Internal value for styling
  statusText: string; // Pre-translated text for display
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status, statusText }) => {
  // Styling logic remains based on the internal status value
  const statusClasses: Record<CustomerStatus, string> = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-yellow-100 text-yellow-700", // Adjusted to yellow for consistency with other inactive examples
    blocked: "bg-red-100 text-red-700"
  };

  return (
    // Renders the translated text passed via props
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status] || 'bg-gray-100 text-gray-700'}`}>
      {statusText}
    </span>
  );
};

// --- Refactored SegmentBadge Helper Component ---
// Accepts translated text via props
interface SegmentBadgeProps {
    segment: CustomerSegment; // Internal value for styling
    segmentText: string; // Pre-translated text for display
}
const SegmentBadge: React.FC<SegmentBadgeProps> = ({ segment, segmentText }) => {
  // Styling logic remains based on the internal segment value
  const segmentClasses: Record<CustomerSegment, string> = {
    standard: "bg-gray-100 text-gray-700",
    premium: "bg-blue-100 text-blue-700",
    enterprise: "bg-purple-100 text-purple-700"
  };

  return (
    // Renders the translated text passed via props
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${segmentClasses[segment] || 'bg-gray-100 text-gray-700'}`}>
      {segmentText}
    </span>
  );
};


// --- Helper functions for translation keys ---
const getStatusTranslationInfo = (status: CustomerStatus): { key: string; fallback: string } => {
    const map: Record<CustomerStatus, { key: string; fallback: string }> = {
        active: { key: 'customerStatusActive', fallback: 'Active' },
        inactive: { key: 'customerStatusInactive', fallback: 'Inactive' },
        blocked: { key: 'customerStatusBlocked', fallback: 'Blocked' },
    };
    return map[status] || { key: status, fallback: status };
};

const getSegmentTranslationInfo = (segment: CustomerSegment): { key: string; fallback: string } => {
    const map: Record<CustomerSegment, { key: string; fallback: string }> = {
        standard: { key: 'customerSegmentStandard', fallback: 'Standard' },
        premium: { key: 'customerSegmentPremium', fallback: 'Premium' },
        enterprise: { key: 'customerSegmentEnterprise', fallback: 'Enterprise' },
    };
    return map[segment] || { key: segment, fallback: segment };
};


// --- Main CustomerListItem Component ---
const CustomerListItem = ({ customer }: { customer: CustomerProps }) => {
  const navigate = useNavigate(); // Unchanged
  const { t } = useTranslation(); // Initialize hook

  // --- Handlers (unchanged) ---
  const viewCustomerProfile = () => {
    navigate(`/users/customers/${customer.id}`);
  };

  // --- Get translated texts ---
  const statusInfo = getStatusTranslationInfo(customer.status);
  const translatedStatusText = t(statusInfo.key, statusInfo.fallback);

  const segmentInfo = getSegmentTranslationInfo(customer.segment);
  const translatedSegmentText = t(segmentInfo.key, segmentInfo.fallback);


  return (
    // Styles remain unchanged
    <TableRow className="hover:bg-gray-50">
       {/* User Info Cell - Data - Not Translated */}
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
       {/* Phone Cell - Data - Not Translated */}
      <TableCell>{customer.phone}</TableCell>
       {/* Last Interaction Cell - Data - Not Translated */}
      <TableCell>{customer.lastInteraction}</TableCell>
       {/* Status Cell - Uses refactored StatusBadge */}
      <TableCell>
        <StatusBadge status={customer.status} statusText={translatedStatusText} />
      </TableCell>
       {/* Segment Cell - Uses refactored SegmentBadge */}
      <TableCell>
        <SegmentBadge segment={customer.segment} segmentText={translatedSegmentText} />
      </TableCell>
       {/* Actions Cell - Buttons and Dropdown items translated */}
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
           {/* Buttons - Translated */}
          <Button variant="secondary" size="sm" onClick={viewCustomerProfile}>
            {t('customerListButtonView', 'View')}
          </Button>
          <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            {t('customerListButtonEdit', 'Edit')}
          </Button>
           {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label={t('customerListActionMenuLabel', 'More actions')}>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
               {/* Dropdown Items - Translated */}
              <DropdownMenuItem onClick={viewCustomerProfile}>
                {t('customerListActionViewDetails', 'View Details')}
              </DropdownMenuItem>
              <DropdownMenuItem>{t('customerListActionEditProfile', 'Edit Profile')}</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                {t('customerListActionBlock', 'Block Customer')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CustomerListItem;