import React, { useState ,useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import OTPInput from '../temp_utils/OTPInput';
import apiClient from '../../api/ApiService';
import { ApiPaths } from '../../api/ApiPaths';
import AsyncStore from '../../utils/AsyncStore';
// import AsyncStore from '../../utils/AsyncStore';
// import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OtpScreen({navigation,route}) {
    const token = route.params;
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <Image source={'../assets/motos_logo.png'} style={styles.logo} />
                <Text style={styles.title}>OTP Validation</Text>
                <Text style={styles.subTitle}>
                    Validation code sent to +91384738474
                </Text>
                <View style={styles.otpContainer}>
                    <OTPInput
                        code={otpCode}
                        setCode={setOTPCode}
                        maximumLength={4}
                        setIsPinReady={setIsPinReady}/>
                </View>
                <TouchableOpacity style={styles.otpButton} onPress={()=> 
                    otpApi({otpCode,navigation,token})
                } >
                    <Text style={styles.otpButtonText}>OTP Validate</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.resendContainer}>
                <Text style={styles.resendText}>Resend OTP Code</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    safeArea: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    logo: {
        width: 90,
        height: 60,
        marginBottom: 60,
        marginTop: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
    },
    subTitle: {
        fontSize: 13,
        alignSelf: 'center',
        marginBottom: 40,
        color: 'gray',
    },
    otpContainer: {
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    otpButton: {
        backgroundColor: '#DB4437',
        borderRadius: 30,
        paddingVertical: 15,
        marginHorizontal: 80,
        marginBottom: 20,
        marginTop: 40,
    },
    otpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resendContainer: {
        // position: 'relative',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
    },
    resendText: {
        fontSize: 14,
        color: 'blue',
    },
});
const otpApi= async({otpCode,navigation,token})=>{
  console.warn(token.data.token)
    const requestData = {
               "otp" :otpCode,
               "token":token.data.token,
               "mobile_type": "android",
               "mobile_token": "mobile_token"
    } ;
    // console.error(requestData)
     const response = await apiClient.post(ApiPaths.OTP,
      requestData)
      if(response.status===200){
        if(response.data.data != null){
             await AsyncStore.setAuthToken(response.data.data.access_token);
             const token = await AsyncStore.getAuthToken();
             console.warn("HEllooo "+ token);
             await AsyncStore.setItem("UserDetails",  JSON.stringify(response.data.data));
             const UserData = await AsyncStore.getItem('UserDetails');
             console.log(JSON.parse(UserData));
          navigation.navigate('home')
         }else{
         }
      }else{

      }
    
   }

