export const metadata = {
  title: 'About Us | Furniture Store',
  description: 'Learn about our company, mission, and commitment to quality furniture',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, FurnitureHub began as a small family-owned showroom with a passion for quality craftsmanship and timeless design. What started as a curated collection of handpicked pieces has evolved into a comprehensive furniture destination serving customers nationwide.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we've expanded our catalog to include thousands of products across various styles, from contemporary to classic, industrial to mid-century modern, all while maintaining our commitment to quality, sustainability, and customer satisfaction.
          </p>
          <p className="text-gray-600">
            Today, FurnitureHub continues to be driven by the same principles that inspired its founding: offering exceptional furniture that transforms houses into homes, all at accessible price points and with unparalleled customer service.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-80 lg:h-auto"></div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Quality Craftsmanship</h3>
            <p className="text-gray-600">We believe in furniture that lasts. Each piece in our collection is carefully selected for its superior construction and enduring design.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Fair Pricing</h3>
            <p className="text-gray-600">We strive to offer the best value possible by keeping our prices competitive without compromising on quality or ethical sourcing.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sustainability</h3>
            <p className="text-gray-600">We're committed to environmental responsibility through sustainable sourcing, eco-friendly materials, and reducing our carbon footprint.</p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-medium">Sarah Johnson</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-medium">Michael Chen</h3>
            <p className="text-gray-600">Head of Design</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-medium">Emily Rodriguez</h3>
            <p className="text-gray-600">Customer Experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-medium">David Kim</h3>
            <p className="text-gray-600">Supply Chain Director</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Visit Our Showroom</h2>
        <div className="bg-gray-200 w-full h-96 rounded-lg mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Store Hours</h3>
            <ul className="text-gray-600">
              <li className="mb-1">Monday - Friday: 10:00 AM - 8:00 PM</li>
              <li className="mb-1">Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 12:00 PM - 5:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <address className="text-gray-600 not-italic">
              123 Furniture Avenue<br />
              Suite 500<br />
              New York, NY 10001<br />
              <a href="tel:+1234567890" className="text-amber-600 hover:underline mt-2 inline-block">+1 (234) 567-890</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
} 