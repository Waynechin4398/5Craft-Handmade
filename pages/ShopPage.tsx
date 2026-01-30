
import React, { useState, useEffect } from 'react';
import type { Product, Style } from '../types';
import { PRODUCTS, STYLES, WHATSAPP_NUMBER } from '../constants';

const ShopPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedStyle, setSelectedStyle] = useState<Style>(STYLES[0]);
  const [customText, setCustomText] = useState('Your Text');
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const message = `Hello 5CRAFT, I'm interested in a custom order:\n\n- Product: ${selectedProduct.name}\n- Style: ${selectedStyle.name}\n- Custom Text: ${customText}`;
    const encodedMessage = encodeURIComponent(message);
    setWhatsappLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`);
  }, [selectedProduct, selectedStyle, customText]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side: Sticky Image Preview */}
        <div className="md:sticky top-24 h-full">
            <div className="relative aspect-square border border-foreground p-4">
                <img 
                    src={selectedProduct.imageUrl} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                />
                {customText && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p 
                            className="text-3xl lg:text-5xl font-black uppercase text-foreground/50"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
                        >
                            {customText}
                        </p>
                    </div>
                )}
            </div>
        </div>

        {/* Right Side: Scrollable Controls */}
        <div className="border border-foreground p-6 md:p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">1. Choose Base Product</h2>
                <div className="grid grid-cols-2 gap-2">
                    {PRODUCTS.map(product => (
                        <button 
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className={`p-4 text-left border uppercase font-bold text-sm transition-colors ${selectedProduct.id === product.id ? 'bg-foreground text-background border-foreground' : 'bg-background text-foreground border-border-color hover:bg-foreground/10'}`}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>
            </div>

             <div className="mb-8">
                <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">2. Select Style</h2>
                <div className="grid grid-cols-2 gap-2">
                    {STYLES.map(style => (
                        <button 
                            key={style.id}
                            onClick={() => setSelectedStyle(style)}
                             className={`p-4 text-left border uppercase font-bold text-sm transition-colors ${selectedStyle.id === style.id ? 'bg-foreground text-background border-foreground' : 'bg-background text-foreground border-border-color hover:bg-foreground/10'}`}
                        >
                            {style.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">3. Add Your Text</h2>
                 <input 
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    maxLength={15}
                    placeholder="Max 15 characters"
                    className="w-full p-4 border border-foreground bg-background font-mono text-lg focus:ring-2 focus:ring-foreground focus:outline-none"
                 />
            </div>

            <div>
                 <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-10 py-4 bg-accent-pink text-foreground font-bold rounded-full shadow-lg hover:bg-accent-pink/80 transition-all duration-300 transform hover:-translate-y-1 text-lg uppercase"
                >
                    Purchase via WhatsApp
                </a>
                <p className="text-xs text-center mt-4 font-mono">We'll confirm details & pricing with you directly.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;