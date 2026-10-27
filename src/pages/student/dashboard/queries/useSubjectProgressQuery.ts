import { useQuery } from "@tanstack/react-query";
import type { SubjectType } from "@/components/Cards/config";

export interface SubjectProgressData {
  id: number;
  subject: SubjectType;
  title: string;
  completed: number;
  total: number;
  percentage: number;
  avatars: string[];
}

export default function useSubjectProgressQuery() {
  return useQuery<SubjectProgressData[]>({
    queryKey: ["student-subject-progress"],
    queryFn: fetchStudentSubjectProgress,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

async function fetchStudentSubjectProgress(): Promise<SubjectProgressData[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      subject: "maths",
      title: "mathematics_algebra",
      completed: 37,
      total: 40,
      percentage: 82,
      avatars: [
        "/static/images/avatar/1.jpg",
        "/static/images/avatar/2.jpg",
        "/static/images/avatar/3.jpg",
        "/static/images/avatar/4.jpg",
      ],
    },
    {
      id: 2,
      subject: "physics",
      title: "science_physics",
      completed: 25,
      total: 40,
      percentage: 52,
      avatars: [
        "/static/images/avatar/1.jpg",
        "/static/images/avatar/2.jpg",
        "/static/images/avatar/3.jpg",
      ],
    },
  ];
}
