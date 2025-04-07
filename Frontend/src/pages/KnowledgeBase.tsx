import React, { useState, useEffect } from 'react';
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

type ContentItem = {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  status: 'active' | 'updating' | 'archived';
};

interface KnowledgeBaseProps {
  initialTab?: string;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ initialTab = 'content-library' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { faqId } = useParams<{ faqId: string }>();

  useEffect(() => {
    if (initialTab === 'faq-editor') {
      setActiveTab('faq-editor');
    } else if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, faqId]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Wireless Headphones User Guide',
      category: 'Product Guides',
      lastUpdated: 'Mar 25, 2025',
      status: 'active',
    },
    {
      id: '2',
      title: 'Return Policy and Procedures',
      category: 'Policies',
      lastUpdated: 'Mar 22, 2025',
      status: 'active',
    },
    {
      id: '3',
      title: 'Spring Sale 2025 Promotion Details',
      category: 'Promotions',
      lastUpdated: 'Mar 20, 2025',
      status: 'active',
    },
    {
      id: '4',
      title: 'Smart Watch Feature Comparison',
      category: 'Product Info',
      lastUpdated: 'Mar 18, 2025',
      status: 'active',
    },
    {
      id: '5',
      title: 'International Shipping Guidelines',
      category: 'Shipping',
      lastUpdated: 'Mar 15, 2025',
      status: 'active',
    },
    {
      id: '6',
      title: 'Warranty Claims Process',
      category: 'Support',
      lastUpdated: 'Mar 12, 2025',
      status: 'updating',
    },
  ];

  React.useEffect(() => {
    const sidebarElement = document.querySelector('aside');
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

  const filteredItems = contentItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'updating': return 'bg-amber-100 text-amber-700 hover:bg-amber-200';
      case 'archived': return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
      default: return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
    }
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <Sidebar />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1400px] mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-800">Knowledge Base Management</h1>
            <p className="text-slate-500 mt-1">Create, manage, and organize your AI knowledge resources</p>
          </div>

          <Tabs defaultValue={activeTab} value={activeTab} className="mb-6" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="content-library" className="text-sm">
                Content Library
              </TabsTrigger>
              <TabsTrigger value="product-catalog" className="text-sm">
                Product Catalog
              </TabsTrigger>
              <TabsTrigger value="faq-manager" className="text-sm">
                FAQ Manager
              </TabsTrigger>
              <TabsTrigger value="content-insights" className="text-sm">
                Content Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content-library">
              <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-6">
                <div className="flex items-center flex-1 mr-4">
                  <Input
                    placeholder="Search knowledge base..."
                    className="max-w-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="all">All Categories</option>
                    <option value="product-guides">Product Guides</option>
                    <option value="policies">Policies</option>
                    <option value="promotions">Promotions</option>
                    <option value="shipping">Shipping</option>
                    <option value="support">Support</option>
                  </select>
                  
                  <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
                    + Add New
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(item.status)}>
                            {getStatusText(item.status)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="default" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex items-center justify-between p-4 border-t">
                  <div className="text-sm text-slate-600">
                    Showing 1-{filteredItems.length} of {filteredItems.length} items
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                      →
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-md shadow-sm p-4">
                <h2 className="text-lg font-bold mb-3">Quick Content Preview</h2>
                <div className="bg-slate-50 p-4 rounded-md border">
                  <h3 className="text-lg font-bold">Wireless Headphones User Guide</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Category: Product Guides | Last Updated: Mar 25, 2025 | Status: Active
                  </p>
                  <hr className="my-3" />
                  <p className="text-slate-700">
                    This guide provides comprehensive instructions for setting up and using our Premium
                    Wireless Headphones. Includes pairing instructions, feature overview, troubleshooting, and care tips.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="product-catalog">
              <ProductCatalog />
            </TabsContent>

            <TabsContent value="faq-manager">
              <FAQManager />
            </TabsContent>

            <TabsContent value="faq-editor">
              <FAQEditor faqId={faqId !== "new" ? faqId : undefined} />
            </TabsContent>

            <TabsContent value="content-insights">
              <ContentInsights />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default KnowledgeBase;
