import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { z as zod } from "zod";
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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { IconChevronLeft } from "@tabler/icons-react";

import { signUpWithEmail } from "../../features/authentication/authService";
import {
  CustomTextInput,
  CustomPasswordInput,
} from "../../components/ui/CustomInputs";

const signUpSchema = zod
  .object({
    userName: zod
      .string()
      .min(3, { message: "Username must have at least 3 characters" })
      .regex(/^[a-zA-Z0-9._-]+$/, {
        message: "Username can only contain letters, numbers, and . - _",
      })
      .refine((name) => !/^[._-]/.test(name), {
        message: "Username cannot start with a symbol",
      }),
    email: zod.email({ message: "Invalid Email" }),
    password: zod
      .string()
      .min(8, { message: "Must have at least 8 characters " })
      .regex(/[A-Z]/, { message: "Must contain at least one capital letter " })
      .regex(/[a-z]/, {
        message: "Must contain at least one lowercase letter ",
      })
      .regex(/[0-9]/, { message: "Must contain at least one number " })
      .regex(/[^A-Za-z0-9]/, {
        message: "Must contains at least one special character",
      }),
    confirmPassword: zod.string().min(8, {
      message: "Password confirmation must have at least 8 characters",
    }),
    terms: zod.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords do not correspond",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
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

      console.log("Account created successfully!");
      navigate("/auth"); //temporário. redirecionar para home depois
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        form.setFieldError("email", "This email is already in use.");
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
              Sign Up
            </Text>
            <Box w={28} />
          </Group>

          <Stack gap="xxs">
            <Title align="center" order={2}>
              Let's get started
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
                {...form.getInputProps("userName")}
              />
              <CustomTextInput
                label="Email Address"
                placeholder="user@email.com"
                {...form.getInputProps("email")}
              />
              <CustomPasswordInput
                label="Password"
                placeholder="password123"
                {...form.getInputProps("password")}
              />
              <CustomPasswordInput
                label="Confirm Password"
                placeholder="password123"
                {...form.getInputProps("confirmPassword")}
              />

              <Checkbox
                mt="md"
                label={
                  <Text fz="sm">
                    I agree to the <Anchor href="#">Terms and Services</Anchor>{" "}
                    and <Anchor href="#">Privacy Policy</Anchor>
                  </Text>
                }
                {...form.getInputProps("terms", { type: "checkbox" })}
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
