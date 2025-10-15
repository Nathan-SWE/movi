import { useState } from 'react';

import { useForm } from '@mantine/form';
import { zod4Resolver } from 'mantine-form-zod-resolver';
import { useNavigate } from 'react-router-dom';

import { signInWithEmail } from '../authService';
import { loginSchema } from '../schemas';

export default function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zod4Resolver(loginSchema),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      await signInWithEmail(values.email, values.password);
      console.log('Login successful!');
      navigate('/auth'); //navegar para home depois
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        form.setFieldError('email', 'Email or password incorrect.');
        form.setFieldError('password', 'Email or password incorrect.');
      } else {
        console.log(`An unexpected error occurred: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { form, isLoading, handleSubmit };
}
