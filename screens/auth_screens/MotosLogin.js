import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ValidationUtils from '../../utils/ValidationUtils';
import apiClient from '../../api/ApiService';
import {ApiPaths} from '../../api/ApiPaths';
import {useLoader} from '../../utils/AppLoader';

export default function MotosLogin({navigation}){
  const {showLoader,hideLoader} = useLoader();
    const [getMobile, setText] = useState('');
    return (
      <View style={styles.container}>
        <Icon 
          name="arrow-left" 
          size={14} 
          style={styles.backIcon}
        />
        <Image source={require('./../../assets/motos_logo.png')} style={styles.logo}/>
        <View>
          <CustomTextInput 
            value={getMobile} 
            onChangeText={setText} 
            placeholder="Phone"
          />
        </View>
        <TouchableOpacity style={styles.otpButton} onPress={()=>{
          if(validation(getMobile)){
            loginApi({getMobile,navigation,showLoader,hideLoader})
          }
          }}>
          <Text style={styles.otpButtonText}>Generate OTP</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <Text style={styles.loginUsingText}>Login Using</Text>
        <View style={styles.iconContainer}>
          <Icon name="windows" size={30} color="#DB4437" style={styles.icon} />
          <Icon name="windows" size={30} color="#00A4EF" style={styles.icon} />
          <Icon name="windows" size={30} color="#000000" style={styles.icon} />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    backIcon: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    logo: {
      width: 90,
      height: 70,
      marginBottom: 40,
    },
    otpButton: {
      backgroundColor: '#DB4437',
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 80,
      marginBottom: 20,
    },
    otpButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      fontSize: 16,
      color: '#aaa',
      marginBottom: 10,
    },
    loginUsingText: {
      fontSize: 16,
      color: '#000',
      marginBottom: 20,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
    },
    icon: {
      marginHorizontal: 10,
    },
  });

  const CustomTextInput = ({ value, onChangeText, placeholder }) => {
    return (
      <View style={{ paddingTop: 10 ,width:300}}>
        <Text
          style={{
            position: 'absolute',
            top: -10,
            // left: 20,
            zIndex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 5,
            color: 'gray',
          }}>
          {placeholder}
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'red',
            flexDirection: 'row',
            borderRadius: 10,
            paddingHorizontal: 5,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            style={{ flex: 1, height: 40 }} 
            editable={true}
          />
          <AntDesign
            name="book"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
        </View>
      </View>
    );
  };
  const validation = (getMobile) => {
    if (ValidationUtils.isEmpty(getMobile)) {
      console.warn("Cannot be empty");
      return false;
    }
  
    if (!ValidationUtils.mobileValidation(getMobile)) {
      console.warn("Invalid Number");
      return false;
    }
  
    return true;
  };
  
 const loginApi= async({getMobile,navigation,showLoader,hideLoader})=>{
 showLoader();
  const requestData ={"mobile" :getMobile} ;
   const response = await apiClient.post(ApiPaths.LOGIN,
    requestData)
   if(response.status === 200){

    console.warn(response.data.data['otp'])
    hideLoader();
    console.warn(response.data)
    navigation.navigate('otp_screen',response.data)
   }else{
    console.warn(response.data.data)
   }
 }