import {
  Paper,
  Title,
  Text,
  Button,
  Container,
  Group,
  Box,
  Anchor,
  Stack,
  ActionIcon,
  Flex,
} from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import {
  CustomTextInput,
  CustomPasswordInput,
} from '../../components/ui/CustomInputs';
import useLoginForm from '../../features/authentication/hooks/useLoginForm';

export default function LoginPage() {
  const { form, isLoading, handleSubmit } = useLoginForm();

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
              Login
            </Text>
            <Box w={28} />
          </Group>

          <Stack gap="xxs">
            <Title align="center" order={2}>
              Welcome back!
            </Title>
            <Text align="center" c="dimmed" fz="sm">
              Your favorite movie is waiting, let&apos;s find it!
            </Text>
          </Stack>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xl">
              <CustomTextInput
                label="Email Address"
                placeholder="user@email.com"
                {...form.getInputProps('email')}
              />
              <div>
                <CustomPasswordInput
                  label="Password"
                  placeholder="password123"
                  {...form.getInputProps('password')}
                />
                <Flex justify="flex-end">
                  <Text fz="xxs" mt="xxs">
                    <Anchor href="#">Forgot Password?</Anchor>
                  </Text>
                </Flex>
              </div>

              <Button type="submit" fullWidth size="lg" loading={isLoading}>
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}
