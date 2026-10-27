import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export type ColorMode = "light" | "dark";

// ---------- Light theme ----------
export const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#F05A57",
    shade1: "#D83F3C",
    shade2: "#FF807C",
  },
  secondary: {
    main: "#58B8F6",
    shade1: "#1877B8",
    shade2: "#A5DEFF",
  },
  background: {
    default: "#F9FAFC",
    paper: "#FFFFFF",
  },
  text: {
    main: "#192A3B",
    primary: "#192A3B",
    secondary: "#526274",
    shade1: "#192A3B",
    shade2: "#34465A",
    shade3: "#526274",
    shade4: "#778698",
    shade5: "#9BA8B5",
  },
  button: {
    primary: "#D83F3C",
    secondary: "#1877B8",
  },
};

// ---------- Dark theme ----------
export const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#FF807C",
    shade1: "#F05A57",
    shade2: "#FFAAA7",
  },
  secondary: {
    main: "#79C8FA",
    shade1: "#58B8F6",
    shade2: "#B5E5FF",
  },
  background: {
    default: "#111B28",
    paper: "#1B2A3A",
  },
  text: {
    main: "#F4F7FA",
    primary: "#F4F7FA",
    secondary: "#B9C5D1",
    shade1: "#F4F7FA",
    shade2: "#DCE5ED",
    shade3: "#B9C5D1",
    shade4: "#93A3B3",
    shade5: "#708193",
  },
  button: {
    primary: "#FF807C",
    secondary: "#79C8FA",
  },
};

const sharedOptions = {
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      "2xl": 1920,
    },
  },
};

export function appTheme(mode: ColorMode, language: string = "en"): Theme {
  const isArabic = language === "ar";
  const isUrdu = language === "ur";
  const palette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
    palette,
    ...sharedOptions,
    typography: {
      fontSize: 14,
      fontFamily:
        isArabic || isUrdu
          ? "'Noto Nastaliq Urdu', sans-serif"
          : "'Manrope', sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "-webkit-fill-available",
          },
          body: {
            boxSizing: "border-box",
            backgroundColor: palette.background.default,
            color: palette.text.primary,
            fontFamily:
              isArabic || isUrdu
                ? "'Noto Nastaliq Urdu', sans-serif"
                : "'Manrope', sans-serif",
          },
        },
      },
    },
  });
}
