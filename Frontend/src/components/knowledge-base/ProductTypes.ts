
import { ReactNode } from 'react';

export type ProductStatus = 'active' | 'pre-order' | 'sold-out' | 'archived' | 'draft';

export interface Product {
  id: string;
  title: string;
  category: string;
  sku: string;
  status: ProductStatus;
  icon: ReactNode;
  description?: string;
  priceRange?: string;
  availability?: string;
  lastUpdated?: string;
  colors?: string[];
  aiResponse?: string;
}



export const getStatusColor = (status: ProductStatus) => {
  switch(status) {
    case 'active': return 'bg-green-100 text-green-700 hover:bg-green-200';
    case 'pre-order': return 'bg-amber-100 text-amber-700 hover:bg-amber-200';
    case 'sold-out': return 'bg-red-100 text-red-700 hover:bg-red-200';
    default: return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
  }
};

export const getStatusText = (status: string) => {
  switch(status) {
    case 'pre-order': return 'Pre-order';
    case 'sold-out': return 'Sold Out';
    default: return 'Active';
  }
};
