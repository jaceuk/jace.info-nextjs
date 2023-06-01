import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  let transporter;

  if (process.env.SMTP_SECURE === 'true') {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
    });
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
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
    return new Response(JSON.stringify({ error: false }));
  } catch (error) {
    return new Response(JSON.stringify({ error: true }));
  }
}
