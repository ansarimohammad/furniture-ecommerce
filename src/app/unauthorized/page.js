import Link from 'next/link';

export const metadata = {
  title: 'Unauthorized | Furniture Store',
  description: 'You do not have permission to access this page',
};

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="mb-4 text-amber-600">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 15v2m0 0v2m0-2h2m-2 0h-2m-6-9a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3H9a3 3 0 01-3-3V6z" 
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        You don't have permission to access this page. If you believe this is an error, please contact the administrator.
      </p>
      <Link 
        href="/"
        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Return to Home
      </Link>
    </div>
  );
} 