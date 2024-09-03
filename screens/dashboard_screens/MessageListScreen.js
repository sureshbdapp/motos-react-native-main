import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, Image } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../temp_utils/Matrics";
import { Ionicons } from '@expo/vector-icons';
import { setTextView, setTextViewGray } from '../temp_utils/Constants';
import MessageTab from "./../dashboard_screens/MessageTab";
import sessionsList from "../temp_utils/DummyList";
import logo from './../../assets/motos_logo.png'
import Colors from "../temp_utils/Colors";

export default function MessageScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={sessionsList}
        ListHeaderComponent={(
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Messages</Text>
              <View style={styles.searchContainer}>
                <Ionicons name="search" size={15} color="gray" 
                style={styles.searchIcon} />
                <TextInput placeholder="Search Messages" 
            
                style={styles.searchInput} />
              </View>
            </View>

            <View style={styles.messageCard}>
              <Image 
                source={logo} 
                style={styles.logo}
              />
              <View style={styles.textContainer}>
                <View style={styles.row}>
                  {setTextViewGray('Motos Group', 13)}
                  <View style={styles.participantCount}>
                    {setTextView('10', 14)}
                    <Ionicons name="person" size={13} color="gray"
                     style={styles.participantIcon} />
                  </View>
                </View>
                {setTextView('Motos Group', 18)}
                <View style={styles.row}>
                  <View style={styles.messageText}>
                    {setTextView('John: Look at That!', 14)}
                  </View>
                  {setTextView('7.40 am', 12)}
                </View>
              </View>
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <MessageTab username={item.name} 
          message={item.session} time={item.time} navigation={navigation}/>
        )}
        keyExtractor={item => item.name}
        nestedScrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        ListEmptyComponent={<Text>No messages available</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  headerText: {
    fontSize: moderateScale(20),
    marginStart: horizontalScale(10),
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundGray,
    borderRadius: moderateScale(20),
    padding: moderateScale(8),
    marginEnd: moderateScale(10),
    height: verticalScale(40),
    flex: 1.8,
  },
  searchIcon: {
    marginRight: horizontalScale(5),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(14),
    // backgroundColor:Colors.backgroundGray
  },
  messageCard: {
    flexDirection: 'row',
    padding: moderateScale(15),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: verticalScale(40),
    width: horizontalScale(50),
    marginHorizontal: moderateScale(20),
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  participantCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(10),
  },
  participantIcon: {
    marginHorizontal: horizontalScale(5),
  },
  messageText: {
    flex: 1,
    marginRight: horizontalScale(10),
  },
});
