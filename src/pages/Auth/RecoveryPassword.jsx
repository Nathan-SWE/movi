import {
  Paper,
  Title,
  Text,
  Button,
  Container,
  Stack,
  ActionIcon,
} from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { CustomTextInput } from '../../components/ui/CustomInputs';
import SuccessCard from '../../components/ui/SuccessCard';
import useRecoveryPasswordForm from '../../features/authentication/hooks/useRecoveryPasswordForm';

export default function RecoveryPassword() {
  const { form, isLoading, submitted, handleSubmit } =
    useRecoveryPasswordForm();

  return (
    <Container size="xs" w="100%" mt="xl">
      <Paper p="md" radius="md" bg="transparent">
        <Stack gap="xxl">
          <ActionIcon
            component={Link}
            to="/auth/login"
            radius="lg"
            c="light-gray.0"
            bg="soft-blue.9"
            aria-label="Go back"
          >
            <IconChevronLeft />
          </ActionIcon>

          <Stack gap="xxs">
            <Title align="center" order={2}>
              Reset Password
            </Title>
            <Text align="center" c="dimmed" fz="sm">
              Recover your account password
            </Text>
          </Stack>

          {submitted ? (
            <SuccessCard
              title="Check your email"
              message="If an account with this email exists, a password reset link will be sent."
            />
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="xl">
                <CustomTextInput
                  label="Email Address"
                  placeholder="user@email.com"
                  {...form.getInputProps('email')}
                />

                <Button type="submit" fullWidth size="lg" loading={isLoading}>
                  Next
                </Button>
              </Stack>
            </form>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}
