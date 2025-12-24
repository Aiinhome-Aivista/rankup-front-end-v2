import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// --- Context & Service Imports ---
// Update these paths to match your actual project structure
import { useToast } from "@/shared/context/ToastContext";
import { registerInstitute } from "../api/authService";

// --- Types ---
import type {
  FormData,
  FormErrors,
  Option,
} from "../types/instituteRegistration";

const InstituteRegistration = () => {
  const navigate = useNavigate();
  // Ensure useToast is typed in your context file, otherwise cast as any for now
  const { showToast } = useToast() as any;

  const [formData, setFormData] = useState<FormData>({
    instituteName: "",
    instituteWebsite: "",
    institutePhone: "",
    adminFullName: "",
    adminEmail: "",
    adminPhone: "",
    adminPassword: "",
  });

  const [instituteStudents, setInstituteStudents] = useState<number>(100);
  const [selectedInstituteType, setSelectedInstituteType] = useState<
    string | null
  >(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const instituteTypes: Option[] = [
    { label: "School", value: "school" },
    { label: "College", value: "college" },
    { label: "University", value: "university" },
    { label: "Coaching Center", value: "coaching" },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.instituteName.trim())
      newErrors.instituteName = "Institute Name is required";
    if (!formData.instituteWebsite.trim())
      newErrors.instituteWebsite = "Institute Website is required";

    if (!selectedInstituteType)
      newErrors.instituteType = "Institute Type is required";

    if (!formData.institutePhone) {
      newErrors.institutePhone = "Institute Phone is required";
    } else if (formData.institutePhone.length < 10) {
      newErrors.institutePhone = "Phone Number must be 10 digits";
    }

    if (!formData.adminFullName.trim())
      newErrors.adminFullName = "Admin Full Name is required";

    if (!formData.adminEmail.trim()) {
      newErrors.adminEmail = "Admin Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.adminEmail)) {
      newErrors.adminEmail = "Invalid email format";
    }

    if (!formData.adminPhone) {
      newErrors.adminPhone = "Admin Phone is required";
    } else if (formData.adminPhone.length < 10) {
      newErrors.adminPhone = "Phone Number must be 10 digits";
    }

    if (!formData.adminPassword)
      newErrors.adminPassword = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Remove non-digit characters
    const numericValue = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (numericValue.length <= 10) {
      setFormData({ ...formData, [name]: numericValue });
    }
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setInstituteStudents(newValue);
    }
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const payload = {
          instituteName: formData.instituteName,
          website: formData.instituteWebsite,
          instituteType: selectedInstituteType!,
          studentRange: `${instituteStudents}`,
          institutePhone: formData.institutePhone,
          adminName: formData.adminFullName,
          adminEmail: formData.adminEmail,
          adminPhone: formData.adminPhone,
          adminPassword: formData.adminPassword,
        };

        const response = await registerInstitute(payload);

        if (response.isSuccess) {
          showToast(
            "success",
            "Success",
            response.message || "Institute Registered Successfully!"
          );
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          showToast(
            "error",
            "Registration Failed",
            response.message || "An error occurred."
          );
        }
      } catch (error: any) {
        showToast("error", "Error", error.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
          placeholder="Institute Name"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.instituteName ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
        />
        {errors.instituteName && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.instituteName}
          </p>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          name="instituteWebsite"
          value={formData.instituteWebsite}
          onChange={handleChange}
          placeholder="Institute Website"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.instituteWebsite ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
        />
        {errors.instituteWebsite && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.instituteWebsite}
          </p>
        )}
      </div>

      <div className="relative text-left">
        <Dropdown
          value={selectedInstituteType}
          onChange={(e: DropdownChangeEvent) => {
            setSelectedInstituteType(e.value);
            if (errors.instituteType)
              setErrors({ ...errors, instituteType: "" });
          }}
          options={instituteTypes}
          optionLabel="label"
          placeholder="Institute Type"
          className={`w-full text-left ${errors.instituteType ? "rounded-xl border border-red-500" : ""
            }`}
          pt={{
            root: {
              className:
                "!bg-white/5 !border !border-white/20 !rounded-xl overflow-hidden",
            },
            input: {
              className: "!text-white p-3 !placeholder-gray-200 font-sans",
            },
            trigger: {
              className: "!text-white/70 w-12 flex items-center justify-center",
            },
            panel: {
              className:
                "!bg-white/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl",
            },
            item: {
              className: "hover:bg-indigo-50 text-gray-800 p-2 text-sm",
            },
          }}
        />
        {errors.instituteType && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.instituteType}
          </p>
        )}
      </div>

      <div className="relative">
        <div className="relative flex items-center">
          <span className="pointer-events-none absolute left-5 z-10 text-white">
            +91
          </span>
          <input
            type="text"
            name="institutePhone"
            value={formData.institutePhone}
            onChange={handlePhoneChange}
            placeholder="Institute Phone"
            className={`w-full rounded-xl! border! bg-transparent py-3 pl-14 pr-5 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.institutePhone ? "border-red-500!" : "border-[#D9D9D9]!"
              }`}
          />
        </div>
        {errors.institutePhone && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.institutePhone}
          </p>
        )}
      </div>

      {/* Slider Section */}
      <div className="px-1 py-1">
        <div className="mb-2 flex justify-between text-xs text-white opacity-90">
          <span>Number of Students</span>
          <span className="rounded bg-white/20 px-2 py-0.5 text-[10px]">
            {instituteStudents}+ Students
          </span>
        </div>
        <Slider
          size="small"
          defaultValue={100}
          min={0}
          max={5000}
          step={10}
          value={instituteStudents}
          onChange={handleSliderChange}
          sx={{
            color: "white",
            "& .MuiSlider-thumb": {
              backgroundColor: "white",
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: "white",
            },
          }}
        />
        <div className="-mt-1 flex justify-between text-[10px] text-white/60">
          <span>&lt;100</span>
          <span>1,000</span>
          <span>2,500</span>
          <span>5,000+</span>
        </div>
      </div>

      {/* Administrator Divider */}
      <div className="relative flex items-center py-2">
        <div className="grow border-t border-white/20"></div>
        <span className="mx-4 shrink-0 p-1 text-xs font-bold uppercase tracking-widest text-white opacity-80">
          Administrator
        </span>
        <div className="grow border-t border-white/20"></div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="adminFullName"
          value={formData.adminFullName}
          onChange={handleChange}
          placeholder="Admin Full Name"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.adminFullName ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
        />
        {errors.adminFullName && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.adminFullName}
          </p>
        )}
      </div>

      <div className="relative">
        <input
          type="email"
          name="adminEmail"
          value={formData.adminEmail}
          onChange={handleChange}
          placeholder="Admin Email"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.adminEmail ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
        />
        {errors.adminEmail && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.adminEmail}</p>
        )}
      </div>

      <div className="relative">
        <div className="relative flex items-center">
          <span className="pointer-events-none absolute left-5 z-10 text-white">
            +91
          </span>
          <input
            type="text"
            name="adminPhone"
            value={formData.adminPhone}
            onChange={handlePhoneChange}
            placeholder="Admin Phone"
            className={`w-full rounded-xl! border! bg-transparent py-3 pl-14 pr-5 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.adminPhone ? "border-red-500!" : "border-[#D9D9D9]!"
              }`}
          />
        </div>
        {errors.adminPhone && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.adminPhone}</p>
        )}
      </div>

      <div className="relative">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
            placeholder="Admin Password"
            className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${errors.adminPassword ? "border-red-500!" : "border-[#D9D9D9]!"
              }`}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white/70 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>
        {errors.adminPassword && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.adminPassword}
          </p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="mt-4 w-full transform cursor-pointer rounded-xl bg-white/80 py-3 font-semibold text-indigo-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Registering Institute..." : "Register Institute"}
      </button>
    </>
  );
};

export default InstituteRegistration;
