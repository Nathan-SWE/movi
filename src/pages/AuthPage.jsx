import {
  Container,
  Stack,
  Flex,
  Image,
  Title,
  Text,
  Button,
  Anchor,
  Group,
  Divider,
} from "@mantine/core";
import GoogleLogo from "../assets/icon-google.svg";

export default function AuthPage() {
  return (
    <Flex h="100vh" align="center" justify="center">
      <Container size="xs">
        <Stack gap="xxl">
          <Container>
            <Image src="/movi.svg" alt="Movi Logo" w={140} mx="auto" />
            <Title order={1} ta="center">
              MOVI
            </Title>
            <Text c="dimmed" ta="center" my="xs">
              Sign up now and start your cinematic journey!
            </Text>
          </Container>

          <Button size="lg" fullWidth>
            Sign Up
          </Button>

          <Text ta="center" fz="sm">
            I already have an account?
            <Anchor component="button" type="button">
              <Text weight={700} px="xs">
                Login
              </Text>
            </Anchor>
          </Text>

          <Divider label="Or sign in with" labelPosition="center" my="lg" />

          <Group position="center">
            <Button
              fullWidth
              size="lg"
              variant="default"
              color="gray"
              bg={"light-gray.1"}
              weight={100}
              fw={500}
              leftSection={<Image src={GoogleLogo} h={20} alt="Google Logo" />}
            >
              Sign in with Google
            </Button>
          </Group>
        </Stack>
      </Container>
    </Flex>
  );
}
