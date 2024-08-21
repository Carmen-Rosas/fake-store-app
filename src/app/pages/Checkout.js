import { useEffect, useState } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51Pn3be06TRH2TnDWMGPC1zLy2tLI4gYSsA04dV116eYRdZ8nMoE0ZAjYphoHweuUtJIwQHi18kpLyI1FiqP4ikgR00TNqyTm03");

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState("");

  const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  const total = Math.round(parseFloat(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)) * 100);

  useEffect(() => {
    async function fetchClientSecret() {
      const response = await fetch('http://localhost:3002/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          currency: 'usd',
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    }

    fetchClientSecret();
  }, [total]);

  const options = {
    clientSecret,
  };

  return clientSecret ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  ) : (
    <div>Loading...</div>
  );
}
