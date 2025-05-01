import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Structure for select options (cleaner mapping)
const templateOptions = [
    { value: 'custom', labelKey: 'llmPlaygroundOptTemplateCustom', fallback: 'Custom Prompt' },
    { value: 'product-inquiry', labelKey: 'llmPlaygroundOptTemplateProduct', fallback: 'Product Inquiry Handler' },
    { value: 'support', labelKey: 'llmPlaygroundOptTemplateSupport', fallback: 'Support Query Response' },
    { value: 'order', labelKey: 'llmPlaygroundOptTemplateOrder', fallback: 'Order Status Tracker' },
];

const modelOptions = [
    { value: 'gpt4o', labelKey: 'llmPlaygroundOptModelGpt4o', fallback: 'GPT-4o' }, // Adjusted value for consistency
    { value: 'gpt4o-mini', labelKey: 'llmPlaygroundOptModelGpt4oMini', fallback: 'GPT-4o Mini' }, // Adjusted value
    { value: 'claude3-sonnet', labelKey: 'llmPlaygroundOptModelClaude3Sonnet', fallback: 'Claude 3 Sonnet' }, // Adjusted value
];


const LLMTestingPlayground = () => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (unchanged) ---
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // --- Handler Logic (unchanged, using placeholder response) ---
  const handleGenerateResponse = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      // The simulated response text itself is treated as data, not translated here.
      setResponse("This is a simulated AI response based on your prompt. In a production environment, this would connect to your configured LLM API to generate a real response based on your templates and parameters.");
      setIsGenerating(false);
    }, 1500);
  };

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      <Card>
        <CardHeader>
           {/* Card Title - Translated */}
          <CardTitle>{t('llmPlaygroundTitle', 'Testing Playground')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Template Select */}
            <div>
               {/* Label - Translated */}
              <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-1">
                {t('llmPlaygroundLabelTemplate', 'Template')}
              </label>
              <Select defaultValue="custom">
                <SelectTrigger id="template"> {/* Added id for label association */}
                   {/* Placeholder - Translated */}
                  <SelectValue placeholder={t('llmPlaygroundPlaceholderTemplate', 'Select a template')} />
                </SelectTrigger>
                <SelectContent>
                   {/* Options - Text translated, value unchanged */}
                   {templateOptions.map(opt => (
                       <SelectItem key={opt.value} value={opt.value}>
                           {t(opt.labelKey, opt.fallback)}
                       </SelectItem>
                   ))}
                </SelectContent>
              </Select>
            </div>

            {/* Model Select */}
            <div>
               {/* Label - Translated */}
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                {t('llmPlaygroundLabelModel', 'Model')}
              </label>
              <Select defaultValue="gpt4o"> {/* Updated default value */}
                <SelectTrigger id="model"> {/* Added id */}
                   {/* Placeholder - Translated */}
                  <SelectValue placeholder={t('llmPlaygroundPlaceholderModel', 'Select a model')} />
                </SelectTrigger>
                <SelectContent>
                   {/* Options - Text translated, value unchanged */}
                   {modelOptions.map(opt => (
                       <SelectItem key={opt.value} value={opt.value}>
                           {t(opt.labelKey, opt.fallback)}
                       </SelectItem>
                   ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Prompt and Response Area */}
          <div className="space-y-4">
            {/* Prompt Input */}
            <div>
               {/* Label - Translated */}
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                {t('llmPlaygroundLabelPrompt', 'Prompt')}
              </label>
              <Textarea
                id="prompt"
                value={prompt} // State data - Not translated
                onChange={(e) => setPrompt(e.target.value)}
                 // Placeholder - Translated
                placeholder={t('llmPlaygroundPlaceholderPrompt', 'Type your prompt here...')}
                className="min-h-[150px]"
                rows={5}
              />
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleGenerateResponse}
                disabled={isGenerating || !prompt.trim()} // Logic unchanged
                className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
              >
                 {/* Button Text - Translated (conditional) */}
                {t(isGenerating ? 'llmPlaygroundButtonGenerating' : 'llmPlaygroundButtonGenerate', isGenerating ? 'Generating...' : 'Generate Response')}
              </Button>
            </div>

            {/* Response Area (conditional) */}
            {(response || isGenerating) && (
              <div>
                 {/* Label - Translated */}
                <label htmlFor="response" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('llmPlaygroundLabelResponse', 'Response')}
                </label>
                {/* Response container styling unchanged */}
                <div id="response" className="rounded-md border border-input p-4 bg-slate-50 min-h-[150px]">
                  {isGenerating ? (
                     // Spinner unchanged
                    <div className="flex justify-center items-center h-[150px]">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-whatsapp-primary"></div>
                    </div>
                  ) : (
                     // Response text - Data - Not Translated
                    <p className="whitespace-pre-wrap">{response}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LLMTestingPlayground;