import z from "zod";

export const SignupSchema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(3).max(255),
});

export const LoginSchema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(3).max(255),
});
