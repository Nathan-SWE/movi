import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider, emotionTransform } from "@mantine/emotion";
import "@mantine/core/styles.css";

import { theme } from "./theme.js";
import { Router } from "./routes";
import "./global.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
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
