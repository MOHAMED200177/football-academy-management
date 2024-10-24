import nodemailer, { Transporter } from 'nodemailer';

// Create and export the transporter for sending emails
const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'), // Default SMTP port
    secure: false, // Use true for port 465 if using SSL
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default transporter;