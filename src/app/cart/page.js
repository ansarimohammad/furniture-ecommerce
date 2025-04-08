import CartPage from './CartPage';

export const generateMetadata = () => {
  return {
    title: 'Shopping Cart | Furniture Store',
    description: 'Review your cart and proceed to checkout',
  };
};

export default function Page() {
  return <CartPage />;
} 