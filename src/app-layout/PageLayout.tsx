import { Box } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import AppBar from "./AppBar";

interface PageLayoutProps extends PropsWithChildren {
  title: ReactNode;
  TopRightComponent?: ReactNode;
}

export default function PageLayout({
  title,
  children,
  TopRightComponent,
}: PageLayoutProps) {
  return (
    <Box
      sx={{
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <AppBar title={title} TopRightComponent={TopRightComponent} />

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          minWidth: 0,
          width: "100%",
          p: { xs: 1.5, sm: 2, md: 2.5 },
          overflowY: "auto",
          overflowX: "hidden",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
