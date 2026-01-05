import { useState, useContext, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { initiateLogin, verifyLogin } from "../api/authService";
import vector2 from "@/assets/Vector-2-login.svg";
import vector3 from "@/assets/Vector-3-login.svg";
import vector4 from "@/assets/Vector-4-login.svg";
import vector5 from "@/assets/Vector-5-login.svg";
import logo from "@/assets/icons/Aiinhome _ RU.svg";
import mainLogo from "@/assets/R-logo.svg";
import rankupLogo from "@/assets/Rank Up Academy.svg";

const Login = () => {
  const { setToken } = useContext(AuthContext) as any;
  const navigate = useNavigate();

  // --- State ---
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // --- Effects ---
  useEffect(() => {
    if (errorMsg) {
      setSuccessMsg("");
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  // --- Handlers ---
  const handleLogin = async (e?: FormEvent) => {
    e?.preventDefault();

    if (isOtpSent) {
      handleVerify();
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    try {
      const res = await initiateLogin({ email, password });
      console.log("Login response:", res);

      if (res.isSuccess) {
        setIsOtpSent(true);
        setSuccessMsg(
          res.message || "OTP sent successfully! Please check your email inbox."
        );
      } else {
        setErrorMsg(res.message || "Login failed");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      // Construct a user-friendly error message
      const message = err.message || "An unexpected error occurred.";
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    setIsLoading(true);
    setErrorMsg(""); // Clear previous errors

    try {
      const res = await verifyLogin({ email, otp });
      console.log("Verify response:", res);

      if (res.isSuccess) {
        const token = res?.data?.token;
        const user = res?.data?.user;

        if (token) {
          localStorage.setItem("token", token);
          if (setToken) setToken(token);
        }
        if (user) localStorage.setItem("user", JSON.stringify(user));

        const role = (user?.role || "").toLowerCase();

        const rolePaths: Record<string, string> = {
          admin: "/admin/dashboard",
          teacher: "/teacher/dashboard",
          student: "/student/dashboard",
          parent: "/parent/dashboard",
          examiner: "/examiner/dashboard",
        };

        const path = rolePaths[role] || "/";
        navigate(path);
      } else {
        setErrorMsg(res.message || "Verification failed");
      }
    } catch (err: any) {
      console.error("Verification error:", err);
      const message =
        err.message || "An unexpected verification error occurred.";
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#A1AEF2] font-sans">
      {/* Top Left Branding */}
      <div className="absolute left-8 top-6 z-20 tracking-wide">
        <img src={logo} alt="Aiinhome Logo" />
      </div>

      {/* Wave Background */}
      <div className="pointer-events-none absolute h-full w-full">
        <div className="z-5 absolute left-0 top-95 w-full overflow-hidden">
          <img src={vector5} alt="" className="h-auto w-full" />
        </div>
        <div className="z-3 absolute left-0 top-40 w-[120%]">
          <img src={vector3} alt="" className="h-auto w-full" />
        </div>
        <div className="z-2 absolute left-0 top-30 w-full">
          <img src={vector2} alt="" className="h-auto w-full" />
        </div>
        <div className="z-4 absolute left-0 top-60 w-[110%]">
          <img src={vector4} alt="" className="h-auto w-full" />
        </div>
      </div>

      {/* Login Card */}
      <div className="absolute left-1/2 top-1/2 z-10 min-h-[500px] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <div className="flex flex-col justify-center rounded-4xl border-3 border-[#FFFFFF40] bg-white/10 p-8 shadow-2xl backdrop-blur-lg md:p-10">
          <div className="flex flex-col items-center text-center text-white">
            {/* Logo */}
            <div className="mb-4">
              <img src={mainLogo} alt="Main Logo" />
            </div>

            <div className="mb-2">
              <img src={rankupLogo} alt="Rank Up Logo" />
            </div>
            <p className="mb-8 font-medium opacity-90 md:text-base text-sm">
              Customize Every View. Empower Every Decision.
            </p>

            {/* Form */}
            <div className="custom-scrollbar max-h-[50vh] w-full space-y-4 overflow-y-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  disabled={isOtpSent}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-xl border border-[#D9D9D9]! bg-transparent px-5 py-3 text-white outline-none transition-all duration-300 placeholder-white! focus:border-white/50 focus:bg-white/10 ${
                    isOtpSent ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>

              <div className="relative">
                {!isOtpSent ? (
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-[#D9D9D9]! bg-transparent px-5 py-3 text-white outline-none transition-all duration-300 placeholder-white! focus:border-white/50 focus:bg-white/10"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full rounded-xl border border-[#D9D9D9]! bg-transparent px-5 py-3 text-white outline-none transition-all duration-300 placeholder-white! focus:border-white/50 focus:bg-white/10"
                  />
                )}
              </div>

              <button
                onClick={() => handleLogin()}
                type="button"
                disabled={isLoading}
                className={`mt-2 flex w-full cursor-pointer transform items-center justify-center gap-2 rounded-xl bg-[#FBFBFB80] py-3 font-semibold text-indigo-900 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl ${
                  isLoading ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin text-indigo-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>{isOtpSent ? "Verifying..." : "Logging in..."}</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <div className="mt-4 text-center">
                {errorMsg && (
                  <p className="text-sm font-semibold text-red-300">
                    {errorMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="text-sm font-semibold text-emerald-300">
                    {successMsg}
                  </p>
                )}
              </div>

              <div className="mt-6 text-center text-xs opacity-80 md:text-sm">
                You don't have account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="cursor-pointer font-bold text-[#514CF1] hover:underline"
                >
                  Register here
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
