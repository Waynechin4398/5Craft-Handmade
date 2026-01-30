
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h3 className="text-3xl font-black tracking-widest uppercase">5CRAFT</h3>
            <p className="mt-2 text-sm opacity-80 uppercase">Unique by design.</p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="https://instagram.com/5crafthandmade" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            {/* Add other social links here */}
          </div>
        </div>
        <div className="mt-8 border-t border-background/20 pt-4 text-center text-xs opacity-60 uppercase">
          <p>&copy; {new Date().getFullYear()} 5CRAFT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;