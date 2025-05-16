import { Router } from "express";
import { handlePayment } from "../controllers/paymentController";

const router = Router();

router.post("/checkout", handlePayment);

export default router;
