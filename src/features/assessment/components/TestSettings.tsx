import {
  InputSwitch,
  type InputSwitchChangeEvent,
} from "primereact/inputswitch";
import { Slider, type SliderChangeEvent } from "primereact/slider";
import SettingsIcon from "@mui/icons-material/Settings";

import type { TestSettingsProps } from "../types/TestSettings";

const TestSettings = ({
  randomize,
  setRandomize,
  antiCheat,
  setAntiCheat,
  attempts,
  setAttempts,
}: TestSettingsProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#514CF105] p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2 font-semibold text-[#514CF1]">
        <SettingsIcon className="text-lg" />
        <span>Test Settings</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#514CF1]">
            Randomize Questions
          </span>
          <InputSwitch
            checked={randomize}
            onChange={(e: InputSwitchChangeEvent) =>
              setRandomize(e.value as boolean)
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#514CF1]">
            Anti-cheat Mode
          </span>
          <InputSwitch
            checked={antiCheat}
            onChange={(e: InputSwitchChangeEvent) =>
              setAntiCheat(e.value as boolean)
            }
          />
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-[#514CF1]">Allowed Attempts</span>
            <span className="rounded bg-gray-100 px-2 font-bold text-gray-600">
              {attempts}
            </span>
          </div>
          <Slider
            value={attempts}
            onChange={(e: SliderChangeEvent) => setAttempts(e.value as number)}
            min={1}
            max={10}
            className="w-full"
            pt={{
              range: { className: "bg-[#514CF1]" },
              handle: { className: "bg-[#514CF1] ring-2 ring-[#514CF150]" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestSettings;
