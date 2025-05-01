import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import ProductCard from './ProductCard';         // Assuming this component handles its own i18n
import ProductList from './ProductList';         // Assuming this component handles its own i18n
import ProductFilters from './ProductFilters';     // Assuming this component handles its own i18n
import ProductPreview from './ProductPreview';   // Assuming this component handles its own i18n
import { products, getCategories } from './ProductData'; // Assuming data source
import { Product } from './ProductTypes'; // Assuming this type exists

const ProductCatalog = () => {
  const { t } = useTranslation(); // Initialize hook

  // --- State Management (unchanged) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- Data Fetching/Preparation (unchanged) ---
  const categories = getCategories(); // Category names treated as data here

  // --- Filtering Logic (unchanged) ---
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // --- Event Handlers (unchanged) ---
  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };
  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  // --- Conditional Rendering for Preview (unchanged) ---
  if (selectedProduct) {
    // Assumes ProductPreview handles its own i18n
    return <ProductPreview product={selectedProduct} onClose={handleClosePreview} />;
  }

  // --- Main Component Render ---
  return (
    // Styles remain unchanged
    <div className="space-y-6">
       {/* Filter Component - Props passed, assumes internal i18n */}
      <ProductFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
        categories={categories} // Pass category data
      />

      {/* Conditional Rendering for Grid/List View (unchanged) */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
             // ProductCard Component - Assumes internal i18n
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleViewProduct}
            />
          ))}
        </div>
      ) : (
         // ProductList Component - Assumes internal i18n
        <ProductList products={filteredProducts} onViewProduct={handleViewProduct} />
      )}

      {/* No Results Message - UI Text - Translated */}
      {filteredProducts.length === 0 && (
        <div className="bg-white p-12 rounded-md shadow-sm text-center">
          <p className="text-slate-500">
            {t('productCatalogNoResults', 'No products found matching your filters.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;