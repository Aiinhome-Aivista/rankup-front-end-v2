export interface Announcement {
    title: string;
    desc: string;
    date: string;
    color: string;
    icon: string;
    ctaText?: string;
}

export interface AnnouncementCardProps {
    item: Announcement;
}
