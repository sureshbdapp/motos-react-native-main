import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UpcomingSessionCard = ({date,month,name,time,image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Session</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}> {date} </Text>
          <Text style={styles.monthText}>{month}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.sessionText}>Executive coaching</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>

        <Image
          style={styles.image}
          source={{ uri: image }} // Replace with the actual image URL
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333',
     marginBottom:5,
     marginStart:5
  },
  viewAll: {
    fontSize: 14,
    color: '#E74C3C', // Red color for "View All"
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#E74C3C', // Red background color
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:15,
    paddingVertical:12,
    marginRight: 10,
  },
  dayText: {
    color: '#fff',
    fontSize: 44,
    fontWeight: 'normal',
  },
  monthText: {
    color: '#fff',
    fontSize: 24,
  },
  detailsContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
    marginBottom:5
  },
  sessionText: {
    fontSize: 16,
    marginBottom:10,
    color: '#666',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default UpcomingSessionCard;
