
import type { Product, Style, PortfolioItem, NavLink, SocialPost } from './types';

export const WHATSAPP_NUMBER = '1234567890'; // Replace with your actual number

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Customize', path: '/shop' },
  { name: 'Shop All', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Wooden Stand',
    description: 'For your phone, tablet, or book.',
    imageUrl: 'https://picsum.photos/seed/woodstand/500/500',
    imageUrlHover: 'https://picsum.photos/seed/woodstand2/500/500',
    badge: 'Best Seller',
  },
  {
    id: 'p2',
    name: 'Recipe Box',
    description: 'A home for cherished recipes.',
    imageUrl: 'https://picsum.photos/seed/recipebox/500/500',
    imageUrlHover: 'https://picsum.photos/seed/recipebox2/500/500',
  },
  {
    id: 'p3',
    name: 'Custom Decor',
    description: 'Personalized signs and decor.',
    imageUrl: 'https://picsum.photos/seed/decor/500/500',
    imageUrlHover: 'https://picsum.photos/seed/decor2/500/500',
    badge: 'New Drop',
  },
  {
    id: 'p4',
    name: 'Jewelry Holder',
    description: 'Handmade elegance for accessories.',
    imageUrl: 'https://picsum.photos/seed/jewelry/500/500',
    imageUrlHover: 'https://picsum.photos/seed/jewelry2/500/500',
    badge: 'Limited',
  },
];

export const STYLES: Style[] = [
  {
    id: 's1',
    name: 'Engraved',
    description: 'Clean, laser-etched precision.',
    imageUrl: 'https://picsum.photos/seed/rustic/400/300',
  },
  {
    id: 's2',
    name: 'Painted',
    description: 'Vibrant, hand-painted colors.',
    imageUrl: 'https://picsum.photos/seed/modern/400/300',
  },
  {
    id: 's3',
    name: 'Patchwork',
    description: 'Unique, stitched-on designs.',
    imageUrl: 'https://picsum.photos/seed/vibrant/400/300',
  },
];

export const SOCIAL_POSTS: SocialPost[] = Array.from({ length: 8 }, (_, i) => ({
    id: `social${i + 1}`,
    imageUrl: `https://picsum.photos/seed/social${i + 1}/500/500`,
}));

export const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: `port${i + 1}`,
  imageUrl: `https://picsum.photos/seed/portfolio${i + 1}/600/${Math.floor(Math.random() * 200) + 400}`,
  caption: `Custom project ${i + 1}`,
}));