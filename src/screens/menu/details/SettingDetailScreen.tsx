import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { section } = route.params as { section: string };

  const goBack = () => {
    navigation.goBack();
  };

  const getTitle = () => {
    switch (section) {
      case 'language': return 'Language';
      case 'notifications': return 'Notifications';
      case 'theme': return 'Theme';
      case 'font-size': return 'Font Size';
      case 'audio-settings': return 'Audio Settings';
      case 'download-settings': return 'Download Settings';
      case 'data-usage': return 'Data Usage';
      default: return 'Setting Details';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">{getTitle()}</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        <View className="bg-white rounded-lg p-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-800 mb-2">{getTitle()}</Text>
          <Text className="text-gray-600 mb-4">
            This is a placeholder screen for {getTitle()}. 
            You can implement the actual settings functionality here.
          </Text>
          <Text className="text-sm text-gray-500">
            Section: {section}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingDetailScreen;