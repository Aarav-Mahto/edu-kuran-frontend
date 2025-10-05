import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const MyCoursesMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToCourse = (courseType: string) => {
    navigation.navigate('CourseDetail' as any, { courseType });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">My Courses</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Course Categories */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('active')}
        >
          <Text className="text-2xl mr-3">📖</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Active Courses</Text>
            <Text className="text-gray-500 text-sm">Currently enrolled courses</Text>
          </View>
          <View className="bg-blue-100 px-2 py-1 rounded-full mr-2">
            <Text className="text-blue-600 text-xs font-medium">3</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('completed')}
        >
          <Text className="text-2xl mr-3">✅</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Completed Courses</Text>
            <Text className="text-gray-500 text-sm">Finished courses with certificates</Text>
          </View>
          <View className="bg-green-100 px-2 py-1 rounded-full mr-2">
            <Text className="text-green-600 text-xs font-medium">7</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('favorites')}
        >
          <Text className="text-2xl mr-3">⭐</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Favorite Courses</Text>
            <Text className="text-gray-500 text-sm">Your bookmarked courses</Text>
          </View>
          <View className="bg-yellow-100 px-2 py-1 rounded-full mr-2">
            <Text className="text-yellow-600 text-xs font-medium">5</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('progress')}
        >
          <Text className="text-2xl mr-3">📊</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Progress Tracking</Text>
            <Text className="text-gray-500 text-sm">View your learning progress</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToCourse('certificates')}
        >
          <Text className="text-2xl mr-3">🏆</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Certificates</Text>
            <Text className="text-gray-500 text-sm">Download your certificates</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCoursesMenuScreen;