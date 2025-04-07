"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('orders');
  
  // Mock user data - in a real app this would come from authentication
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joined: 'January 2023',
    orders: [
      {
        id: 'ORD-12345678',
        date: 'May 15, 2023',
        status: 'Delivered',
        total: 1589.96,
        items: [
          { name: 'Modern Leather Sofa', quantity: 1 },
          { name: 'Floor Lamp', quantity: 2 }
        ]
      },
      {
        id: 'ORD-87654321',
        date: 'March 22, 2023',
        status: 'Delivered',
        total: 849.97,
        items: [
          { name: 'Coffee Table', quantity: 1 },
          { name: 'Bookshelf', quantity: 1 }
        ]
      },
      {
        id: 'ORD-98765432',
        date: 'February 8, 2023',
        status: 'Delivered',
        total: 399.99,
        items: [
          { name: 'Dining Chair Set', quantity: 4 }
        ]
      }
    ],
    addresses: [
      {
        id: 1,
        type: 'Home',
        default: true,
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States'
      },
      {
        id: 2,
        type: 'Work',
        default: false,
        street: '456 Market Street',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94103',
        country: 'United States'
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-gray-700">{user.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h2 className="text-xl font-medium text-gray-900">{user.name}</h2>
              <p className="text-gray-600 text-sm">Member since {user.joined}</p>
            </div>
            
            <nav className="space-y-2">
              <button
                className={`w-full text-left px-4 py-2 rounded-md font-medium ${activeTab === 'orders' ? 'bg-amber-100 text-amber-800' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('orders')}
              >
                Orders
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-md font-medium ${activeTab === 'addresses' ? 'bg-amber-100 text-amber-800' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('addresses')}
              >
                Addresses
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-md font-medium ${activeTab === 'account' ? 'bg-amber-100 text-amber-800' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('account')}
              >
                Account Details
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded-md font-medium ${activeTab === 'wishlist' ? 'bg-amber-100 text-amber-800' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('wishlist')}
              >
                Wishlist
              </button>
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                Sign Out
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-3">
          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-900">Order History</h2>
              </div>
              
              {user.orders.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                  <Link 
                    href="/latest-products"
                    className="inline-block bg-amber-600 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div>
                  {user.orders.map((order, index) => (
                    <div 
                      key={order.id}
                      className={`p-6 ${index < user.orders.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                      <div className="flex flex-wrap justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{order.id}</h3>
                          <p className="text-gray-600 text-sm">Placed on {order.date}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <p className="text-gray-800">{item.name} <span className="text-gray-500">x{item.quantity}</span></p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                        <p className="text-gray-900 font-medium">Total: ${order.total.toFixed(2)}</p>
                        <Link 
                          href={`/orders/${order.id}`}
                          className="text-amber-600 hover:text-amber-800 font-medium"
                        >
                          View Order
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'addresses' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-medium text-gray-900">Saved Addresses</h2>
                <button className="text-sm bg-amber-600 text-white px-3 py-1 rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Add New Address
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.addresses.map(address => (
                  <div key={address.id} className="border border-gray-200 rounded-lg p-4 relative">
                    {address.default && (
                      <span className="absolute top-2 right-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Default
                      </span>
                    )}
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{address.type}</h3>
                    <address className="text-gray-600 not-italic">
                      {address.street}<br />
                      {address.city}, {address.state} {address.zipCode}<br />
                      {address.country}
                    </address>
                    <div className="mt-4 flex space-x-3">
                      <button className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                        Edit
                      </button>
                      {!address.default && (
                        <>
                          <button className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                            Set as Default
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'account' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-900">Account Details</h2>
              </div>
              
              <div className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        defaultValue={user.name.split(' ')[0]}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        defaultValue={user.name.split(' ')[1]}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                      defaultValue={user.email}
                    />
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-900">My Wishlist</h2>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
                <Link 
                  href="/wishlist"
                  className="inline-block bg-amber-600 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  View Wishlist Page
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 