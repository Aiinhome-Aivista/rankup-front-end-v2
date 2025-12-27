import { ArrowRight } from "lucide-react";
import type { Announcement, AnnouncementCardProps } from "../types/announcement";

import homeWave from "../../../assets/home-wave.svg";
import { useTheme } from "@rankup/shared-ui";

// --- Data ---
const announcements: Announcement[] = [
  {
    title: "Annual Sports Meeting",
    desc: "Registration for the inter-house football tournament closes this Friday...",
    date: "Dec 28th",
    color: "bg-[#514BF2]",
    icon: "🏆",
    ctaText: "View Details",
  },
  {
    title: "Cultural Festival ‘Harmony’",
    desc: "Preparations for the annual cultural fest are underway. Submit your class entries by...",
    date: "Dec 31st",
    color: "bg-blue-500",
    icon: "🎪",
    ctaText: "Download Brochure",
  },
  {
    title: "Staff Monthly Meeting",
    desc: "Mandatory staff meeting in the main auditorium at 2:00 PM. Agenda includes...",
    date: "Jan 05th",
    color: "bg-indigo-400",
    icon: "👥",
    ctaText: "View Details",
  },
];

// --- Components ---

const AnnouncementCard = ({ item }: AnnouncementCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      className="group relative flex min-w-70 max-w-75 flex-col overflow-hidden rounded-3xl p-5 pb-4 bg-linear-to-b from-[#FCFBFF] to-[#acaae89e]"

    >
      {/* Top Right Wave Decoration */}
      <div className="absolute -top-14 right-0 w-24 h-24 pointer-events-none">
        <img src={homeWave} alt="" className="w-full h-full object-cover opacity-80" />
      </div>

      {/* Date Badge (Positioned on the wave) */}
      <div className="absolute top-4 right-3 z-10">
        <span className="rounded-full bg-[#514CF10D] px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm shadow-[#00000040]">
          {item.date}
        </span>
      </div>


      {/* Header / Icon Area */}
      <div className="relative z-10 mb-2">

        <div className="relative flex h-14 w-14 items-center justify-center">

          <div className={`relative flex h-10 w-10 items-center justify-center text-xl`}>
            {item.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mb-4 flex-1"
        style={{ color: theme.colors.text.default }}>
        <h4 className="mb-2 text-lg leading-tight">
          {item.title}
        </h4>
        <p className="line-clamp-3 text-xs leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="relative z-10 mt-auto">
        <button className="flex items-center gap-2 text-xs font-bold transition-transform group-hover:translate-x-1"
          style={{ color: theme.colors.text.default }}>
          {item.ctaText || "View Details"}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const AnnouncementSection = () => {
  return (
    <div className="flex flex-1 flex-col py-2">
      <h3 className="mb-4 text-base font-bold text-[#514BF2]"
      >
        Announcement
      </h3>

      <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-2 pl-1">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSection;