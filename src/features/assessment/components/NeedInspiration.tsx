import { Button } from "primereact/button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const NeedInspiration = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#514CF105] p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 font-semibold text-[#514CF1]">
        <HelpOutlineIcon className="text-lg" />
        <span>Need Inspiration</span>
      </div>
      <p className="mb-6 text-xs leading-relaxed text-gray-400">
        Browse the question bank for case studies and past exam questions.
        Explore a wide range of practice materials to strengthen your
        preparation.
      </p>
      <Button
        label="Open Question Bank"
        icon={<MenuBookIcon className="mr-2" />}
        className="w-full rounded-lg border-none bg-[#514CF133]! py-3 font-medium text-[#514CF1] hover:bg-[#D0D7FF]"
        rounded
      />
    </div>
  );
};

export default NeedInspiration;
