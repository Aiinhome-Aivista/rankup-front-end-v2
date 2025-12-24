import type { ReactNode } from "react";

export interface TopMiddleSectionProps {
    fadeContent?: boolean;
}

export interface CarouselItem {
    id: number;
    text: string;
    icon: ReactNode;
    description: string;
}
