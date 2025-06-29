declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: src;
  export default src;
}

interface Window {
  receiveUserInfo?: (userInfo: any) => void;
  webkit?: {
    messageHandlers?: {
      webViewReady?: {
        postMessage: (message: any) => void;
      };
      logoutHandler?: {
        postMessage: (message: any) => void;
      };
      deleteAccountHandler?: {
        postMessage: (message: any) => void;
      };
    };
  };
}
