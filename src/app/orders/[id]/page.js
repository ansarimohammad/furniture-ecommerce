import Link from 'next/link';

export const generateMetadata = ({ params }) => {
  return {
    title: `Order ${params.id} | Furniture Store`,
    description: 'View the details of your order',
  };
};

export default function OrderDetails({ params }) {
  // Mock order data - in a real app this would come from an API call using the order ID
  const order = {
    id: params.id,
    date: 'May 15, 2023',
    status: 'Delivered',
    delivered: 'May 29, 2023',
    paymentMethod: 'Credit Card (ending in 4242)',
    total: 1589.96,
    subtotal: 1459.97,
    shippingCost: 29.99,
    tax: 100.00,
    items: [
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
    ],
    shippingAddress: {
      name: 'Alex Johnson',
      address: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    billingAddress: {
      name: 'Alex Johnson',
      address: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    timeline: [
      { date: 'May 15, 2023', status: 'Order Placed', description: 'Your order has been received' },
      { date: 'May 16, 2023', status: 'Order Processed', description: 'Your order has been processed and is being prepared for shipping' },
      { date: 'May 20, 2023', status: 'Shipped', description: 'Your order has been shipped' },
      { date: 'May 29, 2023', status: 'Delivered', description: 'Your order has been delivered' }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <Link 
              href="/dashboard"
              className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-3"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Orders
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Order {order.id}</h1>
            <p className="text-gray-600">Placed on {order.date}</p>
          </div>
          <div>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
              'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Order Timeline</h2>
            <div className="space-y-6">
              {order.timeline.map((event, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className={`h-4 w-4 rounded-full mt-1 ${
                      index === order.timeline.length - 1 ? 'bg-green-500' : 'bg-amber-500'
                    }`}></div>
                    {index < order.timeline.length - 1 && (
                      <div className="h-full w-0.5 bg-gray-200 ml-1.5 mt-1"></div>
                    )}
                  </div>
                  <div className={`pb-6 ${index === order.timeline.length - 1 ? '' : ''}`}>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <h3 className="font-medium text-gray-900">{event.status}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Shipping Information</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-gray-800">{order.shippingAddress.name}</p>
                <address className="text-gray-600 not-italic mt-1">
                  {order.shippingAddress.address}{order.shippingAddress.apartment ? `, ${order.shippingAddress.apartment}` : ''}<br />
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                  {order.shippingAddress.country}
                </address>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Billing Information</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium text-gray-800">{order.billingAddress.name}</p>
                <address className="text-gray-600 not-italic mt-1">
                  {order.billingAddress.address}{order.billingAddress.apartment ? `, ${order.billingAddress.apartment}` : ''}<br />
                  {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zipCode}<br />
                  {order.billingAddress.country}
                </address>
                <p className="mt-3 text-gray-600">
                  <span className="font-medium">Payment Method:</span> {order.paymentMethod}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Items</h2>
            
            <div className="border-b border-gray-200 mb-4">
              {order.items.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex py-4 ${index < order.items.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className="h-24 w-24 flex-shrink-0 bg-gray-200 rounded-md"></div>
                  <div className="ml-4 flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-base font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800">${order.subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-800">${order.shippingCost.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Tax</p>
                <p className="text-gray-800">${order.tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200 mt-3">
                <p className="text-gray-900 font-medium">Total</p>
                <p className="text-gray-900 font-medium">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Need Help?</h2>
            <p className="text-gray-600">
              If you have any questions about your order, please <Link href="/contact" className="text-amber-600 hover:text-amber-800">contact us</Link>.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Print Receipt
            </button>
            <Link 
              href="/contact?reason=return&order=12345678"
              className="bg-amber-600 text-white rounded-md px-4 py-2 font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Request Return
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 