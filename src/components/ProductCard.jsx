"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNew && (
            <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <div>
            {product.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              isAddingToCart
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            }`}
          >
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 