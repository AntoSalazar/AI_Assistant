import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useParams } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import ProductCatalog from '@/components/knowledge-base/ProductCatalog';
import FAQManager from '@/components/knowledge-base/FAQManager';
import FAQEditor from '@/components/knowledge-base/FAQEditor';
import ContentInsights from '@/components/knowledge-base/ContentInsights';

// Removed translatedTitle/Category - Assuming these come from backend or aren't translated client-side in this model
type ContentItem = {
  id: string;
  title: string;
  category: string;
  lastUpdated: string; // Keeping format for simplicity, could be localized via i18next formatting
  status: 'active' | 'updating' | 'archived';
};

interface KnowledgeBaseProps {
  initialTab?: string;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ initialTab = 'content-library' }) => {
  const { t } = useTranslation(); // Get translation function
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  const { faqId } = useParams<{ faqId: string }>();

  useEffect(() => {
    // Logic unchanged
    if (initialTab === 'faq-editor' && faqId) { // Ensure faqId exists for editor
      setActiveTab('faq-editor');
    } else if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, faqId]);

  // Sample Data - using original English fields
  const contentItems: ContentItem[] = [
    { id: '1', title: 'Wireless Headphones User Guide', category: 'Product Guides', lastUpdated: 'Mar 25, 2025', status: 'active' },
    { id: '2', title: 'Return Policy and Procedures', category: 'Policies', lastUpdated: 'Mar 22, 2025', status: 'active' },
    { id: '3', title: 'Spring Sale 2025 Promotion Details', category: 'Promotions', lastUpdated: 'Mar 20, 2025', status: 'active' },
    { id: '4', title: 'Smart Watch Feature Comparison', category: 'Product Info', lastUpdated: 'Mar 18, 2025', status: 'active' },
    { id: '5', title: 'International Shipping Guidelines', category: 'Shipping', lastUpdated: 'Mar 15, 2025', status: 'active' },
    { id: '6', title: 'Warranty Claims Process', category: 'Support', lastUpdated: 'Mar 12, 2025', status: 'updating' },
  ];

  // Sidebar state logic unchanged
  React.useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    // ... (observer logic as before) ...
     if (!sidebarElement) return;
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
                setSidebarOpen(isNowOpen);
            }
        }
    });
    observer.observe(sidebarElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Filter logic simplified - searches only original title/category
  const filteredItems = contentItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status color logic unchanged
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'updating': return 'bg-amber-100 text-amber-700 hover:bg-amber-200';
      case 'archived': return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
      default: return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
    }
  };

  // getStatusText function removed - using t() directly

  return (
    // Styles unchanged
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader /> {/* Assumes translation handled internally */}
      <Sidebar />       {/* Assumes translation handled internally */}
      {/* Styles unchanged */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        {/* Styles unchanged */}
        <div className="p-6 max-w-[1400px] mx-auto">
           {/* Styles unchanged */}
          <div className="mb-6">
            {/* Use translation keys */}
            <h1 className="text-2xl font-bold text-slate-800">{t('knowledgeBaseTitle', 'Knowledge Base Management')}</h1> {/* STYLE UNCHANGED, Text Translated */}
            <p className="text-slate-500 mt-1">{t('knowledgeBaseSubtitle', 'Create, manage, and organize your AI knowledge resources')}</p> {/* STYLE UNCHANGED, Text Translated */}
          </div>

          {/* Tabs component logic unchanged */}
          {/* Styles unchanged */}
          <Tabs defaultValue={activeTab} value={activeTab} className="mb-6" onValueChange={setActiveTab}>
            <TabsList> {/* Styles unchanged */}
              {/* Use translation keys for Trigger text, keep 'value' prop */}
              <TabsTrigger value="content-library" className="text-sm">{t('contentLibrary', 'Content Library')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="product-catalog" className="text-sm">{t('productCatalog', 'Product Catalog')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="faq-manager" className="text-sm">{t('faqManager', 'FAQ Manager')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="content-insights" className="text-sm">{t('contentInsights', 'Content Insights')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
            </TabsList>

            {/* TabsContent value prop unchanged */}
            <TabsContent value="content-library">
              {/* Styles unchanged */}
              <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-6">
                {/* Styles unchanged */}
                <div className="flex items-center flex-1 mr-4">
                  <Input
                     // Use translation key for placeholder
                    placeholder={t('searchKnowledgeBasePlaceholder', 'Search knowledge base...')}
                    className="max-w-md" // STYLE UNCHANGED
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                 {/* Styles unchanged */}
                <div className="flex items-center gap-3">
                   {/* Styles unchanged */}
                  {/* Select options use internal English values but display translated text */}
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"> {/* STYLE UNCHANGED */}
                    {/* Use translation keys for option text */}
                    <option value="all">{t('categoryAll', 'All Categories')}</option>
                    <option value="product-guides">{t('categoryProductGuides', 'Product Guides')}</option>
                    <option value="policies">{t('categoryPolicies', 'Policies')}</option>
                    <option value="promotions">{t('categoryPromotions', 'Promotions')}</option>
                    <option value="product-info">{t('categoryProductInfo', 'Product Info')}</option>
                    <option value="shipping">{t('categoryShipping', 'Shipping')}</option>
                    <option value="support">{t('categorySupport', 'Support')}</option>
                  </select>

                  {/* Styles unchanged */}
                  <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
                     {/* Use translation key */}
                    {t('addNew', '+ Add New')}
                  </Button>
                </div>
              </div>

              {/* Styles unchanged */}
              <div className="bg-white rounded-md shadow-sm overflow-hidden">
                <Table> {/* Styles unchanged */}
                  <TableHeader> {/* Styles unchanged */}
                    <TableRow> {/* Styles unchanged */}
                       {/* Use translation keys for Table Heads */}
                      <TableHead className="w-[40%]">{t('tableColTitle', 'Title')}</TableHead> {/* STYLE UNCHANGED */}
                      <TableHead>{t('tableColCategory', 'Category')}</TableHead> {/* STYLE UNCHANGED */}
                      <TableHead>{t('tableColLastUpdated', 'Last Updated')}</TableHead> {/* STYLE UNCHANGED */}
                      <TableHead>{t('tableColStatus', 'Status')}</TableHead> {/* STYLE UNCHANGED */}
                      <TableHead className="text-right">{t('tableColActions', 'Actions')}</TableHead> {/* STYLE UNCHANGED */}
                    </TableRow>
                  </TableHeader>
                  <TableBody> {/* Styles unchanged */}
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}> {/* Styles unchanged */}
                        {/* Display original title/category from data */}
                        <TableCell className="font-medium">{item.title}</TableCell> {/* STYLE UNCHANGED */}
                        <TableCell>{item.category}</TableCell> {/* STYLE UNCHANGED */}
                        <TableCell>{item.lastUpdated}</TableCell> {/* STYLE UNCHANGED */}
                        <TableCell> {/* Styles unchanged */}
                          {/* Use translation key based on status */}
                          <Badge variant="outline" className={getStatusColor(item.status)}> {/* STYLE UNCHANGED */}
                            {item.status === 'active' && t('statusActive', 'Active')}
                            {item.status === 'updating' && t('statusUpdating', 'Updating')}
                            {item.status === 'archived' && t('statusArchived', 'Archived')}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right"> {/* Styles unchanged */}
                          {/* Styles unchanged */}
                          <div className="flex justify-end gap-2">
                            {/* Use translation keys */}
                            <Button variant="default" size="sm">{t('edit', 'Edit')}</Button> {/* STYLE UNCHANGED */}
                            <Button variant="outline" size="sm">{t('view', 'View')}</Button> {/* STYLE UNCHANGED */}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                 {/* Styles unchanged */}
                <div className="flex items-center justify-between p-4 border-t">
                   {/* Styles unchanged */}
                   {/* Use translation key with interpolation */}
                  <div className="text-sm text-slate-600">
                    {t('showingItems', 'Showing 1-{{count}} of {{count}} items', { count: filteredItems.length })}
                  </div>
                  {/* Pagination buttons unchanged */}
                   {/* Styles unchanged */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">1</Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">→</Button>
                  </div>
                </div>
              </div>

              {/* Quick Preview Section */}
              {/* Styles unchanged */}
              <div className="mt-6 bg-white rounded-md shadow-sm p-4">
                 {/* Use translation key */}
                <h2 className="text-lg font-bold mb-3">{t('quickPreviewTitle', 'Quick Content Preview')}</h2>
                 {/* Styles unchanged */}
                {filteredItems.length > 0 && (
                    // Styles unchanged
                    <div className="bg-slate-50 p-4 rounded-md border">
                        {/* Display original title from data */}
                        <h3 className="text-lg font-bold">{filteredItems[0].title}</h3>
                        {/* Styles unchanged */}
                        <p className="text-sm text-slate-500 mt-1">
                          {/* Use translation keys for labels, display original category/status */}
                          {t('previewLabelCategory', 'Category:')} {filteredItems[0].category} | {t('previewLabelLastUpdated', 'Last Updated:')} {filteredItems[0].lastUpdated} | {t('previewLabelStatus', 'Status:')} {
                                filteredItems[0].status === 'active' && t('statusActive', 'Active') ||
                                filteredItems[0].status === 'updating' && t('statusUpdating', 'Updating') ||
                                filteredItems[0].status === 'archived' && t('statusArchived', 'Archived')
                           }
                        </p>
                        <hr className="my-3" /> {/* Styles unchanged */}
                        {/* Preview description should come from data - removed hardcoded text */}
                        {/* <p className="text-slate-700">{t('previewExampleDescription', 'Preview description here...')}</p> */}
                    </div>
                 )}
              </div>
            </TabsContent>

            {/* Other Tab Contents logic unchanged */}
            <TabsContent value="product-catalog">
              <ProductCatalog /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="faq-manager">
              <FAQManager /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="faq-editor">
              <FAQEditor faqId={faqId !== "new" ? faqId : undefined} /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="content-insights">
              <ContentInsights /> {/* Assumes translation handled internally */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;