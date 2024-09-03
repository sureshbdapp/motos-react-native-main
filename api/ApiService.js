
import axios from 'axios';
import AsyncStore from '../utils/AsyncStore';

const apiClient = axios.create({
  baseURL: 'http://18.232.27.198/motus_dev_api/', 
  timeout: 3000
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStore.getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Accept'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // const navigation = useNavigation();
    console.warn("Navigate to Splash")
    if (error.response && error.response.status === 401) {
      // navigation.navigate('Splash');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
