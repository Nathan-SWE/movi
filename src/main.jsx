import { StrictMode } from 'react';

import { MantineProvider } from '@mantine/core';
import { MantineEmotionProvider, emotionTransform } from '@mantine/emotion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';

import { Router } from './routes';
import { theme } from './theme.js';
import './global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineEmotionProvider>
        <MantineProvider theme={theme} stylesTransform={emotionTransform}>
          <Router />
        </MantineProvider>
      </MantineEmotionProvider>
    </QueryClientProvider>
  </StrictMode>
);
