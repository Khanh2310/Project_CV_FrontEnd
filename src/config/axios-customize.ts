import axiosClient from 'axios';

const instance = axiosClient.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const NO_RETRY_HEADER = 'x-no-retry';

const handleRefreshToken = async () => {
  const res = await instance.get('/api/v1/auth/refresh');
  if (res && res.data) return res.data.access_token;
  else return null;
};

instance.interceptors.request.use(function (config) {
  if (
    typeof window !== 'undefined' &&
    window &&
    window.localStorage &&
    window.localStorage.getItem('access_token')
  ) {
    config.headers.Authorization =
      'Bearer ' + window.localStorage.getItem('access_token');
  }
  if (!config.headers.Accept && config.headers['Content-Type']) {
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res.data,
  async (error) => {
    if (
      error.config &&
      error.response &&
      +error.response.status === 401 &&
      !error.config.headers[NO_RETRY_HEADER]
    ) {
      const access_token = await handleRefreshToken();
      error.config.headers[NO_RETRY_HEADER] = 'true';
      if (access_token) {
        error.config.headers['Authorization'] = `Bearer ${access_token}`;
        localStorage.setItem('access_token', access_token);
        return instance.request(error.config);
      }
    }

    if (
      error.config &&
      error.response &&
      +error.response.status === 400 &&
      error.config.url === '/api/v1/auth/refresh'
    ) {
      localStorage.removeItem('access_token');
      alert(`You don't have permission to visit this page. OK ?`);
      window.location.href = '/';
    }

    return error?.response?.data ?? Promise.reject(error);
  }
);

export default instance;
