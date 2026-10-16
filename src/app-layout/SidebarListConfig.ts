import type { SvgIconComponent } from "@mui/icons-material";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";

export interface SidebarItemConfig {
  label: string;
  path?: string;
  Icon?: SvgIconComponent;
  children?: SidebarItemConfig[];
}

export const sidebarListConfig: SidebarItemConfig[] = [
  {
    label: "Dashboard",
    path: "/",
    Icon: DashboardRoundedIcon,
  },
  {
    label: "Courses",
    Icon: MenuBookRoundedIcon,
    children: [
      { label: "My courses", path: "/courses/my-courses" },
      { label: "Course catalogue", path: "/courses/catalog" },
    ],
  },
  {
    label: "Classes",
    Icon: SchoolRoundedIcon,
    children: [
      { label: "Upcoming classes", path: "/classes/upcoming" },
      { label: "Class schedule", path: "/classes/schedule" },
    ],
  },
  {
    label: "Assignments",
    Icon: AssignmentRoundedIcon,
    children: [
      { label: "To do", path: "/assignments/to-do" },
      { label: "Submitted", path: "/assignments/submitted" },
    ],
  },
  {
    label: "Live sessions",
    path: "/live-sessions",
    Icon: VideoCallRoundedIcon,
  },
  {
    label: "Messages",
    path: "/messages",
    Icon: ChatRoundedIcon,
  },
  {
    label: "Students",
    Icon: GroupsRoundedIcon,
    children: [
      { label: "Student list", path: "/students/list" },
      { label: "Student progress", path: "/students/progress" },
    ],
  },
  {
    label: "Tutors",
    path: "/tutors",
    Icon: SchoolRoundedIcon,
  },
  {
    label: "Reports",
    Icon: BarChartRoundedIcon,
    children: [
      { label: "Performance", path: "/reports/performance" },
      { label: "Attendance", path: "/reports/attendance" },
    ],
  },
  {
    label: "Calendar",
    path: "/calendar",
    Icon: CalendarMonthRoundedIcon,
  },
  {
    label: "Rewards",
    path: "/rewards",
    Icon: EmojiEventsRoundedIcon,
  },
  {
    label: "Billing",
    path: "/billing",
    Icon: PaymentsRoundedIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    Icon: SettingsRoundedIcon,
  },
  {
    label: "Help and support",
    path: "/support",
    Icon: SupportAgentRoundedIcon,
  },
];
