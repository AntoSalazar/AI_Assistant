import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CategoryList } from './FAQTypes'; // Assuming this type definition exists

interface FAQCategoriesProps {
  categories: CategoryList[]; // Contains category names and counts - Data
  selectedCategory: string;   // Data - Identifier used for selection logic
  onCategorySelect: (category: string) => void; // Function prop
}

const FAQCategories: React.FC<FAQCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    // Styles remain unchanged
    <Card>
      <CardHeader className="pb-3">
        {/* Title - UI Text - Translated */}
        <h3 className="text-lg font-semibold">
          {t('faqCategoriesTitle', 'Categories')}
        </h3>
      </CardHeader>
      {/* Structure remains unchanged */}
      <CardContent className="p-0">
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.name} // Key uses data - unchanged
              // Styling logic remains unchanged
              className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors hover:bg-slate-100 ${
                selectedCategory === category.name ? 'bg-slate-100 font-medium' : ''
              }`}
              // onClick logic uses data - unchanged
              onClick={() => onCategorySelect(category.name)}
            >
              {/* Category Name - Data from prop - Not Translated Here */}
              <span>{category.name}</span>
              {/* Category Count - Data from prop - Not Translated */}
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