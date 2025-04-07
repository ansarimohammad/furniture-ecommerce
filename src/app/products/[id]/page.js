export const generateMetadata = ({ params }) => {
  return {
    title: `Product Details | Furniture Store`,
    description: `View detailed information about this furniture product`,
  };
};

export default function ProductDetails({ params }) {
  // In a real application, you would fetch product data based on params.id
  // This is just mock data for demonstration
  const product = {
    id: params.id,
    name: "Modern Leather Sofa",
    price: 1299.99,
    description: "This luxurious leather sofa combines comfort with modern design. Perfect for any living space, it features high-density foam cushions and premium leather upholstery.",
    features: [
      "Premium Italian leather",
      "Solid hardwood frame",
      "High-density foam cushions",
      "Stainless steel legs",
      "Available in multiple colors"
    ],
    dimensions: {
      width: "84 inches",
      depth: "36 inches",
      height: "34 inches",
      weight: "120 lbs"
    },
    rating: 4.7,
    reviewCount: 124,
    inStock: true,
    colors: ["Black", "Brown", "Tan", "White"],
    images: [1, 2, 3, 4].map(() => ({ src: "" })),
    related: [1, 2, 3, 4].map(() => ({ id: Math.random().toString(), name: "" }))
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
            <div className="h-96 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="bg-gray-200 rounded-md h-24 cursor-pointer hover:ring-2 hover:ring-amber-500"></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          
          <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Color</h2>
            <div className="flex space-x-3">
              {product.colors.map((color, index) => (
                <button 
                  key={index}
                  className={`w-10 h-10 rounded-full border-2 ${index === 0 ? 'border-amber-500' : 'border-transparent'}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-24">
              <label htmlFor="quantity" className="sr-only">Quantity</label>
              <select 
                id="quantity" 
                name="quantity" 
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-amber-500 focus:ring-amber-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            
            <button 
              type="button"
              className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
            
            <button 
              type="button"
              className="p-3 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Add to wishlist"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-6 space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Features</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-2">Dimensions</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Width: </span>
                  <span className="text-gray-700">{product.dimensions.width}</span>
                </div>
                <div>
                  <span className="text-gray-500">Depth: </span>
                  <span className="text-gray-700">{product.dimensions.depth}</span>
                </div>
                <div>
                  <span className="text-gray-500">Height: </span>
                  <span className="text-gray-700">{product.dimensions.height}</span>
                </div>
                <div>
                  <span className="text-gray-500">Weight: </span>
                  <span className="text-gray-700">{product.dimensions.weight}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-2">Availability</h2>
              <p className={`${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs (Reviews, Shipping, etc.) */}
      <div className="mb-16">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8">
            <a href="#" className="border-amber-500 text-amber-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Description
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Reviews
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Shipping & Returns
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Care Instructions
            </a>
          </nav>
        </div>
        
        <div className="py-6">
          <h2 className="sr-only">Description</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              Crafted with premium Italian leather, this modern sofa combines luxury with everyday comfort. The solid hardwood frame ensures durability, while the high-density foam cushions provide exceptional comfort for years to come.
            </p>
            <p>
              The stainless steel legs add a contemporary touch to the design, making it a perfect centerpiece for any modern living room. The leather upholstery is easy to clean and resistant to stains, ideal for homes with children or pets.
            </p>
            <p>
              Each sofa is expertly handcrafted by skilled artisans with attention to every detail, from the precision stitching to the carefully finished edges. The result is a beautiful, long-lasting piece that will enhance your home for years to come.
            </p>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.related.map((item, index) => (
            <div key={index} className="group">
              <div className="aspect-w-1 aspect-h-1 mb-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Product Name</h3>
              <p className="text-gray-600">$XXX.XX</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 