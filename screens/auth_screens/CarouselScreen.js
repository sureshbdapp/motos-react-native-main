import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import img from './../../assets/carousel_up.png'
import img2 from './../../assets/carousel_run.png';
import img3 from './../../assets/carousel_group.png';

const { width: screenWidth } = Dimensions.get('screen');

const ImageSet = ({ navigation }) => {
  return (
    <View style={styles.imageSetContainer}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image2} source={img3} />
        <Text style={styles.title}>Dashboard will show</Text>
        <Text style={styles.description}>The Further Faster dashboard will show you how far you’ve come.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function CarouselScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelected = (e) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0} onPageSelected={handlePageSelected}>
        <View style={styles.page} key="1">
          <View style={styles.pageContent}>
            <Image style={styles.image} source={img} />
            <Text style={styles.title}>Track your progress</Text>
            <Text style={styles.description}>The Further Faster dashboard will show you how far you’ve come.</Text>
          </View>
        </View>
        <View style={styles.page} key="2">
          <View style={styles.pageContent}>
            <Image style={styles.image} source={img2} />
            <Text style={styles.title}>Address</Text>
            <Text style={styles.description}>The Further Faster dashboard will show you how far you’ve come.</Text>
          </View>
        </View>
        <View style={styles.page} key="3">
          <ImageSet navigation={navigation} />
        </View>
        
      </PagerView>
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, currentPage === 0 && styles.activeIndicator]} />
        <View style={[styles.indicator, currentPage === 1 && styles.activeIndicator]} />
        <View style={[styles.indicator, currentPage === 2 && styles.activeIndicator]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    backgroundColor: 'white',
  },
  pageContent: {
    width: screenWidth,
    height: 380,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screenWidth,
    height: 300,
    marginTop: 220,
  },
  image2: {
    width: screenWidth,
    height: 200,
    marginTop: 160,
  },
  title: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    color: 'black',
    fontSize: 16,
    margin: 25,
    textAlign: 'center',
  },
  imageSetContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    width: screenWidth,
    height: 360,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3498db',
  },
  buttonText: {
    padding:10,
    fontSize: 20,
    marginTop:60,
    color: 'red',
    borderRadius:20,
    borderWidth:2
  },
  indicatorContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'red',
  },
});
