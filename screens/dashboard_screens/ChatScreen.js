import { Text, TouchableOpacity, View } from "react-native";
import { setTextView } from "../temp_utils/Constants";

export default function ChatScreen({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
                {setTextView("Comming Soon ...",25)}
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={{color:'blue',fontSize:20, alignSelf:'center',marginTop:15}}>Go back</Text>
                </TouchableOpacity>
            
        </View>
    )
}