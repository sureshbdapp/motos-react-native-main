
// import React, { useState } from 'react';
// import { View, Text, TextInput,Dimensions, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
// // import img from './assets/carousel_up.png'

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//      <Image style={{width:Dimensions.get('window'),height:150}} source={img} resizeMode='contain' />
//        </View>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         autoCapitalize="none"
//       />
//       <TouchableOpacity onPress={() => { /* Handle forgot password */ }}>
//         <Text style={styles.forgotPassword}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{backgroundColor:'#3498db',height:40,borderBottomEndRadius:10,
//       borderBottomLeftRadius:10,borderTopEndRadius:10,borderTopStartRadius:10,
//         justifyContent:'center'
//       }} onPress={handleLogin}>
//         <Text style={{textAlign:"center",fontSize:20,color:'white',fontWeight:'bold'}}>Log In</Text>
//         </TouchableOpacity> 
//       <View style={styles.registerContainer}>
//         <Text style={styles.registerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => { /* Navigate to register screen */ }}>
//           <Text style={styles.registerButton}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   forgotPassword: {
//     color: '#3498db',
//     textAlign: 'right',
//     marginBottom: 20,
//   },
//   registerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   registerText: {
//     fontSize: 16,
    
//     color: '#888',
//   },
//   registerButton: {
//     fontSize: 16,
//     color: '#3498db',
//     marginLeft: 5,
//   },
// });
import React, { useState } from "react"
import {  StyleSheet, TextInput, View,TouchableOpacity,Text } from "react-native"
export default function LoginScreen({navigation}){
    const [getEmail,setEmail]= useState('')

    return(
        <View style={style.topConstraint}> 
           
            <TextInput style={style.editTextStyle} 
            placeholder="Enter Email"
            value={getEmail}
            keyboardType='email-address'
            onChangeText={setEmail}>
            </TextInput>
            <TextInput style={style.editTextStyle } 
            placeholder="Password"
            secureTextEntry
            keyboardType="visible-password">
            </TextInput>
            <TouchableOpacity style={style.buttonStyle} onPress={()=>navigation.navigate('Dashboard')}>
                  <Text style={style.RegularText}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{justifyContent:'center',alignSelf:'center',marginTop:15}} >Don't have account</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp') }>
            <Text style={{justifyContent:'center',alignSelf:'center',marginTop:15,color:'blue'}} > Register</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    topConstraint : {
        flex: 1,
        paddingHorizontal:20,
    justifyContent:'center',
    backgroundColor: '#fff',
    },
    editTextStyle:{
        paddingStart:20,
        borderColor: '#ddd',
        height:50,
        marginTop:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'black',
    
    },
    buttonStyle : {
        marginTop:10,
        backgroundColor:'#3498db',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        width:200,
        flex:.070,
        height:50,
        borderRadius:20,
        alignContent:'center'
    },
    RegularText:{
        color:'white',
        alignSelf:'center',fontWeight:'bold',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
          textAlign:'center',
          fontSize:16
        }
})