import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";

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
    icon: <CalendarTodayIcon sx={{ fontSize: 20 }} />,
  },
  {
    id: 2,
    title: "Parent Teacher Conf.",
    description: "Signups are open for next week's conferences",
    time: "Dec 18",
    icon: <GroupsIcon sx={{ fontSize: 20 }} />,
  },
  {
    id: 3,
    title: "Q1 Report Cards",
    description:
      "Quarter 1 report cards have been finalized are ready for download",
    time: "Oct 25",
    icon: <DescriptionIcon sx={{ fontSize: 20 }} />,
  },
];

const SchoolCalendarEvents = () => {
  return (
    <>
      <div className="bg-white rounded-3xl p-4 border border-gray-100">
        <h3 className="text-base font-semibold text-[#514BF2] mb-4">
          School Calender
        </h3>

        {/* Events List */}
        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8E7FD] flex items-center justify-center shrink-0">
                <span className="text-[#514BF2]">{event.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#514BF2] mb-0.5">
                  {event.title}
                </h4>
                <p className="text-xs text-[#514BF2] mb-1">
                  {event.description}
                </p>
                <span className="text-xs text-gray-400">{event.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SchoolCalendarEvents;
