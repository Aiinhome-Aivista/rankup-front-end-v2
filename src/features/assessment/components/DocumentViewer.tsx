import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize, Download, PenTool } from 'lucide-react';
import type { DocumentViewerProps } from '../types/DocumentViewer';

const DocumentViewer: React.FC<DocumentViewerProps> = ({ submission, className }) => {
    const [zoom, setZoom] = useState(100);

    if (!submission) {
        return (
            <div className={`flex items-center justify-center bg-gray-50 text-gray-400 ${className}`}>
                <p>Select a submission to view</p>
            </div>
        );
    }

    return (
        <div className={`flex flex-col  ${className}`}>
            <div className="h-12 bg-white flex items-center justify-between px-4">
                <div className="text-sm font-medium text-blue-600 truncate max-w-75">
                    Submitted File: <span className="text-gray-900">{submission.studentName}_MidTerm_Essay.pdf</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded p-1 border border-gray-200">
                        <button onClick={() => setZoom(z => Math.max(z - 10, 50))} className="p-1 hover:bg-gray-200 rounded">
                            <ZoomOut className="w-4 h-4 text-[#514CF1]" 
                        />
                        </button>
                        <span className="text-xs  w-10 text-center">{zoom}%</span>
                        <button onClick={() => setZoom(z => Math.min(z + 10, 200))} className="p-1 hover:bg-gray-200 rounded">
                            <ZoomIn className="w-4 h-4 text-[#514CF1]" />
                        </button>
                    </div>

                    <div className="h-6 w-px  mx-2"></div>

                    <button className="p-1.5 text-[#514CF1] hover:text-blue-600 hover:bg-blue-50 rounded">
                        <Maximize className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-[#514CF1] hover:text-blue-600 hover:bg-blue-50 rounded">
                        <PenTool className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-[#514CF1] hover:text-blue-600 hover:bg-blue-50 rounded">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto p-8 flex justify-center bg-white">
                <div
                    className="bg-white shadow-lg transition-transform origin-top"
                    style={{
                        width: '794px', // A4 width at 96 DPI
                        minHeight: '1123px', // A4 height
                        transform: `scale(${zoom / 100})`,
                        marginBottom: '40px'
                    }}
                >
                    {/* Placeholder content mimicking the screenshot */}
                    <div className="p-16 text-gray-800 text-xs leading-relaxed shadow-2xl shadow-[#0000000D] drop-shadow-2xl">
                        <h1 className="text-2xl font-bold mb-6 text-center text-black">The Causes of the Industrial Revolution</h1>

                        <p className="mb-4 text-justify">
                            The Industrial Revolution was a major turning point in world history that began in Britain during the late 18th century and later spread to other parts of the world. It marked the transition from manual labor and agrarian economies to machine-based manufacturing and industrial production. Several important factors contributed to the rise of the Industrial Revolution.
                        </p>

                        <h2 className="text-lg font-bold mt-6 mb-2 text-black">1. Agricultural Revolution</h2>
                        <p className="mb-4 text-justify">
                            Improvements in farming techniques, such as crop rotation, better tools, and selective breeding, increased food production. This led to population growth and provided surplus labor for factories.
                        </p>

                        <h2 className="text-lg font-bold mt-6 mb-2 text-black">2. Availability of Natural Resources</h2>
                        <p className="mb-4 text-justify">
                            Britain had abundant supplies of coal and iron ore, which were essential for running machines, building factories, and manufacturing tools and equipment.
                        </p>

                        <h2 className="text-lg font-bold mt-6 mb-2 text-black">3. Technological Innovations</h2>
                        <p className="mb-4 text-justify">
                            Key inventions like the spinning jenny, power loom, and steam engine revolutionized textile production and transportation, increasing efficiency and output.
                        </p>

                        <h2 className="text-lg font-bold mt-6 mb-2 text-black">4. Capital and Investment</h2>
                        <p className="mb-4 text-justify">
                            Wealth accumulated from trade and colonial expansion provided the capital needed to invest in factories, machinery, and infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentViewer;
