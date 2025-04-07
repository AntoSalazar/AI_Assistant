
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Plus, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PromptTemplateEditor from './PromptTemplateEditor';

// Sample template data
const initialTemplates = [
  {
    id: '1',
    name: 'Product Inquiry Handler',
    purpose: 'Handle product information requests',
    lastModified: 'Mar 26, 2025',
    status: 'active'
  },
  {
    id: '2',
    name: 'Support Query Response',
    purpose: 'Handle customer support tickets',
    lastModified: 'Mar 25, 2025',
    status: 'active'
  },
  {
    id: '3',
    name: 'Order Status Tracker',
    purpose: 'Provide order status updates',
    lastModified: 'Mar 24, 2025',
    status: 'active'
  }
];

const LLMPromptTemplates = () => {
  const [templates, setTemplates] = useState(initialTemplates);
  const [editingTemplate, setEditingTemplate] = useState<any>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const handleEditTemplate = (template: any) => {
    setEditingTemplate(template);
    setIsCreating(false);
  };
  
  const handleCreateTemplate = () => {
    setEditingTemplate({
      id: '',
      name: '',
      purpose: '',
      content: '',
      status: 'draft'
    });
    setIsCreating(true);
  };
  
  const handleSaveTemplate = (template: any) => {
    if (isCreating) {
      // Add new template
      setTemplates([
        ...templates,
        { 
          ...template, 
          id: (templates.length + 1).toString(),
          lastModified: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        }
      ]);
    } else {
      // Update existing template
      setTemplates(templates.map(t => 
        t.id === template.id ? { ...t, ...template, lastModified: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }) } : t
      ));
    }
    setEditingTemplate(null);
  };
  
  const handleCancelEdit = () => {
    setEditingTemplate(null);
  };

  return (
    <div className="space-y-6">
      {/* Template Library Section */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Prompt Template Library</h2>
          <Button 
            onClick={handleCreateTemplate}
            className="bg-whatsapp-primary hover:bg-whatsapp-primary/90"
          >
            <Plus size={16} className="mr-1" /> Add New
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Template Name</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>{template.purpose}</TableCell>
                <TableCell>{template.lastModified}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    {template.status === 'active' ? 'Active' : 'Draft'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleEditTemplate(template)}
                  >
                    <Edit size={14} className="mr-1" /> Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Template Editor Section */}
      {editingTemplate && (
        <PromptTemplateEditor 
          template={editingTemplate}
          onSave={handleSaveTemplate}
          onCancel={handleCancelEdit}
          isCreating={isCreating}
        />
      )}
    </div>
  );
};

export default LLMPromptTemplates;
