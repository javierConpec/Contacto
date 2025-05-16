import express from "express";
import contactoRoutes from "./routes/contactoRoutes"; // Asegúrate de que la ruta sea correcta
import dotenv from "dotenv";
import paymentRoutes from "./routes/payment.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", contactoRoutes);
app.use("/api/payments", paymentRoutes);

export default app;


