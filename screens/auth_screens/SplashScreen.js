import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import splashImage from './../../assets/splash_bg.png';
import logo from './../../assets/motos_logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserDetails = async () => {
      const userDetails = await AsyncStorage.getItem("UserDetails");
      setIsLoading(false);

      if (!(userDetails === null || userDetails === "")) {
        navigation.replace('home');
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'carousel' }],
        });
      }
    };

    const timer = setTimeout(() => {
      checkUserDetails();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        style={styles.backgroundImage} 
        source={splashImage} 
        resizeMode='cover'
      />
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={logo} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    height: 100,
    width: 150,
  },
});
