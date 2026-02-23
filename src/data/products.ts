export type Product = {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  description: string
  category: string
  image: string
  images: string[]
  inStock: boolean
  featured?: boolean
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'apparel', name: 'Apparel' },
  { id: 'home', name: 'Home' },
  { id: 'accessories', name: 'Accessories' },
]

// const placeholder = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Watch',
    slug: 'minimalist-watch',
    price: 189,
    originalPrice: 249,
    description: 'Swiss movement, sapphire crystal, genuine leather strap. Timeless design for everyday wear.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    slug: 'wireless-headphones',
    price: 299,
    description: 'Active noise cancellation, 30-hour battery, premium sound. Your escape, anywhere.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Organic Cotton Tee',
    slug: 'organic-cotton-tee',
    price: 45,
    description: '100% organic cotton, relaxed fit. Soft, breathable, and made to last.',
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600'],
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Ceramic Vase',
    slug: 'ceramic-vase',
    price: 78,
    description: 'Hand-thrown ceramic vase. A subtle statement for your shelf or table.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600',
    images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600'],
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Laptop Stand',
    slug: 'laptop-stand',
    price: 89,
    description: 'Aluminum stand with adjustable height. Better posture, cleaner desk.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600'],
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Wool Blend Coat',
    slug: 'wool-blend-coat',
    price: 320,
    originalPrice: 399,
    description: 'Wool blend overcoat. Classic cut, modern fit. For cold days and long evenings.',
    category: 'apparel',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600',
    images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600'],
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Desk Lamp',
    slug: 'desk-lamp',
    price: 125,
    description: 'LED desk lamp with dimmable warm light. Minimal base, maximum focus.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600'],
    inStock: true,
    featured: false,
  },
  {
    id: '8',
    name: 'Leather Card Holder',
    slug: 'leather-card-holder',
    price: 58,
    description: 'Full-grain leather card holder. Slim profile, holds up to 6 cards.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600',
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=600'],
    inStock: true,
    featured: false,
  },
  {
    id: '9',
    name: 'Bluetooth Speaker',
    slug: 'bluetooth-speaker',
    price: 149,
    description: 'Portable speaker with rich bass and 20-hour playback. Water-resistant.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600'],
    inStock: true,
    featured: false,
  },
  {
    id: '10',
    name: 'Linen Throw',
    slug: 'linen-throw',
    price: 95,
    description: 'European flax linen throw. Lightweight, perfect for sofa or bed.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600'],
    inStock: true,
    featured: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
