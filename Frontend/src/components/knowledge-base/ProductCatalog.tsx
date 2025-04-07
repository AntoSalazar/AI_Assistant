
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import ProductFilters from './ProductFilters';
import ProductPreview from './ProductPreview';
import { products, getCategories } from './ProductData';
import { Product } from './ProductTypes';

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const categories = getCategories();
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ProductPreview product={selectedProduct} onClose={handleClosePreview} />;
  }

  return (
    <div className="space-y-6">
      <ProductFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
        categories={categories}
      />

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleViewProduct}
            />
          ))}
        </div>
      ) : (
        <ProductList products={filteredProducts} onViewProduct={handleViewProduct} />
      )}

      {filteredProducts.length === 0 && (
        <div className="bg-white p-12 rounded-md shadow-sm text-center">
          <p className="text-slate-500">No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
