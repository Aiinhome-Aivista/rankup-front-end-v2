import { ReactNode } from 'react';

export interface UpdateItem {
    id: number;
    title: string;
    desc: string;
    time: string;
    icon: ReactNode;
    iconBg: string;
}
