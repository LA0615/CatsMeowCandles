// import formData from 'form-data';
// import Mailgun from 'mailgun.js';

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

// export const sendPasswordResetEmail = (email, token) => {
//   const data = {
//     from: 'Your App <no-reply@yourdomain.com>',
//     to: email,
//     subject: 'Password Reset Request',
//     text: `You requested a password reset. Click the link to reset your password: ${process.env.FRONTEND_URL}/reset-password/${token}`
//   };

//   return mg.messages.create(process.env.MAILGUN_DOMAIN, data);
// };