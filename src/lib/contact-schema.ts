import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "That name is a little long"),
  email: z.string().email("Enter a valid email address"),
  subject: z
    .string()
    .min(3, "Add a short subject")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(10, "Tell me a bit more (10+ characters)")
    .max(2000, "Message is too long"),
});

export type ContactValues = z.infer<typeof contactSchema>;
