
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'mail.teamrabbil.com', // e.g., 'Gmail' or 'SMTP'
  auth: {
    user: 'info@teamrabbil.com',
    pass: '~sR4[bhaC[Qs',
  },
});

export default transporter;
