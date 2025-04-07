import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
          <path d="M19 7V3H5v4H2v13h8v-4h4v4h8V7h-3zm-8 7H7V8h4v6zm6 0h-4V8h4v6z"/>
        </svg>
      </div>
      <span className="text-xl font-bold text-gray-800">FurnitureHub</span>
    </Link>
  );
};

export default Logo; 