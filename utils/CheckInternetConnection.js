// src/utils/CheckInternetConnection.js
import NetInfo from '@react-native-community/netinfo';

export default class CheckInternetConnection {
  static async isConnected() {
    const state = await NetInfo.fetch();
    return state.isConnected;
  }

  static subscribeToConnectionChange(callback) {
    const unsubscribe = NetInfo.addEventListener(state => {
      callback(state.isConnected);
    });
    return unsubscribe;
  }
}
