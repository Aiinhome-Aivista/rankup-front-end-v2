export interface Announcement {
    title: string;
    desc: string;
    date: string;
    color: string;
    icon: React.ReactNode;
    ctaText?: string;
}

export interface AnnouncementCardProps {
    item: Announcement;
}
