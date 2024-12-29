// import { UserInfo } from './types/userInfo';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

// declare global {
interface Window {
  receiveUserInfo?: (userInfo: import('./types/userInfo').UserInfo) => void;
}

// }
