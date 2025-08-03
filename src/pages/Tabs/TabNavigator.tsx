import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Message from "./Message";
import Search from "./Search";
import Saved from "./Saved";
import Profile from "./Profile";
import CustomTabBar from "~/components/common/CustomTabBar";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
