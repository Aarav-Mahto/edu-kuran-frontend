import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const CourseCategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params as { category: string };

  const goBack = () => {
    navigation.goBack();
  };

  const getTitle = () => {
    switch (category) {
      case 'quran-recitation': return 'Quran Recitation';
      case 'tajweed': return 'Tajweed';
      case 'tafsir': return 'Tafsir';
      case 'arabic-language': return 'Arabic Language';
      case 'islamic-studies': return 'Islamic Studies';
      case 'hadith': return 'Hadith Studies';
      default: return 'Course Category';
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
            This is a placeholder screen for {getTitle()} courses. 
            You can implement the actual course listing here.
          </Text>
          <Text className="text-sm text-gray-500">
            Category: {category}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseCategoryScreen;