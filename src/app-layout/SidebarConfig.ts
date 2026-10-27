import type { FunctionComponent, SVGProps } from "react";
import AnnouncementIcon from "@/assets/icons/sidebar/announcement.svg?react";
import AssignmentIcon from "@/assets/icons/sidebar/assignments.svg?react";
import AwardIcon from "@/assets/icons/sidebar/award.svg?react";
import ChatIcon from "@/assets/icons/sidebar/chat.svg?react";
import DashboardIcon from "@/assets/icons/sidebar/dashboard.svg?react";
import GamificationIcon from "@/assets/icons/sidebar/gamification.svg?react";
import LessonIcon from "@/assets/icons/sidebar/lesson.svg?react";
import LibraryIcon from "@/assets/icons/sidebar/library.svg?react";
import ReportIcon from "@/assets/icons/sidebar/report.svg?react";
import SettingIcon from "@/assets/icons/sidebar/setting.svg?react";
import StudentIcon from "@/assets/icons/sidebar/student.svg?react";
import TeachingIcon from "@/assets/icons/sidebar/teaching.svg?react";
import { appPath } from "@/routes/appPaths";
// import { appPath } from "@/routes/appPaths";
// import type { UserDTO } from "@/types/user";

export interface SidebarItemConfig {
  label: string;
  // role: UserDTO["user_type"];
  role: string;
  path?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  children?: SidebarItemConfig[];
  disabled?: boolean;
}

export function getSidebarListConfig(user?: any | null): SidebarItemConfig[] {
  // if (!user) return [];

  // const userType = user.user_type;

  const userType = "student";

  const { STUDENT } = appPath;

  switch (userType) {
    case "student":
      return [
        {
          path: STUDENT.DASHBOARD,
          label: "sidebar.student.dashboard",
          role: "student",
          Icon: DashboardIcon,
        },
        {
          path: "/learning-hub",
          label: "sidebar.student.learning_hub",
          role: "student",
          Icon: AssignmentIcon,
          children: [
            {
              label: "sidebar.student.learning_hub.assignment_help",
              path: STUDENT.ASSIGNMENT_HELP,
              role: "student",
            },
            {
              label: "sidebar.student.learning_hub.superpower",
              path: STUDENT.SUPERPOWER,
              role: "student",
            },
            {
              label: "sidebar.student.learning_hub.interactive_lessons",
              path: STUDENT.INTERACTIVE_LESSONS,
              role: "student",
            },
          ],
        },
        {
          path: "/study",
          label: "sidebar.student.study",
          role: "student",
          Icon: LibraryIcon,
          children: [
            {
              label: "sidebar.student.study.little_learners",
              path: STUDENT.LITTLE_LEARNERS,
              role: "student",
            },
            {
              label: "sidebar.student.study.worksheets",
              path: STUDENT.WORKSHEETS,
              role: "student",
            },
            {
              label: "sidebar.student.study.visual_learning",
              path: STUDENT.VISUAL_LEARNING,
              role: "student",
            },
            {
              label: "sidebar.student.study.language_worksheets",
              path: STUDENT.LANGUAGE_WORKSHEETS,
              role: "student",
            },
            {
              label: "sidebar.student.study.practice_exercises",
              path: STUDENT.PRACITCE_EXERCISES,
              role: "student",
            },
            {
              label: "sidebar.student.study.study_materials",
              path: STUDENT.STUDY_MATERIALS,
              role: "student",
            },
            {
              // label: "sidebar.student.study.study_materials",
              label: "sidebar.student.study.courses",
              path: STUDENT.COURSES,
              role: "student",
            },
            {
              label: "sidebar.student.study.reading_practice",
              path: STUDENT.READING_PRACTICE,
              role: "student",
            },
          ],
        },
        {
          path: STUDENT.LITERACY,
          label: "sidebar.student.literacy",
          role: "student",
          Icon: LibraryIcon,
        },
        {
          path: "/gamification",
          label: "sidebar.student.gamification",
          role: "student",
          Icon: GamificationIcon,
          children: [
            {
              label: "sidebar.student.gamification.quizzes",
              path: STUDENT.QUIZZES,
              role: "student",
            },
            {
              label: "sidebar.student.gamification.games",
              path: STUDENT.GAMES,
              role: "student",
            },
          ],
        },
        {
          path: "/live-tutoring",
          label: "sidebar.student.live_tutoring",
          role: "student",
          Icon: TeachingIcon,
          children: [
            {
              label: "sidebar.student.live_tutoring.find_sessions",
              path: STUDENT.FIND_SESSIONS,
              role: "student",
            },
            {
              label: "sidebar.student.live_tutoring.book_sessions",
              path: STUDENT.BOOK_SESSIONS,
              role: "student",
            },
            {
              label: "sidebar.student.live_tutoring.my_sessions",
              path: STUDENT.MY_SESSIONS,
              role: "student",
            },
            {
              label: "sidebar.student.live_tutoring.video_call",
              path: STUDENT.VIDEO_CALL,
              role: "student",
            },
            {
              label: "sidebar.student.live_tutoring.request_live_tutor",
              path: STUDENT.REQUEST_LIVE_TUTOR,
              role: "student",
            },
          ],
        },
        {
          path: "/student-tools",
          label: "sidebar.student.student_tools",
          role: "student",
          Icon: StudentIcon,
          children: [
            {
              label: "sidebar.student.student_tools.homework_upload",
              path: STUDENT.HOMEWORK_UPLOAD,
              role: "student",
            },
            {
              label: "sidebar.student.student_tools.messages",
              path: STUDENT.MESSAGES,
              role: "student",
            },
            {
              label: "sidebar.student.student_tools.accessibility",
              path: STUDENT.ACCESSIBILITY,
              role: "student",
            },
            {
              label: "sidebar.student.student_tools.calendar",
              path: STUDENT.CALENDAR,
              role: "student",
            },
          ],
        },
        {
          path: STUDENT.LEADERBOARD,
          label: "sidebar.student.leaderboard",
          role: "student",
          Icon: AwardIcon,
        },

        {
          path: "/setting",
          label: "sidebar.student.setting",
          role: "student",
          Icon: SettingIcon,
          children: [
            {
              label: "sidebar.student.setting.subscription_plan",
              path: STUDENT.SUBSCRIPTION_PLAN,
              role: "student",
            },
            {
              label: "sidebar.student.setting.payment_history",
              path: STUDENT.PAYMENT_HISTORY,
              role: "student",
            },
            {
              label: "sidebar.student.setting.support_education",
              path: STUDENT.SUPPORT_EDUCATION,
              role: "student",
            },
          ],
        },
      ];
    case "tutor":
      return [
        {
          path: appPath.TUTOR.DASHBOARD,
          label: "sidebar.tutor.dashboard",
          role: "tutor",
          Icon: DashboardIcon,
        },
        {
          path: appPath.TUTOR.LESSON_PLANNER,
          label: "sidebar.tutor.lesson_planner",
          role: "tutor",
          Icon: LessonIcon,
        },
        {
          path: appPath.TUTOR.STUDENT_PROGRESS,
          label: "sidebar.tutor.student_progress",
          role: "tutor",
          Icon: StudentIcon,
        },
        {
          path: appPath.TUTOR.ASSIGNMENTS,
          label: "sidebar.tutor.assignments",
          role: "tutor",
          Icon: AssignmentIcon,
        },
        {
          path: appPath.TUTOR.LIVE_TUTORING,
          label: "sidebar.tutor.live_tutoring",
          role: "tutor",
          Icon: TeachingIcon,
        },
        {
          path: appPath.TUTOR.SCHEDULE,
          label: "sidebar.tutor.schedule",
          role: "tutor",
          Icon: TeachingIcon,
        },
        {
          path: appPath.TUTOR.CHAT,
          label: "sidebar.tutor.chat",
          role: "tutor",
          Icon: ChatIcon,
        },
        {
          path: appPath.TUTOR.ACCOUNT_BILLING,
          label: "sidebar.tutor.setting",
          role: "tutor",
          Icon: SettingIcon,
        },
      ];
    case "parent":
      return [
        {
          path: appPath.PARENT.DASHBOARD,
          label: "sidebar.parent.dashboard",
          role: "parent",
          Icon: DashboardIcon,
        },
        {
          path: appPath.PARENT.TUTOR_UPDATES,
          label: "sidebar.parent.tutor_updates",
          role: "parent",
          Icon: AnnouncementIcon,
        },
        {
          path: appPath.PARENT.PROGRESS_REPORTS,
          label: "sidebar.parent.progress_reports",
          role: "parent",
          Icon: ReportIcon,
        },
        {
          path: appPath.PARENT.SCHEDULE,
          label: "sidebar.parent.schedule",
          role: "parent",
          Icon: TeachingIcon,
        },
        {
          path: appPath.PARENT.CHAT,
          label: "sidebar.parent.chat",
          role: "parent",
          Icon: ChatIcon,
        },
        {
          path: appPath.PARENT.ACCOUNT_BILLING,
          label: "sidebar.parent.setting",
          role: "parent",
          Icon: TeachingIcon,
        },
      ];
    default:
      return [];
  }
}
