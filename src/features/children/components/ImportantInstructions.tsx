import React from 'react';
import { Headset } from 'lucide-react';


const ImportantInstructions = () => {
    return (
        <div className="bg-[#514CF105] p-6 rounded-2xl border border-[#514CF10D] h-fit sticky top-6">
            <div className="flex items-center gap-2 mb-6 text-[#5B58EB]">
                <div className="bg-[#5B58EB] rounded-full p-0.5" style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-white text-xs font-bold">?</span>
                </div>
                <h3 className="font-semibold text-base">Important Information & Instructions</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="text-[#514CF1] font-bold mb-1 text-sm">Accurate Information</h4>
                    <p className="text-[#A1AEF2] text-xs leading-relaxed">
                        Please ensure all details match your child's official school documents. Discrepancies may delay the registration process.
                    </p>
                </div>

                <div>
                    <h4 className="text-[#5B58EB] font-bold mb-1 text-sm">Student ID Verification</h4>
                    <p className="text-[#A1AEF2] text-xs leading-relaxed">
                        The Student ID is unique to each child. We verify this against school records to ensure secure access to academic data.
                    </p>
                </div>

                <div>
                    <h4 className="text-[#514CF1] font-bold mb-1 text-sm">Emergency Contacts</h4>
                    <p className="text-[#A1AEF2] text-xs leading-relaxed">
                        Providing a reliable emergency contact is crucial. This number will be used if we cannot reach you during urgent situations.
                    </p>
                </div>
            </div>

            <button className="w-full mt-8 bg-[#514CF133] text-[#514CF1] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#dadafc] transition-colors border border-[#514CF11A]">
                <Headset size={20} />
                Need Help?
            </button>
        </div>
    );
};

export default ImportantInstructions;
