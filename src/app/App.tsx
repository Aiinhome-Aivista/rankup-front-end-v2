import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/features/auth/context/AuthContext"; // Import from new location
import AppRoutes from "@/routes/AppRoutes";
import { ThemeProvider } from "@rankup/shared-ui";
import { PrimeReactProvider } from "primereact/api";
import { ToastProvider } from "@/shared/context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <PrimeReactProvider>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </PrimeReactProvider>
    </ToastProvider>
  );
}

export default App;
