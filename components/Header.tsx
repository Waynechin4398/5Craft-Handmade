
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_NUMBER } from '../constants';

const Marquee: React.FC = () => (
  <div className="bg-foreground text-background py-2 overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-marquee">
      <span className="mx-4 text-sm font-bold uppercase">👋 100% HANDMADE • ✈️ WORLDWIDE SHIPPING • 🎨 CUSTOMIZE YOUR WAY</span>
      <span className="mx-4 text-sm font-bold uppercase">👋 100% HANDMADE • ✈️ WORLDWIDE SHIPPING • 🎨 CUSTOMIZE YOUR WAY</span>
    </div>
  </div>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <Marquee />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-foreground">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-black tracking-widest text-foreground uppercase">
              5CRAFT
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-foreground">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-bold uppercase ${
                    isActive ? 'bg-foreground text-background' : 'text-foreground hover:bg-foreground/10'
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;