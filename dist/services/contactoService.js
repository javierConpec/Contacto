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
exports.enviarCorreoContacto = void 0;
const mailer_1 = require("../config/mailer");
const enviarCorreoContacto = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: `"Portafolio Web" <javierconpec@gmail.com>`,
        to: "javier150722@gmail.com",
        subject: `Nuevo mensaje de contacto: ${data.nombre}`,
        html: `
      <h3>Nuevo mensaje desde tu portafolio</h3>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.mensaje}</p>
    `,
    };
    try {
        const info = yield mailer_1.transporter.sendMail(mailOptions);
        console.log("Correo enviado:", info); // Loguear la respuesta
        return info;
    }
    catch (error) {
        console.error("Error al enviar el correo:", error); // Mostrar el error completo
        throw new Error("Error al enviar el correo");
    }
});
exports.enviarCorreoContacto = enviarCorreoContacto;
