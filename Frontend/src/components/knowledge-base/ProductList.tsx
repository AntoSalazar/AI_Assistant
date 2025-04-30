import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// Assuming ProductStatus and getStatusColor are defined and exported from ProductTypes
// We will use a new helper for translation keys instead of getStatusText
import { Product, ProductStatus, getStatusColor } from './ProductTypes';

interface ProductListProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

// Helper function to get the translation key for the status
// (Same helper as potentially used in ProductCard - can be shared or defined here)
const getStatusTranslationKey = (status: ProductStatus): string => {
    const keyMap: Record<ProductStatus, string> = {
        active: 'productStatusActive',
        archived: 'productStatusArchived',
        draft: 'productStatusDraft',
        'pre-order': 'productStatusPreOrder',
        'sold-out': 'productStatusSoldOut',
        // Add other statuses if they exist
    };
    return keyMap[status] || status; // Fallback to the status value itself
}

const ProductList: React.FC<ProductListProps> = ({ products, onViewProduct }) => {
  const { t } = useTranslation(); // Initialize hook

  return (
    // Styles remain unchanged
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <table className="w-full">
        {/* Styles remain unchanged */}
        <thead className="bg-slate-50 border-b">
          <tr>
            {/* Table Headers - UI Text - Translated */}
            <th className="text-left p-4">{t('productListHeaderProduct', 'Product')}</th>
            <th className="text-left p-4">{t('productListHeaderCategory', 'Category')}</th>
            <th className="text-left p-4">{t('productListHeaderSku', 'SKU')}</th>
            <th className="text-left p-4">{t('productListHeaderStatus', 'Status')}</th>
            <th className="text-right p-4">{t('productListHeaderActions', 'Actions')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            // Get translated status text for each product
            const statusKey = getStatusTranslationKey(product.status);
            const translatedStatusText = t(statusKey, product.status); // Use original status as fallback

            return (
              <tr key={product.id} className="border-b">
                {/* Product Info Cell - Data - Not Translated */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded-md">
                      {product.icon} {/* Data */}
                    </div>
                    <span className="font-medium">{product.title}</span> {/* Data */}
                  </div>
                </td>
                {/* Category Cell - Data - Not Translated */}
                <td className="p-4">{product.category}</td>
                {/* SKU Cell - Data - Not Translated */}
                <td className="p-4">{product.sku}</td>
                {/* Status Cell - Badge uses translated text */}
                <td className="p-4">
                  <Badge variant="outline" className={getStatusColor(product.status)}>
                    {translatedStatusText}
                  </Badge>
                </td>
                {/* Actions Cell - Buttons have translated text */}
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                     {/* Edit Button - Translated */}
                    <Button variant="default" size="sm">
                        {t('productListButtonEdit', 'Edit')}
                    </Button>
                     {/* View Button - Translated */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onViewProduct(product)}
                    >
                      {t('productListButtonView', 'View')}
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
       {/* Optional: Add message if products array is empty */}
       {products.length === 0 && (
            <div className="p-8 text-center text-slate-500">
                {t('productListNoResults', 'No products to display.')}
            </div>
        )}
    </div>
  );
};

export default ProductList;