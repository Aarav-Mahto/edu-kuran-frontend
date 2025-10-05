import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const TutorialsMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToTutorial = (tutorialType: string) => {
    navigation.navigate('TutorialDetail' as any, { type: tutorialType });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Tutorials</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Tutorial Categories */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('video-lessons')}
        >
          <Text className="text-2xl mr-3">🎥</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Video Lessons</Text>
            <Text className="text-gray-500 text-sm">Watch step-by-step tutorials</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('audio-lessons')}
        >
          <Text className="text-2xl mr-3">🎧</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Audio Lessons</Text>
            <Text className="text-gray-500 text-sm">Listen to recitation tutorials</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('interactive-lessons')}
        >
          <Text className="text-2xl mr-3">🎮</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Interactive Lessons</Text>
            <Text className="text-gray-500 text-sm">Practice with interactive exercises</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('beginner-guides')}
        >
          <Text className="text-2xl mr-3">🌱</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Beginner Guides</Text>
            <Text className="text-gray-500 text-sm">Start your learning journey</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('advanced-tutorials')}
        >
          <Text className="text-2xl mr-3">🎓</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Advanced Tutorials</Text>
            <Text className="text-gray-500 text-sm">Master advanced techniques</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToTutorial('live-sessions')}
        >
          <Text className="text-2xl mr-3">📡</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Live Sessions</Text>
            <Text className="text-gray-500 text-sm">Join live tutorial sessions</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorialsMenuScreen;