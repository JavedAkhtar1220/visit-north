import { IconButton, Tooltip } from "@mui/material";
import { useColorMode } from "./ThemeWrapper";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.42 1.42" />
      <path d="m17.65 17.65 1.42 1.42" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.35 17.65-1.42 1.42" />
      <path d="m17.65 6.35 1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
    </svg>
  );
}

export default function ThemeModeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  // Avoid rendering the wrong mode before the preference is resolved.
  if (mode === undefined) {
    return null;
  }

  const isDark = mode === "dark";

  return (
    <Tooltip
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        sx={{
          width: 36,
          height: 36,
          flexShrink: 0,
          borderRadius: 1.5,
          color: "text.secondary",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Tooltip>
  );
}
