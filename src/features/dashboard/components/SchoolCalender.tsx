// import React from "react";
import { useTheme } from "@rankup/shared-ui";

import type { SchoolCalendarEvent } from "../types/schoolCalender";

const calendarEvents: SchoolCalendarEvent[] = [
    {
        day: "24",
        month: "Jan",
        title: "Mid-Term",
        desc: "School-wide assessments for grade 6-12",
    },
    {
        day: "28",
        month: "Dec",
        title: "Teacher Development Day",
        desc: "No school for students",
    },
    {
        day: "15",
        month: "Dec",
        title: "Science Fair Exhibition",
        desc: "Main Hall, 2:00 PM - 5:00 PM",
    }
];

const SchoolCalender = () => {
    const { theme } = useTheme();
    return (
        <div
            className="h-full flex flex-col rounded-3xl p-6"
            style={{ backgroundColor: theme.colors.bg.card }}
        >
            <h3 className="mb-4 text-sm font-bold" style={{ color: theme.colors.text.default }}>
                School Calender
            </h3>
            <div className="flex-1 flex flex-col gap-6">
                {calendarEvents.map((event: SchoolCalendarEvent, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center  justify-center rounded-full bg-[#514CF10D] h-10 w-10">
                            <span className="text-lg font-bold text-[#514BF2] leading-none">{event.day}</span>
                            <span className="text-xs font-normal text-[#514BF2] leading-none">{event.month}</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium" style={{ color: theme.colors.text.default }}>{event.title}</h4>
                            <p className="text-xs font-normal" style={{ color: theme.colors.text.sidebaricontext }}>{event.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SchoolCalender;
