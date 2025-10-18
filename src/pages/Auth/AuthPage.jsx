import {
  Container,
  Stack,
  Flex,
  Title,
  Text,
  Button,
  Image,
  Anchor,
  Divider,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import GoogleLogo from '../../assets/icon-google.svg';
import ImageSkeleton from '../../components/ui/ImageSkeleton';
import useGoogleSignIn from '../../features/authentication/hooks/useGoogleSignIn';

export default function AuthPage() {
  const { googleError, isGoogleLoading, handleGoogleSignIn } =
    useGoogleSignIn();

  return (
    <Flex h="100vh" align="center" justify="center">
      <Container size="xs">
        <Stack gap="xl">
          <Container>
            <ImageSkeleton
              src="/movi.svg"
              alt="Movi Logo"
              w={140}
              h={140}
              mx="auto"
            />
            <Title order={1} ta="center">
              MOVI
            </Title>
            <Text c="dimmed" ta="center" my="xs">
              Sign up now and start your cinematic journey!
            </Text>
          </Container>
          <Button component={Link} to="/auth/signup" size="lg" fullWidth>
            Sign Up
          </Button>
          <Text ta="center" fz="sm">
            I already have an account?
            <Anchor component={Link} to="/auth/login">
              <Text component="span" weight={700} px="xs">
                Login
              </Text>
            </Anchor>
          </Text>
          <Divider label="Or sign in with" labelPosition="center" my="lg" />
          <div>
            <Button
              fullWidth
              size="lg"
              variant="default"
              bg={'light-gray.1'}
              fw={500}
              leftSection={<Image src={GoogleLogo} h={20} alt="Google Logo" />}
              onClick={handleGoogleSignIn}
              loading={isGoogleLoading}
            >
              Sign in with Google
            </Button>
            {googleError && (
              <Text c="danger-red" size="xs" ta="center" mt="xs">
                {googleError}
              </Text>
            )}
          </div>
        </Stack>
      </Container>
    </Flex>
  );
}
