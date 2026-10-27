import { useMediaQuery } from "@mui/material";

export default function useIsDesktopScreen() {
  return useMediaQuery((theme) => theme.breakpoints.up("md"));
}
