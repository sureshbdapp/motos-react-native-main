import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import MessageListScreen from './MessageListScreen';
import AppBar from '../../utils/AppBar'
import AppBar2 from '../../utils/AppBar2'
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from './ProfileSceen';

const Drawer = createDrawerNavigator();

const AppDrawer = () => (
  <Drawer.Navigator initialRouteName='Home'>
    <Drawer.Screen
      name='Home'
      component={Dashboard}
      options={({ navigation }) => ({
        headerTitle: () => <AppBar navigation={navigation} />,
        headerTitleAlign: 'center',
        headerRight:()=> 
               <FontAwesome
          name="inbox"
          size={30}
          onPress={() => {
            navigation.navigate('Messages');
          }}
        />,
         
        
        headerRightContainerStyle: { marginEnd: 10 },
       
      })}
    />
    <Drawer.Screen
      name='Messages'
      component={MessageListScreen}
      options={({ navigation }) => ({
        headerTitle: () => <AppBar navigation={navigation} />,
        headerTitleAlign: 'center',
        headerRightContainerStyle: { marginEnd: 10 },
      })}
    />
    <Drawer.Screen
      name='Profile'
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerTitle: () => <AppBar2 navigation={navigation} />,
        headerTitleAlign: 'center',
        headerRightContainerStyle: { marginEnd: 10 },
        headerStyle:{backgroundColor:'#CF4144'},
        
      })}
    />
  </Drawer.Navigator>
);

export default AppDrawer;
