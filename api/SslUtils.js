// src/api/SslUtils.js
import axios from 'axios';
import { NativeModules } from 'react-native';

export const setupSSL = async () => {
  const sslPinning = NativeModules.RNPinning;
  await sslPinning.enable(true);

  const axiosInstance = axios.create({
    sslPinning: {
      certs: ['cert1', 'cert2'],
    },
  });

  return axiosInstance;
};

// export const setupSSL = async (enableSSLPinning) => {
//   // Initialize the SSL pinning module
//   const sslPinning = NativeModules.RNPinning;

//   if (enableSSLPinning) {
//     await sslPinning.enable(true); // Enable SSL pinning
//   } else {
//     await sslPinning.enable(false); // Disable SSL pinning if needed
//   }

//   // Create an Axios instance
//   const axiosInstance = axios.create({
//     ...(enableSSLPinning && {
//       sslPinning: {
//         certs: ['cert1', 'cert2'], // List of certificate files in android/app/src/main/res/raw
//       },
//     }),
//   });

//   return axiosInstance;
// };
