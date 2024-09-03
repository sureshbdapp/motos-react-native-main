import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true)

  const secureText = () =>{
    return setShowPass(!showPass);
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter your password"
        onChangeText={setPassword}
        secureTextEntry={showPass}
      />
      <TouchableOpacity
        onPress={ secureText}
        style={styles.iconContainer} >
          <Icon 
          size={24}
          color="gray"
          name = {showPass ? 'visibility': "visibility-off"}
        />
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  iconContainer: {
    padding: 5,
  },
});

export default PasswordInput;
