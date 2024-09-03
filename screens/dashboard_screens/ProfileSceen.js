import { View ,StyleSheet,TouchableHighlight,Image, TextInput, Text, Button,ScrollView,Modal, TouchableOpacity, Dimensions} from "react-native";
import { setTextViewGray,CustomTextInput } from "../temp_utils/Constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import Calender from 'react-native-calendar-picker'
import { useState } from "react";
import moment from 'moment';
import * as ImagePicker from "expo-image-picker";
import { horizontalScale, moderateScale} from "../temp_utils/Matrics";

const ProfileScreen=()=>{
  const [getVisible ,setVisible] = useState(false);
  const [editable ,setEditable] = useState(false);
  const [getSelectedDate, setSelectedDate] = useState("10-10-2024");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.
        requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
        Alert.alert(
            "Permission Denied",
            `Sorry, we need camera 
             roll permission to upload images.`
        );
    } else {
        const result =
            await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            setFile(result.assets[0].uri);
            console.warn(result.assets[0].uri)
            setError(null);
        }
    }
};


  const onDateSelect=(date)=>{
    setSelectedDate(date);
    setVisible(false)
  }

    return(
        <ScrollView style={{flex:1,backgroundColor:'white'}} bounces={false}>
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{backgroundColor:'#CF4144',height:200,
                borderBottomStartRadius:moderateScale(60),borderBottomEndRadius:moderateScale(60)}}>
         <View style={{flex:1}}>
         <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'white', 
          borderWidth:3 }]} >
      <Image source={{ uri:file==null? "https://picsum.photos/id/1015/600/400": file }} 
      style={styles.profileImg} />
          </TouchableHighlight>
         </View>
              <TouchableOpacity onPress={pickImage}>
      <Image source={{ uri:"https://picsum.photos/id/1015/600/400" }}
       style={{width:25,height:25,borderRadius:50,
       alignSelf:'center',marginStart:75,marginBottom:20}} />
        </TouchableOpacity>
        <View style={{alignSelf:'center',flexDirection:'row'}}>
            <TextInput value="Suresh Vaishnav" placeholder="Username" 
            maxLength={20}
            le
            style={{fontSize:18,color:'white',fontWeight:'500',marginBottom:40} } />
            <Icon 
          name="pencil" 
          size={18} 
          style={{marginStart:10,color:"white"}}  />
        </View>
        </View>
        <View style={{flexDirection:"row",
             justifyContent:'space-between'
            ,alignContent:'space-between',
            marginStart:20,marginTop:30,marginEnd:20
            }}>
            <Text style={{color:'dimgray',fontSize:20}}>Profile Setup</Text>
            <TouchableOpacity onPress={()=>{
              if(editable === true){
                setEditable(false)
              }else{
                setEditable(true)
              }
              
            }}>
            <Text style={{color:'red'}}>Edit</Text>
            </TouchableOpacity>
           
        </View>
        {CustomTextInput('Unonimus Tech',editable)}
        {CustomTextInput('Program  manager',editable)}
        {CustomTextInput('Email',editable)}
        {CustomTextInput('Description',editable)}
        {CustomTextInput('Number',editable)}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
     
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <Text style={{color: 'dimgray', marginTop: 15,marginStart:5, fontSize: 12}}>Birth Day</Text>
        <View style={styles.textFieldStyle}>
        {getSelectedDate && (
         <Text style={{color: 'dimgray', fontSize: 14}}>{moment(getSelectedDate).format("DD-MM-YYYY")}</Text>
        )}
         <Modal
  animationType="slide"
  transparent={false}
  visible={getVisible}
  onRequestClose={() => setVisible(false)}>
  <View style={styles.modalContainer}>
    <View style={styles.calendarContainer}>
      <Calender onDateChange={onDateSelect} />
    </View>
  </View>
</Modal>

        <TouchableOpacity onPress={()=>{
             setVisible(true)
         }}>
      <Icon 
          name="calendar" 
          size={20} 
          style={{color:"dimgray",justifyContent:'center'}} />
         </TouchableOpacity>
        </View>
    </View>
         
   
    <View style={{flexDirection: 'column', alignItems: 'flex-start', marginLeft: 25}}>
        <Text style={{color: 'dimgray', marginTop: 15, fontSize: 12}}>Work Anniversary</Text>
        <View style={styles.textFieldStyle}>
        <Text style={{color: 'dimgray', fontSize: 14}}>10-10-2024</Text>
        <TouchableOpacity onPress={()=>{setVisible(false) }}>
        <Icon 
          name="calendar" 
          size={20} 
          style={{color:"dimgray"}} />
        </TouchableOpacity>
        </View>
    </View>
</View>


        <TouchableOpacity style={{backgroundColor:'#CF4144',
        padding:15,borderRadius:50,
        width:250,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:40,
        marginBottom:40
        }} > 
            <Text style={{
            alignItems:'center',
            alignSelf:'center',
            color:'white',  
            fontSize:17}}>Get Started</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    profileImgContainer: {
      marginLeft: 8,
      height: 100,
      width: 100,
      borderRadius: 60,
      marginTop:25,
      alignSelf:'center' 
    
    },
    profileImg: {
      height: 95,
      width: 95,
      borderRadius: 60,
    },
    textFieldStyle: {
        color: 'black',
        marginTop: 10,
        fontSize: 14,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowOffset: (1,2), // Assuming shadowOffset is an object
        width: 165,
        height:42,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        elevation:5,
        // borderColor:'gray',
        borderWidth:.4
        
    },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  });

  function getParsedDate(strDate){
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  dd + "-" + mm + "-" + yyyy;
    return date.toString();
}

export default ProfileScreen;