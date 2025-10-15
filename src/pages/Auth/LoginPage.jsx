import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { z as zod } from "zod";
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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { IconChevronLeft } from "@tabler/icons-react";

import { signInWithEmail } from "../../features/authentication/authService";
import {
  CustomTextInput,
  CustomPasswordInput,
} from "../../components/ui/CustomInputs";

const loginSchema = zod.object({
  email: zod.email({ message: "Invalid Email" }),
  password: zod.string().min(1, { message: "Password is required" }),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zod4Resolver(loginSchema),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      await signInWithEmail(values.email, values.password);
      console.log("Login successful!");
      navigate("/auth"); //navegar para home depois
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        form.setFieldError("email", "Email or password incorrect.");
        form.setFieldError("password", "Email or password incorrect.");
      } else {
        console.log(`An unexpected error occurred: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
              Your favorite movie is waiting, let's find it!
            </Text>
          </Stack>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xl">
              <CustomTextInput
                label="Email Address"
                placeholder="user@email.com"
                {...form.getInputProps("email")}
              />
              <div>
                <CustomPasswordInput
                  label="Password"
                  placeholder="password123"
                  {...form.getInputProps("password")}
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
