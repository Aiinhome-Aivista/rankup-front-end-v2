import { ArrowRight } from "lucide-react";
import type { Announcement, AnnouncementCardProps } from "../types/announcement";
import { useTheme } from "@rankup/shared-ui";
import cloud2 from "../../../assets/cloud2.svg";
import AnnouncementSectionIcon from "../../../assets/AnnouncementSection_icon.svg";

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FestivalIcon from '@mui/icons-material/Festival';
import GroupsIcon from '@mui/icons-material/Groups';

// --- Data ---
const announcements: Announcement[] = [
  {
    title: "Annual Sports Meeting",
    desc: "Registration for the inter-house football tournament closes this Friday...",
    date: "Dec 28th",
    color: "bg-[#514BF2]",
    icon: <EmojiEventsIcon sx={{ fontSize: 28, color: "#514BF2" }} />,
    ctaText: "View Details",
  },
  {
    title: "Cultural Festival ‘Harmony’",
    desc: "Preparations for the annual cultural fest are underway. Submit your class entries by...",
    date: "Dec 31st",
    color: "bg-blue-500",
    icon: <FestivalIcon sx={{ fontSize: 28, color: "#514BF2" }} />,
    ctaText: "Download Brochure",
  },
  {
    title: "Staff Monthly Meeting",
    desc: "Mandatory staff meeting in the main auditorium at 2:00 PM. Agenda includes...",
    date: "Jan 05th",
    color: "bg-indigo-400",
    icon: <GroupsIcon sx={{ fontSize: 28, color: "#514BF2" }} />,
    ctaText: "View Details",
  },
];

// --- Components ---

const AnnouncementCard = ({ item }: AnnouncementCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      className="group relative flex min-w-80 max-w-80 flex-col overflow-hidden rounded-3xl p-4 bg-linear-to-b from-[#F5F4FF] via-[#F8F7FF] to-[#EBE9FE]"
    >
      {/* Top Right Wave Decoration */}
      <div className="absolute top-0 right-0 w-53 h-53 pointer-events-none">
        <img src={cloud2} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Date Badge (Positioned on the wave) */}
      <div className="absolute top-6 right-2 z-50 rounded-full bg-[#514CF10D] shadow-xl shadow-[#00000040] backdrop-blur-xl px-4">
        <span className="text-xs font-normal text-white">
          {item.date}
        </span>
      </div>


      {/* Header / Icon Area */}
      <div className="relative z-10 mb-4 -top-5">
        <div className="flex">
          <div className="absolute">
            <img src={AnnouncementSectionIcon} alt="" className="w-15 h-15" />
          </div>
          <div className={`relative z-10 flex h-10 w-10 items-center justify-center text-xl mt-2`}>
            {item.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mb-6 flex-1">
        <h4 className="mb-2 text-lg font-medium"
          style={{ color: theme.colors.text.default }}>
          {item.title}
        </h4>
        <p className="line-clamp-3 text-xs font-normal"
          style={{ color: theme.colors.text.sidebaricontext }}>
          {item.desc}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="relative z-10 mt-auto">
        <button className="flex items-center gap-2 text-xs font-bold transition-transform group-hover:translate-x-1 cursor-pointer"
          style={{ color: theme.colors.text.default }}>
          {item.ctaText || "View Details"}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const AnnouncementSection = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-1 flex-col">
      <h3 className="mb-6 text-sm font-bold"
        style={{ color: theme.colors.text.default }}>
        Announcement
      </h3>

      <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSection;