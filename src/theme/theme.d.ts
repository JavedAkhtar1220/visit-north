import type {
  PaletteOptions as PaletteOptionsMUI,
  SimplePaletteColorOptions as SimplePaletteColorOptionsMUI,
  ThemeOptions as ThemeOptionsMUI,
  TypeText as TypeTextMUI,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "2xl": true;
  }

  interface PaletteOptions extends PaletteOptionsMUI {
    button: {
      primary: string;
      secondary: string;
    };
  }

  interface Palette extends PaletteOptions {}

  interface SimplePaletteColorOptions extends SimplePaletteColorOptionsMUI {
    shade1?: string;
    shade2?: string;
  }

  interface TypeText extends TypeTextMUI {
    main: string;
    shade1: string;
    shade2: string;
    shade3: string;
    shade4: string;
    shade5: string;
  }

  interface ThemeOptions extends ThemeOptionsMUI {
    shape?: Partial<Shape>;
    shadow?: string[];
  }

  interface Theme {
    shape: Shape;
    shadow: string[];
  }
}
