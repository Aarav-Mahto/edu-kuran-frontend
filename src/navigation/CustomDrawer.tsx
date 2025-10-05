import { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const CustomDrawer = ({ isVisible, onClose, navigation }: any) => {
  const [mainMenuExpanded, setMainMenuExpanded] = useState(true);
  const [accountExpanded, setAccountExpanded] = useState(false);

  if (!isVisible) return null;

  const navigateToScreen = (screenName: string) => {
    onClose();
    navigation.navigate(screenName);
  };

  return (
    <View className="absolute inset-0 bg-black/50 z-50">
      <TouchableOpacity 
        className="flex-1" 
        onPress={onClose}
      />
      <View className="absolute right-0 top-0 bottom-0 w-80 bg-gray-50">
        {/* Header */}
        <View className="bg-blue-600 px-6 py-12">
          <View className="flex-row items-center">
            <View className="w-16 h-16 bg-white rounded-full items-center justify-center mr-4">
              <Text className="text-blue-600 text-2xl font-bold">A</Text>
            </View>
            <View>
              <Text className="text-white text-lg font-semibold">Alice John</Text>
              <Text className="text-blue-100 text-sm">+91 98765 43210</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="flex-1 p-4">
          <TouchableOpacity 
            className="flex-row justify-between items-center p-3 bg-gray-100 rounded-lg mb-2"
            onPress={() => setMainMenuExpanded(!mainMenuExpanded)}
          >
            <Text className="text-gray-600 font-semibold text-xs tracking-wider">MAIN MENU</Text>
            <MaterialIcons 
              name={mainMenuExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={20} 
              color="#6b7280"
            />
          </TouchableOpacity>

          {mainMenuExpanded && (
            <View className="ml-2 mb-4">
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Home')}>
                <Text className="text-gray-700">🏠 Home</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Chat')}>
                <Text className="text-gray-700">💬 Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('MyCourses')}>
                <Text className="text-gray-700">📚 My Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('AllCourses')}>
                <Text className="text-gray-700">🎓 All Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Tutorials')}>
                <Text className="text-gray-700">🎬 Tutorials</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity 
            className="flex-row justify-between items-center p-3 bg-gray-100 rounded-lg mb-2"
            onPress={() => setAccountExpanded(!accountExpanded)}
          >
            <Text className="text-gray-600 font-semibold text-xs tracking-wider">ACCOUNT</Text>
            <MaterialIcons 
              name={accountExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={20} 
              color="#6b7280"
            />
          </TouchableOpacity>

          {accountExpanded && (
            <View className="ml-2 mb-4">
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Profile')}>
                <Text className="text-gray-700">👤 Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Account')}>
                <Text className="text-gray-700">👥 Account Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Settings')}>
                <Text className="text-gray-700">⚙️ Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3" onPress={() => navigateToScreen('Support')}>
                <Text className="text-gray-700">❓ Help & Support</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity className="py-3" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Language' }] })}>
            <Text className="text-red-500">🚪 Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};