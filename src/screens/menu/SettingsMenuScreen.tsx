import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToSetting = (settingSection: string) => {
    navigation.navigate('SettingDetail' as any, { section: settingSection });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Settings</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Settings Sections */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('language')}
        >
          <Text className="text-2xl mr-3">🌍</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Language</Text>
            <Text className="text-gray-500 text-sm">Change app language</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('notifications')}
        >
          <Text className="text-2xl mr-3">🔔</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Notifications</Text>
            <Text className="text-gray-500 text-sm">Manage notification preferences</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('theme')}
        >
          <Text className="text-2xl mr-3">🎨</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Theme</Text>
            <Text className="text-gray-500 text-sm">Choose light or dark theme</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('font-size')}
        >
          <Text className="text-2xl mr-3">🔤</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Font Size</Text>
            <Text className="text-gray-500 text-sm">Adjust text size for readability</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('audio-settings')}
        >
          <Text className="text-2xl mr-3">🔊</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Audio Settings</Text>
            <Text className="text-gray-500 text-sm">Configure audio playback</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('download-settings')}
        >
          <Text className="text-2xl mr-3">📥</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Download Settings</Text>
            <Text className="text-gray-500 text-sm">Manage offline content</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSetting('data-usage')}
        >
          <Text className="text-2xl mr-3">📊</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Data Usage</Text>
            <Text className="text-gray-500 text-sm">Monitor and control data usage</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsMenuScreen;