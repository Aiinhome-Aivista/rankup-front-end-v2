import React from 'react';
import type { GradingPanelProps } from '../types/GradingPanel';
import { ChevronDown, Check, Plus, CheckCircle } from 'lucide-react';

const GradingPanel: React.FC<GradingPanelProps> = ({
    rubric,
    gradingState,
    onScoreUpdate,  
    onOverallFeedbackUpdate,
    onPublish,
    className
}) => {

    const calculateTotal = () => {
        return Object.values(gradingState.criteriaScores).reduce((a, b) => a + b, 0);
    };

    const maxTotal = rubric.criteria.reduce((a, b) => a + b.maxScore, 0);

    return (
        <div className={`flex flex-col h-full bg-[#514CF105] border border-[#514CF10D] ${className}`}>
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-blue-600 rounded text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Grading</h3>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500 uppercase font-bold">Active Rubric</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded border border-gray-200 cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">{rubric.name}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-baseline p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Total Score</span>
                    <div>
                        <span className="text-3xl font-bold text-blue-600">{calculateTotal()}</span>
                        <span className="text-sm text-gray-400">/{maxTotal}</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {rubric.criteria.map((criteria) => (
                    <div key={criteria.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-sm font-bold text-blue-700">{criteria.title}</h4>
                                <p className="text-xs text-gray-500">{criteria.description}</p>
                            </div>
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {gradingState.criteriaScores[criteria.id] || 0}/{criteria.maxScore}
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-2 mt-3">
                            {criteria.levels.map((level) => {
                                const isSelected = gradingState.criteriaScores[criteria.id] >= level.minScore && gradingState.criteriaScores[criteria.id] <= level.maxScore;
                                return (
                                    <div
                                        key={level.id}
                                        onClick={() => onScoreUpdate(criteria.id, level.maxScore)} // Simple selection sets to max of range for now
                                        className={`p-2 rounded border text-center cursor-pointer transition-all ${isSelected
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                                            }`}
                                    >
                                        <div className="text-xs font-bold mb-1">{level.minScore}-{level.maxScore}</div>
                                        <div className="text-[10px] leading-tight opacity-90">{level.label}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <button className="flex items-center gap-1 mt-3 text-xs text-blue-600 font-medium hover:text-blue-700">
                            <Plus className="w-3 h-3" /> Add Criteria Comment
                        </button>
                    </div>
                ))}

                <div className="pt-2">
                    <h4 className="text-sm font-bold text-blue-700 mb-2">Overall Feedback</h4>
                    <textarea
                        className="w-full text-sm p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                        placeholder="Enter overall feedback for the student..."
                        value={gradingState.overallFeedback}
                        onChange={(e) => onOverallFeedbackUpdate(e.target.value)}
                    />
                </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-2">
                <button
                    onClick={onPublish}
                    className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                    <CheckCircle className="w-4 h-4" />
                    Publish Grade
                </button>
                <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                        Save Draft
                    </button>
                    <button className="py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">
                        Request Revision
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GradingPanel;
