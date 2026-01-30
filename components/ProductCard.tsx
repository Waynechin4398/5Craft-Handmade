
import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const badgeColor = product.badge === 'Best Seller' ? 'bg-accent-green' : product.badge === 'New Drop' ? 'bg-accent-blue' : 'bg-accent-pink';
  return (
    <div className="border border-foreground group relative">
      <Link to="/shop" className="block aspect-square overflow-hidden">
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 text-xs font-bold uppercase text-foreground px-2 py-1 ${badgeColor} -rotate-3`}>
            {product.badge}
          </div>
        )}
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
        <img src={product.imageUrlHover} alt={`${product.name} alternate view`} className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <button className="absolute bottom-3 right-3 z-10 h-10 w-10 bg-background border border-foreground rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 hover:!scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </button>

      </Link>
      <div className="p-4 border-t border-foreground">
        <h3 className="font-bold uppercase truncate">{product.name}</h3>
        <p className="text-sm font-mono mt-1">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;