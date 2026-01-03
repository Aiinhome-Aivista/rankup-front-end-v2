export interface ReviewHeaderProps {
    className?: string;
    onSearch: (query: string) => void;
    onFilterChange: (status: string) => void;
}
