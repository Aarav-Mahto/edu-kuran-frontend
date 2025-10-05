import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useAuthStore, AVAILABLE_LANGUAGES, Language } from '../../api/auth/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LanguageSelectionScreenProps {
  onLanguageSelected: () => void;
  onTestAPI?: () => void; // Added optional prop for API testing
}

export default function LanguageSelectionScreen({
  onLanguageSelected,
  onTestAPI,
}: LanguageSelectionScreenProps) {
  const { setLanguage, selectedLanguage } = useAuthStore();

  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
    onLanguageSelected();
  };

  // Function to show IP address information
  const showIPAddressInfo = () => {
    Alert.alert(
      'Mobile Development IP Address',
      `For mobile development:\n\n` +
      `• Android Emulator: Automatically detected\n` +
      `• iOS Simulator: Automatically detected\n` +
      `• Physical Device: Set BACKEND_IP environment variable\n\n` +
      `To find your machine's IP:\n` +
      `Windows: ipconfig\n` +
      `Mac/Linux: ifconfig or hostname -I\n\n` +
      `Example: BACKEND_IP=192.168.1.100 npm start`,
      [
        { text: 'OK', style: 'default' }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 32 }}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* Modern Header */}
        <View className="mb-8 items-center">
          <View
            className="mb-4 rounded-2xl p-4"
            style={{
              backgroundColor: '#f3f4f6',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 4,
            }}>
            <Text className="text-4xl">🌍</Text>
          </View>
          <Text
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
            style={{ fontWeight: '700' }}>
            Choose Language
          </Text>
          <Text
            className="px-2 text-center text-base leading-5 text-gray-600"
            style={{ fontWeight: '400' }}>
            Select your preferred language to continue
          </Text>
        </View>

        {/* Compact Language Cards */}
        <View className="pb-8">
          {AVAILABLE_LANGUAGES.map((language, index) => {
            const isSelected = selectedLanguage.code === language.code;
            return (
              <TouchableOpacity
                key={language.code}
                onPress={() => handleLanguageSelect(language)}
                className="mb-3"
                style={{
                  direction: language.direction,
                  backgroundColor: isSelected ? '#f0f9ff' : '#ffffff',
                  borderRadius: 16,
                  borderWidth: isSelected ? 2 : 1,
                  borderColor: isSelected ? '#0ea5e9' : '#e5e7eb',
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: isSelected ? 4 : 1 },
                  shadowOpacity: isSelected ? 0.12 : 0.06,
                  shadowRadius: isSelected ? 8 : 4,
                  elevation: isSelected ? 6 : 2,
                }}
                activeOpacity={0.8}>
                <View className="flex-row items-center justify-between">
                  {/* Language Info */}
                  <View className="flex-1">
                    <Text
                      className={`mb-1 text-lg font-bold ${
                        isSelected ? 'text-sky-800' : 'text-gray-900'
                      }`}
                      style={{
                        textAlign: language.direction === 'rtl' ? 'right' : 'left',
                        fontWeight: '600',
                      }}>
                      {language.name}
                    </Text>
                    <Text
                      className={`text-sm ${isSelected ? 'text-sky-600' : 'text-gray-500'}`}
                      style={{
                        textAlign: language.direction === 'rtl' ? 'right' : 'left',
                        fontFamily: language.direction === 'rtl' ? 'System' : undefined,
                        fontWeight: '400',
                      }}>
                      {language.nativeName}
                    </Text>
                  </View>

                  {/* Compact Selection Indicator */}
                  <View
                    className={`ml-3 h-6 w-6 items-center justify-center rounded-full ${
                      language.direction === 'rtl' ? 'ml-0 mr-3' : ''
                    }`}
                    style={{
                      backgroundColor: isSelected ? '#0ea5e9' : '#f3f4f6',
                    }}>
                    {isSelected ? (
                      <Text className="text-xs font-bold text-white" style={{ fontWeight: '700' }}>
                        ✓
                      </Text>
                    ) : (
                      <View className="h-3 w-3 rounded-full bg-gray-400" style={{ opacity: 0.4 }} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Compact Footer */}
        <View className="pb-6">
          <View
            className="rounded-xl bg-gray-50 p-3"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.04,
              shadowRadius: 4,
              elevation: 2,
            }}>
            <Text
              className="text-center text-xs font-medium text-gray-600"
              style={{ fontWeight: '500' }}>
              💱 You can change the language anytime in settings
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}