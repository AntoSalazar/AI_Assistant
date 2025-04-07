
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CategoryList } from './FAQTypes';

interface FAQCategoriesProps {
  categories: CategoryList[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const FAQCategories: React.FC<FAQCategoriesProps> = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold">Categories</h3>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors hover:bg-slate-100 ${
                selectedCategory === category.name ? 'bg-slate-100 font-medium' : ''
              }`}
              onClick={() => onCategorySelect(category.name)}
            >
              <span>{category.name}</span>
              <span className="text-xs text-slate-500 rounded-full px-2 py-1 bg-slate-200">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQCategories;
