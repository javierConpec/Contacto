import express from "express";
import contactoRoutes from "./routes/contactoRoutes"; // Asegúrate de que la ruta sea correcta
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();


app.use(express.json());
app.use("/api", contactoRoutes); // Usa el enrutador correctamente

export default app;
