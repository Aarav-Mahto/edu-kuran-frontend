import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToProfile = (profileSection: string) => {
    navigation.navigate('ProfileDetail' as any, { section: profileSection });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Profile</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Profile Sections */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('personal-info')}
        >
          <Text className="text-2xl mr-3">👤</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Personal Information</Text>
            <Text className="text-gray-500 text-sm">Edit your basic details</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('profile-picture')}
        >
          <Text className="text-2xl mr-3">📷</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Profile Picture</Text>
            <Text className="text-gray-500 text-sm">Update your profile photo</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('learning-preferences')}
        >
          <Text className="text-2xl mr-3">⚙️</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Learning Preferences</Text>
            <Text className="text-gray-500 text-sm">Customize your learning experience</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('achievements')}
        >
          <Text className="text-2xl mr-3">🏆</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Achievements</Text>
            <Text className="text-gray-500 text-sm">View your learning milestones</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('learning-stats')}
        >
          <Text className="text-2xl mr-3">📊</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Learning Statistics</Text>
            <Text className="text-gray-500 text-sm">Track your progress and time</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToProfile('privacy-settings')}
        >
          <Text className="text-2xl mr-3">🔒</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Privacy Settings</Text>
            <Text className="text-gray-500 text-sm">Control your privacy preferences</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileMenuScreen;