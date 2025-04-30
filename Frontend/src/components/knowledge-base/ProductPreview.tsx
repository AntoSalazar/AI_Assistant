import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Card components used in original but not rendered; kept import if needed later
// Assuming ProductStatus, getStatusColor are defined; using helper for status text key
import { Product, ProductStatus, getStatusColor } from './ProductTypes';

interface ProductPreviewProps {
  product: Product;
  onClose: () => void;
}

// Helper function to get the translation key for the status (reuse if defined elsewhere)
const getStatusTranslationKey = (status: ProductStatus): string => {
    const keyMap: Record<ProductStatus, string> = {
        active: 'productStatusActive',
        archived: 'productStatusArchived',
        draft: 'productStatusDraft',
        'pre-order': 'productStatusPreOrder',
        'sold-out': 'productStatusSoldOut',
    };
    return keyMap[status] || status; // Fallback
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product, onClose }) => {
  const { t } = useTranslation(); // Initialize hook
  const [activeTab, setActiveTab] = useState('description'); // State unchanged

  // Get translated status text
  const statusKey = getStatusTranslationKey(product.status);
  const translatedStatusText = t(statusKey, product.status); // Use original status as fallback

  // Get translated fallback text for data fields
  const notAvailableText = t('productPreviewValueNotAvailable', 'N/A');

  return (
    // Styles remain unchanged
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
         {/* Title - Translated */}
        <h2 className="text-2xl font-bold">
            {t('productPreviewTitle', 'Product Details')}
        </h2>
        <div className="flex gap-2">
           {/* Buttons - Translated */}
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft size={16} className="mr-2" /> {t('productPreviewBackButton', 'Back')}
          </Button>
          <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
            {t('productPreviewEditButton', 'Edit')}
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Icon Area - Unchanged */}
          <div className="bg-slate-50 p-8 rounded-md flex items-center justify-center h-80">
            <div className="text-slate-600">
              {product.icon} {/* Data */}
            </div>
          </div>
          {/* Details Area */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               {/* Product Title - Data - Not Translated */}
              <h3 className="text-2xl font-bold">{product.title}</h3>
               {/* Status Badge - Text Translated */}
              <Badge variant="outline" className={getStatusColor(product.status)}>
                {translatedStatusText}
              </Badge>
            </div>
             {/* Definition List - Terms translated, values are data (with translated fallback) */}
            <dl className="grid grid-cols-2 gap-y-4">
              <dt className="font-semibold">{t('productPreviewLabelCategory', 'Category:')}</dt>
              <dd>{product.category}</dd> {/* Data */}

              <dt className="font-semibold">{t('productPreviewLabelSku', 'SKU:')}</dt>
              <dd>{product.sku}</dd> {/* Data */}

              <dt className="font-semibold">{t('productPreviewLabelPrice', 'Price Range:')}</dt>
              <dd>{product.priceRange || notAvailableText}</dd> {/* Data or translated fallback */}

              <dt className="font-semibold">{t('productPreviewLabelAvailability', 'Availability:')}</dt>
              <dd>{product.availability || notAvailableText}</dd> {/* Data or translated fallback */}

              <dt className="font-semibold">{t('productPreviewLabelLastUpdated', 'Last Updated:')}</dt>
              <dd>{product.lastUpdated || notAvailableText}</dd> {/* Data or translated fallback */}
            </dl>
          </div>
        </div>

        {/* Color Variants Section (conditional) */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-6 p-4 border rounded-md">
             {/* Section Title - Translated */}
            <h4 className="font-bold mb-4">
                {t('productPreviewSectionColors', 'Color Variants')}
            </h4>
            <div className="flex flex-wrap gap-4 sm:gap-8"> {/* Use flex-wrap and adjust gap */}
              {/* Color names are data - not translated */}
              {product.colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full border mb-2"
                    // Color mapping logic unchanged
                    style={{
                      backgroundColor:
                        color === 'Midnight Black' ? '#000000' :
                        color === 'Arctic White' ? '#ffffff' :
                        color === 'Silver' ? '#C0C0C0' :
                        color === 'Navy Blue' ? '#000080' :
                        color === 'Rose Gold' ? '#b76e79' :
                        color === 'Pacific Blue' ? '#1e3d59' :
                        color === 'Gold' ? '#FFD700' :
                        color === 'Black' ? '#000000' : '#cccccc' // Fallback color
                    }}
                    title={color} // Add title attribute for hover info
                  />
                  <span className="text-xs text-gray-600">{color}</span> {/* Data */}
                </div>
              ))}
            </div>
          </div>
        )}

         {/* AI Response Section (conditional) */}
        {product.aiResponse && (
          <div className="mt-6 bg-slate-50 p-4 rounded-md">
             {/* Section Title - Translated */}
            <h4 className="font-bold mb-2">
                {t('productPreviewSectionAiResponse', 'Sample AI Response')}
            </h4>
            <div className="bg-blue-50 p-4 rounded-lg text-sm">
               {/* AI Response - Data - Not Translated */}
              {product.aiResponse}
            </div>
          </div>
        )}

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList>
             {/* Tab Triggers - Translated */}
            <TabsTrigger value="description">{t('productPreviewTabDescription', 'Description')}</TabsTrigger>
            <TabsTrigger value="specifications">{t('productPreviewTabSpecifications', 'Specifications')}</TabsTrigger>
            <TabsTrigger value="features">{t('productPreviewTabFeatures', 'Features')}</TabsTrigger>
            <TabsTrigger value="related">{t('productPreviewTabRelated', 'Related Info')}</TabsTrigger>
          </TabsList>
           {/* Tab Content - Fallback/placeholder text translated */}
          <TabsContent value="description" className="p-4 border rounded-md mt-2">
            <h4 className="font-bold mb-2">{product.title}</h4> {/* Data */}
            <p className="text-gray-700 whitespace-pre-line"> {/* Added whitespace-pre-line */}
              {product.description || t('productPreviewDescNotAvailable', 'No description available.')} {/* Data or translated fallback */}
            </p>
          </TabsContent>
          <TabsContent value="specifications" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">
                {t('productPreviewSpecPlaceholder', 'Specifications information will be displayed here.')}
            </p>
          </TabsContent>
          <TabsContent value="features" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">
                {t('productPreviewFeaturesPlaceholder', 'Features information will be displayed here.')}
            </p>
          </TabsContent>
          <TabsContent value="related" className="p-4 border rounded-md mt-2">
            <p className="text-gray-500 italic">
                {t('productPreviewRelatedPlaceholder', 'Related information will be displayed here.')}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductPreview;