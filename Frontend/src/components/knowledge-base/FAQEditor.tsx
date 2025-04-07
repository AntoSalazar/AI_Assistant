
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bold, Italic, Underline, Link, ListOrdered, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FAQItem } from './FAQTypes';
import FAQEditorToolbar from './FAQEditorToolbar';
import SimilarQuestions from './SimilarQuestions';
import AIPreview from './AIPreview';

interface FAQEditorProps {
  faqId?: string; // Optional ID for editing existing FAQ, undefined for new FAQ
}

const FAQEditor: React.FC<FAQEditorProps> = ({ faqId }) => {
  const navigate = useNavigate();
  const isNewFAQ = !faqId;
  
  // Sample FAQ data for editing (would be fetched from API in real implementation)
  const [faq, setFAQ] = useState<FAQItem>({
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
  });

  // Sample categories and products (would be fetched from API in real implementation)
  const categories = [
    'Product FAQs', 
    'Shipping & Delivery', 
    'Returns & Refunds', 
    'Warranty Information',
    'Account Management',
    'Payment Options',
    'Promotions & Discounts',
    'Technical Support'
  ];

  const products = [
    'Wireless Headphones',
    'Premium Smartphone',
    'Smart Watch',
    'Ultrabook Laptop',
    'Smart Speaker',
    'All Products'
  ];

  // Handlers for form state changes
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

  // Save handler
  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Saving FAQ:', faq);
    navigate('/knowledge-base'); // Go back to FAQ list
  };

  // Delete handler
  const handleDelete = () => {
    // In a real app, this would delete via API
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      console.log('Deleting FAQ:', faq.id);
      navigate('/knowledge-base'); // Go back to FAQ list
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          {isNewFAQ ? 'Add New FAQ' : 'Edit FAQ'}
        </h1>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            onClick={() => navigate('/knowledge-base')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button 
            className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
            onClick={handleSave}
          >
            Save
          </Button>
          {!isNewFAQ && (
            <Button 
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
        </div>
      </div>

      {/* Main editor content */}
      <Card>
        <CardContent className="p-6 space-y-8">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Basic Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Input 
                id="question"
                value={faq.question}
                onChange={handleQuestionChange}
                placeholder="Enter the frequently asked question"
                className="text-base"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={faq.category} 
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product">Related Product</Label>
                <Select 
                  value={faq.relatedProduct} 
                  onValueChange={handleProductChange}
                >
                  <SelectTrigger id="product">
                    <SelectValue placeholder="Select related product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map(product => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Label htmlFor="status" className="text-base">Status</Label>
              <Switch 
                id="status"
                checked={faq.isActive}
                onCheckedChange={handleStatusToggle}
              />
              <span className={`text-sm ${faq.isActive ? 'text-green-600' : 'text-slate-500'}`}>
                {faq.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
          
          {/* Answer Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Answer</h2>
            <div className="border rounded-md">
              <FAQEditorToolbar />
              <Textarea 
                value={faq.answer}
                onChange={handleAnswerChange}
                placeholder="Enter the answer to this question"
                rows={8}
                className="rounded-t-none resize-none text-base"
              />
            </div>
          </div>

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
