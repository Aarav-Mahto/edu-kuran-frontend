import { Provider as PaperProvider } from 'react-native-paper';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from '~/pages/Tabs/TabNavigator';
import MyCourses from '~/pages/student/MyCourses';
import ProfileScreen from '~/pages/student/Profile';
import Support from '~/pages/student/Support';
import Settings from '~/pages/student/Settings';
import Saved from '~/pages/Tabs/Saved';
import Dashboard from '~/pages/Tabs/Dashboard';
import EditProfile from '~/pages/student/EditProfile';
import AllCourses from '~/pages/AllCourses/AllCourses';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false}} />
            <Stack.Screen name='Support' component={Support} options={{ headerShown: false}} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}} />
            <Stack.Screen name='Saved' component={Saved} options={{ headerShown: false}} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false}} />
            <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false}} />
            <Stack.Screen name="AllCourses" component={AllCourses} options={{ headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
