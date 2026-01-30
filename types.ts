
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlHover: string;
  badge?: 'Best Seller' | 'Limited' | 'New Drop';
}

export interface Style {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialPost {
    id: string;
    imageUrl: string;
}