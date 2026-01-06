import React, { useState } from 'react';
import { Calendar, Info } from 'lucide-react';
import type { ChildFormData } from '../types/assessmentInformation';

const AssessmentInformation = () => {
    const [formData, setFormData] = useState<ChildFormData>({
        fullName: '',
        studentId: '',
        enrolmentDate: '',
        dateOfBirth: '',
        gender: '',
        classGrade: '',
        preferredLanguage: '',
        schoolName: '',
        emergencyContactName: '',
        emergencyContactNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-[#514CF105] p-6 rounded-2xl border border-[#514CF10D] flex-1">
            <div className="flex items-center gap-2 mb-8 text-[#514CF1]">
                {/* File/Document Icon with lines */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#5B58EB" />
                    <path d="M13 3.5V9H18.5" stroke="white" strokeWidth="1.5" />
                </svg>
                <h3 className="font-bold text-md">Assessment Information</h3>
            </div>

            <form className="space-y-6">
                <div className="w-full">
                    <label className="block text-xs font-bold text-[#514CF1] mb-2">
                        Child's Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. Emma Trasporia"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Student ID <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="studentId"
                            placeholder="e.g. ST-2024-8892"
                            value={formData.studentId}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Enrolment Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="enrolmentDate"
                                placeholder="DD/MM/YYYY"
                                value={formData.enrolmentDate}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#514CF1] pointer-events-none" size={18} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="dateOfBirth"
                                placeholder="DD/MM/YYYY"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#514CF1] pointer-events-none" size={18} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold appearance-none cursor-pointer"
                                style={{ color: formData.gender ? '#374151' : '#BCC1D8' }}
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="male" className="text-black">Male</option>
                                <option value="female" className="text-black">Female</option>
                                <option value="other" className="text-black">Other</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#5B58EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Class / Grade <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="classGrade"
                                value={formData.classGrade}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold appearance-none cursor-pointer"
                                style={{ color: formData.classGrade ? '#374151' : '#BCC1D8' }}
                            >
                                <option value="" disabled>Select Class</option>
                                <option value="1" className="text-black">Class 1</option>
                                <option value="2" className="text-black">Class 2</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#5B58EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Preferred Language
                        </label>
                        <div className="relative">
                            <select
                                name="preferredLanguage"
                                value={formData.preferredLanguage}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold  appearance-none cursor-pointer"
                                style={{ color: formData.preferredLanguage ? '#374151' : '#BCC1D8' }}
                            >
                                <option value="" disabled>Select Language</option>
                                <option value="english" className="text-black">English</option>
                                <option value="spanish" className="text-black">Spanish</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#5B58EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label className="block text-xs font-bold text-[#514CF1] mb-2">
                        School Name
                    </label>
                    <input
                        type="text"
                        name="schoolName"
                        placeholder="Default (Current School)"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Emergency Contact Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="emergencyContactName"
                            placeholder="Full Name"
                            value={formData.emergencyContactName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#514CF1] mb-2">
                            Emergency Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="emergencyContactNumber"
                            placeholder="(555) 000-0000"
                            value={formData.emergencyContactNumber}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-[#514CF11A] bg-white focus:outline-none focus:border-[#514CF1] focus:ring-1 focus:ring-[#514CF1] transition-colors placeholder-[#514CF180]! text-xs text-[#514CF1] font-bold"
                        />
                    </div>
                </div>

                <div className="bg-[#EFEEFF] p-3 rounded-md flex gap-3 items-center mt-2">
                    <div className="bg-[#5B58EB] rounded-full w-4 h-4 flex items-center justify-center shrink-0">
                        <Info className="text-white" size={10} strokeWidth={3} />
                    </div>
                    <p className="text-[#514CF1] text-[10px] leading-relaxed">
                        Your request will be sent to the school administration for verification. This usually takes 24-48 hours.
                    </p>
                </div>

                <div className="flex justify-between items-center pt-4">
                    <button type="button" className="w-full py-3 rounded-lg text-[#514CF180] font-bold border border-[#514CF11A] hover:bg-gray-50 transition-colors text-sm cursor-pointer">
                        Cancel
                    </button>
                    <button type="submit" className="w-full ml-4 py-3 rounded-lg bg-[#514CF1] text-white font-bold hover:bg-[#4a47d6] transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z" fill="currentColor" />
                        </svg>
                        Add Child
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssessmentInformation;
