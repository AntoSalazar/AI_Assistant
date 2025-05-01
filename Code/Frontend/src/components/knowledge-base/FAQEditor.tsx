import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import hook
import { ArrowLeft } from 'lucide-react'; // Removed unused icons
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FAQItem } from './FAQTypes'; // Assuming this type exists
import FAQEditorToolbar from './FAQEditorToolbar'; // Assuming this component handles its own i18n
import SimilarQuestions from './SimilarQuestions'; // Assuming this component handles its own i18n
import AIPreview from './AIPreview'; // Assuming this component handles its own i18n

interface FAQEditorProps {
  faqId?: string;
}

// --- Data simulation (unchanged) ---
const getSampleFAQ = (faqId?: string): FAQItem => {
    const isNewFAQ = !faqId;
    return {
        id: faqId || 'new',
        question: isNewFAQ ? '' : 'How do I pair my Wireless Headphones with my device?',
        answer: isNewFAQ ? '' : 'Turn on the headphones by pressing the power button for 3 seconds. Press and hold the Bluetooth button until the LED flashes blue.\n\nOn your device, go to Bluetooth settings and select "WH-100" from the available devices. When connected, the LED will turn solid blue.',
        category: isNewFAQ ? 'Product FAQs' : 'Product FAQs',
        isActive: true,
        relatedProduct: 'Wireless Headphones',
        similarQuestions: [
        'How do I connect my Wireless Headphones to my phone?',
        'How to sync Wireless Headphones with Bluetooth?'
        ]
    }
};
const sampleCategories = [ 'Product FAQs', 'Shipping & Delivery', 'Returns & Refunds', 'Warranty Information', 'Account Management', 'Payment Options', 'Promotions & Discounts', 'Technical Support' ];
const sampleProducts = [ 'Wireless Headphones', 'Premium Smartphone', 'Smart Watch', 'Ultrabook Laptop', 'Smart Speaker', 'All Products' ];
// --- End Data simulation ---


const FAQEditor: React.FC<FAQEditorProps> = ({ faqId }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize hook
  const isNewFAQ = !faqId;

  // --- State and Data Setup (unchanged) ---
  const [faq, setFAQ] = useState<FAQItem>(getSampleFAQ(faqId));
  // In real app, fetch categories/products
  const categories = sampleCategories;
  const products = sampleProducts;

  // --- Event Handlers (logic unchanged) ---
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFAQ({...faq, question: e.target.value});
  };
  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFAQ({...faq, answer: e.target.value});
  };
  const handleCategoryChange = (value: string) => {
    setFAQ({...faq, category: value});
  };
  const handleProductChange = (value: string) => {
    setFAQ({...faq, relatedProduct: value});
  };
  const handleStatusToggle = () => {
    setFAQ({...faq, isActive: !faq.isActive});
  };
  const handleSimilarQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...faq.similarQuestions || []];
    updatedQuestions[index] = value;
    setFAQ({...faq, similarQuestions: updatedQuestions});
  };
  const addSimilarQuestion = () => {
    const updatedQuestions = [...faq.similarQuestions || [], ''];
    setFAQ({...faq, similarQuestions: updatedQuestions});
  };
  const removeSimilarQuestion = (index: number) => {
    const updatedQuestions = [...faq.similarQuestions || []];
    updatedQuestions.splice(index, 1);
    setFAQ({...faq, similarQuestions: updatedQuestions});
  };

  // --- Action Handlers (logic unchanged, prompt translated) ---
  const handleSave = () => {
    console.log('Saving FAQ:', faq);
    navigate('/knowledge-base');
  };
  const handleDelete = () => {
    // Get translated confirmation message
    const confirmDeleteMsg = t('faqEditorConfirmDeletePrompt', 'Are you sure you want to delete this FAQ?');
    if (window.confirm(confirmDeleteMsg)) {
      console.log('Deleting FAQ:', faq.id);
      navigate('/knowledge-base');
    }
  };

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
         {/* Page Title - Translated (conditional) */}
        <h1 className="text-2xl font-bold text-slate-800">
          {t(isNewFAQ ? 'faqEditorTitleAdd' : 'faqEditorTitleEdit', isNewFAQ ? 'Add New FAQ' : 'Edit FAQ')}
        </h1>
        <div className="flex items-center space-x-3">
           {/* Buttons - Translated */}
          <Button
            variant="outline"
            onClick={() => navigate('/knowledge-base')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('faqEditorBackButton', 'Back')}
          </Button>
          <Button
            className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
            onClick={handleSave}
          >
            {t('faqEditorSaveButton', 'Save')}
          </Button>
          {!isNewFAQ && (
            <Button
              variant="destructive"
              onClick={handleDelete}
            >
               {t('faqEditorDeleteButton', 'Delete')}
            </Button>
          )}
        </div>
      </div>

      {/* Main editor content */}
      <Card>
        <CardContent className="p-6 space-y-8">
          {/* Basic Information Section */}
          <div className="space-y-4">
             {/* Section Title - Translated */}
            <h2 className="text-lg font-semibold">
                {t('faqEditorSectionBasicInfo', 'Basic Information')}
            </h2>

            {/* Question Input */}
            <div className="space-y-2">
               {/* Label - Translated */}
              <Label htmlFor="question">{t('faqEditorLabelQuestion', 'Question')}</Label>
              <Input
                id="question"
                value={faq.question} // Data - Not translated
                onChange={handleQuestionChange}
                 // Placeholder - Translated
                placeholder={t('faqEditorPlaceholderQuestion', 'Enter the frequently asked question')}
                className="text-base"
              />
            </div>

            {/* Category and Product Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 {/* Label - Translated */}
                <Label htmlFor="category">{t('faqEditorLabelCategory', 'Category')}</Label>
                <Select
                  value={faq.category} // Data - Not translated
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger id="category">
                     {/* Placeholder - Translated */}
                    <SelectValue placeholder={t('faqEditorPlaceholderCategory', 'Select category')} />
                  </SelectTrigger>
                  <SelectContent>
                     {/* Options - Category names treated as data - Not translated here */}
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                 {/* Label - Translated */}
                <Label htmlFor="product">{t('faqEditorLabelProduct', 'Related Product')}</Label>
                <Select
                  value={faq.relatedProduct} // Data - Not translated
                  onValueChange={handleProductChange}
                >
                  <SelectTrigger id="product">
                     {/* Placeholder - Translated */}
                    <SelectValue placeholder={t('faqEditorPlaceholderProduct', 'Select related product')} />
                  </SelectTrigger>
                  <SelectContent>
                     {/* Options - Product names treated as data - Not translated here */}
                    {products.map(product => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Status Switch */}
            <div className="flex items-center space-x-2">
               {/* Label - Translated */}
              <Label htmlFor="status" className="text-base">{t('faqEditorLabelStatus', 'Status')}</Label>
              <Switch
                id="status"
                checked={faq.isActive} // Data - Not translated
                onCheckedChange={handleStatusToggle}
              />
               {/* Status Text - Translated (conditional) */}
              <span className={`text-sm ${faq.isActive ? 'text-green-600' : 'text-slate-500'}`}>
                {t(faq.isActive ? 'faqEditorStatusActive' : 'faqEditorStatusInactive', faq.isActive ? 'Active' : 'Inactive')}
              </span>
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-4">
             {/* Section Title - Translated */}
            <h2 className="text-lg font-semibold">{t('faqEditorSectionAnswer', 'Answer')}</h2>
            <div className="border rounded-md">
              {/* Toolbar Component - Assumes internal i18n */}
              <FAQEditorToolbar />
              <Textarea
                value={faq.answer} // Data - Not translated
                onChange={handleAnswerChange}
                 // Placeholder - Translated
                placeholder={t('faqEditorPlaceholderAnswer', 'Enter the answer to this question')}
                rows={8}
                className="rounded-t-none resize-none text-base"
              />
            </div>
          </div>

           {/* Child Component Sections - Assume internal i18n */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Similar Questions Section */}
            <SimilarQuestions
              questions={faq.similarQuestions || []}
              onQuestionChange={handleSimilarQuestionChange}
              onAddQuestion={addSimilarQuestion}
              onRemoveQuestion={removeSimilarQuestion}
            />

            {/* AI Preview Section */}
            <AIPreview answer={faq.answer} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQEditor;