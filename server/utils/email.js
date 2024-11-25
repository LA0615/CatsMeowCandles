import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});
//added async to function
export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password/${token}`; 

  const data = {
    from: "Cat's Meow Candles <no-reply@catsmeowcandles.com>",
    to: email,
    subject: "Password Reset Request",
    text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
  };
//added try catch block
  try {
    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    console.log("Password reset email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Failed to send password reset email");
  }
};
