import React from 'react';
import { Search, Filter, Bell, Settings, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ReviewHeaderProps } from '../types/ReviewHeader';
import { useTheme } from '@rankup/shared-ui';


const ReviewHeader: React.FC<ReviewHeaderProps> = ({ className, onSearch, onFilterChange }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    return (
        <div className={`flex items-center justify-between  bg-white ${className}`}>
            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={() => navigate("teacher/dashboard")}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    aria-label="Go back"
                >
                    <ArrowLeft className="w-6 h-6" style={{color: theme.colors.text.primary}} />
                </button>

                <div>
                    <h1 className="text-xl font-bold"
                        style={{color: theme.colors.text.primary}}>Review Submissions</h1>
                    <p className="text-sm font-normal"
                        style={{ color: theme.colors.text.primary }}>Due Oct 12 | 24 Students</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#514CF180]" />
                    <input
                        type="text"
                        placeholder="Search Student"
                        className="pl-10 pr-4 py-2 border border-[#514CF11A] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter w-64 placeholder-[#514CF180]! outline-none font-bold text-[#514CF180]"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>

                <div className="relative">
                    <select
                        className="pl-4 pr-8 py-2 border border-[#514CF11A] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter appearance-none cursor-pointer text-[#514CF180] font-bold"
                        onChange={(e) => onFilterChange(e.target.value)}
                        defaultValue="Pending Review"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending Review</option>
                        <option value="graded">Graded</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#514CF180]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHeader;
