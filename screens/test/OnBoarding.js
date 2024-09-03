import React, { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { PageIndicator } from "react-native-page-indicator";
import { AppColor, styles } from "./Utils/Style";
import { debounce } from 'lodash'; 

const pagess = [
    { title:  "WELCOME TO Monumental habits",image: require("../assets/carousel_up.png"),subtitle: 'We can help you to be a better version of yourself.' },
    { title: 'CREATE NEW HABIT EASILY',image: require("../assets/carousel_up.png"),subtitle: 'Subtitle 2' },
    { title: "KEEP TRACK OF YOUR PROGRESS",image:require("../assets/carousel_up.png"), subtitle: 'Subtitle 3' },
];

const OnBoardingScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;
  const pagerRef = useRef(null);

  
   const debouncedSetPage = useRef(debounce((page) => {
    setPage(page);
  }, 50)).current; // Adjust the debounce delay as needed

  const [page, setPage] = React.useState(0);

  const onPageScroll = ({ nativeEvent }) => {
    const { position } = nativeEvent;
    debouncedSetPage(position);
  };
  const handleNext = () => {
    const nextPage = Math.min(page + 1, pagess.length + 1);
    pagerRef.current?.setPage(nextPage);
    if(page==pagess.length-1){
        navigation.navigate("GetStartedScreen")
    }
  }
  return (
    <View style={[styless.container]}>
      <PagerView  animatedCurrent={"true"} style={styless.container} overScrollMode={"never"}  
      initialPage={0}
        onPageScroll={onPageScroll}
        ref={pagerRef}>
    
          {pagess.map((page, index) => (
            <View key={index} style={{flexDireation:"row",marginTop:50}}>
              <Text style={[styles.text,{marginTop:50,paddingHorizontal:20}]}>{page.title}</Text>
              <Image source={page.image} style={{width:"100%",height:400,resizeMode:"contain"}}></Image>
              <Text style={[styles.text,{fontSize:19,marginHorizontal:10}]}>{page.subtitle}</Text>
            
            </View>
          ))}    
      </PagerView>
      <View style={{flexDirection:"row",justifyContent: "space-between",marginBottom:140}}>
       <TouchableOpacity  onPress={() => navigation.navigate('LoginScreen')}>
         <Text style={[styles.text,{paddingHorizontal:20,marginTop:0,fontSize:14,}]}>{'Skip'}</Text>
         </TouchableOpacity>
      <PageIndicator
       variant="beads" 
       color="orange" 
       activeColor= "brown" 
       count={pagess.length+1}
       current={page}/>
   
        <TouchableOpacity activeOpacity={1} onPress={ handleNext} disabled={page === pagess.length+1} >
         <Text style={[styles.text,{paddingEnd:20,marginTop:0,fontSize:14}]}>{'Next'}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
    pageIndicator: {

    left: 20,
    right: 20,
    bottom: 20,
    position: "absolute",
   
  },
});


export default OnBoardingScreen;