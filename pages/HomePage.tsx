
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, SOCIAL_POSTS } from '../constants';

const Sticker: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`absolute font-bold uppercase text-xs sm:text-sm text-foreground bg-accent-green px-3 py-1.5 rounded-full shadow-lg ${className}`}>
        {children}
    </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-square md:aspect-auto h-full min-h-[60vh] md:h-auto border border-foreground p-4 flex items-center justify-center">
             <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/preview/mixkit-artist-working-on-a-clay-pot-34454-large.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
            />
            <Sticker className="top-4 left-4 -rotate-6">DROP 01: HANDMADE</Sticker>
          </div>
          <div className="relative h-full min-h-[60vh] md:h-auto border border-foreground p-8 sm:p-12 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter">
              Make It Yours.
            </h1>
            <p className="mt-4 max-w-md mx-auto text-lg">
              Every piece is a blank canvas. Your story, your style, handcrafted by us.
            </p>
            <Link
              to="/shop"
              className="mt-8 w-full max-w-xs inline-block px-10 py-4 bg-foreground text-background font-bold rounded-full shadow-lg hover:bg-foreground/80 transition-all duration-300 transform hover:-translate-y-1 text-lg uppercase"
            >
              Customize Now
            </Link>
            <Sticker className="bottom-4 right-4 rotate-6 bg-accent-pink">STATE YOUR STYLE</Sticker>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto p-4 mt-12">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Seen on Social Section */}
      <section className="mt-16">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 container mx-auto px-4">Seen On Social</h2>
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4">
            {SOCIAL_POSTS.map(post => (
                 <div key={post.id} className="flex-shrink-0 w-3/4 sm:w-1/3 lg:w-1/5 group relative aspect-square overflow-hidden border border-foreground">
                    <img src={post.imageUrl} alt="Social media post" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                       <span className="text-white font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">Shop This</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;