const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Pn3be06TRH2TnDWlA6KJx4ZBfaC023wqPDlL54nSV2SQl60LRp9mLqLcCDqqEGbU3iVsXczOkeuHjdU2jh7o1pW00E1jKJia8');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'] 
  }));

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, 
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3002, () => console.log('Server running on port 3002'));
