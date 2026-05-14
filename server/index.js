// Basic Express server for handling contact form submissions
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, email, phone, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Configure nodemailer with Mailtrap
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName}" <${email}>`,
      to: 'connect@CoreHives.com',
      subject: subject || 'Contact Form Submission',
      text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
