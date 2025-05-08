// src/routes/contactoRoutes.ts
import { Router } from "express";
import { postContacto } from "../controllers/contactoController";

const router = Router();

router.post("/contacto", postContacto); 

export default router;
