
import React from 'react';
import { Smartphone, Headphones, Camera, Laptop, Speaker, Monitor } from 'lucide-react';
import { Product } from './ProductTypes';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Smartphone',
    category: 'Electronics',
    sku: 'SP-2025-PRO',
    status: 'active',
    icon: <Smartphone size={48} />,
    description: 'The latest flagship smartphone with advanced camera system, powerful processor, and stunning display. Features include 5G connectivity, all-day battery life, and water resistance.',
    priceRange: '$899 - $1199',
    availability: 'In Stock',
    lastUpdated: 'Mar 28, 2025',
    colors: ['Midnight Black', 'Silver', 'Pacific Blue'],
    aiResponse: '"Our Premium Smartphone comes with a 108MP camera system, 5G connectivity, and is available in three colors: Midnight Black, Silver, and Pacific Blue. The battery lasts all day on a single charge."'
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    category: 'Audio',
    sku: 'WH-100-BLK',
    status: 'active',
    icon: <Headphones size={48} />,
    description: 'Experience immersive sound with our Premium Wireless Headphones. These over-ear headphones feature active noise cancellation technology, providing you with crystal clear audio in any environment. With up to 30 hours of battery life and comfortable memory foam ear cushions, these headphones are perfect for long listening sessions.',
    priceRange: '$199 - $249',
    availability: 'In Stock',
    lastUpdated: 'Mar 25, 2025',
    colors: ['Midnight Black', 'Arctic White', 'Navy Blue', 'Rose Gold'],
    aiResponse: '"Our Premium Wireless Headphones come in 4 colors: Midnight Black, Arctic White, Navy Blue, and Rose Gold. They feature active noise cancellation and have a battery life of up to 30 hours."'
  },
  {
    id: '3',
    title: 'Smart Watch',
    category: 'Wearables',
    sku: 'SW-500-SLV',
    status: 'active',
    icon: <Monitor size={48} />,
    description: 'Monitor your health and stay connected with this sleek smart watch. Tracks heart rate, sleep, and activity while keeping you connected to messages and calls.',
    priceRange: '$299 - $399',
    availability: 'In Stock',
    lastUpdated: 'Mar 23, 2025',
    colors: ['Silver', 'Black', 'Gold'],
    aiResponse: '"The Smart Watch tracks your heart rate, sleep patterns, and activity levels. It connects to your phone for messages and calls, and comes in Silver, Black, and Gold finishes."'
  },
  {
    id: '4',
    title: 'Ultrabook Laptop',
    category: 'Computers',
    sku: 'UB-800-PRO',
    status: 'active',
    icon: <Laptop size={48} />,
    description: 'Powerful and portable, our Ultrabook Laptop is perfect for work and entertainment. Features include a 15.6-inch display, 8GB RAM, and 256GB SSD storage.',
    priceRange: '$799 - $1099',
    availability: 'In Stock',
    lastUpdated: 'Mar 20, 2025',
    colors: ['Midnight Black', 'Silver', 'Navy Blue'],
    aiResponse: '"Our Ultrabook Laptop comes in 3 colors: Midnight Black, Silver, and Navy Blue. It features a 15.6-inch display, 8GB RAM, and 256GB SSD storage."'
  },
  {
    id: '5',
    title: 'Smart Speaker',
    category: 'Audio',
    sku: 'SS-200-BLK',
    status: 'active',
    icon: <Speaker size={48} />,
    description: 'Enhance your home with our Smart Speaker. This speaker features a 100W amplifier and 12 speakers, providing clear and powerful sound.',
    priceRange: '$149 - $199',
    availability: 'In Stock',
    lastUpdated: 'Mar 18, 2025',
    colors: ['Midnight Black', 'Silver', 'Navy Blue'],
    aiResponse: '"Our Smart Speaker comes in 3 colors: Midnight Black, Silver, and Navy Blue. It features a 100W amplifier and 12 speakers."'
  },
  {
    id: '6',
    title: 'Mirrorless Camera',
    category: 'Photography',
    sku: 'MC-300-PRO',
    status: 'pre-order',
    icon: <Camera size={48} />,
    description: 'Capture stunning photos and videos with our Mirrorless Camera. Features include a 24MP sensor, 4K video recording, and a 3-inch LCD screen.',
    priceRange: '$499 - $799',
    availability: 'Pre-Order',
    lastUpdated: 'Mar 15, 2025',
    colors: ['Midnight Black', 'Silver', 'Navy Blue'],
    aiResponse: '"Our Mirrorless Camera comes in 3 colors: Midnight Black, Silver, and Navy Blue. It features a 24MP sensor, 4K video recording, and a 3-inch LCD screen."'
  },
  {
    id: '7',
    title: 'Gaming Console',
    category: 'Gaming',
    sku: 'GC-X1000',
    status: 'sold-out',
    icon: <Monitor size={48} />,
    description: 'Experience the ultimate gaming experience with our Gaming Console. Features include 8GB RAM, 1TB SSD storage, and a 1080p display.',
    priceRange: '$399 - $599',
    availability: 'Sold Out',
    lastUpdated: 'Mar 12, 2025',
    colors: ['Midnight Black', 'Silver', 'Navy Blue'],
    aiResponse: '"Our Gaming Console comes in 3 colors: Midnight Black, Silver, and Navy Blue. It features 8GB RAM, 1TB SSD storage, and a 1080p display."'
  },
  {
    id: '8',
    title: '3D Printer',
    category: 'Electronics',
    sku: '3DP-500',
    status: 'active',
    icon: <Laptop size={48} />,
    description: 'Create your own 3D models with our 3D Printer. Features include a 3D scanner, 3D printer, and a 3D viewer.',
    priceRange: '$299 - $499',
    availability: 'In Stock',
    lastUpdated: 'Mar 10, 2025',
    colors: ['Midnight Black', 'Silver', 'Navy Blue'],
    aiResponse: '"Our 3D Printer comes in 3 colors: Midnight Black, Silver, and Navy Blue. It features a 3D scanner, 3D printer, and a 3D viewer."'
  }
];

export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};
