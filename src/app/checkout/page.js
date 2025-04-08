import CheckoutPage from './CheckoutPage';

export const generateMetadata = () => {
  return {
    title: 'Checkout | Furniture Store',
    description: 'Complete your purchase securely',
  };
};

export default function Page() {
  return <CheckoutPage />;
} 