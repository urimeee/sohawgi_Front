import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_SERVER_URL}`,
  headers: {
    'content-type': 'application/json',
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // const accessToken = localStorage.getItem('accessToken');
    const accessToken = `${process.env.REACT_APP_X_ACCESS_TOKEN}`;
    const refreshToken = `${process.env.REACT_APP_X_REFRESH_TOKEN}`;

    if (accessToken) {
      config.headers['X-ACCESS-TOKEN'] = `${accessToken}`;
      config.headers['X-REFRESH-TOKEN'] = `${refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      // 만료된 access token일 때
      originalRequest._retry = true;

      try {
        const refreshToken = `${process.env.REACT_APP_X_REFRESH_TOKEN}`;
        if (refreshToken) {
          originalRequest.headers['New-access-token'] =
            `${process.env.REACT_APP_NEW_ACCESS_TOKEN}`;
        }
        return axios(originalRequest);
      } catch (error) {
        // refreshtoken으로 인한 재발급에서도 오류가 나는 상황 -> swift에 브릿지 연결
        handleErrorInTokenRefresh();
      }
    }
  },
);

function handleErrorInTokenRefresh() {
  if (
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.webViewReady
  ) {
    window.webkit.messageHandlers.webViewReady.postMessage('errorOccured');
  }
}
