import { Box, Skeleton } from "@mui/material";
import { ErrorUI } from "./ErrorUI";
import useSubjectProgressBarQuery from "./queries/useSubjectProgressBarQuery";
import SubjectProgressBar from "./SubjectProgressBar";

export default function StudentSubjectProgressBarWidget() {
  const { data, isLoading, isError, refetch } = useSubjectProgressBarQuery();

  if (isLoading) return <LoadingUI />;

  if (isError) return <ErrorUI refetch={refetch} sx={{ mt: 4 }} />;

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "10px", md: "20px" },
        mt: "15px",
      }}
    >
      {Array.isArray(data) &&
        data.map(({ subject, percentage }) => (
          <SubjectProgressBar
            key={subject}
            subject={subject}
            percentage={percentage}
          />
        ))}
    </Box>
  );
}

function LoadingUI() {
  const percentages = [30, 50, 75, 60];

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "10px", md: "20px" },
        mt: 4,
      }}
    >
      {percentages.map((percentage, index) => (
        <Box
          sx={{
            width: 110,
            height: { xs: 223, md: 320 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // Start from bottom
            backgroundImage:
              "repeating-linear-gradient(145deg, #E6E2E2 0, #E6E2E2 2px, transparent 2px, transparent 8px)",
            borderRadius: "40px",
          }}
          key={index}
        >
          <Box
            sx={{
              width: "100%",
              height: `${percentage}%`, // Dynamic height based on percentage
              borderRadius: "40px",
              overflow: "hidden",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
