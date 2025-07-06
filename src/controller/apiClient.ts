// src/controller/apiClient.ts
import axios from 'axios';
import { base_url } from './config/apiConfig';

const apiClient = axios.create({
    baseURL: base_url,
    timeout: 10_000,
});

// Automatically attach the JWT token to every request
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default apiClient;
