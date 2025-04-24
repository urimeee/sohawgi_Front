import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage/SchedulePage';
import PlusPage from './pages/PlusPage/PlusPage';
import UserPrivacyPage from './pages/TermPage/UserPrivacyPage';
import UsePolicyPage from './pages/TermPage/UsePolicyPage';
import BottomNavi from './components/BottomNavi/BottomNavi';
import AuthProvider from './contexts/AuthProvider';

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const showBottomNavi =
    location.pathname === '/' || location.pathname === '/PlusPage';
  return (
    <div
      className={`w-full flex flex-col ${showBottomNavi ? 'min-h-[calc(100vh - 86px)]' : 'min-h-screen'}`}
    >
      <Routes>
        <Route path="/" element={<SchedulePage />} />
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
