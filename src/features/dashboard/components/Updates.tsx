
import { useTheme } from "@rankup/shared-ui";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';

import type { UpdateItem } from "../types/updates";

const updatesData: UpdateItem[] = [
    {
        id: 1,
        title: "School Play Tickets",
        desc: "Tickets for the annual winter play are now available for purchase online",
        time: "2 hours ago",
        icon: <EventAvailableIcon className="text-[#514BF2]" />,
        iconBg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Parent Teacher Conf.",
        desc: "Signups are open for next week's conferences",
        time: "Dec 18",
        icon: <GroupsIcon className="text-[#514BF2]" />,
        iconBg: "bg-indigo-100"
    },
    {
        id: 3,
        title: "Q1 Report Cards",
        desc: "Quarter 1 report cards have been finalized are ready for download",
        time: "Oct 25",
        icon: <ArticleIcon className="text-[#514BF2]" />,
        iconBg: "bg-indigo-100"
    }
];

const Updates = () => {
    const { theme } = useTheme();

    return (
        <div
            className="h-full flex flex-col rounded-2xl p-6"
            style={{ backgroundColor: theme.colors.bg.surface.primary }}
        >
            <h3 className="mb-4 text-sm font-bold" style={{color: theme.colors.text.primary}}>
                Updates
            </h3>
            <div className="flex-1 flex flex-col gap-6">
                {updatesData.map((item: UpdateItem) => (
                    <div key={item.id} className="flex gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.iconBg}`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold leading-none" style={{color: theme.colors.text.primary}}>{item.title}</h4>
                            <p className="text-xs line-clamp-2 font-medium" style={{color: theme.colors.text.primary}}>{item.desc}</p>
                            <span className="text-sm font-medium text-[#514CF199]">{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Updates;
