
import React from 'react';
import { Bold, Italic, Underline, Link, List, ListOrdered } from 'lucide-react';

const FAQEditorToolbar: React.FC = () => {
  return (
    <div className="flex items-center p-2 bg-muted border-b space-x-1">
      <button className="p-1 rounded hover:bg-slate-200">
        <Bold className="h-5 w-5" />
      </button>
      <button className="p-1 rounded hover:bg-slate-200">
        <Italic className="h-5 w-5" />
      </button>
      <button className="p-1 rounded hover:bg-slate-200">
        <Underline className="h-5 w-5" />
      </button>
      <div className="h-5 mx-2 border-l border-slate-300"></div>
      <button className="p-1 rounded hover:bg-slate-200">
        <List className="h-5 w-5" />
      </button>
      <button className="p-1 rounded hover:bg-slate-200">
        <ListOrdered className="h-5 w-5" />
      </button>
      <div className="h-5 mx-2 border-l border-slate-300"></div>
      <button className="p-1 rounded hover:bg-slate-200">
        <Link className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FAQEditorToolbar;
