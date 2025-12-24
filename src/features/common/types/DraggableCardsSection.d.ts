import type { ReactNode } from "react";

export interface DraggableCardsSectionProps {
    fadeContent?: boolean;
}

export interface Position {
    x: number;
    y: number;
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface StatItem {
    icon: ReactNode;
    value: string;
    label: string;
}
