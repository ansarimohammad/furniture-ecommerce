export const metadata = {
  title: 'FAQ | Furniture Store',
  description: 'Frequently asked questions about our products, shipping, returns, and more',
};

import FaqAccordion from '../../components/FaqAccordion';

export default function FAQ() {
  const faqItems = [
    {
      id: 1,
      question: 'What is your delivery timeframe?',
      answer: 'Our standard delivery timeframe is 5-7 business days for in-stock items. Custom and made-to-order pieces typically require 4-6 weeks for production before shipping. You will receive a confirmation email with tracking information once your order has shipped.'
    },
    {
      id: 2,
      question: 'Do you offer assembly services?',
      answer: 'Yes, we offer professional assembly services for an additional fee. You can select this option during checkout. Our assembly team will contact you to schedule a convenient time for installation after your furniture has been delivered.'
    },
    {
      id: 3,
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items in original condition with original packaging. Custom and clearance items are final sale. A 15% restocking fee may apply. Please note that return shipping costs are the responsibility of the customer unless the item arrived damaged or defective.'
    },
    {
      id: 4,
      question: 'How do I care for my furniture?',
      answer: 'Care instructions vary depending on the materials of your furniture. Wood pieces should be dusted regularly with a soft cloth and kept away from direct sunlight and heat sources. Upholstered items should be vacuumed regularly and professionally cleaned as needed. Specific care instructions are included with each piece of furniture.'
    },
    {
      id: 5,
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within the continental United States. We do not offer shipping to Hawaii, Alaska, or international destinations at this time.'
    },
    {
      id: 6,
      question: 'Can I customize the dimensions or finishes of your furniture?',
      answer: 'Select items in our catalog are available for customization. These items will have a "Customize" option on their product page. Customization options typically include dimensions, fabric/material selection, and finishes. Please note that customized items have a longer production timeframe.'
    },
    {
      id: 7,
      question: 'Do you offer price matching?',
      answer: 'We offer price matching for identical items found at authorized retailers. To request a price match, please contact our customer service team with proof of the competitor\'s current pricing. Price matching is subject to verification and does not apply to clearance, open-box, or limited-time promotional offers.'
    },
    {
      id: 8,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and financing through Affirm. All payments are processed securely through our encrypted payment system.'
    },
    {
      id: 9,
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a confirmation email with tracking information. You can also log into your account on our website to view the status of your order and tracking details.'
    },
    {
      id: 10,
      question: 'Do you have a physical showroom?',
      answer: 'Yes, we have showrooms in New York, Los Angeles, and Chicago where you can view and test our furniture in person. Visit our Contact page for showroom addresses and hours of operation.'
    }
  ];

  const categories = [
    {
      title: 'Ordering & Shipping',
      items: [1, 5, 9]
    },
    {
      title: 'Returns & Warranty',
      items: [3, 7]
    },
    {
      title: 'Product Information',
      items: [4, 6]
    },
    {
      title: 'Services & Support',
      items: [2, 8, 10]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="mb-12">
        <p className="text-gray-600 max-w-3xl">
          Find answers to common questions about our products, shipping, returns, and more. 
          If you can't find what you're looking for, please don't hesitate to contact our customer service team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
            <ul className="space-y-1">
              {category.items.map(id => {
                const item = faqItems.find(item => item.id === id);
                return (
                  <li key={id}>
                    <a href={`#faq-${id}`} className="text-amber-600 hover:underline text-sm">
                      {item.question}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <FaqAccordion faqItems={faqItems} />
      </div>
      
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          Our customer service team is here to help you with any questions you may have.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
} 