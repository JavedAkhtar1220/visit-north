import {
  Avatar,
  AvatarGroup,
  Box,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SubjectCard from "@/components/Cards/SubjectCard";
import { ErrorUI } from "./ErrorUI";
import useSubjectProgressQuery from "./queries/useSubjectProgressQuery";

export default function StudentSubjectProgressWidget() {
  const { t } = useTranslation();

  const { data, isError, refetch, isLoading } = useSubjectProgressQuery();

  if (isError) return <ErrorUI refetch={() => refetch()} sx={{ mt: 4 }} />;

  if (isLoading) return <LoadingUI />;

  return (
    <Box mt={4}>
      {Array.isArray(data) &&
        data.map((item) => (
          <SubjectCard
            subject={item.subject}
            title={t(`dashboard:${item.title}`)}
            progress={item.percentage}
            key={item.id}
            sx={{ mt: item.id === 1 ? 0 : { xs: "-20px", md: "-30px" } }}
          >
            <Typography variant="body1" fontSize={{ xs: 10, md: 16 }}>
              {item.completed}/{item.total} {t("dashboard:lectures_completed")}
            </Typography>
            <AvatarGroup max={4} sx={{ width: "fit-content", mt: 2 }}>
              {Array.isArray(item.avatars) &&
                item.avatars.map((avatar) => (
                  <Avatar
                    key={avatar}
                    alt="I learn"
                    src={avatar}
                    sx={{
                      width: { xs: 26, md: 40 },
                      height: { xs: 26, md: 40 },
                    }}
                  />
                ))}
            </AvatarGroup>
          </SubjectCard>
        ))}
    </Box>
  );
}

function LoadingUI() {
  const theme = useTheme();
  return (
    <Box mt={4}>
      {(["accent1", "accent2", "accent3"] as const).map((item) => (
        <Box
          key={item}
          sx={{
            borderRadius: "60px",
            p: 4,
            bgcolor: theme.palette.semantic[item],
            height: 230,
            display: "flex",
            justifyContent: "space-between",
            mt: item === "accent1" ? 0 : -6,
          }}
        >
          <Box>
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width={200} height={30} />

            <Box mt={2} sx={{ display: "flex" }}>
              {[1, 2, 3, 4].map((item) => (
                <Skeleton
                  key={item}
                  variant="circular"
                  width={40}
                  height={40}
                  sx={{ border: "2px solid #fff", ml: item === 1 ? 0 : -1 }}
                />
              ))}
            </Box>
          </Box>

          <Skeleton variant="circular" width={100} height={100} />
        </Box>
      ))}
    </Box>
  );
}
