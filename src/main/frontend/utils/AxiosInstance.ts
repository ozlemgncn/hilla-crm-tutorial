import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: '/api', // gerekirse güncellenebilir
});

AxiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default AxiosInstance;
