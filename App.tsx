import { Provider as PaperProvider } from 'react-native-paper';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from '~/pages/Tabs/TabNavigator';
import MyCourses from '~/pages/student/MyCourses';
import { options } from 'node_modules/axios/index.cjs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
