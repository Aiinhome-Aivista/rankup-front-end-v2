import React from 'react';
import { User} from 'lucide-react';
import type { SubmissionQueueProps } from '../types/SubmissionQueue';

const SubmissionQueue: React.FC<SubmissionQueueProps> = ({ submissions, activeSubmissionId, onSelectSubmission, className }) => {
    return (
        <div className={`flex flex-col rounded-2xl h-full bg-[#514CF105] border border-[#514CF10D] ${className}`}>
            <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                {/* <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <span className="font-bold text-sm">queue</span>
                </div> */}
                <h3 className="font-semibold"
                style={{ color: '#514CF1' }}>Queue ({submissions.length})</h3>
            </div>

            <div className="flex-1 overflow-y-auto">
                {submissions.map((sub) => {
                    const isActive = sub.id === activeSubmissionId;
                    return (
                        <div
                            key={sub.id}
                            onClick={() => onSelectSubmission(sub.id)}
                            className={`p-4 border-b border-gray-50 cursor-pointer transition-colors hover:bg-gray-50 flex items-start gap-3 ${isActive ? 'bg-[#514CF105] border-l-3 border-l-[#514CF1]' : 'border-l-3 border-l-transparent'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500'
                                }`}>
                                {sub.avatarUrl ? (
                                    <img src={sub.avatarUrl} alt={sub.studentName} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <User className="w-5 h-5" />
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className={`text-sm font-semibold truncate ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                                        {sub.studentName}
                                    </h4>
                                    <span className="text-xs text-gray-400 font-mono">
                                        {new Date(sub.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-1">
                                    <span className={`text-xs ${sub.status === 'graded' ? 'text-green-600' : 'text-gray-500'
                                        }`}>
                                        {sub.status === 'graded' ? `Graded: ${sub.score}/${sub.totalScore}` : 'Submitted'}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(sub.submittedAt).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>

                            {sub.status === 'graded' && (
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SubmissionQueue;
