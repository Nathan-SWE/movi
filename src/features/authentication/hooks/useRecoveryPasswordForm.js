import { useState } from 'react';

import { useForm } from '@mantine/form';
import { zod4Resolver } from 'mantine-form-zod-resolver';

import { recoverPassword } from '../authService';
import { resetPasswordSchema } from '../schemas';

export default function useRecoveryPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: zod4Resolver(resetPasswordSchema),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setSubmitted(false);

    try {
      await recoverPassword(values.email);
      setSubmitted(true);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        form.setFieldError('email', 'No account found with this email.');
      } else {
        console.error(
          `An unexpected error occurred: ${error.code || error.message}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { form, isLoading, submitted, handleSubmit };
}
