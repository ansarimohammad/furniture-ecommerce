export const metadata = {
  title: 'Trending Products | Furniture Store',
  description: 'Discover our most popular and trending furniture pieces',
};

export default function Trending() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Trending Now</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Most Popular This Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <div className="h-48 bg-gray-200"></div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-15%</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Velvet Accent Chair</h3>
              <div className="flex items-center mb-2">
                <span className="text-amber-500 font-semibold">$449.99</span>
                <span className="text-gray-400 line-through text-sm ml-2">$529.99</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Luxurious velvet with gold-finish metal legs</p>
              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <div className="h-48 bg-gray-200"></div>
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Marble Coffee Table</h3>
              <div className="flex items-center mb-2">
                <span className="text-amber-500 font-semibold">$699.99</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Genuine marble top with black metal frame</p>
              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <div className="h-48 bg-gray-200"></div>
              <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Best Seller</div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Modular Sectional Sofa</h3>
              <div className="flex items-center mb-2">
                <span className="text-amber-500 font-semibold">$1,899.99</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Customizable configuration with premium fabric</p>
              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative">
              <div className="h-48 bg-gray-200"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Floor Lamp</h3>
              <div className="flex items-center mb-2">
                <span className="text-amber-500 font-semibold">$249.99</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Adjustable brass lamp with marble base</p>
              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Trending Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <div className="h-full bg-gray-200"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
              <span className="text-white text-xl font-medium">Sofas & Sectionals</span>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <div className="h-full bg-gray-200"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
              <span className="text-white text-xl font-medium">Dining Sets</span>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <div className="h-full bg-gray-200"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
              <span className="text-white text-xl font-medium">Bedroom</span>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <div className="h-full bg-gray-200"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/60">
              <span className="text-white text-xl font-medium">Office</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 