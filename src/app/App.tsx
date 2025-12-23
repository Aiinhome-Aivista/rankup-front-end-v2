import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/features/auth/context/AuthContext'; // Import from new location
import AppRoutes from '@/routes/AppRoutes';
import { ThemeProvider } from '@rankup/shared-ui';


function App() {
  return (
    <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
