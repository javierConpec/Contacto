import { transporter } from "../config/mailer";
import { IContacto } from "../interfaces/IContacto";

export const enviarCorreoContacto = async (data: IContacto) => {
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
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info);  // Loguear la respuesta
    return info;
  } catch (error) {
    console.error("Error al enviar el correo:", error);  // Mostrar el error completo
    throw new Error("Error al enviar el correo");
  }
};
