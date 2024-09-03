import { Text,View,TextInput } from 'react-native';
import Toast from 'react-native-root-toast';
import Colors from './Colors';

export const showToast = (message) => {
<Toast visible={true}
            shadow={true}
            animation={true}
            hideOnPress={true}
            textColor='black'
            backgroundColor='white'
            duration={Toast.durations.SHORT}>{message}</Toast>
  };

  export const setTextView = (setText, size) => {
    return (
      <Text
        style={{ fontSize: size }}
        numberOfLines={1}
        ellipsizeMode="tail">
        {setText}
      </Text>
    );
  };

  export const setTextViewGray = (setText, size) => {
    return (
      <Text
        style={{ fontSize: size,color:Colors.textGray}}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {setText}
      </Text>
    );
  };
  export const CustomTextInput=(placeholder,editable)=>{
    return(
        // <View>
      <TextInput placeholder= {placeholder}
         editable= {editable}
        style={{ color:'black',
          marginStart:20,
          marginTop:15,
          fontSize:14, 
          borderRadius:5,
          backgroundColor:'white',
          padding:10,
          marginEnd:20,
          // shadowOpacity:0.2,
          borderWidth:.4,
          elevation:2
        }}/>
        // </View>
    )
  }