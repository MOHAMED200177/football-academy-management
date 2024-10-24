// sendEmail.ts
import transporter from './../config/emailConfig';
import { SentMessageInfo } from 'nodemailer';

interface EmailOptions {
    email: string;
    subject: string;
    message: string;
    html?: string; // Optional HTML content
}

const sendEmail = async (options: EmailOptions): Promise<SentMessageInfo> => {
    // Define the email options, allowing for both text and HTML email content
    const mailOptions = {
        from: 'Mohamed Elafandy <mohamedelafandy593@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message, // Plain text message
        html: options.html || undefined // Optional HTML content
    };

    // Actually send the email and return the result
    return await transporter.sendMail(mailOptions);
};

export default sendEmail;
