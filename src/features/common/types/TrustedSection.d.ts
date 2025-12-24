import type { ReactNode } from "react";

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    videoColor: string;
}

export interface VideoSlide {
    id: number;
    color: string;
    content: ReactNode;
}

export interface TrustedSectionProps {
    fadeContent?: boolean;
}
