import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AccountMenuScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const navigateToAccount = (accountSection: string) => {
    navigation.navigate('AccountDetail' as any, { section: accountSection });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={goBack} className="p-2">
          <MaterialIcons name="arrow-back" size={24} className="text-gray-700" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Account Settings</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Account Sections */}
        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('change-password')}
        >
          <Text className="text-2xl mr-3">🔑</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Change Password</Text>
            <Text className="text-gray-500 text-sm">Update your account password</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('phone-number')}
        >
          <Text className="text-2xl mr-3">📱</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Phone Number</Text>
            <Text className="text-gray-500 text-sm">Update your mobile number</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('email-settings')}
        >
          <Text className="text-2xl mr-3">📧</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Email Settings</Text>
            <Text className="text-gray-500 text-sm">Manage your email preferences</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('subscription')}
        >
          <Text className="text-2xl mr-3">💳</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Subscription</Text>
            <Text className="text-gray-500 text-sm">Manage your subscription plan</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('payment-methods')}
        >
          <Text className="text-2xl mr-3">💰</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Payment Methods</Text>
            <Text className="text-gray-500 text-sm">Add or remove payment methods</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('two-factor-auth')}
        >
          <Text className="text-2xl mr-3">🔐</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Two-Factor Authentication</Text>
            <Text className="text-gray-500 text-sm">Secure your account</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex-row items-center p-4 bg-white rounded-lg mb-3 shadow-sm"
          onPress={() => navigateToAccount('delete-account')}
        >
          <Text className="text-2xl mr-3">🗑️</Text>
          <View className="flex-1">
            <Text className="text-gray-800 text-base font-medium">Delete Account</Text>
            <Text className="text-red-500 text-sm">Permanently delete your account</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountMenuScreen;