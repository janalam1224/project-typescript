import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email(),
  password: z.string().trim().min(5).max(20),
  userType: z.string().trim(),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(5).max(20),
});

export const createProdSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(5).max(20)
});
