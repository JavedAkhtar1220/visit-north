import { useQuery } from "@tanstack/react-query";
import type { SubjectType } from "@/components/Cards/config";

export interface MyScheduleData {
  id: number;
  subject: SubjectType;
  time: string;
}

export default function useMyScheduleQuery() {
  return useQuery({
    queryKey: ["student-my-schedule"],
    queryFn: fetchMySchedule,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

async function fetchMySchedule(): Promise<MyScheduleData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

  return [
    {
      id: 1,
      subject: "chemistry",
      time: "8:00 - 8:30",
    },
    {
      id: 2,
      subject: "biology",
      time: "8:30 - 9:00",
    },
    {
      id: 3,
      subject: "geography",
      time: "9:00 - 9:30",
    },
  ];
}
