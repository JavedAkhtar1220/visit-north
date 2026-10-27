import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
// import CircularProgress from "@/components/Progress/CircularProgress";
import useOverviewQuery from "./queries/useOverviewQuery";

export default function StudentOverviewWidget() {
  const { t } = useTranslation();
  const theme = useTheme();

  const { data, isLoading, isError, isFetching } = useOverviewQuery();

  if (isLoading || isFetching) {
    return <LoadingUI />;
  }

  if (isError) return <ErrorUI />;

  return (
    <Box sx={{ display: "flex", gap: { xs: "10px", md: "15px" } }}>
      {Array.isArray(data) &&
        data.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "100%",
              minHeight: { xs: 180, md: 275 },
              borderRadius: { xs: "40px", md: "60px" },
              // bgcolor: theme.palette.semantic[item.bgColor],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: "20px", md: "30px" },
                px: { xs: "20px", md: "30px" },
                py: { xs: "20px", md: "30px" },
                height: "100%",
              }}
            >
              Cross
              {/* <CircularProgress type={item.type} value={item.percentage} /> */}

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 24, md: 32 },
                  // color: theme.palette.progress_bar[item.textColor],
                }}
              >
                {item.value < 10 ? `0${item.value}` : item.value}
              </Typography>

              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={{ xs: 12, md: 16 }}
                sx={{ color: "#000000" }}
                textAlign="center"
              >
                {t(`dashboard:${item.label}`)}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}

function LoadingUI() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: { xs: "10px", md: "15px" } }}>
      {(["accent1", "accent2", "accent3"] as const).map((item) => (
        <Card
          key={item}
          sx={{
            width: "100%",
            height: { xs: 180, md: 275 },
            borderRadius: { xs: "40px", md: "60px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            color: "white",
            position: "relative",
            overflow: "hidden",
            // backgroundColor: theme.palette.semantic[item],
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: "20px", md: "30px" },
              px: { xs: "20px", md: "30px" },
              py: { xs: "20px", md: "30px" },
            }}
          >
            <Skeleton variant="circular" width={80} height={80} />

            <Skeleton variant="text" width={100} height={30} />

            <Skeleton variant="text" width={80} height={25} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

function ErrorUI() {
  const queryClient = useQueryClient();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "20px", md: "30px" },
        py: { xs: "20px", md: "30px" },
        height: { xs: 180, md: 275 },
        borderRadius: { xs: "40px", md: "60px" },
        bgcolor: "#FFE5E5",
      }}
    >
      <Typography color="error" variant="h5">
        Failed to load data.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ["student-overview"] });
        }}
      >
        Retry
      </Button>
    </Box>
  );
}
