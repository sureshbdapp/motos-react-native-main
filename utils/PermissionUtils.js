// src/utils/PermissionUtils.js
import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// Function to request and check permissions
const requestPermission = async (permission) => {
  try {
    const result = await request(permission);
    if (result === RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
};

// Check and request permissions for image picking
export const checkAndRequestImagePickerPermissions = async () => {
  if (Platform.OS === 'android') {
    const permissions = [
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ];

    // Check if all permissions are granted
    const results = await Promise.all(permissions.map(permission => check(permission)));
    const allGranted = results.every(result => result === RESULTS.GRANTED);

    if (allGranted) {
      return true;
    } else {
      // Request all permissions if not granted
      const requestResults = await Promise.all(permissions.map(permission => request(permission)));
      return requestResults.every(result => result === RESULTS.GRANTED);
    }
  } else {
    // For iOS, you might only need permission for photo library
    const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;

    const result = await check(permission);
    if (result === RESULTS.GRANTED) {
      return true;
    } else {
      const requestResult = await request(permission);
      return requestResult === RESULTS.GRANTED;
    }
  }
};
