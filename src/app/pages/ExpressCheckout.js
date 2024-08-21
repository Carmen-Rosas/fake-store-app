import { useEffect, useState } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ExpressCheckoutForm from '../components/ExpressCheckoutForm';

const stripePromise = loadStripe("pk_test_51Pn3be06TRH2TnDWMGPC1zLy2tLI4gYSsA04dV116eYRdZ8nMoE0ZAjYphoHweuUtJIwQHi18kpLyI1FiqP4ikgR00TNqyTm03");

export default function ExpressCheckout( { product } ) {
  const [clientSecret, setClientSecret] = useState("");

  const itemPrice = (product.price * product.quantity) * 100;

  useEffect(() => {
    async function fetchClientSecret() {
      const response = await fetch('http://localhost:3002/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: itemPrice,
          currency: 'usd',
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    }

    fetchClientSecret();
  }, [itemPrice]);

  const options = {
    clientSecret,
  };

  return clientSecret ? (
    <Elements stripe={stripePromise} options={options}>
      <ExpressCheckoutForm clientSecret={clientSecret} itemPrice={itemPrice} />
    </Elements>
  ) : (
    <div>Loading...</div>
  );
}
