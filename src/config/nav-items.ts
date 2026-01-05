import inkPen from "@/assets/icons/ink_pen.svg";
import starRateHalf from "@/assets/icons/star_rate_half.svg";
import noteStack from "@/assets/icons/note_stack.svg";
import package2 from "@/assets/icons/package_2.svg";
import equalizer from "@/assets/icons/equalizer.svg";
import webhook from "@/assets/icons/webhook.svg";
import eyeTracking from "@/assets/icons/eye_tracking.svg";
import hotelClass from "@/assets/icons/hotel_class.svg";

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface NavItem {
  id: string;
  icon: string;
  label?: string;
}

export const features: FeatureItem[] = [
  {
    id: "Create",
    title: "Create",
    desc: "Reach Interactive Assessments",
    icon: inkPen,
  },
  {
    id: "Grade",
    title: "Grade",
    desc: "Grading Made Easier",
    icon: starRateHalf,
  },
  {
    id: "Paper Mode",
    title: "Paper Mode",
    desc: "Digitize Paper Assesments",
    icon: noteStack,
  },
  {
    id: "Deliver",
    title: "Deliver",
    desc: "Secure and Flexible",
    icon: package2,
  },
  {
    id: "Analyse",
    title: "Analyse",
    desc: "Actionable Insights",
    icon: equalizer,
  },
  {
    id: "Integrations",
    title: "Integrations",
    desc: "Use Your Go-To Tools",
    icon: webhook,
  },
  {
    id: "Monitor",
    title: "Monitor",
    desc: "Real-time Progress",
    icon: eyeTracking,
  },
  {
    id: "AI Assistant",
    title: "AI Assistant",
    desc: "Your Teaching Assistant",
    icon: hotelClass,
  },
];

export const mainNavItems: NavItem[] = [
  { id: "dashboard", icon: "bento", label: "Dashboard" },
  { id: "assessment", icon: "assignment", label: "Assessment" },
  { id: "classes", icon: "table_restaurant", label: "Classes" },
  { id: "student", icon: "face", label: "Student" },
  { id: "analytics", icon: "area_chart", label: "Analytics" },
];

export const collapsedNavItems: NavItem[] = [
  { id: "student", icon: "face" },
  { id: "classes", icon: "table_restaurant" },
  { id: "dashboard", icon: "bento" },
  { id: "addnotes", icon: "note_add" },
  { id: "assessment", icon: "assignment" },
  { id: "persons", icon: "person_add" },
  { id: "analytics", icon: "area_chart" },
  { id: "library", icon: "library_add" },
  { id: "favorites", icon: "star" },
];