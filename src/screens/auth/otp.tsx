import React, { useState, useEffect, useRef } from 'react';
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

interface OTPVerificationScreenProps {
  phoneNumber: string;
  onVerified: (isNewUser: boolean) => void;
  onResendOTP: () => void;
  onBack: () => void;
}

export default function OTPVerificationScreen({
  phoneNumber,
  onVerified,
  onResendOTP,
  onBack,
}: OTPVerificationScreenProps) {
  const { selectedLanguage } = useAuthStore();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [hintCode] = useState(() => {
    // Generate random 6-digit hint code
    return Math.floor(100000 + Math.random() * 900000).toString();
  });

  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return; // Prevent multiple characters

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter the complete 6-digit OTP');
      return;
    }

    setIsLoading(true);

    try {
      // For development, allow hint code bypass
      if (otpString === hintCode) {
        // Check if user exists
        const checkResponse = await authAPI.checkUser(phoneNumber);
        const isNewUser = !checkResponse.success || !checkResponse.data?.exists;
        
        // For development, we need to simulate login to get accessToken
        if (!isNewUser) {
          // Simulate login to get accessToken
          const loginResponse = await authAPI.login(phoneNumber);
          if (loginResponse.success && loginResponse.data?.accessToken) {
            const { setUser, setAuthenticated } = useAuthStore.getState();
            
            // Set user data in store
            if (loginResponse.data.user) {
              setUser(loginResponse.data.user);
              setAuthenticated(true);
            }
            
            // Store access token in auth store for React Native
            useAuthStore.getState().accessToken = loginResponse.data.accessToken;
            
            // Also store in localStorage for web
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('accessToken', loginResponse.data.accessToken);
            }
          }
        }
        
        onVerified(isNewUser);
        setIsLoading(false);
        return;
      }

      // Verify OTP with backend
      const response = await authAPI.verifyOTP({
        phoneNumber,
        otp: otpString,
      });

      if (response.success && response.data?.success) {
        // Handle the accessToken for authenticated requests
        if (response.data.accessToken) {
          const { setUser, setAuthenticated } = useAuthStore.getState();
          
          // Set user data in store
          if (response.data.user) {
            setUser(response.data.user);
            setAuthenticated(true);
          }
          
          // Store access token in auth store for React Native
          useAuthStore.getState().accessToken = response.data.accessToken;
          
          // Also store in localStorage for web
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('accessToken', response.data.accessToken);
          }
        }
        
        const isNewUser = !response.data.user;
        onVerified(isNewUser);
      } else {
        Alert.alert(
          'Invalid OTP',
          response.error || 'The OTP you entered is incorrect. Please try again.'
        );
        // Clear OTP inputs
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // For development, allow any 6-digit code
      Alert.alert(
        'Verification',
        `For development: Use hint code ${hintCode} or any 6-digit code`,
        [{ text: 'OK', onPress: () => onVerified(true) }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    setCanResend(false);
    setResendTimer(30);

    try {
      await authAPI.sendOTP(phoneNumber);
      Alert.alert('OTP Sent', 'A new OTP has been sent to your mobile number');
    } catch (error) {
      console.error('Error resending OTP:', error);
      Alert.alert('Error', 'Failed to resend OTP. Please try again.');
    }

    onResendOTP();
  };

  const formatPhoneNumber = (phone: string) => {
    return `+91 ${phone.substring(0, 3)}-${phone.substring(3, 6)}-${phone.substring(6)}`;
  };

  const getLocalizedText = () => {
    switch (selectedLanguage.code) {
      case 'hi':
        return {
          title: 'OTP सत्यापन',
          subtitle: 'भेजे गए 6-अंकीय कोड को दर्ज करें',
          verify: 'सत्यापित करें',
          resend: 'दोबारा भेजें',
          back: 'वापस',
          hint: 'संकेत कोड (विकास के लिए)',
          timer: 'सेकंड में दोबारा भेजें',
        };
      case 'ur':
        return {
          title: 'OTP تصدیق',
          subtitle: 'بھیجا گیا 6 ہندسوں کا کوڈ درج کریں',
          verify: 'تصدیق کریں',
          resend: 'دوبارہ بھیجیں',
          back: 'واپس',
          hint: 'اشارہ کوڈ (ترقی کے لیے)',
          timer: 'سیکنڈ میں دوبارہ بھیجیں',
        };
      case 'ar':
        return {
          title: 'تحقق من رمز التحقق',
          subtitle: 'أدخل الرمز المكون من 6 أرقام المرسل',
          verify: 'تحقق',
          resend: 'إعادة إرسال',
          back: 'رجوع',
          hint: 'رمز التلميح (للتطوير)',
          timer: 'إعادة الإرسال خلال ثوانٍ',
        };
      default:
        return {
          title: 'OTP Verification',
          subtitle: 'Enter the 6-digit code sent to',
          verify: 'Verify',
          resend: 'Resend',
          back: 'Back',
          hint: 'Hint Code (For Development)',
          timer: 'Resend in seconds',
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
          <TouchableOpacity onPress={onBack} className="absolute left-0 top-0 p-2">
            <Text className="text-lg text-emerald-600">← {texts.back}</Text>
          </TouchableOpacity>

          <View className="mb-4 mt-8 h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Text className="text-2xl text-emerald-600">🔐</Text>
          </View>
          <Text
            className="mb-2 text-2xl font-bold text-gray-800"
            style={{ textAlign: isRTL ? 'right' : 'center' }}>
            {texts.title}
          </Text>
          <Text
            className="mb-1 text-center text-base text-gray-600"
            style={{ textAlign: isRTL ? 'right' : 'center' }}>
            {texts.subtitle}
          </Text>
          <Text className="font-semibold text-emerald-600">{formatPhoneNumber(phoneNumber)}</Text>
        </View>

        {/* Development Hint */}
        <View className="mb-6 rounded-lg border border-yellow-300 bg-yellow-100 p-3">
          <Text className="mb-1 text-sm font-medium text-yellow-800">
            {texts.hint}: {hintCode}
          </Text>
          <Text className="text-xs text-yellow-700">Use this code for testing purposes</Text>
        </View>

        {/* OTP Input */}
        <View className="mb-8">
          <View className="mb-6 flex-row justify-center space-x-3">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) {
                    inputRefs.current[index] = ref;
                  }
                }}
                className={`
                  h-14 w-12 rounded-lg border-2 bg-white text-center text-xl font-bold
                  ${digit ? 'border-emerald-500 text-emerald-600' : 'border-gray-300 text-gray-800'}
                `}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            onPress={handleVerifyOTP}
            disabled={isLoading || otp.some((digit) => !digit)}
            className={`
              mb-4 items-center justify-center rounded-lg py-4
              ${otp.every((digit) => digit) && !isLoading ? 'bg-emerald-600' : 'bg-gray-300'}
            `}>
            {isLoading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text className="text-lg font-semibold text-white">{texts.verify}</Text>
            )}
          </TouchableOpacity>

          {/* Resend OTP */}
          <View className="items-center">
            {canResend ? (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text className="text-base font-medium text-emerald-600">{texts.resend} OTP</Text>
              </TouchableOpacity>
            ) : (
              <Text className="text-base text-gray-500">
                {texts.timer}: {resendTimer}s
              </Text>
            )}
          </View>
        </View>

        {/* Footer */}
        <View className="flex-1 justify-end pb-6">
          <Text
            className="text-center text-sm text-gray-500"
            style={{ textAlign: isRTL ? 'right' : 'center' }}>
            Didn&apos;t receive the code? Check your SMS or try resending
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
