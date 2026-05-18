// Basic Express server for handling contact form submissions
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatMessageForHtml(value = '') {
  return escapeHtml(value).replace(/\n/g, '<br />');
}

function buildFieldCard(label, value) {
  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: separate;">
      <tr>
        <td style="border: 1px solid #153d40; border-radius: 16px; background: #081518; padding: 14px 16px;">
          <div style="color: #07beb8; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px;">
            ${label}
          </div>
          <div style="color: #e8f6f5; font-size: 15px; line-height: 1.65; word-break: break-word;">
            ${value}
          </div>
        </td>
      </tr>
    </table>
  `;
}

function buildActionButton(href, label) {
  return `
    <a
      href="${href}"
      style="display: inline-block; border-radius: 999px; background: #07beb8; color: #041011; font-size: 14px; font-weight: 700; line-height: 1; text-decoration: none; padding: 14px 22px;"
    >
      ${label}
    </a>
  `;
}

function buildContactEmail({ firstName, email, phone, subject, message, submittedAt }) {
  const safeName = escapeHtml(firstName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeSubject = escapeHtml(subject || 'Contact Form Submission');
  const safeMessage = formatMessageForHtml(message);
  const safeSubmittedAt = escapeHtml(submittedAt);
  const replyLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject || 'Contact Form Submission'}`)}`;
  const phoneLink = phone ? `tel:${encodeURIComponent(phone)}` : '';

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CoreHives Contact Submission</title>
      </head>
      <body style="margin: 0; padding: 0; background: #020708; font-family: Arial, Helvetica, sans-serif; color: #ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(180deg, #020708 0%, #071012 100%);">
          <tr>
            <td align="center" style="padding: 32px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px;">
                <tr>
                  <td style="padding-bottom: 18px; text-align: center;">
                    <div style="display: inline-block; color: #07beb8; font-size: 12px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase;">
                      CoreHives Contact Pipeline
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="border: 1px solid #10363a; border-radius: 28px; overflow: hidden; background: #050f10; box-shadow: 0 18px 60px rgba(0,0,0,0.35);">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 32px 32px 24px; background: #071315;">
                          <div style="height: 4px; width: 72px; border-radius: 999px; background: #07beb8; margin-bottom: 18px;"></div>
                          <div style="color: #89fcf7; font-size: 12px; font-weight: 700; letter-spacing: 0.26em; text-transform: uppercase; margin-bottom: 10px;">
                            New Contact Submission
                          </div>
                          <div style="color: #ffffff; font-size: 30px; font-weight: 700; line-height: 1.2; margin-bottom: 12px;">
                            ${safeName} reached out to CoreHives.
                          </div>
                          <div style="color: #a5c3c1; font-size: 15px; line-height: 1.7; max-width: 520px;">
                            A new inquiry came in through the website contact form. The message, sender details, and quick actions are ready below.
                          </div>
                          <div style="margin-top: 24px;">
                            ${buildActionButton(replyLink, 'Reply To Sender')}
                            ${phone ? `&nbsp;&nbsp;${buildActionButton(phoneLink, 'Call Contact')}` : ''}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 28px 32px 8px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding: 0 0 14px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="50%" style="padding-right: 7px; vertical-align: top;">
                                      ${buildFieldCard('Name', safeName)}
                                    </td>
                                    <td width="50%" style="padding-left: 7px; vertical-align: top;">
                                      ${buildFieldCard('Email', safeEmail)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 0 0 14px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td width="50%" style="padding-right: 7px; vertical-align: top;">
                                      ${buildFieldCard('Phone', safePhone)}
                                    </td>
                                    <td width="50%" style="padding-left: 7px; vertical-align: top;">
                                      ${buildFieldCard('Submitted', safeSubmittedAt)}
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 0 0 14px;">
                                ${buildFieldCard('Subject', safeSubject)}
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 0 0 14px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: separate;">
                                  <tr>
                                    <td style="border: 1px solid #184549; border-radius: 20px; background: #081518; padding: 18px 18px 20px;">
                                      <div style="color: #07beb8; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px;">
                                        Message
                                      </div>
                                      <div style="color: #e8f6f5; font-size: 15px; line-height: 1.8; word-break: break-word;">
                                        ${safeMessage}
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 32px 30px;">
                          <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px;">
                            <div style="color: #7ea4a2; font-size: 12px; line-height: 1.7;">
                              Reply directly to this email to continue the conversation with ${safeName}. This message was generated from the CoreHives website contact form.
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, email, phone, subject, message } = req.body;
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

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
      from: process.env.CONTACT_FROM_EMAIL || '"CoreHives Contact" <no-reply@corehives.com>',
      to: 'connect@CoreHives.com',
      replyTo: `"${firstName}" <${email}>`,
      subject: `[CoreHives Contact] ${subject || 'New Inquiry'} - ${firstName}`,
      html: buildContactEmail({ firstName, email, phone, subject, message, submittedAt }),
      text: `CoreHives Contact Submission

Name: ${firstName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Submitted: ${submittedAt}
Subject: ${subject || 'Contact Form Submission'}

Message:
${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
