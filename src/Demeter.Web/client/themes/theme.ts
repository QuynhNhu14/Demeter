import { createTheme } from "@mantine/core";

export const defaultTheme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "green",
  autoContrast: true,
  luminanceThreshold: 0.3,
  defaultGradient: { deg: 133, from: 'green', to: 'cyan' },
});
