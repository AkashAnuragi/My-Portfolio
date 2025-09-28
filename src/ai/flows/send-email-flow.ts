'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

// You would typically store your API key in an environment variable
// For this example, we are leaving it hardcoded for simplicity, but in a real app, you must use an environment variable.
const resend = new Resend('re_123456789');

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the email.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<void> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // In a real application, you would not want to log the Resend API key.
    // This is done here for demonstration purposes.
    // In a production environment, you should handle failed API calls gracefully.
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'akashanuragi543@gmail.com',
        subject: `Message from ${input.name} via Portfolio`,
        html: `<p>You received a message from ${input.name} (${input.email}):</p><p>${input.message}</p>`,
      });
    } catch (error) {
        console.error("Failed to send email:", error);
        // Throwing the error will propagate it to the client, where it can be handled.
        throw new Error("Email sending failed.");
    }
  }
);
