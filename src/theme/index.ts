import { createTheme } from "@mui/material";

export function appTheme(language: string = "en") {
  const isArabic = language === "ar";
  const isUrdu = language === "ur";

  return createTheme({
    palette: {
      mode: "light",

      primary: {
        main: "#287C74",
      },

      text: {
        primary: "#111111",
      },

      button: {
        primary: "#287C74",
        secondary: "#FF9F01",
      },
    },

    typography: {
      fontSize: 12,
      fontFamily:
        isArabic || isUrdu
          ? "'Noto Sans Arabic', sans-serif"
          : "'Poppins', sans-serif",
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "-webkit-fill-available",
          },
          body: {
            backgroundColor: "#FAFAFB",
            boxSizing: "border-box",
            fontFamily:
              isArabic || isUrdu
                ? "'Tajawal', sans-serif"
                : "'Poppins', sans-serif",
          },
        },
      },
    },
  });
}
