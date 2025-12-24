import { Calendar, type CalendarChangeEvent } from "primereact/calendar";
import {
  InputNumber,
  type InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import type { ScheduleDurationProps } from "../types/ScheduleDuration";

const ScheduleDuration = ({
  startDate,
  setStartDate,
  startTime,
  setStartTime,
  endDate,
  setEndDate,
  endTime,
  setEndTime,
  duration,
  setDuration,
}: ScheduleDurationProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#514CF105] p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2 font-semibold text-[#514CF1]">
        <AccessTimeIcon className="text-lg" />
        <span>Schedule & Duration</span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              Start Date
            </label>
            <Calendar
              value={startDate}
              onChange={(e: CalendarChangeEvent) =>
                setStartDate(e.value as Date | null)
              }
              placeholder="DD/MM/YYYY"
              showIcon
              className="w-full text-sm"
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              Start Time
            </label>
            <Calendar
              value={startTime}
              onChange={(e: CalendarChangeEvent) =>
                setStartTime(e.value as Date | null)
              }
              timeOnly
              placeholder="HH:MM"
              showIcon
              className="w-full text-sm"
              icon={() => <AccessTimeIcon className="text-gray-400" />}
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              End Date
            </label>
            <Calendar
              value={endDate}
              onChange={(e: CalendarChangeEvent) =>
                setEndDate(e.value as Date | null)
              }
              placeholder="DD/MM/YYYY"
              showIcon
              className="w-full text-sm"
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[#514CF1]">
              End Time
            </label>
            <Calendar
              value={endTime}
              onChange={(e: CalendarChangeEvent) =>
                setEndTime(e.value as Date | null)
              }
              timeOnly
              placeholder="HH:MM"
              showIcon
              className="w-full text-sm"
              icon={() => <AccessTimeIcon className="text-gray-400" />}
              pt={{
                input: {
                  className:
                    "p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg",
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-[#514CF1]">
            Duration Limit
          </label>
          <div className="flex gap-4">
            <InputNumber
              value={duration}
              onValueChange={(e: InputNumberValueChangeEvent) =>
                setDuration(e.value as number)
              }
              className="w-24"
              inputStyle={{ width: "6rem" }}
              inputClassName="p-2.5 text-sm bg-gray-50 border-gray-200 rounded-lg text-center"
            />
            <Dropdown
              options={[{ label: "Minutes", value: "min" }]}
              value="min"
              className="flex-1 rounded-lg border-gray-200 bg-gray-50"
              pt={{ input: { className: "p-2.5 text-sm" } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDuration;
