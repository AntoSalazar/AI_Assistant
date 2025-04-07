
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, getStatusColor, getStatusText } from './ProductTypes';

interface ProductListProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onViewProduct }) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50 border-b">
          <tr>
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">SKU</th>
            <th className="text-left p-4">Status</th>
            <th className="text-right p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-md">
                    {product.icon}
                  </div>
                  <span className="font-medium">{product.title}</span>
                </div>
              </td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{product.sku}</td>
              <td className="p-4">
                <Badge variant="outline" className={getStatusColor(product.status)}>
                  {getStatusText(product.status)}
                </Badge>
              </td>
              <td className="p-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="default" size="sm">Edit</Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onViewProduct(product)}
                  >
                    View
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
