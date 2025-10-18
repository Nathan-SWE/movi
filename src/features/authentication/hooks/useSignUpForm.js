import { useState } from 'react';

import { useForm } from '@mantine/form';
import { updateProfile } from 'firebase/auth';
import { zod4Resolver } from 'mantine-form-zod-resolver';
import { useNavigate } from 'react-router-dom';

import { signUpWithEmail } from '../authService';
import { signUpSchema } from '../schemas';

export default function useSingUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validate: zod4Resolver(signUpSchema),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const userCredential = await signUpWithEmail(
        values.email,
        values.password
      );

      if (userCredential) {
        await updateProfile(userCredential, {
          displayName: values.userName,
        });
      }

      console.log('Account created successfully!');
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        form.setFieldError(
          'email',
          'This email is already registered. Try logging in instead!'
        );
      } else {
        console.log(`An unexpected error occurred: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { form, isLoading, handleSubmit };
}
