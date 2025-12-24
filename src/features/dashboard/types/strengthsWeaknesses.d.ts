export interface RadialProgressProps {
    value: number;
    label: string;
    color: string;
    remainingColor: string;
}

export interface ChartData {
    name: string;
    value: number;
    [key: string]: any;
}
