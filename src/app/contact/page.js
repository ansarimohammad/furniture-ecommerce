export const metadata = {
  title: 'Contact Us | Furniture Store',
  description: 'Get in touch with our customer service team for any questions or support',
};

import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
          
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Customer Service</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Phone:</span> +1 (234) 567-8901
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Email:</span> <a href="mailto:support@furniturehub.com" className="text-amber-600 hover:underline">support@furniturehub.com</a>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Headquarters</h3>
              <address className="text-gray-600 not-italic">
                123 Furniture Avenue<br />
                Suite 500<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Showroom</h3>
              <p className="text-gray-600 mb-2">
                Visit our showroom to experience our furniture in person.
              </p>
              <div className="text-gray-600">
                <p className="mb-1"><span className="font-medium">Address:</span> 456 Display Street, New York, NY 10002</p>
                <p className="mb-1"><span className="font-medium">Phone:</span> +1 (234) 567-8902</p>
                <p>
                  <span className="font-medium">Hours:</span><br />
                  Monday - Friday: 10:00 AM - 8:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 12:00 PM - 5:00 PM
                </p>
              </div>
            </div>
            
            <div className="bg-gray-200 w-full h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 