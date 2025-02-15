import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_SERVER_URL}`,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken) {
      config.headers['X-ACCESS-TOKEN'] = `${accessToken}`;
      config.headers['X-REFRESH-TOKEN'] = `${refreshToken}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    console.log(response);
  },
  async (error) => {
    console.log(error.response);
    console.log('gggg');
    const originalRequest = error.config;
    if (error.response?.status === 403) {
      console.log('403 forbidden');
      // 만료된 access token일 때
      // originalRequest._retry = true;
      // console.log('error occured');
      //
      // try {
      //   const refreshToken = localStorage.getItem('refreshToken');
      //   const getNewAccessToken = error.response.data?.newAccessToken;
      //   if (refreshToken && getNewAccessToken) {
      //     localStorage.setItem('accessToken', getNewAccessToken);
      //     originalRequest.headers['X-ACCESS-TOKEN'] = `${getNewAccessToken}`;
      //   }
      //   return axios(originalRequest);
      // } catch (error) {
      //   // refreshtoken으로 인한 재발급에서도 오류가 나는 상황 -> swift에 브릿지 연결
      //   console.error('Token failed', error);
      //   handleErrorInTokenRefresh();
      // }
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
