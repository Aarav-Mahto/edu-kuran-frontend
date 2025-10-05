import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/src/types/navigation';

type MenuScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;

const MenuScreen = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();
  const [mainMenuExpanded, setMainMenuExpanded] = useState(false);
  const [accountExpanded, setAccountExpanded] = useState(true);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName as any);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Menu</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1">
        {/* User Profile Section */}
        <View className="bg-blue-600 px-6 py-8 mb-4">
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

        {/* Menu Sections */}
        <View className="px-4">
          {/* Main Menu Section */}
          <TouchableOpacity 
            className="flex-row justify-between items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
            onPress={() => setMainMenuExpanded(!mainMenuExpanded)}
          >
            <Text className="text-gray-800 font-semibold text-base">MAIN MENU</Text>
            <MaterialIcons 
              name={mainMenuExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={24} 
            />
          </TouchableOpacity>

          {mainMenuExpanded && (
            <View className="bg-white rounded-lg mb-3 shadow-sm">
              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('Home')}
              >
                <Text className="text-2xl mr-3">🏠</Text>
                <Text className="text-gray-700 text-base">Home</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('ChatMenu')}
              >
                <Text className="text-2xl mr-3">💬</Text>
                <Text className="text-gray-700 text-base">Chat</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('MyCoursesMenu')}
              >
                <Text className="text-2xl mr-3">📚</Text>
                <Text className="text-gray-700 text-base">My Courses</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('AllCoursesMenu')}
              >
                <Text className="text-2xl mr-3">🎓</Text>
                <Text className="text-gray-700 text-base">All Courses</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4"
                onPress={() => navigateToScreen('TutorialsMenu')}
              >
                <Text className="text-2xl mr-3">🎬</Text>
                <Text className="text-gray-700 text-base">Tutorials</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}

          {/* Account Section */}
          <TouchableOpacity 
            className="flex-row justify-between items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
            onPress={() => setAccountExpanded(!accountExpanded)}
          >
            <Text className="text-gray-800 font-semibold text-base">ACCOUNT</Text>
            <MaterialIcons 
              name={accountExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
              size={24} 
              color="gray"
            />
          </TouchableOpacity>

          {accountExpanded && (
            <View className="bg-white rounded-lg mb-3 shadow-sm">
              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('ProfileMenu')}
              >
                <Text className="text-2xl mr-3">👤</Text>
                <Text className="text-gray-700 text-base">Profile</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('AccountMenu')}
              >
                <Text className="text-2xl mr-3">👥</Text>
                <Text className="text-gray-700 text-base">Account Settings</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4 border-b border-gray-100"
                onPress={() => navigateToScreen('SettingsMenu')}
              >
                <Text className="text-2xl mr-3">⚙️</Text>
                <Text className="text-gray-700 text-base">Settings</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity 
                className="flex-row items-center p-4"
                onPress={() => navigateToScreen('SupportMenu')}
              >
                <Text className="text-2xl mr-3">❓</Text>
                <Text className="text-gray-700 text-base">Help & Support</Text>
                <View className="flex-1" />
                <MaterialIcons name="chevron-right" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          )}

          {/* Logout */}
          <TouchableOpacity 
            className="flex-row items-center p-4 bg-white rounded-lg mb-6 shadow-sm"
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Language' }] })}
          >
            <Text className="text-2xl mr-3">🚪</Text>
            <Text className="text-red-500 text-base font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;