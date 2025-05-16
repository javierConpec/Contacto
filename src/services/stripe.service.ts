import { stripe } from "../config/stripe.config";

export const createCheckoutSession = async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Membresía Premium",
          },
          unit_amount: 3000, // $30.00
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  return session;
};
