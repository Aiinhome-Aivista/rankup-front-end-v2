import { ArrowLeft } from 'lucide-react';
import AssessmentInformation from '../components/AssessmentInformation';
import ImportantInstructions from '../components/ImportantInstructions';
import { useNavigate } from 'react-router-dom';

function AddChild() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 text-[#514CF1]">
            <button
              onClick={() => navigate("parent/dashboard")}
              className="hover:bg-[#EBEBFF] p-1 rounded-full transition-colors -ml-2"
            >
              <ArrowLeft size={28} className="cursor-pointer" />
            </button>
            <h1 className="text-xl font-bold">Add Child</h1>
          </div>
          <p className="text-[#A1AEF2] text-xs ml-8">
            Link a student profile to your parent account to start monitoring progress.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <AssessmentInformation />
          <div className="w-full lg:w-120 shrink-0">
            <ImportantInstructions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddChild