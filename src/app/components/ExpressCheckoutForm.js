import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

export default function ExpressCheckoutForm({ clientSecret, itemPrice }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    
    if (submitError) {
      console.log(submitError.message);
      return;
    }

    const { error: paymentError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:3000/success',
      },
      redirect: 'if_required',
    });
    
    if (paymentError) {
      console.log(paymentError.message);
    } else {
      navigate('/success');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <AddressElement options={{mode: 'shipping'}} />
      <PaymentElement />
      <button 
      className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" 
      disabled={!stripe}>Pay ${itemPrice/100} 
      </button>
    </form>
  );
}
