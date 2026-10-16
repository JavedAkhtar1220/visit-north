import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Divider,
  IconButton,
  SwipeableDrawer,
  // Typography,
} from "@mui/material";
// import { useNavigate } from "react-router";
import useIsDesktopScreen from "@/hooks/useIsDesktopScreen";
import useIsMobileScreen from "@/hooks/useIsMobileScreen";
// import { useNavigate } from "react-router-dom";
// import LogoILearn from "@/assets/icons/logo_iLearn.svg";
// import LogoutIcon from "@/assets/icons/sidebar/logout.svg?react";
// import { useConfirm } from "@/components/ConfirmationDialogue/useConfirm";
// import { useAuth } from "@/contexts/AuthContext";
// import useIsDesktopScreen from "@/hooks/useIsDesktopScreen";
import { useDrawer } from "./DrawerContext";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";
// import { getDisplayName, getInitials, getRoleLabel } from "./utils";

export const DRAWER_WIDTH_OPEN = 260;

export default function AppDrawer() {
  const isDesktopScreen = useIsDesktopScreen();
  const isMobileScreen = useIsMobileScreen();
  const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer();
  // const navigate = useNavigate();
  // const { isLoading, user, logout } = useAuth();

  // const { confirm } = useConfirm();
  //
  // async function handleLogout() {
  //   const isConfirmed = await confirm({
  //     title: t("confirm-modal.logout.label"),
  //     body: t("confirm-modal.logout.body"),
  //     confirmLabel: t("confirm-modal.label.logout"),
  //     confirmButtonProps: {
  //       sx: { bgcolor: "error.main", "&:hover": { bgcolor: "error.dark" } },
  //     },
  //   });

  //   if (isConfirmed) {
  //     logout();
  //     navigate("/login");
  //   }
  // }

  return (
    <SwipeableDrawer
      sx={{
        zIndex: (theme) => theme.zIndex.drawer,
        height: "100%",
        width: isDesktopScreen
          ? isDrawerOpen
            ? DRAWER_WIDTH_OPEN
            : 0
          : undefined,
        overflow: "hidden",
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: 250,
          }),
      }}
      variant={isDesktopScreen ? "permanent" : "temporary"}
      transitionDuration={250}
      slotProps={{
        paper: {
          sx: (theme) => ({
            py: 1,
            boxSizing: "border-box",
            borderRadius: isDesktopScreen ? "8px" : 0,
            border: "1px solid",
            borderColor: "divider",
            position: "relative",
            height: isDesktopScreen ? "100%" : "100vh",
            minHeight: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            "@supports (height: 100dvh)": {
              height: isDesktopScreen ? "100%" : "100dvh",
            },

            [theme.breakpoints.up("md")]: {
              width: isDrawerOpen ? DRAWER_WIDTH_OPEN : 0,
              visibility: isDrawerOpen ? "visible" : "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: 250,
              }),
            },

            [theme.breakpoints.down("md")]: {
              width: 280,
            },
          }),
        },
      }}
      open={isDrawerOpen}
      onOpen={openDrawer}
      onClose={closeDrawer}
    >
      {isMobileScreen && (
        <IconButton
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            borderRadius: 0,
            padding: "0.1em",
          }}
          disableRipple
          onClick={closeDrawer}
        >
          <CloseRoundedIcon />
        </IconButton>
      )}
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          py: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: 68,
          }}
          src={"LogoILearn"}
          alt="I Learn Tutors"
          title="I Learn Tutors"
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Sidebar />
      </Box>

      <Divider />

      <ProfileMenu />
    </SwipeableDrawer>
  );
}
