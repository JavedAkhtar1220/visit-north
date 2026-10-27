import { Box, styled, type Theme, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import BiologyIcon from "@/assets/icons/subjects/biology.svg?react";
import ChemistryIcon from "@/assets/icons/subjects/chemistry.svg?react";
import GeographyIcon from "@/assets/icons/subjects/geography.svg?react";
import MathIcon from "@/assets/icons/subjects/mathematics.svg?react";
import type { SubjectType } from "@/components/Cards/config";

export interface SubjectConfig {
  bgColor: keyof Theme["palette"]["progress_bar"];
  icon: ReactNode;
}

const subjectIcons: Partial<Record<SubjectType, SubjectConfig>> = {
  chemistry: {
    bgColor: "accent3",
    icon: <ChemistryIcon />,
  },
  biology: {
    bgColor: "accent2",
    icon: <BiologyIcon />,
  },
  maths: {
    bgColor: "accent3",
    icon: <MathIcon />,
  },
  geography: {
    bgColor: "accent2",
    icon: <GeographyIcon />,
  },
};

// Create a styled wrapper that flips LinearProgress vertically
const VerticalProgressWrapper = styled(Box)<{
  barcolor: string;
  value: number;
}>(({ theme, barcolor, value }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: 40,
  backgroundColor: "transparent",
  overflow: "hidden",
  display: "flex",
  alignItems: "flex-end",

  // this inner div mimics the bar and grows vertically
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: `${value}%`,
    backgroundColor: barcolor || theme.palette.primary.main,
    borderRadius: "40px",
    transition: "height 0.5s ease",
  },
}));

interface SubjectProgressBarProps {
  subject: SubjectType;
  percentage: number;
  color?: string;
}

export default function SubjectProgressBar({
  subject,
  percentage,
  color,
}: SubjectProgressBarProps) {
  const config = subjectIcons[subject];
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 100,
        height: { xs: 223, md: 320 },
        position: "relative",
        backgroundImage:
          "repeating-linear-gradient(145deg, #E6E2E2 0, #E6E2E2 2px, transparent 2px, transparent 8px)",
        borderRadius: "40px",
      }}
    >
      <Box
        sx={{
          width: { xs: 44, md: 58 },
          height: { xs: 44, md: 58 },
          bgcolor: "#000",
          borderRadius: "50%",
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          border: "3px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {config?.icon}
      </Box>

      <VerticalProgressWrapper
        value={percentage}
        barcolor={
          theme.palette.progress_bar[
            config?.bgColor ||
              (color as keyof Theme["palette"]["progress_bar"]) ||
              "accent2"
          ]
        }
      />
      {percentage > 10 && (
        <Box
          sx={{
            width: { xs: "18px", md: "25px" },
            height: { xs: "18px", md: "25px" },
            backgroundColor: "#C9C6E5",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: percentage > 100 ? -16 : `${96 - percentage}%`,
            transform: "translateX(-50%)",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "top 0.5s ease",
          }}
        >
          <Box
            sx={{ width: 10, height: 10, bgcolor: "#287C74", borderRadius: 5 }}
          />
        </Box>
      )}
    </Box>
  );
}
