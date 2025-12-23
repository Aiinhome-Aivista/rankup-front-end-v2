import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// --- Context & Service Imports ---
// Update these paths to match your actual project structure
import { useToast } from "@/shared/context/ToastContext";
// import apiService from "@/service/apiService";
// import { POST_APIS } from "@/connection";

// --- Mocking External Services for Compilation (Remove these when real services are connected) ---
const POST_APIS = { individualRegister: "mock-url" };
const apiService = async (url: string, options: any) => {
  console.log("Mock API Call:", url, options);
  return { isSuccess: true, message: "Mock Success" };
};

// --- Types ---
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  gender?: string;
  password?: string;
  confirmPassword?: string;
}

interface Option {
  label: string;
  value: string;
}

const IndividualRegistration = () => {
  const navigate = useNavigate();
  // Ensure useToast is typed in your context file, otherwise cast as any for now
  const { showToast } = useToast() as any;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const roles: Option[] = [
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
    { label: "Other", value: "other" },
  ];

  const genders: Option[] = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    if (!selectedRole) newErrors.role = "Role is required";
    if (!selectedGender) newErrors.gender = "Gender is required";

    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-digit characters
    const numericValue = value.replace(/\D/g, "");

    // Limit to 10 digits
    if (numericValue.length <= 10) {
      setFormData({ ...formData, phone: numericValue });
    }
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const payload = {
          full_name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          password: formData.password,
          role: selectedRole,
          gender: selectedGender,
        };

        const response = await apiService(POST_APIS.individualRegister, {
          method: "POST",
          body: payload,
        });

        if (response.isSuccess) {
          showToast(
            "success",
            "Success",
            response.message || "Registration Successful!"
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
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${
            errors.fullName ? "border-red-500!" : "border-[#D9D9D9]!"
          }`}
        />
        {errors.fullName && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.fullName}</p>
        )}
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${
            errors.email ? "border-red-500!" : "border-[#D9D9D9]!"
          }`}
        />
        {errors.email && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.email}</p>
        )}
      </div>

      <div className="relative">
        <div className="relative flex items-center">
          <span className="pointer-events-none absolute left-5 z-10 text-white">
            +91
          </span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            className={`w-full rounded-xl! border! bg-transparent py-3 pl-14 pr-5 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${
              errors.phone ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
          />
        </div>
        {errors.phone && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.phone}</p>
        )}
      </div>

      <div className="relative text-left">
        <label className="mb-1 ml-1 block text-xs font-bold text-white opacity-90">
          I am a...
        </label>
        <Dropdown
          value={selectedRole}
          onChange={(e: DropdownChangeEvent) => {
            setSelectedRole(e.value);
            if (errors.role) setErrors({ ...errors, role: "" });
          }}
          options={roles}
          optionLabel="label"
          placeholder="Select your role"
          className={`w-full text-left ${
            errors.role ? "rounded-xl border border-red-500" : ""
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
        {errors.role && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.role}</p>
        )}
      </div>

      <div className="relative text-left">
        <label className="mb-1 ml-1 block text-xs font-bold text-white opacity-90">
          Gender
        </label>
        <Dropdown
          value={selectedGender}
          onChange={(e: DropdownChangeEvent) => {
            setSelectedGender(e.value);
            if (errors.gender) setErrors({ ...errors, gender: "" });
          }}
          options={genders}
          optionLabel="label"
          placeholder="Select your gender"
          className={`w-full text-left ${
            errors.gender ? "rounded-xl border border-red-500" : ""
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
        {errors.gender && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.gender}</p>
        )}
      </div>

      <div className="relative">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${
              errors.password ? "border-red-500!" : "border-[#D9D9D9]!"
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
        {errors.password && (
          <p className="ml-1 mt-1 text-xs text-red-300">{errors.password}</p>
        )}
      </div>

      <div className="relative">
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full rounded-xl! border! bg-transparent px-5 py-3 text-white! outline-none transition-all duration-300 placeholder-white! focus:border-white/50! focus:bg-white/10! ${
              errors.confirmPassword ? "border-red-500!" : "border-[#D9D9D9]!"
            }`}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white/70 hover:text-white"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="ml-1 mt-1 text-xs text-red-300">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="mt-4 w-full transform cursor-pointer rounded-xl bg-white/80 py-3 font-semibold text-indigo-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </>
  );
};

export default IndividualRegistration;
