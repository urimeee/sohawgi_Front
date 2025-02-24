import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage/SchedulePage.tsx';
import PlusPage from './pages/PlusPage/PlusPage.tsx';
import TermPage from './pages/TermPage';
import UserPrivacyPage from './pages/TermPage/UserPrivacyPage';
import UsePolicyPage from './pages/TermPage/UsePolicyPage';

// 상위 컨테이너 스타일
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
`;

// 콘텐츠를 감싸는 래퍼에 패딩 적용
const ContentWrapper = styled.div`
  justify-content: center;
  flex: 1;
  overflow-y: hidden;
  margin-bottom: 6rem;
  display: flex;
`;

function AppContent() {
  const location = useLocation();
  const showBottomNavi =
    location.pathname === '/' || location.pathname === '/PlusPage';
  return (
    <Container>
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="/PlusPage" element={<PlusPage />} />
          <Route path="/info/usePolicy" element={<UsePolicyPage />} />
          <Route path="/info/privacy" element={<UserPrivacyPage />} />
        </Routes>
        {showBottomNavi && <BottomNavi />}
      </ContentWrapper>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
