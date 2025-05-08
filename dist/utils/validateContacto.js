"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarContacto = void 0;
const validarContacto = (data) => {
    const errores = [];
    if (!data.nombre || data.nombre.trim().length < 2)
        errores.push("Nombre invalido");
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errores.push("Email inválido");
    if (!data.mensaje || data.mensaje.trim().length < 5)
        errores.push("Mensaje demasiado corto");
    return errores;
};
exports.validarContacto = validarContacto;
