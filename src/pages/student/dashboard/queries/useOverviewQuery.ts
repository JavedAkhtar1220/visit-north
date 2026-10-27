import type { Theme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { ProgressType } from "@/components/Progress/config";

export interface DashboardCardData {
  id: number;
  type: ProgressType;
  label: string;
  value: number;
  percentage: number;
  bgColor: keyof Theme["palette"]["semantic"];
  textColor: keyof Theme["palette"]["progress_bar"];
}

export default function useOverviewQuery() {
  return useQuery<DashboardCardData[]>({
    queryKey: ["student-overview"],
    queryFn: fetchDashboardProgress,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

async function fetchDashboardProgress(): Promise<DashboardCardData[]> {
  // simulate API delay

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      type: "assignment",
      label: "assignment_due",
      value: 5,
      percentage: 80,
      bgColor: "accent1",
      textColor: "accent1",
    },
    {
      id: 2,
      type: "course",
      label: "courses",
      value: 12,
      percentage: 60,
      bgColor: "accent2",
      textColor: "accent2",
    },
    {
      id: 3,
      type: "streak",
      label: "day_streak",
      value: 15,
      percentage: 95,
      bgColor: "accent3",
      textColor: "accent3",
    },
  ];
}
