import { useQuery } from "@tanstack/react-query";
import type { ActivityType } from "../ActivityCard";

export interface StudentActivityData {
  id: number;
  type: ActivityType;
  title: string;
  subTitle: string;
  progressValue: number;
  progressType: "assignment" | "course" | "streak";
}

export default function useAssignmentAndQuizzesQuery() {
  return useQuery({
    queryKey: ["student-assignment-and-quizzes"],
    queryFn: fetchStudentActivityProgress,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

async function fetchStudentActivityProgress(): Promise<StudentActivityData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

  return [
    {
      id: 1,
      type: "ASSIGNMENT",
      title: "active_assignments",
      subTitle: "5",
      progressValue: 50,
      progressType: "assignment",
    },
    {
      id: 2,
      type: "GRADED",
      title: "recently_graded",
      subTitle: "2",
      progressValue: 70,
      progressType: "course",
    },
    {
      id: 3,
      type: "WORKSHEET",
      title: "worksheets",
      subTitle: "5",
      progressValue: 40,
      progressType: "assignment",
    },
  ];
}
