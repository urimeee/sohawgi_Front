import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage';
import PlusPage from './pages/PlusPage/PlusPage';
import UserPrivacyPage from './pages/TermPage/UserPrivacyPage';
import UsePolicyPage from './pages/TermPage/UsePolicyPage';
import BottomNavi from './components/BottomNavi/BottomNavi';
import AuthProvider from './contexts/AuthProvider';
import LoginPage from './pages/LoginPage';

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const isDev = import.meta.env.DEV;
  const isiOSDevApp = isDev && isIOSWebView();

  const showBottomNavi =
    (!isDev && location.pathname === '/') || location.pathname === '/PlusPage';

  function isIOSWebView() {
    const ua = navigator.userAgent || '';
    return /iPhone|iPad|iPod/.test(ua) && !ua.includes('Safari');
  }


  return (
    <div
      className={`w-full flex flex-col ${showBottomNavi ? 'min-h-[calc(100vh - 86px)]' : 'min-h-screen'}`}
    >
      <Routes>
        <Route path="/" element={isiOSDevApp
          ? <LoginPage />
          : isDev
            ? <LoginPage />
            : <SchedulePage />} />
        <Route path="/PlusPage" element={<PlusPage />} />
        <Route path="/info/usePolicy" element={<UsePolicyPage />} />
        <Route path="/info/privacy" element={<UserPrivacyPage />} />
      </Routes>
      {showBottomNavi && <BottomNavi />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
