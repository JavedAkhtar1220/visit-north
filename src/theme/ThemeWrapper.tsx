import { ThemeProvider } from "@mui/material";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { appTheme, type ColorMode } from ".";

// Context so ANY component can read/toggle the mode
const ColorModeContext = createContext<{
  mode: ColorMode;
  toggleColorMode: () => void;
}>({ mode: "light", toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeWrapper({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();

  // read persisted preference, default to light
  const [mode, setMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem("color-mode");
    return saved === "dark" ? "dark" : "light";
  });

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("color-mode", next);
          return next;
        });
      },
    }),
    [mode],
  );

  // memoize theme so it's not recreated on every render
  const theme = useMemo(
    () => appTheme(mode, i18n.language),
    [mode, i18n.language],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
