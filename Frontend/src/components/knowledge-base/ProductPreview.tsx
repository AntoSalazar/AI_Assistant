
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product, getStatusColor, getStatusText } from './ProductTypes';

interface ProductPreviewProps {
  product: Product;
  onClose: () => void;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Details</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>
          <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
            Edit
          </Button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-8 rounded-md flex items-center justify-center h-80">
            <div className="text-slate-600">
              {product.icon}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold">{product.title}</h3>
              <Badge variant="outline" className={getStatusColor(product.status)}>
                {getStatusText(product.status)}
              </Badge>
            </div>
            <dl className="grid grid-cols-2 gap-y-4">
              <dt className="font-semibold">Category:</dt>
              <dd>{product.category}</dd>
              
              <dt className="font-semibold">SKU:</dt>
              <dd>{product.sku}</dd>
              
              <dt className="font-semibold">Price Range:</dt>
              <dd>{product.priceRange || 'N/A'}</dd>
              
              <dt className="font-semibold">Availability:</dt>
              <dd>{product.availability || 'N/A'}</dd>
              
              <dt className="font-semibold">Last Updated:</dt>
              <dd>{product.lastUpdated || 'N/A'}</dd>
            </dl>
          </div>
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="mt-6 p-4 border rounded-md">
            <h4 className="font-bold mb-4">Color Variants</h4>
            <div className="flex gap-8">
              {product.colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 rounded-full border mb-2" 
                    style={{ 
                      backgroundColor: 
                        color === 'Midnight Black' ? '#000000' :
                        color === 'Arctic White' ? '#ffffff' :
                        color === 'Silver' ? '#C0C0C0' :
                        color === 'Navy Blue' ? '#000080' :
                        color === 'Rose Gold' ? '#b76e79' :
                        color === 'Pacific Blue' ? '#1e3d59' :
                        color === 'Gold' ? '#FFD700' :
                        color === 'Black' ? '#000000' : '#cccccc'
                    }} 
                  />
                  <span className="text-xs text-gray-600">{color}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {product.aiResponse && (
          <div className="mt-6 bg-slate-50 p-4 rounded-md">
            <h4 className="font-bold mb-2">Sample AI Response</h4>
            <div className="bg-blue-50 p-4 rounded-lg text-sm">
              {product.aiResponse}
            </div>
          </div>
        )}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="related">Related Info</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4 border rounded-md mt-2">
            <h4 className="font-bold mb-2">{product.title}</h4>
            <p className="text-gray-700">
              {product.description || 'No description available.'}
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">Specifications information will be displayed here.</p>
          </TabsContent>
          <TabsContent value="features" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">Features information will be displayed here.</p>
          </TabsContent>
          <TabsContent value="related" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">Related information will be displayed here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductPreview;
