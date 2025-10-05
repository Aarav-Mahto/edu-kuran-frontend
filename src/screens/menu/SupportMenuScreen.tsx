import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const SupportMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToSupport = (supportSection: string) => {
    navigation.navigate('SupportDetail' as any, { section: supportSection });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Help & Support</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Support Sections */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('faq')}
        >
          <Text className="text-2xl mr-3">❓</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">FAQ</Text>
            <Text className="text-gray-500 text-sm">Frequently asked questions</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('contact-us')}
        >
          <Text className="text-2xl mr-3">📞</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Contact Us</Text>
            <Text className="text-gray-500 text-sm">Get in touch with our team</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('live-chat')}
        >
          <Text className="text-2xl mr-3">💬</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Live Chat</Text>
            <Text className="text-gray-500 text-sm">Chat with support agent</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('report-issue')}
        >
          <Text className="text-2xl mr-3">🐛</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Report an Issue</Text>
            <Text className="text-gray-500 text-sm">Report bugs or problems</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('user-guide')}
        >
          <Text className="text-2xl mr-3">📖</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">User Guide</Text>
            <Text className="text-gray-500 text-sm">Learn how to use the app</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('feedback')}
        >
          <Text className="text-2xl mr-3">💭</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Send Feedback</Text>
            <Text className="text-gray-500 text-sm">Share your suggestions</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToSupport('about')}
        >
          <Text className="text-2xl mr-3">ℹ️</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">About</Text>
            <Text className="text-gray-500 text-sm">App version and information</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportMenuScreen;