import { useQuery } from "@tanstack/react-query";
import type { SubjectType } from "@/components/Cards/config";

export interface SubjectProgressBarData {
  id: number;
  subject: SubjectType;
  percentage: number;
}

export default function useSubjectProgressBarQuery() {
  return useQuery({
    queryKey: ["student-subject-progress-bar"],
    queryFn: fetchStudentProgressBar,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

async function fetchStudentProgressBar(): Promise<SubjectProgressBarData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

  return [
    {
      id: 1,
      subject: "chemistry",
      percentage: 50,
    },
    {
      id: 2,
      subject: "biology",
      percentage: 70,
    },
    {
      id: 3,
      subject: "maths",
      percentage: 40,
    },
    {
      id: 4,
      subject: "geography",
      percentage: 90,
    },
  ];
}
