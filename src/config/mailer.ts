import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "javierconpec@gmail.com",
      pass: "zwku ctuc owqq loxg",
    },
  });
  