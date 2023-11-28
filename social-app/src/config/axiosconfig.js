import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("accesstoken");
    config.headers.Authorization = `bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default axiosInstance;