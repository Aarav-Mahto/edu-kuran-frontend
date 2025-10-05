import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import './global.css';
import { BottomBarProvider } from './navigation/BottomBarContext';
import type { RootStackParamList } from './types/navigation';

// Re-export for backward compatibility
export { ScrollViewWithBottomBar, useBottomBar } from './navigation/BottomBarContext';
export { CustomBottomBar } from './navigation/BottomBar';
export { CustomDrawer } from './navigation/CustomDrawer';
export type { RootStackParamList } from './types/navigation';

// Auth Screens
import LanguageSelectionScreen from "./screens/auth/language";
import MobileNumberScreen from "./screens/auth/mobile-no";
import OTPScreen from "./screens/auth/otp";
import UserPasswordScreen from "./screens/auth/user-password";

// Main App Screens
import HomeScreen from "./screens/tabs/home-screen";
import Saved from "./screens/tabs/Saved";
import Message from "./screens/tabs/Message";
import Dashboard from "./screens/tabs/Dashboard";
import Chat from "./screens/tabs/Chat";
import MyCourses from "./screens/tabs/MyCourses";

// Side Navigation Screens
import Profiles from "./screens/side-navbar/Profiles";
import Settings from "./screens/side-navbar/Settings";
import Support from "./screens/side-navbar/Support";
import Accounts from "./screens/side-navbar/Accounts";

// Other Screens
import CoursesScreen from "./screens/courses-screen";
import TutorialsScreen from "./screens/TutorialsScreen";
import TutorialCategoryPage from "./screens/TutorialCategoryPage";
import SearchPage from "./screens/SearchPage";
import FavoritesScreen from "./screens/FavoritesScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import TutsDetailsScreen from "./screens/TutsDetailsScreen";
import TutorProfileScreen from "./screens/TutorProfileScreen";
import OrderScreen from "./screens/OrderScreen";

// Full-screen Menu System
import MenuScreen from "./screens/MenuScreen";
import ChatMenuScreen from "./screens/menu/ChatMenuScreen";
import MyCoursesMenuScreen from "./screens/menu/MyCoursesMenuScreen";
import AllCoursesMenuScreen from "./screens/menu/AllCoursesMenuScreen";
import TutorialsMenuScreen from "./screens/menu/TutorialsMenuScreen";
import ProfileMenuScreen from "./screens/menu/ProfileMenuScreen";
import AccountMenuScreen from "./screens/menu/AccountMenuScreen";
import SettingsMenuScreen from "./screens/menu/SettingsMenuScreen";
import SupportMenuScreen from "./screens/menu/SupportMenuScreen";

// Menu Detail Screens
import ChatDetailScreen from "./screens/menu/details/ChatDetailScreen";
import CourseDetailScreen from "./screens/menu/details/CourseDetailScreen";
import CourseCategoryScreen from "./screens/menu/details/CourseCategoryScreen";
import TutorialDetailScreen from "./screens/menu/details/TutorialDetailScreen";
import ProfileDetailScreen from "./screens/menu/details/ProfileDetailScreen";
import AccountDetailScreen from "./screens/menu/details/AccountDetailScreen";
import SettingDetailScreen from "./screens/menu/details/SettingDetailScreen";
import SupportDetailScreen from "./screens/menu/details/SupportDetailScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();




export default function App() {
  return (
    <BottomBarProvider>
      <NavigationContainer>
        {/* @ts-ignore */}
        <RootStack.Navigator
          initialRouteName="Language"
          screenOptions={{ headerShown: false }}
        >
          {/* Auth Flow */}
          <RootStack.Screen name="Language">
            {({ navigation }) => (
              <LanguageSelectionScreen 
                onLanguageSelected={() => navigation.navigate('MobileNumber')} 
              />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="MobileNumber">
            {({ navigation }) => (
              <MobileNumberScreen 
                onGetOTP={(phoneNumber) => navigation.navigate('OTP', { phoneNumber })}
                onSkip={() => navigation.navigate('Home')}
              />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="OTP">
            {({ navigation, route }) => (
              <OTPScreen 
                phoneNumber={route.params?.phoneNumber || ''}
                onVerified={(isNewUser) => {
                  if (isNewUser) {
                    navigation.navigate('UserPassword', { phoneNumber: route.params?.phoneNumber || '' });
                  } else {
                    navigation.navigate('Home');
                  }
                }}
                onResendOTP={() => {
                  // Handle resend OTP logic
                  console.log('Resending OTP...');
                }}
                onBack={() => navigation.goBack()}
              />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="UserPassword">
            {({ navigation, route }) => (
              <UserPasswordScreen 
                phoneNumber={route.params?.phoneNumber || ''}
                onRegistrationComplete={() => navigation.navigate('Home')}
                onBack={() => navigation.goBack()}
              />
            )}
          </RootStack.Screen>

          {/* Main App Screens with Bottom Bar */}
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Saved" component={Saved} />
          <RootStack.Screen name="Messages" component={Message} />
          <RootStack.Screen name="Dashboard" component={Dashboard} />

          {/* Category and Detail Screens */}
          <RootStack.Screen 
            name="TutorialCategory" 
            component={TutorialCategoryPage}
            options={{ headerShown: false }}
          />
          <RootStack.Screen 
            name="SearchPage" 
            component={SearchPage} 
            options={{ headerShown: false }}
          />
          <RootStack.Screen 
            name="AllCourses" 
            component={CoursesScreen}
            options={{ headerShown: false }}
          />

          {/* Menu Screens */}
          <RootStack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="MyCourses"
            component={MyCourses}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Tutorials"
            component={TutorialsScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Profile"
            component={Profiles}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Account"
            component={Accounts}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Support"
            component={Support}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="TutsDetails"
            component={TutsDetailsScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="TutorProfile"
            component={TutorProfileScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Orders"
            component={OrderScreen}
            options={{ headerShown: false }}
          />

          {/* Full-screen Menu System */}
          <RootStack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ChatMenu"
            component={ChatMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="MyCoursesMenu"
            component={MyCoursesMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="AllCoursesMenu"
            component={AllCoursesMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="TutorialsMenu"
            component={TutorialsMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ProfileMenu"
            component={ProfileMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="AccountMenu"
            component={AccountMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="SettingsMenu"
            component={SettingsMenuScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="SupportMenu"
            component={SupportMenuScreen}
            options={{ headerShown: false }}
          />

          {/* Menu Detail Screens */}
          <RootStack.Screen
            name="ChatDetail"
            component={ChatDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="CourseDetail"
            component={CourseDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="CourseCategory"
            component={CourseCategoryScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="TutorialDetail"
            component={TutorialDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ProfileDetail"
            component={ProfileDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="AccountDetail"
            component={AccountDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="SettingDetail"
            component={SettingDetailScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="SupportDetail"
            component={SupportDetailScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
        <StatusBar style="light" backgroundColor="#009000" />
      </NavigationContainer>
    </BottomBarProvider>
  );
}
