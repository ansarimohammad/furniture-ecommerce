export const metadata = {
  title: 'Latest Products | Furniture Store',
  description: 'Browse our newest furniture pieces and collections',
};

export default function LatestProducts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Product cards will go here */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-medium">Modern Sofa</h3>
          <p className="text-gray-600 mb-2">$1,299.99</p>
          <p className="text-sm text-gray-500">Contemporary design with premium comfort</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-medium">Dining Table</h3>
          <p className="text-gray-600 mb-2">$899.99</p>
          <p className="text-sm text-gray-500">Solid wood construction with sleek finish</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-medium">Accent Chair</h3>
          <p className="text-gray-600 mb-2">$499.99</p>
          <p className="text-sm text-gray-500">Elegant design perfect for any room</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
          <h3 className="text-lg font-medium">Coffee Table</h3>
          <p className="text-gray-600 mb-2">$349.99</p>
          <p className="text-sm text-gray-500">Minimalist design with storage space</p>
        </div>
      </div>
    </div>
  );
} 