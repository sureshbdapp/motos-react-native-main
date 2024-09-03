import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import dashImg from './../../assets/dashboard.png';
import { setTextView, setTextViewGray } from '../temp_utils/Constants';
import Colors from '../temp_utils/Colors';

const MessageTab = ({ username, message, time, navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('chat_screen')}>
        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: Colors.backgroundGray }}>
          <Image source={dashImg} style={{ height: 60, width: 60, marginStart: 20, borderRadius: 10 }} />
          <View style={{ flexDirection: 'column', flex: 1, marginStart: 10, padding: 10 }}>
            {setTextView(username, 18)}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <View style={{ flex: 1 }}>
                {setTextViewGray(message, 15)}
              </View>
              {setTextView(time, 12)}
            </View>
          </View>
        </View>
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }} />
      </TouchableOpacity>
    </View>
  );
}

export default MessageTab;
