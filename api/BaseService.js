// src/api/BaseService.js
import axios from 'axios';
import { Platform } from 'react-native';
import { buildAxiosInstance, setupSSL } from './SslUtils'; 
import HostSelectionInterceptor from './HostSelectionInterceptor'; 
import AsyncStore from '../utils/AsyncStore';

const createGSON = () => ({
  transformResponse: [function (data) {
    return JSON.parse(data);
  }],
});

const getUnsafeOkHttpClient = async () => {
  const axiosInstance = await setupSSL();
  return axiosInstance;
};

class BaseService {
  static async getAPIClient(baseUrl) {
    const axiosInstance = await getUnsafeOkHttpClient();

    axiosInstance.interceptors.request.use(
      (config) => {
        const authToken = AsyncStore.getAuthToken();
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        config.headers.Accept = 'application/json';

        HostSelectionInterceptor.attachInterceptor();
        
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    if (__DEV__) {
      axiosInstance.interceptors.response.use(
        (response) => {
          console.log('Response:', response);
          return response;
        },
        (error) => {
          console.log('Error:', error);
          return Promise.reject(error);
        }
      );
    }

    // Set the base URL
    axiosInstance.defaults.baseURL = baseUrl;

    return axiosInstance;
  }
}

export default BaseService;
