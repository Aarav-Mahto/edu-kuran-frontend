import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAuthStore, authAPI } from '../../api/auth/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MobileNumberScreenProps {
  onGetOTP: (phoneNumber: string) => void;
  onSkip: () => void;
}

export default function MobileNumberScreen({ onGetOTP, onSkip }: MobileNumberScreenProps) {
  const { selectedLanguage } = useAuthStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formatPhoneNumber = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');

    // Limit to 10 digits for Indian mobile numbers
    const limited = cleaned.substring(0, 10);

    // Format as XXX-XXX-XXXX
    if (limited.length >= 6) {
      return `${limited.substring(0, 3)}-${limited.substring(3, 6)}-${limited.substring(6)}`;
    } else if (limited.length >= 3) {
      return `${limited.substring(0, 3)}-${limited.substring(3)}`;
    }
    return limited;
  };

  const handlePhoneNumberChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  };

  const validatePhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]/.test(cleaned); // Indian mobile number validation
  };

  const handleGetOTP = async () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your mobile number');
      return;
    }

    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9'
      );
      return;
    }

    setIsLoading(true);

    try {
      // Check if user exists and send OTP
      const checkResponse = await authAPI.checkUser(cleanedNumber);

      if (checkResponse.success) {
        const otpResponse = await authAPI.sendOTP(cleanedNumber);

        if (otpResponse.success) {
          onGetOTP(cleanedNumber);
        } else {
          Alert.alert('Error', otpResponse.error || 'Failed to send OTP');
        }
      } else {
        // For now, allow new users to proceed to OTP
        onGetOTP(cleanedNumber);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Allow to proceed even if API fails (for development)
      onGetOTP(cleanedNumber);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    Alert.alert(
      'Skip Login',
      'You will have limited access. You can only view the student homepage and will be asked to login when accessing other features.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Continue', onPress: onSkip },
      ]
    );
  };

  const getLocalizedText = () => {
    switch (selectedLanguage.code) {
      case 'hi':
        return {
          title: 'मोबाइल नंबर दर्ज करें',
          subtitle: 'सत्यापन के लिए अपना मोबाइल नंबर दर्ज करें',
          placeholder: 'मोबाइल नंबर',
          getOTP: 'OTP प्राप्त करें',
          skip: 'अभी छोड़ें',
          footer: 'आपका नंबर सुरक्षित है और केवल सत्यापन के लिए उपयोग किया जाता है',
        };
      case 'ur':
        return {
          title: 'موبائل نمبر درج کریں',
          subtitle: 'تصدیق کے لیے اپنا موبائل نمبر درج کریں',
          placeholder: 'موبائل نمبر',
          getOTP: 'OTP حاصل کریں',
          skip: 'اب چھوڑیں',
          footer: 'آپ کا نمبر محفوظ ہے اور صرف تصدیق کے لیے استعمال ہوتا ہے',
        };
      case 'ar':
        return {
          title: 'أدخل رقم الجوال',
          subtitle: 'أدخل رقم جوالك للتحقق',
          placeholder: 'رقم الجوال',
          getOTP: 'احصل على رمز التحقق',
          skip: 'تخطي الآن',
          footer: 'رقمك آمن ويستخدم فقط للتحقق',
        };
      default:
        return {
          title: 'Enter Mobile Number',
          subtitle: 'Enter your mobile number for verification',
          placeholder: 'Mobile Number',
          getOTP: 'Get OTP',
          skip: 'Skip for Now',
          footer: 'Your number is secure and used only for verification',
        };
    }
  };

  const texts = getLocalizedText();
  const isRTL = selectedLanguage.direction === 'rtl';

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="mb-8 items-center">
          <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Text className="text-2xl text-emerald-600">📱</Text>
          </View>
          <Text
            className="mb-2 text-2xl font-bold text-gray-800"
            style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {texts.title}
          </Text>
          <Text
            className="text-center text-base text-gray-600"
            style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {texts.subtitle}
          </Text>
        </View>

        {/* Phone Number Input */}
        <View className="mb-8">
          <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-700">Mobile Number</Text>
            <View className="flex-row items-center rounded-lg border border-gray-300 bg-white">
              <View className="border-r border-gray-300 px-4 py-3">
                <Text className="font-medium text-gray-600">+91</Text>
              </View>
              <TextInput
                className="flex-1 px-4 py-3 text-lg text-gray-800"
                placeholder={texts.placeholder}
                placeholderTextColor="#9CA3AF"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                keyboardType="phone-pad"
                maxLength={12} // Formatted length: XXX-XXX-XXXX
                autoFocus
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              />
            </View>
          </View>

          {/* Get OTP Button */}
          <TouchableOpacity
            onPress={handleGetOTP}
            disabled={isLoading || !phoneNumber.trim()}
            className={`
              mb-4 items-center justify-center rounded-lg py-4
              ${phoneNumber.trim() && !isLoading ? 'bg-emerald-600' : 'bg-gray-300'}
            `}>
            {isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text className="text-lg font-semibold text-white">{texts.getOTP}</Text>
            )}
          </TouchableOpacity>

          {/* Skip Button */}
          <TouchableOpacity onPress={handleSkip} className="items-center justify-center py-3">
            <Text className="text-base font-medium text-emerald-600">{texts.skip}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="flex-1 justify-end pb-6">
          <Text
            className="text-center text-sm leading-5 text-gray-500"
            style={{ textAlign: isRTL ? 'right' : 'center' }}>
            {texts.footer}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
