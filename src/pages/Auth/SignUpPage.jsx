import {
  Paper,
  Title,
  Text,
  Checkbox,
  Button,
  Container,
  Group,
  Anchor,
  Box,
  Stack,
  ActionIcon,
} from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import {
  CustomTextInput,
  CustomPasswordInput,
} from '../../components/ui/CustomInputs';
import useSingUpForm from '../../features/authentication/hooks/useSignUpForm';

export default function SignUpPage() {
  const { form, isLoading, handleSubmit } = useSingUpForm();

  return (
    <Container size="xs" w="100%" mt="xl">
      <Paper p="md" radius="md" bg="transparent">
        <Stack gap="xxl">
          <Group justify="space-between" align="center">
            <ActionIcon
              component={Link}
              to="/auth"
              radius="lg"
              c="light-gray.0"
              bg="soft-blue.9"
              aria-label="Go back"
            >
              <IconChevronLeft />
            </ActionIcon>
            <Text c="light-gray.0" fw={500}>
              Sign Up
            </Text>
            <Box w={28} />
          </Group>

          <Stack gap="xxs">
            <Title align="center" order={2}>
              Let&apos;s get started
            </Title>
            <Text align="center" c="dimmed" fz="sm">
              The latest movies and series are here
            </Text>
          </Stack>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xl">
              <CustomTextInput
                label="User name"
                placeholder="user"
                {...form.getInputProps('userName')}
              />
              <CustomTextInput
                label="Email Address"
                placeholder="user@email.com"
                {...form.getInputProps('email')}
              />
              <CustomPasswordInput
                label="Password"
                placeholder="password123"
                {...form.getInputProps('password')}
              />
              <CustomPasswordInput
                label="Confirm Password"
                placeholder="password123"
                {...form.getInputProps('confirmPassword')}
              />

              <Checkbox
                mt="md"
                label={
                  <Text fz="sm">
                    I agree to the <Anchor href="#">Terms and Services</Anchor>{' '}
                    and <Anchor href="#">Privacy Policy</Anchor>
                  </Text>
                }
                {...form.getInputProps('terms', { type: 'checkbox' })}
              />
              <Button type="submit" fullWidth size="lg" loading={isLoading}>
                Sign Up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}
