import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const TutorialDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { type } = route.params as { type: string };

  const goBack = () => {
    navigation.goBack();
  };

  const getTitle = () => {
    switch (type) {
      case 'video-lessons': return 'Video Lessons';
      case 'audio-lessons': return 'Audio Lessons';
      case 'interactive-lessons': return 'Interactive Lessons';
      case 'beginner-guides': return 'Beginner Guides';
      case 'advanced-tutorials': return 'Advanced Tutorials';
      case 'live-sessions': return 'Live Sessions';
      default: return 'Tutorial Details';
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
            You can implement the actual tutorial content here.
          </Text>
          <Text className="text-sm text-gray-500">
            Tutorial Type: {type}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorialDetailScreen;