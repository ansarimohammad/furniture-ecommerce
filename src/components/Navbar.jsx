"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { useAuth, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/latest-products" 
                className={`px-3 py-2 text-sm font-medium transition ${
                  isActive('/latest-products') 
                    ? 'text-amber-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900 hover:underline'
                }`}
              >
                Latest Products
              </Link>
              <Link 
                href="/collections" 
                className={`px-3 py-2 text-sm font-medium transition ${
                  isActive('/collections') 
                    ? 'text-amber-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900 hover:underline'
                }`}
              >
                Our Collections
              </Link>
              <Link 
                href="/trending" 
                className={`px-3 py-2 text-sm font-medium transition ${
                  isActive('/trending') 
                    ? 'text-amber-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900 hover:underline'
                }`}
              >
                Trending
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 text-sm font-medium transition ${
                  isActive('/about') 
                    ? 'text-amber-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900 hover:underline'
                }`}
              >
                About Us
              </Link>

              {/* Dropdown for Customer Services */}
              <div className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition ${
                    isActive('/contact') || isActive('/faq')
                      ? 'text-amber-600 font-semibold'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Customer Services
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="/contact" 
                        className={`block px-4 py-2 text-sm ${
                          isActive('/contact')
                            ? 'bg-amber-50 text-amber-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`} 
                        role="menuitem"
                      >
                        Contact Us
                      </Link>
                      <Link 
                        href="/faq" 
                        className={`block px-4 py-2 text-sm ${
                          isActive('/faq')
                            ? 'bg-amber-50 text-amber-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`} 
                        role="menuitem"
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User authentication and cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart link */}
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-gray-900 relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Auth buttons */}
            <SignedIn>
              {/* Show user button and dashboard link when signed in */}
              <div className="flex items-center space-x-4">
                <Link 
                  href="/dashboard" 
                  className={`px-3 py-2 text-sm font-medium transition ${
                    isActive('/dashboard') 
                      ? 'text-amber-600 font-semibold' 
                      : 'text-gray-700 hover:text-gray-900 hover:underline'
                  }`}
                >
                  Dashboard
                </Link>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-9 h-9"
                    }
                  }}
                />
              </div>
            </SignedIn>

            <SignedOut>
              {/* Show sign in and sign up when signed out */}
              <div className="flex items-center space-x-2">
                <Link 
                  href="/sign-in" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
                >
                  Sign In
                </Link>
                <Link 
                  href="/sign-up" 
                  className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Sign Up
                </Link>
              </div>
            </SignedOut>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-2">
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-gray-900 relative p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              href="/latest-products" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/latest-products')
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Latest Products
            </Link>
            <Link 
              href="/collections" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/collections')
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Collections
            </Link>
            <Link 
              href="/trending" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/trending')
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/about')
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Customer Services dropdown for mobile */}
            <div>
              <button
                className={`w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/contact') || isActive('/faq')
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Customer Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="pl-4 bg-gray-50">
                  <Link 
                    href="/contact" 
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive('/contact')
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/faq" 
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive('/faq')
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* Authentication links for mobile */}
            <SignedIn>
              <Link 
                href="/dashboard" 
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive('/dashboard')
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="px-3 py-2 flex items-center">
                <UserButton afterSignOutUrl="/" />
                <span className="ml-3 text-gray-700">Account</span>
              </div>
            </SignedIn>

            <SignedOut>
              <Link 
                href="/sign-in" 
                className={`block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/sign-up" 
                className={`block px-3 py-2 text-base font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 