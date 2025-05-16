import { Request, Response } from "express";
import { createCheckoutSession } from "../services/stripe.service";

export const handlePayment = async (req: Request, res: Response) => {
  try {
    const session = await createCheckoutSession();
    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear sesión de pago" });
  }
};
