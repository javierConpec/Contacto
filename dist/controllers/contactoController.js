"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContacto = void 0;
const validateContacto_1 = require("../utils/validateContacto");
const contactoService_1 = require("../services/contactoService");
const postContacto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.body;
    const errores = (0, validateContacto_1.validarContacto)(datos);
    if (errores.length > 0) {
        res.status(400).json({ errores });
        return;
    }
    try {
        const resultado = yield (0, contactoService_1.enviarCorreoContacto)(datos);
        res.status(200).json({ mensaje: "Mensaje enviado correctamente", idMensaje: resultado.messageId });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: "Error al enviar el mensaje" });
    }
});
exports.postContacto = postContacto;
