import { ThemeProvider } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { appTheme } from ".";

export default function ThemeWrapper({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  const theme = appTheme(i18n.language);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
