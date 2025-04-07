"use client";

import { useState } from 'react';

export default function FaqAccordion({ faqItems }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <div key={item.id} id={`faq-${item.id}`} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            onClick={() => toggleItem(item.id)}
          >
            <span className="text-lg font-medium text-gray-800">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${openItem === item.id ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`px-4 pb-4 ${openItem === item.id ? 'block' : 'hidden'}`}
          >
            <div className="pt-2 border-t border-gray-100">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 