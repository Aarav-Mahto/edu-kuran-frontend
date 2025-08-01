
import HeroPage from '~/pages/hero-page/heroPage';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TempNavigation from '~/pages/hero-page/tempNavigation';
import { RootStackParamList } from '~/types/navigation';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="abc">
          <Stack.Screen name="abc" component={TempNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HeroPage} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={HeroPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

