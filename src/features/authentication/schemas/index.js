import { z as zod } from 'zod';

export const signUpSchema = zod
  .object({
    userName: zod
      .string()
      .min(3, { message: 'Username must have at least 3 characters' })
      .regex(/^[a-zA-Z0-9._-]+$/, {
        message: 'Username can only contain letters, numbers, and . - _',
      })
      .refine((name) => !/^[._-]/.test(name), {
        message: 'Username cannot start with a symbol',
      }),
    email: zod.email({ message: 'Invalid Email' }),
    password: zod
      .string()
      .min(8, { message: 'Must have at least 8 characters ' })
      .max(64, { message: 'Password cannot be longer than 64 characters' })
      .regex(/[A-Z]/, { message: 'Must contain at least one capital letter ' })
      .regex(/[a-z]/, {
        message: 'Must contain at least one lowercase letter ',
      })
      .regex(/[0-9]/, { message: 'Must contain at least one number ' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'Must contains at least one special character',
      }),
    confirmPassword: zod.string().min(8, {
      message: 'Password confirmation must have at least 8 characters',
    }),
    terms: zod.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'The passwords do not correspond',
    path: ['confirmPassword'],
  });

export const loginSchema = zod.object({
  email: zod.email({ message: 'Invalid Email' }),
  password: zod.string().min(1, { message: 'Password is required' }),
});
