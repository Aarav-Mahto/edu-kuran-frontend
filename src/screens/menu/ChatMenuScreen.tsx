import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToChat = (chatType: string) => {
    navigation.navigate('ChatDetail' as any, { chatType });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Chat</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Chat Options */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToChat('private')}
        >
          <Text className="text-2xl mr-3">👤</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Private Messages</Text>
            <Text className="text-gray-500 text-sm">Chat with tutors and students</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToChat('group')}
        >
          <Text className="text-2xl mr-3">👥</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Group Chats</Text>
            <Text className="text-gray-500 text-sm">Join course discussion groups</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToChat('support')}
        >
          <Text className="text-2xl mr-3">🎧</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Support Chat</Text>
            <Text className="text-gray-500 text-sm">Get help from our support team</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToChat('announcements')}
        >
          <Text className="text-2xl mr-3">📢</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Announcements</Text>
            <Text className="text-gray-500 text-sm">Important updates and news</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatMenuScreen;