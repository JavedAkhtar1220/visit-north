import {
  Box,
  type SxProps,
  type Theme,
  Typography,
  useTheme,
} from "@mui/material";
import type React from "react";
import type { PropsWithChildren, ReactNode } from "react";
import AssignmentIcon from "@/assets/icons/assignments.svg?react";
import GraduationIcon from "@/assets/icons/graduation.svg?react";
import TaskIcon from "@/assets/icons/task.svg?react";

export type ActivityType = "ASSIGNMENT" | "GRADED" | "WORKSHEET";

interface TypeMeta {
  bgColor: keyof Theme["palette"]["semantic"];
  progressColor: keyof Theme["palette"]["progress_bar"];
  icon: ReactNode;
}

const TYPE_META: Record<ActivityType, TypeMeta> = {
  ASSIGNMENT: {
    bgColor: "accent2",
    progressColor: "accent2",
    icon: <TaskIcon />,
  },
  GRADED: {
    bgColor: "accent4",
    progressColor: "accent4",
    icon: <GraduationIcon />,
  },
  WORKSHEET: {
    bgColor: "accent3",
    progressColor: "accent3",
    icon: <AssignmentIcon />,
  },
};

interface ActivityCardProps extends PropsWithChildren {
  type?: ActivityType;
  title: ReactNode;
  subTitle: ReactNode;
  bgColor?: string;
  progressColor?: string;
  IconComponent: ReactNode;
  sx?: SxProps;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  type = "ASSIGNMENT",
  bgColor,
  progressColor,
  children,
  title,
  subTitle,
  sx = {},
  IconComponent,
  ...props
}) => {
  const theme = useTheme();
  const meta = TYPE_META[type];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: { xs: "25px", md: "30px" },
        height: { xs: 78, md: 95 },
        background:
          bgColor ||
          theme.palette.semantic[meta.bgColor] ||
          theme.palette.background.paper,
        borderLeft: `6px solid ${progressColor || theme.palette.progress_bar[meta.progressColor] || theme.palette.primary.main}`,
        p: { xs: 1.5, md: 2.5 },
        mb: 2,
        boxShadow: "0 1px 6px rgba(120, 120, 120, 0.07)",
        "& svg path": {
          stroke:
            progressColor || theme.palette.progress_bar[meta.progressColor],
        },
        "& .MuiCircularProgress-svg": {
          color: theme.palette.progress_bar[meta.progressColor],
        },
        ...sx,
      }}
      {...props}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {IconComponent}

        <Box>
          <Typography fontWeight={500} fontSize={{ xs: 12, md: 16 }}>
            {title}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={{ xs: 12, md: 16 }}
            sx={{ color: "#767676" }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
