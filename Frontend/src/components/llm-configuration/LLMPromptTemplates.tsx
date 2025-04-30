import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PromptTemplateEditor from './PromptTemplateEditor'; // Assuming this handles its own i18n

// Sample template data (structure unchanged, data values not translated)
const initialTemplates: Template[] = [
  { id: '1', name: 'Product Inquiry Handler', purpose: 'Handle product information requests', lastModified: 'Mar 26, 2025', status: 'active' as TemplateStatus },
  { id: '2', name: 'Support Query Response', purpose: 'Handle customer support tickets', lastModified: 'Mar 25, 2025', status: 'active' as TemplateStatus },
  { id: '3', name: 'Order Status Tracker', purpose: 'Provide order status updates', lastModified: 'Mar 24, 2025', status: 'active' as TemplateStatus },
  // Example draft status for testing badge translation
  { id: '4', name: 'Welcome Message', purpose: 'Initial greeting for new chats', lastModified: 'Mar 20, 2025', status: 'draft' as TemplateStatus },
];

// Type definition based on sample data (adjust if necessary)
type TemplateStatus = 'active' | 'draft';
interface Template {
    id: string;
    name: string;
    purpose: string;
    lastModified: string;
    status: TemplateStatus;
    content?: string; // Added content based on editor usage
}

const LLMPromptTemplates = () => {
  const { t } = useTranslation(); // Initialize hook
  const [templates, setTemplates] = useState<Template[]>(initialTemplates); // Use interface
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null); // Use interface
  const [isCreating, setIsCreating] = useState(false);

  // --- Handlers (logic unchanged) ---
  const handleEditTemplate = (template: Template) => {
    setEditingTemplate(template);
    setIsCreating(false);
  };

  const handleCreateTemplate = () => {
    setEditingTemplate({
      id: '', // Will be generated on save
      name: '',
      purpose: '',
      content: '', // Add content field
      status: 'draft', // Default status for new
      lastModified: '', // Will be set on save
    });
    setIsCreating(true);
  };

  const handleSaveTemplate = (template: Template) => {
    const currentDate = new Date().toLocaleDateString('en-US', { // Keep date format consistent for now
        month: 'short', day: 'numeric', year: 'numeric'
    });

    if (isCreating) {
      setTemplates([
        ...templates,
        { ...template, id: (templates.length + 1).toString(), lastModified: currentDate }
      ]);
    } else {
      setTemplates(templates.map(t =>
        t.id === template.id ? { ...t, ...template, lastModified: currentDate } : t
      ));
    }
    setEditingTemplate(null);
    setIsCreating(false); // Ensure isCreating is reset
  };

  const handleCancelEdit = () => {
    setEditingTemplate(null);
    setIsCreating(false); // Ensure isCreating is reset
  };

  // --- Helper for Status Badge ---
  const getStatusInfo = (status: TemplateStatus): { key: string; fallback: string; className: string } => {
      if (status === 'active') {
          return {
              key: 'llmPromptsStatusActive',
              fallback: 'Active',
              className: 'bg-green-100 text-green-800 border-green-200'
          };
      } else { // Assuming 'draft' is the other main status
          return {
              key: 'llmPromptsStatusDraft',
              fallback: 'Draft',
              className: 'bg-slate-100 text-slate-800 border-slate-200' // Example draft style
          };
      }
  }

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      {/* Template Library Section */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
           {/* Section Title - Translated */}
          <h2 className="text-xl font-semibold text-gray-700">
            {t('llmPromptsTitle', 'Prompt Template Library')}
          </h2>
           {/* Add Button - Translated */}
          <Button
            onClick={handleCreateTemplate}
            className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
          >
            <Plus size={16} className="mr-1" /> {t('llmPromptsButtonAddNew', 'Add New')}
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
               {/* Table Headers - Translated */}
              <TableHead>{t('llmPromptsHeaderName', 'Template Name')}</TableHead>
              <TableHead>{t('llmPromptsHeaderPurpose', 'Purpose')}</TableHead>
              <TableHead>{t('llmPromptsHeaderModified', 'Last Modified')}</TableHead>
              <TableHead>{t('llmPromptsHeaderStatus', 'Status')}</TableHead>
              <TableHead className="text-right">{t('llmPromptsHeaderActions', 'Actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => {
                const statusInfo = getStatusInfo(template.status);
                return (
                  <TableRow key={template.id}>
                     {/* Data cells - Not Translated */}
                    <TableCell className="font-medium">{template.name}</TableCell>
                    <TableCell>{template.purpose}</TableCell>
                    <TableCell>{template.lastModified}</TableCell>
                     {/* Status Badge - Text Translated, Style applied */}
                    <TableCell>
                      <Badge variant="outline" className={statusInfo.className}>
                        {t(statusInfo.key, statusInfo.fallback)}
                      </Badge>
                    </TableCell>
                     {/* Actions Cell */}
                    <TableCell className="text-right">
                       {/* Edit Button - Translated */}
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleEditTemplate(template)}
                      >
                        <Edit size={14} className="mr-1" /> {t('llmPromptsButtonEdit', 'Edit')}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Template Editor Section - Conditionally Rendered */}
      {/* Assumes PromptTemplateEditor handles its own internal i18n */}
      {editingTemplate && (
        <PromptTemplateEditor
          template={editingTemplate} // Pass data - unchanged
          onSave={handleSaveTemplate} // Pass handler - unchanged
          onCancel={handleCancelEdit} // Pass handler - unchanged
          isCreating={isCreating} // Pass state - unchanged
        />
      )}
    </div>
  );
};

export default LLMPromptTemplates;