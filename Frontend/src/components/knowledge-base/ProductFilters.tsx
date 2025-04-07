
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Grid2x2, List } from 'lucide-react';

interface ProductFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  categories: string[];
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
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-md shadow-sm">
      <div className="w-full sm:max-w-xs">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <select 
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        
        <select 
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="pre-order">Pre-order</option>
          <option value="sold-out">Sold Out</option>
        </select>
        
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
          + Add New
        </Button>
        
        <div className="flex rounded-md border border-input overflow-hidden">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'} 
            onClick={() => setViewMode('grid')}
            className="rounded-none h-10 px-3"
          >
            <Grid2x2 size={18} />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'ghost'} 
            onClick={() => setViewMode('list')}
            className="rounded-none h-10 px-3"
          >
            <List size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
