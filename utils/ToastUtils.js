// src/utils/ToastUtils.js
import React from 'react';
import Toast from 'react-native-root-toast';

// Function to show toast messages
export const showToast = (message, duration = Toast.durations.SHORT, position = Toast.positions.BOTTOM) => {
  Toast.show(message, {
    duration,
    position,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: 'black',
    textColor: 'white',
  });
};