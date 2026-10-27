import { Box, type BoxProps, Button, Typography } from "@mui/material";

interface ErrorUIProps extends BoxProps {
  refetch: () => void;
}

export function ErrorUI({ refetch, ...props }: ErrorUIProps) {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 4,
        height: 275,
        borderRadius: "60px",
        bgcolor: "#FFE5E5",
        ...props.sx,
      }}
    >
      <Typography color="error" variant="h5">
        Failed to load data.
      </Typography>
      <Button variant="contained" size="large" onClick={refetch}>
        Retry
      </Button>
    </Box>
  );
}
