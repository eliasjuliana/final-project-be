import nodemailer from 'nodemailer';

const emailUserUrl = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

export const sendWelcomeEmail = async (user) => {
  try {
    // Configurar nodemailer (asegúrate de configurar tu cuenta SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUserUrl,
        pass,
      },
      secure: true, // Puedes probar cambiando esto a 'false'
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Contenido del correo electrónico utilizando una plantilla
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Welcome to Grill & Thrill',
      html: `
        <p>Hello ${user.firstname} ${user.lastname},</p>
        <p>Welcome to your application. Your registration has been successful</p>
      `,
    };

    // Enviar correo electrónico
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('No se pudo enviar el correo electrónico de bienvenida.');
  }
};
