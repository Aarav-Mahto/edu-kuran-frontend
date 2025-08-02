import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather'; 
import Message from "./Message";
import Search from "./Search";
import Saved from "./Saved";
import Profile from "./Profile";
import HeroPage from "../hero-page/heroPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    marginBottom: 10,
                    height: 62,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#e0e0e0',
                },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#F0522F', 
        tabBarInactiveTintColor: '#9e9e9e',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          let isHome = route.name === 'Home';
          
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Message':
              iconName = 'message-square';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Saved':
              iconName = 'heart';
              break;
            case 'Profile':
              iconName = 'user';
              break;
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Home" component={HeroPage} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;