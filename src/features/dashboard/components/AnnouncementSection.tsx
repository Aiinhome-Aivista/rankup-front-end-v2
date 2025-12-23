import { ArrowRight } from "lucide-react";
import type { Announcement, AnnouncementCardProps } from "../types/announcement";

// --- Data ---
const announcements: Announcement[] = [
  {
    title: "Annual Sports Meeting",
    desc: "Registration for the inter-house football tournament closes this Friday...",
    date: "Dec 28th",
    color: "bg-[#514BF2]", // Purple/Blue
    icon: "🏆",
  },
  {
    title: "Cultural Festival 'Harmony'",
    desc: "Preparations for the annual cultural fest are underway. Submit your class entries by...",
    date: "Dec 31st",
    color: "bg-blue-500", // Blue
    icon: "🎪",
  },
  {
    title: "Staff Monthly Meeting",
    desc: "Mandatory staff meeting in the main auditorium at 2:00 PM. Agenda includes...",
    date: "Jan 05th",
    color: "bg-indigo-400",
    icon: "👥",
  },
];

// --- Components ---

const AnnouncementCard = ({ item }: AnnouncementCardProps) => {
  return (
    <div className="group relative flex min-w-[170px] flex-col gap-1.5 overflow-hidden rounded-xl bg-[#F7F8FF] p-2.5 transition-all hover:shadow-md">
      {/* Header Image/Banner Area */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-lg ${item.color} text-[10px] text-white shadow-sm`}
        >
          {item.icon}
        </div>

        {/* Decorative Circle Background */}
        <div
          className={`absolute -right-3 -top-3 h-14 w-14 rounded-full opacity-10 ${item.color}`}
        ></div>

        <span className="z-10 rounded border border-gray-100 bg-white/90 px-1 py-0.5 text-[7px] font-bold text-[#514BF2] shadow-sm backdrop-blur-sm">
          {item.date}
        </span>
      </div>

      <div className="mt-1">
        <h4 className="mb-0.5 line-clamp-1 text-[10px] font-bold text-[#514BF2]">
          {item.title}
        </h4>
        <p className="line-clamp-2 text-[8px] leading-tight text-gray-500">
          {item.desc}
        </p>
      </div>

      <div className="mt-auto flex cursor-pointer items-center gap-1 text-[8px] font-bold text-[#514BF2] opacity-80 transition-opacity hover:opacity-100">
        DETAILS
        <ArrowRight size={8} />
      </div>
    </div>
  );
};

const AnnouncementSection = () => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <h3 className="mb-4 text-sm font-semibold text-[#514BF2]">
        Announcement
      </h3>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSection;