import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage/SchedulePage.tsx';
import PlusPage from './pages/PlusPage/PlusPage.tsx';
import UserPrivacyPage from './pages/TermPage/UserPrivacyPage';
import UsePolicyPage from './pages/TermPage/UsePolicyPage';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

function AppContent() {
  const location = useLocation();
  const showBottomNavi =
    location.pathname === '/' || location.pathname === '/PlusPage';
  return (
    <div className="w-full h-full ">
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
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
