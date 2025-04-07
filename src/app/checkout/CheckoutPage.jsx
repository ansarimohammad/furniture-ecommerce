"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState('shipping');
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });

  // Mock cart items - in a real app would come from global cart state
  const cartItems = [
    {
      id: '1',
      name: 'Modern Leather Sofa',
      price: 1299.99,
      quantity: 1,
      image: ''
    },
    {
      id: '3',
      name: 'Floor Lamp',
      price: 129.99,
      quantity: 2,
      image: ''
    }
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 29.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (activeStep === 'shipping') {
      setActiveStep('payment');
    } else if (activeStep === 'payment') {
      setActiveStep('review');
    }
  };

  const handlePreviousStep = () => {
    if (activeStep === 'payment') {
      setActiveStep('shipping');
    } else if (activeStep === 'review') {
      setActiveStep('payment');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment and create the order here
    window.location.href = '/order-success';
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${activeStep === 'shipping' || activeStep === 'payment' || activeStep === 'review' ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${activeStep === 'shipping' || activeStep === 'payment' || activeStep === 'review' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}`}>
              <span className="text-sm font-medium">1</span>
            </div>
            <span className="ml-2 text-sm font-medium">Shipping</span>
          </div>
          <div className={`w-16 h-1 mx-2 ${activeStep === 'payment' || activeStep === 'review' ? 'bg-amber-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${activeStep === 'payment' || activeStep === 'review' ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${activeStep === 'payment' || activeStep === 'review' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}`}>
              <span className="text-sm font-medium">2</span>
            </div>
            <span className="ml-2 text-sm font-medium">Payment</span>
          </div>
          <div className={`w-16 h-1 mx-2 ${activeStep === 'review' ? 'bg-amber-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${activeStep === 'review' ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${activeStep === 'review' ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}`}>
              <span className="text-sm font-medium">3</span>
            </div>
            <span className="ml-2 text-sm font-medium">Review</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Shipping Form */}
          {activeStep === 'shipping' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
              <form onSubmit={handleNextStep} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Apartment, Suite, etc. (optional)</label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* Payment Form */}
          {activeStep === 'payment' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
              <form onSubmit={handleNextStep} className="space-y-6">
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">Expiration Month</label>
                    <select
                      id="expMonth"
                      name="expMonth"
                      value={formData.expMonth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                        <option key={month} value={month.toString().padStart(2, '0')}>
                          {month.toString().padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">Expiration Year</label>
                    <select
                      id="expYear"
                      name="expYear"
                      value={formData.expYear}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Back to Shipping
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Review Order
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* Order Review */}
          {activeStep === 'review' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-800">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-gray-600">{formData.address}</p>
                    {formData.apartment && <p className="text-gray-600">{formData.apartment}</p>}
                    <p className="text-gray-600">
                      {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                    <p className="text-gray-600">{formData.country}</p>
                    <p className="text-gray-600 mt-2">{formData.email}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment Method</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-800">{formData.cardName}</p>
                    <p className="text-gray-600">
                      Card ending in {formData.cardNumber.slice(-4)}
                    </p>
                    <p className="text-gray-600">Expires: {formData.expMonth}/{formData.expYear}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Order Items</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between py-2">
                        <div className="flex">
                          <div className="h-16 w-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                          <div className="ml-4">
                            <p className="text-gray-800 font-medium">{item.name}</p>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between py-1">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="text-gray-800">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-1">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-800">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-1">
                    <p className="text-gray-600">Tax</p>
                    <p className="text-gray-800">${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Back to Payment
                  </button>
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="px-6 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="h-16 w-16 bg-gray-200 rounded-md flex-shrink-0"></div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900 font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-base pt-2 border-t border-gray-200 mt-2">
                <span className="font-medium text-gray-900">Total</span>
                <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 