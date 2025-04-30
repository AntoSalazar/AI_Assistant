import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Grid2x2, List, Plus } from 'lucide-react'; // Added Plus

interface ProductFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  categories: string[]; // Category names treated as data here
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  viewMode,
  setViewMode,
  categories
}) => {
  const { t } = useTranslation(); // Initialize hook

  // Define status options for easier mapping
  const statusOptions = [
    { value: 'all', labelKey: 'productFiltersSelectAllStatuses', fallback: 'All Statuses' },
    { value: 'active', labelKey: 'productFiltersStatusActive', fallback: 'Active' },
    // Note: Original code used 'pre-order' and 'sold-out'. Adjust keys if your ProductStatus uses different values.
    // Assuming ProductStatus might use 'pre_order', 'sold_out' internally. Using original values for keys.
    { value: 'pre-order', labelKey: 'productFiltersStatusPreOrder', fallback: 'Pre-order' },
    { value: 'sold-out', labelKey: 'productFiltersStatusSoldOut', fallback: 'Sold Out' },
  ];


  return (
    // Styles remain unchanged
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-md shadow-sm">
      {/* Search Input */}
      <div className="w-full sm:max-w-xs">
        <Input
          // Placeholder - UI Text - Translated
          placeholder={t('productFiltersSearchPlaceholder', 'Search products...')}
          value={searchQuery} // State value - unchanged
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={t('productFiltersSearchPlaceholder', 'Search products...')} // Accessibility
        />
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto"> {/* Use flex-wrap */}
        {/* Category Select */}
        <select
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          value={categoryFilter} // State value - unchanged
          onChange={(e) => setCategoryFilter(e.target.value)}
          aria-label={t('productFiltersCategorySelectLabel', 'Filter by category')} // Accessibility
        >
           {/* Default Option - UI Text - Translated */}
          <option value="all">{t('productFiltersSelectAllCategories', 'All Categories')}</option>
           {/* Mapped Options - Category names from props (data) - Not Translated Here */}
          {categories.map(category => (
            <option key={category} value={category}>{category}</option> // Value uses category name directly
          ))}
        </select>

        {/* Status Select */}
        <select
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          value={statusFilter} // State value - unchanged
          onChange={(e) => setStatusFilter(e.target.value)}
          aria-label={t('productFiltersStatusSelectLabel', 'Filter by status')} // Accessibility
        >
           {/* Status Options - Display text translated, value unchanged */}
           {statusOptions.map(opt => (
               <option key={opt.value} value={opt.value}>
                   {t(opt.labelKey, opt.fallback)}
               </option>
           ))}
        </select>

         {/* Add New Button - UI Text - Translated */}
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
          <Plus className="mr-1 h-4 w-4" /> {t('productFiltersButtonAddNew', 'Add New')}
        </Button>

        {/* View Mode Toggle */}
        <div className="flex rounded-md border border-input overflow-hidden ml-auto sm:ml-0"> {/* Push right on small screens? */}
           {/* Added aria-label for accessibility */}
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            onClick={() => setViewMode('grid')}
            className="rounded-none h-10 px-3"
            aria-label={t('productFiltersButtonGridViewLabel', 'Grid View')}
          >
            <Grid2x2 size={18} />
          </Button>
           {/* Added aria-label for accessibility */}
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            onClick={() => setViewMode('list')}
            className="rounded-none h-10 px-3"
            aria-label={t('productFiltersButtonListViewLabel', 'List View')}
          >
            <List size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;