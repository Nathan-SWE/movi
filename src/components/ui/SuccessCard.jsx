import { Paper, Stack, Title, Text } from '@mantine/core';

import successImg from '../../assets/success.svg';

import ImageSkeleton from './ImageSkeleton';

export default function SuccessCard({ title, message }) {
  return (
    <Paper p="xl" radius="md" ta="center" bg="transparent">
      <Stack>
        <ImageSkeleton
          src={successImg}
          alt="success green check"
          w={140}
          h={140}
          mx="auto"
        />
        <Title order={3}>{title}</Title>
        <Text c="dimmed">{message}</Text>
      </Stack>
    </Paper>
  );
}
