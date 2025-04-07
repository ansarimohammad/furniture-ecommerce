export const metadata = {
  title: 'Our Collections | Furniture Store',
  description: 'Browse our curated furniture collections for every style and space',
};

export default function Collections() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Collections</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Collection cards */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Modern Living</h3>
            <p className="text-sm text-gray-200 mb-4">Contemporary designs for the modern home</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Scandinavian</h3>
            <p className="text-sm text-gray-200 mb-4">Minimalist pieces with clean lines and light tones</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Industrial</h3>
            <p className="text-sm text-gray-200 mb-4">Raw materials and vintage-inspired designs</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Mid-Century</h3>
            <p className="text-sm text-gray-200 mb-4">Retro-inspired furniture with a modern twist</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Bohemian</h3>
            <p className="text-sm text-gray-200 mb-4">Free-spirited pieces with eclectic patterns</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="h-64 bg-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Rustic</h3>
            <p className="text-sm text-gray-200 mb-4">Natural wood and farmhouse-inspired designs</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition hover:bg-gray-100">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 