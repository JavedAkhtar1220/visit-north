import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import AppDrawer, { DRAWER_WIDTH_OPEN } from "./AppDrawer";
import { DrawerProvider, useDrawer } from "./DrawerContext";

export default function AppLayout(props: PropsWithChildren) {
  return (
    <DrawerProvider>
      <AppLayoutUI>{props.children}</AppLayoutUI>
    </DrawerProvider>
  );
}

const AppLayoutUI = ({ children }: PropsWithChildren) => {
  const { isDrawerOpen } = useDrawer();

  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        bgcolor: theme.palette.background.default,
        // gap: { xs: 1, sm: 1.5 },
        gap: 1,
        p: { xs: 1, sm: 1.5 },
        "@supports (height: 100dvh)": {
          height: "100dvh",
        },

        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      })}
    >
      <Box
        component="nav"
        sx={(theme) => ({
          height: "100%",
          minHeight: 0,
          display: "flex",
          flexShrink: 0,
          overflow: "hidden",

          [theme.breakpoints.up("md")]: {
            width: isDrawerOpen ? DRAWER_WIDTH_OPEN : 0,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: 250,
            }),
          },

          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      >
        <AppDrawer />
      </Box>
      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          bgcolor: "background.paper",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
