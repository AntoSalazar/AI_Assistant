import React, { useState, useEffect } from 'react'; // Added useEffect
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// --- Interfaces (unchanged, assuming definition exists) ---
interface TemplateVariable {
  name: string;
  example: string;
}

interface PromptTemplate {
  id: string;
  name: string;
  purpose: string;
  content?: string; // Data - Not translated
  variables?: TemplateVariable[]; // Data - Not translated
  status: 'active' | 'draft';
  lastModified?: string; // Added based on parent component logic
}

interface PromptTemplateEditorProps {
  template: PromptTemplate;
  onSave: (template: PromptTemplate) => void;
  onCancel: () => void;
  isCreating: boolean;
}

// Default content - could also potentially be fetched or configured
const defaultContent = 'You are a friendly customer service assistant for {company_name}.\nThis is a new customer who has contacted us for the first time.\nTheir name is {customer_name}.\nGreet them warmly, introduce yourself, and ask how you can help them today.\nMention that we offer {product_categories}.\nKeep your response concise and friendly.';
const defaultVariables = [
    { name: '{company_name}', example: 'Our Company' },
    { name: '{customer_name}', example: 'John Doe' },
    { name: '{product_categories}', example: 'smartphones, accessories, and services' }
];


const PromptTemplateEditor = ({ template, onSave, onCancel, isCreating }: PromptTemplateEditorProps) => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (initialize with defaults if creating) ---
  const [editedTemplate, setEditedTemplate] = useState<PromptTemplate>(
      // Use useEffect to update state when the template prop changes for editing
      // Initial state based on creating vs editing
      isCreating
        ? { ...template, content: template.content || defaultContent, variables: template.variables || defaultVariables }
        : template
  );

  // Update local state if the template prop changes (e.g., user selects a different template to edit)
  useEffect(() => {
      // Only update if we are editing (not creating) and the prop template is different
      if (!isCreating && template.id !== editedTemplate.id) {
          setEditedTemplate({
              ...template,
              content: template.content || defaultContent,
              variables: template.variables || defaultVariables
          });
      }
      // If switching to creating mode while editor is open, reset
      else if (isCreating && template.id === '') {
           setEditedTemplate({
              ...template, // Should have empty id, name, purpose etc. from parent
              content: template.content || defaultContent,
              variables: template.variables || defaultVariables
          });
      }
  }, [template, isCreating, editedTemplate.id]);


  // --- Handlers (logic unchanged) ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTemplate(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Set status to active when saving (original logic)
    onSave({
      ...editedTemplate,
      status: 'active'
    });
  };

  return (
    // Styles remain unchanged
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
       {/* Title - Translated */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {t('promptEditorTitle', 'Template Editor')}
      </h2>

      {/* Name and Purpose Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
           {/* Label - Translated */}
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('promptEditorLabelName', 'Template Name')}
          </label>
          <Input
            id="name"
            name="name"
            value={editedTemplate.name} // Data state - Not translated
            onChange={handleChange}
             // Placeholder - Translated
            placeholder={t('promptEditorPlaceholderName', 'Enter template name')}
            className="w-full"
          />
        </div>
        <div>
           {/* Label - Translated */}
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
            {t('promptEditorLabelPurpose', 'Purpose')}
          </label>
          <Input
            id="purpose"
            name="purpose"
            value={editedTemplate.purpose} // Data state - Not translated
            onChange={handleChange}
             // Placeholder - Translated
            placeholder={t('promptEditorPlaceholderPurpose', 'What is this template used for?')}
            className="w-full"
          />
        </div>
      </div>

      {/* Content Textarea */}
      <div className="mb-6">
         {/* Label - Translated */}
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          {t('promptEditorLabelContent', 'Prompt Template')}
        </label>
        <Textarea
          id="content"
          name="content"
          value={editedTemplate.content} // Data state - Not translated
          onChange={handleChange}
           // Placeholder - Translated
          placeholder={t('promptEditorPlaceholderContent', 'Write your prompt template here...')}
          className="min-h-[200px] w-full"
          rows={8}
        />
      </div>

      {/* Available Variables */}
      {editedTemplate.variables && editedTemplate.variables.length > 0 && (
        <div className="mb-6">
           {/* Label - Translated */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('promptEditorLabelVariables', 'Available Variables')}
          </label>
          <div className="flex flex-wrap gap-2">
            {/* Variable name and example are data - Not translated */}
            {editedTemplate.variables.map((variable, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-800 text-sm px-3 py-1 rounded-full cursor-default" // Added cursor
                title={`Example: ${variable.example}`} // Example is data
              >
                {variable.name} {/* Variable name is data/identifier */}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
         {/* Cancel Button - Translated */}
        <Button
          variant="outline"
          onClick={onCancel}
        >
          {t('promptEditorButtonCancel', 'Cancel')}
        </Button>
         {/* Save/Create Button - Translated (conditional) */}
        <Button
          className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
          onClick={handleSave}
          // Optionally disable if name/purpose is empty?
          // disabled={!editedTemplate.name || !editedTemplate.purpose}
        >
          {t(isCreating ? 'promptEditorButtonCreateTemplate' : 'promptEditorButtonSaveTemplate', isCreating ? 'Create Template' : 'Save Template')}
        </Button>
      </div>
    </div>
  );
};

export default PromptTemplateEditor;