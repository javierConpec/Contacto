import { IContacto } from "../interfaces/IContacto";
import { validarContacto } from "../utils/validateContacto";
import { enviarCorreoContacto } from "../services/contactoService";
import { Request, Response, NextFunction } from "express";

export const postContacto = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const datos: IContacto = req.body;
    const errores = validarContacto(datos);
  
    if (errores.length > 0) {
      res.status(400).json({ errores });
      return;
    }
  
    try {
      console.log("Enviando correo con datos:", datos);
      const resultado = await enviarCorreoContacto(datos);
      res.status(200).json({ mensaje: "Mensaje enviado correctamente", idMensaje: resultado.messageId });
    } catch (err) {
      console.error("Error al enviar correo:", err);
      res.status(500).json({ mensaje: "Error al enviar el mensaje" });
    }
    
  };
  