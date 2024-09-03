import { View, Text, StyleSheet, Image, Dimensions, FlatList, StatusBar,RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native-virtualized-view';
import dashImg from './../../assets/dashboard.png';
import { Ionicons } from '@expo/vector-icons';
import sessionsList from './../temp_utils/DummyList';
import UpcomingSessionCard from "../temp_utils/UpcomingSessionCard";
import useExitAppOrResetStack from "../temp_utils/UseExitAppOrResetStack";
import { useLoader } from '../../utils/AppLoader';
import apiClient from '../../api/ApiService';
import { ApiPaths } from '../../api/ApiPaths';
import AsyncStore from "../../utils/AsyncStore";
import UserModel from "../../Routes/UserModel";

export default function Dashboard({ navigation }) {
  const { showLoader, hideLoader } = useLoader();
  const [getData, setData] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh =  React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const dashboardApi = async () => {
    const token = await AsyncStore.getAuthToken();
    console.log(token);
    showLoader();
    try {
      const response = await apiClient.post(ApiPaths.DASHBOARD);
      if (response.status === 200) {
        // console.warn(response.data.data);
        setData(response.data.data)
        console.warn(getData)
      } else {
        console.warn(response.data.data);
      }
    } catch (error) {
      console.error("API call error:", error);
    } finally {
      hideLoader();
    }
  };

  useEffect(async () => {
      await dashboardApi();
    useExitAppOrResetStack(navigation);

  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor={'red'} />
      <ScrollView
      refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={{ margin: 15 }}>
          <Text style={styles.headerText}>Hello, Joe</Text>
          <View>
            <Image style={styles.dashImage} source={dashImg} resizeMode="contain" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.RegularText}>Notification</Text>
            <Text style={styles.RedText}>View All</Text>
          </View>
          <View style={[styles.card, { marginTop: 15 }]}>
            <Ionicons name="notifications-circle" size={40} color="red" style={{ marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 15 }}>John added rating to session...</Text>
              <Text style={styles.RedText}>Now</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Ionicons name="notifications-circle" size={40} color="red" style={{ marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 15 }}>John added rating to session...</Text>
              <Text style={styles.RedText}>Now</Text>
            </View>
          </View>
          <View style={{
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }} />
          {/* console.warn(getData) */}
          <FlatList
            data={sessionsList}
            renderItem={({ item }) => (
              <UpcomingSessionCard
                date={item.day}
                image={item.image}
                month={item.month}
                time={item.time}
                name={item.name} />
            )}
            nestedScrollEnabled={false}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 22,
    marginStart: 5,
    marginTop: 5,
  },
  RegularText: {
    fontSize: 18,
    marginStart: 5,
    marginTop: 5,
    color: 'dimgray',
  },
  RedText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  dashImage: {
    width: Dimensions.get("screen"),
    height: 130,
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    padding: 15,
    marginTop: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
});


