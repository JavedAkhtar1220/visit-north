import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PageLayout from "@/app-layout/PageLayout";
import useIsMobileScreen from "@/hooks/useIsMobileScreen";
// // import AssignmentAndQuizzesWidget from "./AssignmentAndQuizzesWidget";
// import MyScheduleWidget from "./MyScheduleWidget";
// import RegistraionSuccessModal from "./RegistraionSuccessModal";
import StudentOverviewWidget from "./StudentOverviewWidget";
// import StudentSubjectProgressBarWidget from "./StudentSubjectProgressBarWidget";
// import StudentSubjectProgressWidget from "./StudentSubjectProgressWidget";
// import TodayCompletedCard from "./TodayCompletedCard";
// import WeekDayCards from "./WeekDayCards";

export default function Dashboard() {
  const { t } = useTranslation(["dashboard"]);
  const isMobileScreen = useIsMobileScreen();

  console.log("asdasdass");

  return (
    <PageLayout title={t("common:page_titles.dashboard")}>
      <Grid container spacing="30px">
        <Grid size={{ xs: 12, lg: 5 }}>
          <StudentOverviewWidget data-tour="overview" />
          {/* <StudentSubjectProgressWidget data-tour="progress" /> */}
        </Grid>
        {/* <Grid
          size={{ xs: 12, lg: 7 }}
          sx={{
            bgcolor: "#fff",
            borderRadius: { xs: "30px", md: "60px" },
            p: { xs: "20px", md: "30px" },
          }}
        >
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  borderRadius: { xs: 40, md: 45 },
                  bgcolor: "#287C74",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                }}
                component="button"
              >
                <CoinIcon
                  height={isMobileScreen ? 50 : 60}
                  width={isMobileScreen ? 50 : 60}
                />
                <Typography
                  variant="h6"
                  fontSize={{ xs: 16, md: 20 }}
                  fontWeight={600}
                  color="#FFFFFF"
                >
                  {t("dashboard:buy_credits")}
                </Typography>
              </Box>
              <AssignmentAndQuizzesWidget data-tour="assignments" />
              <TodayCompletedCard data-tour="today_completed" />
            </Grid>
            <Grid size={{ xs: 12, lg: 7 }}>
              <WeekDayCards data-tour="week_days" />
              <StudentSubjectProgressBarWidget data-tour="progress_bar" />

              <MyScheduleWidget />
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>

      {/* <RegistraionSuccessModal /> */}
    </PageLayout>
  );
}
