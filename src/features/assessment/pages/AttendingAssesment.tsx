import { useState, useMemo } from "react";
import AttendingAssesmentHeader from "@/components/ui/AttendingAssesmentHeader";
import AttendingAssesmentFooter from "@/components/ui/AttendingAssesmentFooter";
import { MOCK_QUESTIONS } from "../data/mockQuestions";

const AttendingAssesment = () => {
    const [questions, setQuestions] = useState(MOCK_QUESTIONS);
    const [currentIdx, setCurrentIdx] = useState(0);

    const currentQuestion = questions[currentIdx];

    const stats = useMemo(() => {
        const answered = questions.filter(q => q.status === 'attempted').length;
        const reviews = questions.filter(q => q.status === 'review').length;
        const remaining = questions.length - answered - reviews;
        const progress = ((answered + reviews) / questions.length) * 100;
        return { answered, reviews, remaining, progress };
    }, [questions]);

    const handleSelectOption = (optIndex: number) => {
        const updated = [...questions];
        updated[currentIdx].selectedOption = optIndex;
        // If getting selected, we can mark it as current (or keep as is until save)
        // But usually selecting doesn't change status until 'Save', but let's just track selection.
        setQuestions(updated);
    };

    const handleSaveNext = () => {
        const updated = [...questions];
        // If option selected, mark attempted. Else if it was review, keep review? 
        // Logic: Save & Next implies locking in an answer.
        if (updated[currentIdx].selectedOption !== null) {
             updated[currentIdx].status = 'attempted';
        } else {
             // If skipped without answer, remains unattempted or visited? 
             // Let's keep it unattempted if no answer.
        }
        
        setQuestions(updated);

        if (currentIdx < questions.length - 1) {
            setCurrentIdx(prev => prev + 1);
        }
    };

    const handleMarkReview = () => {
        const updated = [...questions];
        updated[currentIdx].status = 'review';
        setQuestions(updated);
        
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(prev => prev + 1);
        }
    };

    const handleClear = () => {
        const updated = [...questions];
        updated[currentIdx].selectedOption = null;
        updated[currentIdx].status = 'unattempted';
        setQuestions(updated);
    };

    const handleJump = (idx: number) => {
        setCurrentIdx(idx);
    };

  return (
    <div className="min-h-screen bg-[#F8F9FE] flex flex-col">
      <AttendingAssesmentHeader />

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-8 pb-[240px] lg:pb-[100px] w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 h-full items-stretch">
            
            {/* LEFT SIDEBAR: Topics & Materials */}
            <aside className="w-full lg:w-[300px] bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 lg:sticky lg:top-[120px] lg:min-h-[600px] flex flex-col z-0">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-[#514CF11A] rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#514CF1] text-lg">assignment</span>
                    </div>
                    <h2 className="text-[#514CF1] font-bold text-lg">Topics & Materials</h2>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-[#514CF1] rounded-[3px]"></div>
                         <span className="text-[10px] font-medium text-[#514CF1]">Current</span>
                    </div>
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-[#4CAF50] rounded-[3px]"></div>
                         <span className="text-[10px] font-medium text-[#514CF1]">Attempted</span>
                    </div>
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-[#D97706] rounded-[3px]"></div>
                         <span className="text-[10px] font-medium text-[#514CF1]">Review</span>
                    </div>
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-white border border-gray-200 rounded-[3px]"></div>
                         <span className="text-[10px] font-medium text-[#514CF1]">Unattempted</span>
                    </div>
                </div>

                <h3 className="text-[#514CF1] text-xs font-bold mb-4 uppercase tracking-wide">Section 1: Derivtives</h3>

                <div className="grid grid-cols-5 gap-3">
                    {questions.map((q, idx) => {
                        let bgClass = "bg-[#4CAF501A] text-[#4CAF50] border border-[#4CAF5040]"; // Default style per snippet? No wait, snippet had varied.
                        // Let's map status to styles based on the user's snippet preference:
                        // Attempted -> bg-[#4CAF501A] text-[#4CAF50] border border-[#4CAF5040]
                        // Review -> bg-[#FFF7ED] text-[#D97706] border border-[#FED7AA]
                        // Current -> bg-[#514CF1] text-white shadow-md
                        // Unattempted -> bg-white border text-[#514CF1] border-[#EEF0F7]

                        const isCurrent = idx === currentIdx;
                        
                        // We prioritize 'current' visualization, but usually grids show status. 
                        // If it's the current question, we might highlight it specially, 
                        // OR we trust the status. The user snippet showed Q5 as blue (current?) and others differently.
                        // Let's assume the active one gets the blue Style if it is active.
                        
                        if (isCurrent) {
                             bgClass = "bg-[#514CF1] text-white shadow-md shadow-[#514CF140]";
                        } else if (q.status === 'attempted') {
                             bgClass = "bg-[#4CAF501A] text-[#4CAF50] border border-[#4CAF5040]";
                        } else if (q.status === 'review') {
                             bgClass = "bg-[#FFF7ED] text-[#D97706] border border-[#FED7AA]";
                        } else {
                             bgClass = "bg-white border text-[#514CF1] border-[#EEF0F7]";
                        }

                        return (
                            <button 
                                key={q.id}
                                onClick={() => handleJump(idx)}
                                className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all hover:scale-105 ${bgClass} relative cursor-pointer`}
                            >
                                {q.id}
                                {q.status === 'review' && !isCurrent && (
                                    <div className="absolute top-1 right-1 w-1 h-1 bg-[#D97706] rounded-full"></div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </aside>


            {/* RIGHT MAIN: Question Area */}
            <div className="flex-1 bg-white rounded-[32px] p-6 lg:p-10 shadow-sm border border-gray-100 lg:min-h-[600px]">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 sm:gap-0">
                    <h2 className="text-[#514CF1] text-2xl font-bold">Question {currentQuestion.id}</h2>
                    <div className="bg-[#514CF10D] text-[#514CF1] px-4 py-1.5 rounded-xl text-sm font-bold">Points: <span className="">{currentQuestion.points.toFixed(1)}</span></div>
                </div>

                <p 
                    className="text-[#1E293B] text-base font-normal mb-10 leading-8"
                    dangerouslySetInnerHTML={{ __html: currentQuestion.text }}
                ></p>

                <p className="text-[#514CF1] text-sm font-medium mb-4">Select the closest answer from the options below.</p>

                 <div className="border-2 border-dashed border-[#E2E8F0] rounded-[24px] bg-[#F8FAFC] h-[200px] flex flex-col items-center justify-center gap-4 mb-10 cursor-pointer hover:bg-[#F1F5F9] transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[#514CF1] text-2xl">cloud_upload</span>
                    </div>
                    <div className="text-center">
                        <p className="text-[#514CF1] font-bold text-sm mb-1">Click to upload notes or past papers</p>
                        <p className="text-[#94A3B8] text-xs">Supported: PDF, DOCX, TXT (Max 10MB)</p>
                    </div>
                 </div>

                <div className="space-y-4">
                     <p className="text-[#514CF1] text-sm font-bold mb-4">Select your answer:</p>
                    
                     {currentQuestion.options.map((option, idx) => {
                        const isSelected = currentQuestion.selectedOption === idx;
                        const borderColor = isSelected ? "border-[#514CF1] bg-[#514CF105]" : "border-[#E2E8F0]";
                        const dotBorder = isSelected ? "border-[#514CF1]" : "border-[#E2E8F0]";
                        
                        return (
                            <div 
                                key={idx} 
                                onClick={() => handleSelectOption(idx)}
                                className={`group flex items-center justify-between p-5 border rounded-2xl cursor-pointer transition-all hover:border-[#514CF1] hover:bg-[#514CF105] ${borderColor}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white group-hover:border-[#514CF1] ${dotBorder}`}>
                                        {isSelected && <div className="w-3 h-3 bg-[#514CF1] rounded-full" />}
                                    </div>
                                    <span className="text-[#514CF1] font-bold text-base">{option}</span>
                                </div>
                                <div className={`px-3 py-1 rounded-lg border group-hover:border-[#514CF1] group-hover:bg-white group-hover:text-[#514CF1] transition-colors ${isSelected ? "bg-white border-[#514CF1] text-[#514CF1]" : "bg-[#F8FAFC] border-[#E2E8F0]"}`}>
                                    <span className={`text-xs font-bold group-hover:text-[#514CF1] ${isSelected ? "text-[#514CF1]" : "text-[#94A3B8]"}`}>
                                        Option {String.fromCharCode(65 + idx)}
                                    </span>
                                </div>
                             </div>
                        );
                     })}
                </div>

            </div>
        </div>
      </main>

      <AttendingAssesmentFooter 
        stats={stats}
        actions={{
            onClear: handleClear,
            onMarkForReview: handleMarkReview,
            onSaveNext: handleSaveNext
        }}
      />
    </div>
  );
};

export default AttendingAssesment;
