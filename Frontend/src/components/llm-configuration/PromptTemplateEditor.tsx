
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface TemplateVariable {
  name: string;
  example: string;
}

interface PromptTemplate {
  id: string;
  name: string;
  purpose: string;
  content?: string;
  variables?: TemplateVariable[];
  status: 'active' | 'draft';
}

interface PromptTemplateEditorProps {
  template: PromptTemplate;
  onSave: (template: PromptTemplate) => void;
  onCancel: () => void;
  isCreating: boolean;
}

const PromptTemplateEditor = ({ template, onSave, onCancel, isCreating }: PromptTemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<PromptTemplate>({
    ...template,
    content: template.content || 'You are a friendly customer service assistant for {company_name}.\nThis is a new customer who has contacted us for the first time.\nTheir name is {customer_name}.\nGreet them warmly, introduce yourself, and ask how you can help them today.\nMention that we offer {product_categories}.\nKeep your response concise and friendly.',
    variables: template.variables || [
      { name: '{company_name}', example: 'Our Company' },
      { name: '{customer_name}', example: 'John Doe' },
      { name: '{product_categories}', example: 'smartphones, accessories, and services' }
    ]
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTemplate(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    onSave({
      ...editedTemplate,
      status: 'active'
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Template Editor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
          <Input
            id="name"
            name="name"
            value={editedTemplate.name}
            onChange={handleChange}
            placeholder="Enter template name"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
          <Input
            id="purpose"
            name="purpose"
            value={editedTemplate.purpose}
            onChange={handleChange}
            placeholder="What is this template used for?"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Prompt Template</label>
        <Textarea
          id="content"
          name="content"
          value={editedTemplate.content}
          onChange={handleChange}
          placeholder="Write your prompt template here..."
          className="min-h-[200px] w-full"
          rows={8}
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Available Variables</label>
        <div className="flex flex-wrap gap-2">
          {editedTemplate.variables?.map((variable, index) => (
            <span 
              key={index} 
              className="bg-slate-100 text-slate-800 text-sm px-3 py-1 rounded-full"
              title={`Example: ${variable.example}`}
            >
              {variable.name}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
          onClick={handleSave}
        >
          {isCreating ? 'Create' : 'Save'} Template
        </Button>
      </div>
    </div>
  );
};

export default PromptTemplateEditor;
