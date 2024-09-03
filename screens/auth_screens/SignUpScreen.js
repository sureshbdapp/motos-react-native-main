import React, { useState } from "react";
import {  StyleSheet, TextInput, View,TouchableOpacity,Text } from "react-native";
import PasswordInput from "../temp_utils/PasswordInput";


 {/* //props */}
const NameComponant = props=>{
    return(
        <View>
            <Text style={{fontSize:22}}>{props.sign}</Text>
        </View>
    ); 
};
 {/* //props */}
const InputComponant = props=>{
    return(
        <View>
            {/* <Text style={{fontSize:22}}>{props.sign}</Text> */}
            <TextInput style={style.editTextStyle} 
            placeholder={props.placeholder}
            value={props.getAge}
            onChangeText={props.SetAge}/>
        </View>
    ); 
};

export default function SignUpScreen({navigation}){
    var isVisible = false;
    const [getEmail,setEmail]= useState('')
    const [getName,setName] = useState('Ved Gaur')
    return(
        <View style={style.topConstraint}> 
          <NameComponant sign = "Sign Up"/>
            <TextInput style={style.editTextStyle} 
            placeholder="Full Name"
            value={getEmail}
            keyboardType='email-address'
            onChangeText={setEmail}>
            </TextInput>
        {/* //props */}
            <InputComponant placeholder = "Enter age" getAge = "52"/>
            <TextInput style={style.editTextStyle} 
            placeholder="Mobile Number"
            value={getName}
            keyboardType='email-address'
            onChangeText={setEmail} >
            </TextInput>
            <TextInput style={style.editTextStyle} 
            placeholder="Email Address"
            value={getEmail}
            keyboardType='email-address'
            onChangeText={setEmail}>
            </TextInput>
            <PasswordInput/>
            <TouchableOpacity style={[style.buttonStyle] } onPress={()=> setName('Hello')}>
                  <Text style={style.RegularText}>Register</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{justifyContent:'center',alignSelf:'center',marginTop:15}} >Already have a account</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()  }>
            <Text style={{justifyContent:'center',alignSelf:'center',marginTop:15,color:'blue'}} > Logging In</Text> 
              </TouchableOpacity> 
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    input: {
    // flex: 1,
    paddingVertical: 10,
  },
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
    editTextViewStyle:{
        paddingStart:20,
        borderColor: '#ddd',
        height:50,
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