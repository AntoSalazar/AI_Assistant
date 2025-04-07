
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Plus, Import, Search } from 'lucide-react';
import { CategoryList } from './FAQTypes';
import FAQCategories from './FAQCategories';
import FAQList from './FAQList';
import { useNavigate } from 'react-router-dom';

const FAQManager = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Product FAQs');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // List of categories with their counts
  const categories: CategoryList[] = [
    { name: 'Product FAQs', count: 32, selected: true },
    { name: 'Shipping & Delivery', count: 18, selected: false },
    { name: 'Returns & Refunds', count: 24, selected: false },
    { name: 'Warranty Information', count: 16, selected: false },
    { name: 'Account Management', count: 20, selected: false },
    { name: 'Payment Options', count: 14, selected: false },
    { name: 'Promotions & Discounts', count: 10, selected: false },
    { name: 'Technical Support', count: 28, selected: false }
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddNew = () => {
    navigate('/knowledge-base/faq/new');
  };

  const handleEditFAQ = (faqId: string) => {
    navigate(`/knowledge-base/faq/${faqId}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Panel */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-md shadow-sm gap-4">
        <div className="flex items-center w-full md:w-auto md:flex-1 mr-0 md:mr-4">
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '-')}>
                {category.name}
              </option>
            ))}
          </select>
          
          <Button 
            className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
            onClick={handleAddNew}
          >
            <Plus className="mr-1 h-4 w-4" /> Add New
          </Button>
          
          <Button variant="secondary">
            <Import className="mr-1 h-4 w-4" /> Import FAQs
          </Button>
        </div>
      </div>

      {/* Main Content Area with Categories and FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="col-span-1">
          <FAQCategories 
            categories={categories} 
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>
        
        {/* FAQ List */}
        <div className="col-span-1 md:col-span-3">
          <FAQList 
            selectedCategory={selectedCategory} 
            searchQuery={searchQuery} 
            onEditFAQ={handleEditFAQ}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQManager;
