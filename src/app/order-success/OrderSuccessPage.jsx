"use client";

import Link from 'next/link';

export default function OrderSuccessPage() {
  // Mock order data - in a real app this would come from the database or URL parameters
  const order = {
    id: 'ORD-12345678',
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    total: 1589.96,
    items: [
      {
        id: '1',
        name: 'Modern Leather Sofa',
        price: 1299.99,
        quantity: 1
      },
      {
        id: '3',
        name: 'Floor Lamp',
        price: 129.99,
        quantity: 2
      }
    ],
    shipping: {
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    estimatedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Thank you for your purchase. We've received your order.
            </p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-1">Order Number</h2>
                <p className="text-gray-600">{order.id}</p>
              </div>
              <div className="text-right">
                <h2 className="text-lg font-medium text-gray-900 mb-1">Order Date</h2>
                <p className="text-gray-600">{order.date}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Order Summary</h2>
              <div className="space-y-3">
                {order.items.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="text-gray-800">{item.name}</p>
                      <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-800">${(order.total - 29.99 - order.total * 0.07).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-800">$29.99</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Tax</p>
                    <p className="text-gray-800">${(order.total * 0.07).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200 mt-3">
                    <p className="text-gray-900 font-medium">Total</p>
                    <p className="text-gray-900 font-medium">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Shipping Information</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-800">Delivering to:</p>
              <address className="text-gray-600 not-italic mt-1">
                {order.shipping.address}<br />
                {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}<br />
                {order.shipping.country}
              </address>
              <p className="text-gray-800 mt-4">Estimated delivery: <span className="font-medium">{order.estimatedDelivery}</span></p>
            </div>
          </div>
          
          <div className="mb-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="bg-amber-100 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2">
                  <svg className="h-5 w-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-medium mb-1">Order Processing</h3>
                <p className="text-sm text-gray-600">We'll send you an email when your order ships.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="bg-amber-100 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2">
                  <svg className="h-5 w-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-medium mb-1">Shipping</h3>
                <p className="text-sm text-gray-600">Track your shipment with the details in your confirmation email.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <div className="bg-amber-100 rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2">
                  <svg className="h-5 w-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-medium mb-1">Delivery</h3>
                <p className="text-sm text-gray-600">Your order will arrive by {order.estimatedDelivery}.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/dashboard" 
              className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              View Order History
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 