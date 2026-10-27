import { Box, IconButton, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import useIsMobileScreen from "@/hooks/useIsMobileScreen";
import ThemeModeToggle from "@/theme/ThemeModeToggle";
import { useDrawer } from "./DrawerContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface AppBarProps {
  title: ReactNode;
  TopRightComponent?: ReactNode;
}

export default function AppBar({ title, TopRightComponent }: AppBarProps) {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawer();
  const isMobileScreen = useIsMobileScreen();

  function handleToggle() {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        px: { xs: 1.5, sm: 2, md: 3 },
        borderBottom: "1px solid",
        borderColor: "divider",
        gap: 1,
        py: 1.5,
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <IconButton
          onClick={handleToggle}
          aria-label={isDrawerOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={isDrawerOpen}
          sx={{
            width: 36,
            height: 36,
            flexShrink: 0,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 3v18"></path>
          </svg>
        </IconButton>

        <Typography
          variant="h1"
          sx={{
            fontSize: isMobileScreen ? 16 : 18,
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {TopRightComponent}
        <ThemeModeToggle />
        <LanguageSwitcher />
      </Box>
    </Stack>
  );
}
