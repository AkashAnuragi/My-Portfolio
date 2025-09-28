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

// The Resend API key is retrieved from environment variables for security.
// The exclamation mark (!) asserts that the value will be present at runtime.
const resend = new Resend(process.env.RESEND_API_KEY!);

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
