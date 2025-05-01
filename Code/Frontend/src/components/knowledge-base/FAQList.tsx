import React, { useState, useEffect } from 'react'; // Added useEffect for potential future use, though not strictly needed for this refactor
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { FAQItem } from './FAQTypes'; // Assuming this type exists

// --- Sample Data (unchanged) ---
const faqData: FAQItem[] = [
  { id: '1', question: 'How do I pair my Wireless Headphones with my device?', answer: 'Turn on the headphones...', category: 'Product FAQs', isActive: true },
  { id: '2', question: 'What is the battery life of the Premium Smartphone?', answer: 'The Premium Smartphone features...', category: 'Product FAQs', isActive: true },
  { id: '3', question: 'Are the Smart Watches water resistant?', answer: 'Yes, our Smart Watches are...', category: 'Product FAQs', isActive: true },
  { id: '4', question: 'What operating system does the Ultrabook Laptop use?', answer: 'The Ultrabook Laptop comes...', category: 'Product FAQs', isActive: false },
  { id: '5', question: 'Can I connect multiple devices to the Smart Speaker?', answer: 'Yes, the Smart Speaker can connect...', category: 'Product FAQs', isActive: true },
];

interface FAQListProps {
  selectedCategory: string; // Data - Not translated here
  searchQuery: string;      // Data - Not translated here
  onEditFAQ: (faqId: string) => void; // Function prop
}

const FAQList: React.FC<FAQListProps> = ({ selectedCategory, searchQuery, onEditFAQ }) => {
  const { t } = useTranslation(); // Initialize hook

  // --- Filtering Logic (unchanged) ---
  const filteredFAQs = faqData.filter(faq =>
    faq.category === selectedCategory &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // --- Pagination State and Logic (unchanged) ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFAQs = filteredFAQs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFAQs.length / itemsPerPage);

  // Reset page if filters change causing current page to be invalid
  useEffect(() => {
      if (currentPage > totalPages && totalPages > 0) {
          setCurrentPage(totalPages);
      } else if (totalPages === 0) {
          setCurrentPage(1);
      }
  }, [filteredFAQs.length, totalPages, currentPage]);


  // Generate pagination info text
  const paginationInfoText = t('faqListPaginationInfo', 'Showing {{start}}-{{end}} of {{total}} FAQs', {
      start: filteredFAQs.length > 0 ? indexOfFirstItem + 1 : 0,
      end: Math.min(indexOfLastItem, filteredFAQs.length),
      total: filteredFAQs.length
  });

  return (
    // Styles remain unchanged
    <Card>
      <CardHeader className="border-b bg-muted/50 pb-3">
        <div>
           {/* Category Title - Data - Not Translated */}
          <h3 className="text-lg font-semibold">{selectedCategory}</h3>
           {/* Header Description - UI Text - Translated with Interpolation */}
          <p className="text-sm text-slate-500">
            {t('faqListHeaderDesc', '{{count}} frequently asked questions about this category', { count: filteredFAQs.length })}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {currentFAQs.length > 0 ? (
          <>
            <Accordion type="single" collapsible className="border-b-0">
              {currentFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b px-4"
                >
                  <div className="flex items-start justify-between py-4">
                    <AccordionTrigger className="flex-1 text-left font-medium hover:no-underline">
                      {/* Question - Data - Not Translated */}
                      {faq.question}
                    </AccordionTrigger>
                    <div className="flex items-center gap-2 ml-4">
                      {/* Inactive Badge - Text Translated */}
                      {!faq.isActive && (
                        <Badge variant="outline" className="bg-slate-100 text-slate-700">
                          {t('faqListStatusInactive', 'Inactive')}
                        </Badge>
                      )}
                      {/* Edit Button - Icon only, no text */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent accordion toggle
                          onEditFAQ(faq.id);
                        }}
                        aria-label={t('faqListEditButtonLabel', 'Edit FAQ')} // Accessibility Label
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <AccordionContent className="text-slate-700 pb-4 pt-0">
                     {/* Answer - Data - Not Translated */}
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between p-4 border-t">
                 {/* Pagination Info - UI Text - Translated with Interpolation */}
                <div className="text-sm text-slate-600">
                  {paginationInfoText}
                </div>
                {/* Pagination Component - Assumes internal i18n or no text needed */}
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                      </PaginationItem>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={page === currentPage}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
           // No Results Message - UI Text - Translated
          <div className="p-8 text-center">
            <p className="text-slate-500">
                {t('faqListNoResults', 'No FAQs found matching your criteria.')}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FAQList;