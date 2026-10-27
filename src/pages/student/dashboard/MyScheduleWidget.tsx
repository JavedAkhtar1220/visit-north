import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ScheduleCard from "@/components/Cards/ScheduleCard";
import { ErrorUI } from "./ErrorUI";
import type { MyScheduleData } from "./queries/useMyScheduleQuery";
import useMyScheduleQuery from "./queries/useMyScheduleQuery";
import { groupByHour } from "./utils";

export default function MyScheduleWidget() {
  const { t } = useTranslation();

  const { data, isLoading, isError, refetch } = useMyScheduleQuery();

  if (isLoading) return <LoadingUI />;

  if (isError) return <ErrorUI refetch={refetch} />;

  return (
    <Box mt={6}>
      <Typography variant="h6" fontWeight={600} fontSize={{ xs: 16, md: 20 }}>
        {t("dashboard:my_schedule")}
      </Typography>

      <ScheduleUI data={data || []} />
    </Box>
  );
}

interface ScheduleTableProps {
  data: MyScheduleData[];
}

function ScheduleUI({ data }: ScheduleTableProps) {
  const groups = groupByHour(data);

  // Sort hours
  const hourList = Object.keys(groups)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <Box mt={2}>
      {hourList.map((hour) => (
        <Box
          key={hour}
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Typography
            fontSize={{ xs: 12, md: 16 }}
            sx={{ width: 50, flexShrink: 0 }}
          >
            {hour}:00
          </Typography>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ border: "1px dashed #EFEFEF", mt: "10px" }} />

            <Box
              sx={{
                mt: 1,
                display: "flex",
                ml: 1,
                gap: 2,
                overflowX: "auto",
                overflowY: "hidden",
                "&::-webkit-scrollbar": {
                  height: 6,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ccc",
                  borderRadius: 3,
                },
              }}
            >
              {groups[hour].map((item) => {
                return (
                  <Box key={item.id} sx={{ flexShrink: 0 }}>
                    <ScheduleCard subject={item.subject} time={item.time} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function LoadingUI() {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 6 }}>
      <Skeleton variant="text" width={150} height={30} />
      {[1, 2].map((item) => (
        <Box mt={2} key={item}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Skeleton variant="rectangular" sx={{ width: 50, height: 20 }} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" />

              <Box sx={{ display: "flex", gap: 2 }}>
                {(["accent1", "accent2"] as const).map((item) => (
                  <Box
                    key={item}
                    sx={{
                      maxWidth: 190,
                      borderRadius: "40px",
                      boxShadow: "none",
                      width: "100%",
                      p: 2,
                      bgcolor: theme.palette.semantic[item],
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        sx={{ width: 30, height: 30 }}
                      />
                    </Box>
                    <Box>
                      <Skeleton variant="text" width={50} height={30} />
                      <Skeleton variant="text" width={40} height={30} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
