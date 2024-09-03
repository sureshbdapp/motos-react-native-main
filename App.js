import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth_screens/MotosLogin';
import Drawer from './screens/dashboard_screens/AppDrawer';
import MessageScreen from './screens/dashboard_screens/MessageListScreen';
import ChatScreen from './screens/dashboard_screens/ChatScreen';
import SplashScreen from './screens/auth_screens/SplashScreen';
import CarouselScreen from './screens/auth_screens/CarouselScreen';
import OtpScreen from './screens/auth_screens/OtpScreen';
import SignUpScreen from './screens/auth_screens/SignUpScreen';
import Dashboard from './screens/dashboard_screens/Dashboard';
import { LoaderProvider } from './utils/AppLoader';
import ProfileScreen from './screens/dashboard_screens/ProfileSceen';
export default function App() {




  

  const Stack = createNativeStackNavigator();
  return (
    <LoaderProvider>
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash' >
      <Stack.Screen name='Splash' component={SplashScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name='carousel' component={CarouselScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name='otp_screen' component={OtpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name='sign_up_screen' component={SignUpScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name='messages' component={MessageScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='chat_screen' component={ChatScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='home' component={Drawer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </LoaderProvider>
   
  );
}
