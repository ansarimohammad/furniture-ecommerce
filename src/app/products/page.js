import ProductCard from '../../components/ProductCard';

export const generateMetadata = () => {
  return {
    title: 'Product Catalog | Furniture Store',
    description: 'Browse our collection of high-quality furniture',
  };
};

// Mock data - in a real app, this would come from an API or database
const products = [
  {
    id: '1',
    name: 'Modern Leather Sofa',
    price: 1299.99,
    category: 'Sofas',
    material: 'Leather',
    color: 'Black',
    rating: 4.7,
    image: '/images/products/sofa-1.jpg',
    isNew: true,
  },
  {
    id: '2',
    name: 'Wooden Dining Table',
    price: 599.99,
    category: 'Tables',
    material: 'Wood',
    color: 'Brown',
    rating: 4.5,
    image: '/images/products/table-1.jpg',
    discount: 10,
  },
  // Add more products as needed
];

const categories = ['All', 'Sofas', 'Tables', 'Chairs', 'Beds', 'Storage'];
const materials = ['All', 'Leather', 'Wood', 'Metal', 'Fabric', 'Glass'];
const colors = ['All', 'Black', 'Brown', 'White', 'Gray', 'Beige'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $500', min: 0, max: 500 },
  { label: '$500 - $1000', min: 500, max: 1000 },
  { label: '$1000 - $2000', min: 1000, max: 2000 },
  { label: 'Over $2000', min: 2000, max: Infinity },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Category</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Material</h2>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label key={material} className="flex items-center">
                    <input
                      type="radio"
                      name="material"
                      value={material}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{material}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Color</h2>
              <div className="space-y-2">
                {colors.map((color) => (
                  <label key={color} className="flex items-center">
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{color}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Price Range</h2>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range.label}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              Apply Filters
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 