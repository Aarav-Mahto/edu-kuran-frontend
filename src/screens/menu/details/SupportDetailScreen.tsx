import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SupportDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { section } = route.params as { section: string };

  const goBack = () => {
    navigation.goBack();
  };

  const getTitle = () => {
    switch (section) {
      case 'faq': return 'FAQ';
      case 'contact-us': return 'Contact Us';
      case 'live-chat': return 'Live Chat';
      case 'report-issue': return 'Report an Issue';
      case 'user-guide': return 'User Guide';
      case 'feedback': return 'Send Feedback';
      case 'about': return 'About';
      default: return 'Support Details';
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
            You can implement the actual support functionality here.
          </Text>
          <Text className="text-sm text-gray-500">
            Section: {section}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportDetailScreen;