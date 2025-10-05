import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AllCoursesMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToCourse = (courseCategory: string) => {
    navigation.navigate('CourseCategory' as any, { category: courseCategory });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">All Courses</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Course Categories */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('quran-recitation')}
        >
          <Text className="text-2xl mr-3">📖</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Quran Recitation</Text>
            <Text className="text-gray-500 text-sm">Learn proper Quran recitation</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('tajweed')}
        >
          <Text className="text-2xl mr-3">🎵</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Tajweed</Text>
            <Text className="text-gray-500 text-sm">Master the art of Quranic pronunciation</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('tafsir')}
        >
          <Text className="text-2xl mr-3">📚</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Tafsir</Text>
            <Text className="text-gray-500 text-sm">Understand Quranic interpretation</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('arabic-language')}
        >
          <Text className="text-2xl mr-3">🔤</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Arabic Language</Text>
            <Text className="text-gray-500 text-sm">Learn Arabic from basics</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('islamic-studies')}
        >
          <Text className="text-2xl mr-3">🕌</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Islamic Studies</Text>
            <Text className="text-gray-500 text-sm">Comprehensive Islamic education</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('hadith')}
        >
          <Text className="text-2xl mr-3">📜</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Hadith Studies</Text>
            <Text className="text-gray-500 text-sm">Learn from Prophet's teachings</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCoursesMenuScreen;