import OrderSuccessPage from './OrderSuccessPage';

export const generateMetadata = () => {
  return {
    title: 'Order Confirmation | Furniture Store',
    description: 'Thank you for your purchase. Your order has been confirmed.',
  };
};

export default function Page() {
  return <OrderSuccessPage />;
} 