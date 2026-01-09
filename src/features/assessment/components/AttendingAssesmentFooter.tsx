import { useTheme } from "@rankup/shared-ui";

interface AttendingAssesmentFooterProps {
  stats: {
    answered: number;
    reviews: number;
    remaining: number;
    progress: number;
  };
  actions: {
    onClear: () => void;
    onMarkForReview: () => void;
    onSaveNext: () => void;
  };
}

const AttendingAssesmentFooter = ({
  stats,
  actions,
}: AttendingAssesmentFooterProps) => {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        color: theme.colors.text?.onPrimary,
        backgroundColor: theme.colors.bg?.sidebar,
      }}
      className="min-h-[50px] h-auto lg:h-[50px] px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between fixed bottom-0 left-0 right-0 z-10 py-4 lg:py-0 gap-4 lg:gap-0"
    >
      {/* Left: Progress */}
      <div className="w-full lg:w-[32%] flex flex-col gap-1.5 lg:transform lg:translate-y-1 order-1 lg:order-none">
        <div className="flex justify-between items-end px-0.5">
          <span className="text-xs">Progress</span>
          <span className="text-xs font-bold">
            {Math.round(stats.progress)}%
          </span>
        </div>
        <div
          style={{
            backgroundColor: theme.colors.bg?.primaryDimmed25,
          }}
          className="w-full h-1.5 rounded-full overflow-hidden"
        >
          <div
            style={{
              backgroundColor: theme.colors.bg?.primary,
              width: `${stats.progress}%`,
            }}
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          />
        </div>
      </div>

      {/* Center: Stats */}
      <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-8 w-full lg:w-auto ml-0 order-2 lg:order-none">
        <div className="flex items-center gap-1.5">
          <div
            style={{
              backgroundColor: theme.colors.bg?.button?.tertiary,
            }}
            className="w-3.5 h-3.5 rounded-sm"
          />
          <span className="text-sm font-normal">
            <span className="font-bold">{stats.answered}</span> Answered
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            style={{
              backgroundColor: theme.colors.bg?.surface.warning,
            }}
            className="w-3.5 h-3.5 rounded-sm"
          />
          <span className="text-sm font-normal">
            <span className="font-bold">{stats.reviews}</span> Reviews
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            style={{
              backgroundColor: theme.colors.bg?.primaryDimmed,
            }}
            className="w-3.5 h-3.5 rounded-sm"
          />
          <span className="text-sm font-normal">
            <span className="font-bold">{stats.remaining}</span> Remaining
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center justify-center lg:justify-end gap-2 lg:gap-4 w-full lg:w-auto flex-wrap order-3 lg:order-none">
        <button
          onClick={actions.onClear}
          style={{
            color: theme.colors.text?.primary,
            backgroundColor: theme.colors.bg?.primary,
          }}
          className="h-8 px-4 rounded-[23px] text-xs font-bold transition-colors cursor-pointer flex-1 lg:flex-none"
        >
          Clear
        </button>
        <button
          onClick={actions.onMarkForReview}
          style={{
            color: theme.colors.text?.inverseSecondary,
            backgroundColor: theme.colors.bg?.primary,
          }}
          className="h-8 px-6 rounded-full text-sm font-bold transition-colors cursor-pointer flex-1 lg:flex-none"
        >
          Mark for Review
        </button>
        <button
          onClick={actions.onSaveNext}
          style={{
            color: theme.colors.text?.primary,
            backgroundColor: theme.colors.bg?.primary,
          }}
          className="h-8 px-6 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer flex-1 lg:flex-none"
        >
          Save & Next
          <span className="material-symbols-outlined text-[20px] font-bold">
            arrow_forward
          </span>
        </button>
      </div>
    </footer>
  );
};

export default AttendingAssesmentFooter;
