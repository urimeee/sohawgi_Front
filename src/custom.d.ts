declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

interface Window {
  // receiveUserInfo?: (userInfo: import('./types/userInfo').UserInfo) => void;
  receiveUserInfo?: (userInfo: any) => void;
  webkit?: {
    messageHandlers?: {
      webViewReady?: {
        postMessage: (message: any) => void;
      };
    };
  };
}
