import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { decryptToken } from "../api/authService";

export interface UserPermission {
    feature: string;
    access_type: string;
}

export interface User {
  user_id: number;
  full_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  permissions: UserPermission[];
  iat: number;
  exp: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(() => 
    localStorage.getItem("token")
  );
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(!!token); // Initial loading if token exists

  const isLoggedIn = !!token;

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        setIsLoading(true);
        try {
          const response = await decryptToken();
          if (response && response.isSuccess && response.data) {
            setUser(response.data);
          } else {
            console.error("Token decryption failed or invalid response", response);
            logout(); 
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
          logout();
        } finally {
            setIsLoading(false);
        }
      } else {
        setUser(null);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const login = (newToken: string) => {
    setIsLoading(true); // Prevent UI flash before effect runs
    localStorage.setItem("token", newToken);
    setTokenState(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setTokenState(null);
    setUser(null);
    setIsLoading(false);
  };

  const setToken = (newToken: string) => {
    if (newToken) {
      setIsLoading(true); // Prevent UI flash before effect runs
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
        isLoading,
        login,
        logout,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}