
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LLMTestingPlayground = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  
  const handleGenerateResponse = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate a response - in a real app this would be an API call
    setTimeout(() => {
      setResponse("This is a simulated AI response based on your prompt. In a production environment, this would connect to your configured LLM API to generate a real response based on your templates and parameters.");
      setIsGenerating(false);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Testing Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-1">Template</label>
              <Select defaultValue="custom">
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">Custom Prompt</SelectItem>
                  <SelectItem value="product-inquiry">Product Inquiry Handler</SelectItem>
                  <SelectItem value="support">Support Query Response</SelectItem>
                  <SelectItem value="order">Order Status Tracker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <Select defaultValue="gpt4">
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt4">GPT-4o</SelectItem>
                  <SelectItem value="gpt4-mini">GPT-4o Mini</SelectItem>
                  <SelectItem value="claude">Claude 3 Sonnet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">Prompt</label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your prompt here..."
                className="min-h-[150px]"
                rows={5}
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleGenerateResponse}
                disabled={isGenerating || !prompt.trim()}
                className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
              >
                {isGenerating ? 'Generating...' : 'Generate Response'}
              </Button>
            </div>
            
            {(response || isGenerating) && (
              <div>
                <label htmlFor="response" className="block text-sm font-medium text-gray-700 mb-1">Response</label>
                <div className="rounded-md border border-input p-4 bg-slate-50 min-h-[150px]">
                  {isGenerating ? (
                    <div className="flex justify-center items-center h-[150px]">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-whatsapp-primary"></div>
                    </div>
                  ) : (
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
