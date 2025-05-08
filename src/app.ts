import express from "express";
import contactoRoutes from "./routes/contactoRoutes"; // Asegúrate de que la ruta sea correcta
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactoRoutes); // Usa el enrutador correctamente

export default app;
