import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import CircularProgress from "@/components/Progress/CircularProgress";
import { ActivityCard, type ActivityType } from "./ActivityCard";
import { ErrorUI } from "./ErrorUI";
import useAssignmentAndQuizzesQuery from "./queries/useAssignment&QuizzesQuery";

export default function AssignmentAndQuizzesWidget() {
  const { t } = useTranslation();
  const { data, isLoading, isError, refetch } = useAssignmentAndQuizzesQuery();

  function getSubtitleKey(type: ActivityType) {
    switch (type) {
      case "ASSIGNMENT":
        return "ongoing";
      case "GRADED":
        return "this_week";
      case "WORKSHEET":
        return "total";
      default:
        return "ongoing";
    }
  }

  if (isError) return <ErrorUI refetch={refetch} sx={{ mt: 4 }} />;

  if (isLoading) return <LoadingUI />;

  return (
    <Box mt={4}>
      <Typography
        variant="h6"
        fontSize={{ xs: 16, md: 20 }}
        fontWeight={600}
        mb={2}
      >
        {t("dashboard:assignments_and_quizzes")}
      </Typography>
      {Array.isArray(data) &&
        data.map((item) => (
          <ActivityCard
            key={item.id}
            type={item.type}
            title={t(`dashboard:${item.title}`)}
            subTitle={`5 ${t(`dashboard:${getSubtitleKey(item.type)}`)}`}
            IconComponent={
              <CircularProgress type="assignment" value={50} size={60} />
            }
          />
        ))}
    </Box>
  );
}

function LoadingUI() {
  const theme = useTheme();
  return (
    <Box mt={4}>
      <Skeleton variant="text" width={200} height={30} sx={{ mb: 2 }} />
      {(["accent1", "accent2", "accent3"] as const).map((item) => (
        <Box
          key={item}
          sx={{
            borderRadius: "30px",
            bgcolor: theme.palette.semantic[item],
            height: 95,
            display: "flex",
            gap: 2,
            alignItems: "center",
            px: 2,
            mb: 2,
            // mt: item === "accent1" ? 0 : -6,
          }}
        >
          <Skeleton variant="circular" width={60} height={60} />

          <Box>
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={80} height={20} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
