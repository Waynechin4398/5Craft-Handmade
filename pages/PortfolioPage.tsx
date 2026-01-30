
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">Shop All</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
                Explore the full collection. Each piece is handmade and ready for your personal touch.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
};

export default PortfolioPage;