import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Modal } from 'react-native';
import Toast,{Postions} from 'react-native-root-toast';
import { showToast } from '../temp_utils/Constants';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [show , setShow] = useState(true);

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    // showToast("")
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);
    // if (validateForm()) {
    //     showToast();
    //   alert('Registration Successful');
    // }
  };


  return (
    

    <View style={styles.container}>
     
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}/>
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
      <Button title="Register" color={'red'}  onPress={
        handleRegister} />
        <Toast visible={show}
            shadow={true}
            animation={true}
            hideOnPress={true}
            textColor='black'
            backgroundColor='white'
            duration={Toast.durations.SHORT}
        >Registered Successfully</Toast>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    justifyContent:'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegisterScreen;




// import React from 'react';
// import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords not match')
//     .required('Confirm Password is required'),
// });

// const RegisterScreen = () => {
//   return (
//     <Formik
//       initialValues={{ email: '', password: '', confirmPassword: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//         <View style={styles.container}>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             value={values.email}
//             keyboardType="email-address"
//           />
          
//           {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             onChangeText={handleChange('password')}
//             onBlur={handleBlur('password')}
//             value={values.password}
//             secureTextEntry={true}
//           />
//           {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             onChangeText={handleChange('confirmPassword')}
//             onBlur={handleBlur('confirmPassword')}
//             value={values.confirmPassword}
//             secureTextEntry={true}
//           />
//           {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

//           <Button title="Register" onPress={handleSubmit} />
//         </View>
//       )}
//     </Formik>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     padding: 20,
//     justifyContent:'center'
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default RegisterScreen;
