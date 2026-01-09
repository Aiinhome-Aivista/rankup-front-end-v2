import { ArrowRight } from "lucide-react";
import { useTheme } from "@rankup/shared-ui";

const UpcomingTest = () => {
  const { theme } = useTheme();
  return (
    <div className="flex h-36 flex-col justify-between rounded-2xl p-4 md:h-40 lg:h-44"
      style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.bg.surface.primary }}>
      {/* Main Count */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="mb-2 text-4xl font-bold">03</span>
        <span className="text-sm font-bold">Upcoming Test</span>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold leading-none">07</span>
          <span className="text-xs">Review Pending</span>
        </div>
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center hover:scale-105">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingTest;