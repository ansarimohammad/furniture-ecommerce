import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: 'Sign In | Furniture Store',
  description: 'Sign in to your Furniture Store account',
};

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
          <p className="text-gray-600">Welcome back to Furniture Store</p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-amber-600 hover:bg-amber-700 text-sm normal-case",
                footerActionLink: 
                  "text-amber-600 hover:text-amber-700",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
          />
        </div>
      </div>
    </div>
  );
} 