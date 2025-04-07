
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, Eye } from 'lucide-react';
import { Product, getStatusColor, getStatusText } from './ProductTypes';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Card 
      key={product.id} 
      className="overflow-hidden cursor-pointer transition-shadow hover:shadow-md"
      onClick={() => onClick(product)}
    >
      <div className="bg-slate-50 p-6 flex items-center justify-center h-44">
        <div className="text-slate-600">
          {product.icon}
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-bold text-lg">{product.title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 pb-0">
        <p className="text-sm text-slate-500">Category: {product.category}</p>
        <p className="text-sm text-slate-500">SKU: {product.sku}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <Badge variant="outline" className={getStatusColor(product.status)}>
          {getStatusText(product.status)}
        </Badge>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Tag size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
          >
            <Eye size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
