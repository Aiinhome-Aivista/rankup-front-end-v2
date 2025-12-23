import { createContext, useState } from "react";
// FIX: Import types separately or using the 'type' keyword
import type { ReactNode } from "react";

import type { UserRole } from "@/config/roles";

// 1. Define the User Shape
export interface User {
  id?: string;
  name: string;
  email: string;
  role: UserRole;
}

// 2. Define the Context Shape
interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  setToken: (token: string) => void; // Added to match your legacy code requirement if needed
}

// 3. Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Create the Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize from LocalStorage immediately (No useEffect needed)
  const [token, setTokenState] = useState<string | null>(() => 
    localStorage.getItem("token")
  );
  
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const isLoggedIn = !!token;

  // Wrapper to sync State + LocalStorage
  const login = (newToken: string, newUser: User) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setTokenState(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTokenState(null);
    setUser(null);
  };

  // Compatibility wrapper if you have old code calling setToken directly
  const setToken = (newToken: string) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setTokenState(newToken);
    } else {
      logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        user,
        login,
        logout,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}