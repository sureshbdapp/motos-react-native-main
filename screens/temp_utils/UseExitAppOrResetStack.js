import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';

const useExitAppOrResetStack = (navigation) => {
  useEffect(() => {
    const backAction = () => {
      if (Platform.OS === 'android') {
        // Exit the app on Android
        BackHandler.exitApp();
      } else if (Platform.OS === 'ios') {
        // Reset the stack on iOS, navigating to the root screen and clearing the history
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }], // Replace 'Home' with the name of your root screen
        });
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);
};

export default useExitAppOrResetStack;
