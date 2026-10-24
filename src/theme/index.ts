import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export type ColorMode = "light" | "dark";

// ---------- Light theme ----------
const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#287C74",
    shade1: "#1F5F59",
    shade2: "#3B948A",
  },
  secondary: {
    main: "#FF9F01",
    shade1: "#D97E00",
    shade2: "#FFB84D",
  },
  background: {
    default: "#FAFAFB",
    paper: "#FFFFFF",
  },
  text: {
    main: "#111111",
    primary: "#111111",
    secondary: "#555555",
    shade1: "#111111",
    shade2: "#444444",
    shade3: "#666666",
    shade4: "#888888",
    shade5: "#AAAAAA",
  },
  button: {
    primary: "#287C74",
    secondary: "#FF9F01",
  },
};

// ---------- Dark theme ----------
const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#2FA69B", // lightened teal — #287C74 fails contrast on dark bg
    shade1: "#287C74",
    shade2: "#4CC0B4",
  },
  secondary: {
    main: "#FFB84D", // lightened amber for dark bg
    shade1: "#FF9F01",
    shade2: "#FFCB80",
  },
  background: {
    default: "#121212", // MUI/Google Material dark base, never pure black
    paper: "#1E1E1E",
  },
  text: {
    main: "#E8E8E8", // near-white, not pure #FFF — reduces halation
    primary: "#E8E8E8",
    secondary: "#A0A0A0",
    shade1: "#E8E8E8",
    shade2: "#B0B0B0",
    shade3: "#909090",
    shade4: "#707070",
    shade5: "#555555",
  },
  button: {
    primary: "#2FA69B",
    secondary: "#FFB84D",
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
          ? "'Noto Sans Arabic', sans-serif"
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
                ? "'Tajawal', sans-serif"
                : "'Manrope', sans-serif",
          },
        },
      },
    },
  });
}
