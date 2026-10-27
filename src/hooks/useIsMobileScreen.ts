import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useIsMobileScreen() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
}
