import {
  Box,
  Card,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

// import DoubleTickIcon from "@/assets/icons/double-tick.svg?react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [theme.breakpoints.down("sm")]: {
    height: 7,
  },
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fff",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#287C74",
  },
}));

export default function TodayCompletedCard() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        bgcolor: "#27B5A717",
        px: { xs: "20px", md: "30px" },
        py: 2,
        boxShadow: "none",
        borderRadius: "45px",
        mt: 3,
        height: { xs: 130, md: 176 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <DoubleTickIcon />
        <Typography fontWeight={600} fontSize={{ xs: 16, md: 20 }}>
          {t("dashboard:completed_modules_today")}
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography
          variant="h4"
          fontWeight={600}
          fontSize={{ xs: 26, md: 32 }}
          color="#287C74"
          mb={1}
        >
          3/10
        </Typography>

        <BorderLinearProgress variant="determinate" value={30} />
      </Box>
    </Card>
  );
}
