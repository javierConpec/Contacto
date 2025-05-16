import { Router } from "express";
import { handlePayment } from "../controllers/payment.controller";

const router = Router();

router.post("/create-checkout-session", handlePayment);

export default router;
