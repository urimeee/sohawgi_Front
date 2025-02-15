import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_SERVER_URL}`,
  headers: {
    'content-type': 'application/json',
  },
});

export const apiWithToken = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_SERVER_URL}`,
  headers: {
    'content-type': 'application/json',
    'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
    'X-REFRESH-TOKEN': localStorage.getItem('refreshToken'),
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    // const accessToken = `${process.env.REACT_APP_X_ACCESS_TOKEN}`;
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
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      // 만료된 access token일 때
      originalRequest._retry = true;
      console.log('error occured');

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const newAccessToken = error.response.headers['NEW-ACCESS-TOKEN'];
        if (refreshToken && newAccessToken) {
          originalRequest.headers['X-ACCESS-TOKEN'] = `${newAccessToken}`;
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
    window.webkit.messageHandlers.logoutHandler
  ) {
    window.webkit.messageHandlers.logoutHandler.postMessage('logout');
  } else console.log('Logout handler not found');
}
