import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleIcon from "@mui/icons-material/Article";

interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}

const events: CalendarEvent[] = [
  {
    id: 1,
    title: "School Play Tickets",
    description:
      "Tickets for the annual winter play are now available for purchase online",
    time: "2 hours ago",
    icon: <EventAvailableIcon className="text-[#514BF2]" />,
  },
  {
    id: 2,
    title: "Parent Teacher Conf.",
    description: "Signups are open for next week's conferences",
    time: "Dec 18",
    icon: <GroupsIcon className="text-[#514BF2]" />,
  },
  {
    id: 3,
    title: "Q1 Report Cards",
    description:
      "Quarter 1 report cards have been finalized are ready for download",
    time: "Oct 25",
    icon: <ArticleIcon className="text-[#514BF2]" />,
  },
];

const teachers = [
  {
    id: 1,
    name: "Dr. Ravi Krishnamurthi",
    subject: "Mathematics, ICSE Class",
    avatar: "👨‍🏫",
  },
  {
    id: 2,
    name: "Dr. Anindita Ray",
    subject: "English, CBSE Class",
    avatar: "👩‍🏫",
  },
];

const SchoolCalendarEvents = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100">
      <h3 className="text-sm font-semibold text-[#514BF2] mb-6">
        School Calendar
      </h3>

      {/* Events List */}
      <div className="space-y-4 mb-6">
        {events.map((event) => (
          <div key={event.id} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-[#514CF105] flex items-center justify-center shrink-0">
              {event.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {event.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2">
                {event.description}
              </p>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Cards */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#514BF2] to-[#7B77F5] flex items-center justify-center text-white text-lg">
              {teacher.avatar}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {teacher.name}
              </h4>
              <p className="text-xs text-gray-500">{teacher.subject}</p>
            </div>
            <button className="w-6 h-6 rounded-full bg-[#514CF105] flex items-center justify-center hover:bg-[#514CF120] transition-colors">
              <span className="text-[#514BF2] text-xs">📧</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCalendarEvents;
