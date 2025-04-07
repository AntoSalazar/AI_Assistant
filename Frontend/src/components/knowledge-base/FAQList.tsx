
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardHeader 
} from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";
import { FAQItem } from './FAQTypes';

// Sample FAQ data (in a real app, this would come from an API/database)
const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I pair my Wireless Headphones with my device?',
    answer: 'Turn on the headphones by pressing the power button for 3 seconds. Press and hold the Bluetooth button until the LED flashes blue. On your device, go to Bluetooth settings and select "WH-100" from the available devices. When connected, the LED will turn solid blue.',
    category: 'Product FAQs',
    isActive: true
  },
  {
    id: '2',
    question: 'What is the battery life of the Premium Smartphone?',
    answer: 'The Premium Smartphone features a 4500mAh battery that provides up to 18 hours of usage time with normal use. This may vary based on usage patterns, apps running, screen brightness, and network conditions.',
    category: 'Product FAQs',
    isActive: true
  },
  {
    id: '3',
    question: 'Are the Smart Watches water resistant?',
    answer: 'Yes, our Smart Watches are water resistant up to 50 meters (5 ATM). They can be worn while swimming in shallow water, but should not be used for scuba diving or high-velocity water activities.',
    category: 'Product FAQs',
    isActive: true
  },
  {
    id: '4',
    question: 'What operating system does the Ultrabook Laptop use?',
    answer: 'The Ultrabook Laptop comes pre-installed with the latest Windows 11 Pro operating system. We also offer models with Linux if specifically requested at the time of purchase.',
    category: 'Product FAQs',
    isActive: false
  },
  {
    id: '5',
    question: 'Can I connect multiple devices to the Smart Speaker?',
    answer: 'Yes, the Smart Speaker can connect to up to 8 devices via Bluetooth and remember them for future use. However, only one device can be actively streaming audio to the speaker at any given time.',
    category: 'Product FAQs',
    isActive: true
  },
];

interface FAQListProps {
  selectedCategory: string;
  searchQuery: string;
  onEditFAQ: (faqId: string) => void;
}

const FAQList: React.FC<FAQListProps> = ({ selectedCategory, searchQuery, onEditFAQ }) => {
  // Filter FAQs based on category and search query
  const filteredFAQs = faqData.filter(faq => 
    faq.category === selectedCategory && 
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFAQs = filteredFAQs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFAQs.length / itemsPerPage);

  return (
    <Card>
      <CardHeader className="border-b bg-muted/50 pb-3">
        <div>
          <h3 className="text-lg font-semibold">{selectedCategory}</h3>
          <p className="text-sm text-slate-500">
            {filteredFAQs.length} frequently asked questions about this category
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
                      {faq.question}
                    </AccordionTrigger>
                    <div className="flex items-center gap-2 ml-4">
                      {!faq.isActive && (
                        <Badge variant="outline" className="bg-slate-100 text-slate-700">
                          Inactive
                        </Badge>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditFAQ(faq.id);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <AccordionContent className="text-slate-700 pb-4 pt-0">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between p-4 border-t">
                <div className="text-sm text-slate-600">
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredFAQs.length)} of {filteredFAQs.length} FAQs
                </div>
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
          <div className="p-8 text-center">
            <p className="text-slate-500">No FAQs found matching your criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FAQList;
