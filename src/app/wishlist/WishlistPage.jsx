"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import WishlistButton from '../../components/WishlistButton';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock product data - in a real app, you would fetch these from an API
  const allProducts = [
    {
      id: '1',
      name: 'Modern Leather Sofa',
      price: 1299.99,
      image: '',
      category: 'Sofas',
      rating: 4.7
    },
    {
      id: '2',
      name: 'Coffee Table',
      price: 349.99,
      image: '',
      category: 'Tables',
      rating: 4.5
    },
    {
      id: '3',
      name: 'Floor Lamp',
      price: 129.99,
      image: '',
      category: 'Lighting',
      rating: 4.3
    },
    {
      id: '4',
      name: 'Dining Chair Set',
      price: 399.99,
      image: '',
      category: 'Chairs',
      rating: 4.6
    },
    {
      id: '5',
      name: 'Bookshelf',
      price: 249.99,
      image: '',
      category: 'Storage',
      rating: 4.4
    }
  ];

  useEffect(() => {
    // Simulate loading time for data fetch
    const timer = setTimeout(() => {
      // Get wishlist IDs from localStorage
      const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');
      
      // Filter products to only include those in the wishlist
      const items = allProducts.filter(product => wishlistIds.includes(product.id));
      
      setWishlistItems(items);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to handle adding to cart
  const addToCart = (product) => {
    // In a real app, this would add to cart state/context
    console.log(`Added ${product.name} to cart`);
    
    // For now, just show an alert
    alert(`${product.name} added to cart!`);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : wishlistItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <svg 
            className="mx-auto h-16 w-16 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Your wishlist is empty</h2>
          <p className="mt-1 text-gray-500">Products you save will appear here.</p>
          <div className="mt-6">
            <Link 
              href="/latest-products" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Explore Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {wishlistItems.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 bg-gray-200 rounded-md"></div>
                      <div className="ml-4">
                        <Link href={`/products/${product.id}`} className="text-sm font-medium text-gray-900 hover:text-amber-600">
                          {product.name}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">{product.rating}</span>
                      <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => addToCart(product)}
                        className="text-white bg-amber-600 hover:bg-amber-700 px-3 py-1 rounded-md"
                      >
                        Add to Cart
                      </button>
                      <WishlistButton productId={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 