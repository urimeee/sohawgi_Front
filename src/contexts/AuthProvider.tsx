import { createContext, ReactNode, useEffect, useState } from 'react';

const AuthContext = createContext(null);

interface MyComponentProps {
  children: ReactNode;
}

function AuthProvider({ children }: MyComponentProps) {
  const [authInfo, setAuthInfo] = useState(null);

  useEffect(() => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.webViewReady
    ) {
      window.webkit.messageHandlers.webViewReady.postMessage('WebViewReady');
    }

    window.receiveUserInfo = function (info) {
      localStorage.setItem('userID', JSON.stringify(info.userID));
      localStorage.setItem(
        'accessToken',
        JSON.stringify(info.accessToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(info.refreshToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'authorizationCode',
        JSON.stringify(info.authorizationCode),
      );

      setAuthInfo(info);
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
