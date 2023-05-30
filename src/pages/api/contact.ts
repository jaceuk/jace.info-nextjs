import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function Contact(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  let transporter;

  if (process.env.SMTP_SECURE === 'true') {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
    });
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@jace.info',
      subject: `JACE.INFO contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
}
