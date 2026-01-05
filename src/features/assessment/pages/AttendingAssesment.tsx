import AttendingAssesmentHeader from "@/components/ui/AttendingAssesmentHeader";
import AttendingAssesmentFooter from "@/components/ui/AttendingAssesmentFooter";

const AttendingAssesment = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FE] flex flex-col font-[Inter]">
      <AttendingAssesmentHeader />

      {/* Main Content Area */}
      <main className="flex-1 p-6 pb-[90px] max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E0E0E0] min-h-[600px]">
          {/* Question Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-[#514CF1] text-lg font-bold">Questions 5</h2>
            <div className="bg-[#514CF11A] text-[#514CF1] px-3 py-1 rounded-lg text-sm font-medium">
              Points: <span className="font-bold">5.0</span>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-[#333333] text-lg mb-8 leading-relaxed">
            A projectile is fired at an angle of <span className="font-bold">45º</span> with an initial velocity of <span className="font-bold">50 m/s</span>. Calculate the maximum height reached by the projectile. Assume standard gravity <span className="italic">g = 9.8 m/s²</span>.
          </p>

          <p className="text-[#666666] text-sm mb-4">
            Select the closest answer from the options below.
          </p>

          {/* Upload Area Placeholder (dashed box in design) */}
          <div className="border-2 border-dashed border-[#E0E0E0] rounded-2xl bg-[#F9FAFB] h-48 flex flex-col items-center justify-center gap-3 mb-8 cursor-pointer hover:bg-[#F3F4F6] transition-colors">
             <span className="material-symbols-outlined text-[#514CF1] text-4xl">
              cloud_upload
            </span>
            <div className="text-center">
                <p className="text-[#514CF1] font-semibold">Click to upload notes or past papers</p>
                <p className="text-[#888888] text-xs">Supported: PDF, DOCX, TXT (Max 10MB)</p>
            </div>
          </div>

          {/* Options Section */}
          <div className="space-y-4">
            <h3 className="text-[#514CF1] font-semibold text-sm mb-4">Select your answer:</h3>
            
            {["63.77 m", "63.77 m", "63.77 m", "63.77 m"].map((option, index) => (
                <div key={index} className="group flex items-center justify-between p-4 border border-[#E0E0E0] rounded-xl hover:border-[#514CF1] hover:bg-[#514CF10A] cursor-pointer transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full border-2 border-[#E0E0E0] group-hover:border-[#514CF1] flex items-center justify-center">
                            {/* Inner circle for selected state */}
                            {/* <div className="w-2.5 h-2.5 rounded-full bg-[#514CF1]" /> */}
                        </div>
                        <span className="text-[#514CF1] font-semibold">{option}</span>
                    </div>
                    <span className="text-[#888888] text-xs font-medium group-hover:text-[#514CF1]">
                        Options {String.fromCharCode(65 + index)}
                    </span>
                </div>
            ))}
          </div>

        </div>
      </main>

      <AttendingAssesmentFooter />
    </div>
  );
};

export default AttendingAssesment;
