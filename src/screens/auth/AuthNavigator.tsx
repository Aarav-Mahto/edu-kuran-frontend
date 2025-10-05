import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import LanguageSelectionScreen from './language';
import MobileNumberScreen from './mobile-no';
import OTPScreen from './otp';
import UserPasswordScreen from './user-password';

interface AuthNavigatorProps {
  navigation: NavigationProp<any>;
}

export default function AuthNavigator({ navigation }: AuthNavigatorProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLanguageSelected = () => {
    navigation.navigate('MobileNumber');
  };

  const handleGetOTP = (number: string) => {
    setPhoneNumber(number);
    navigation.navigate('OTP');
  };

  const handleOTPVerified = (newUser: boolean) => {
    setIsNewUser(newUser);
    if (newUser) {
      navigation.navigate('UserPassword');
    } else {
      // Navigate to main app
      navigation.navigate('Home');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Home');
  };

  const handleBackToMobile = () => {
    navigation.navigate('MobileNumber');
  };

  const handleResendOTP = () => {
    // Resend OTP logic
  };

  const handlePasswordSet = () => {
    // Navigate to main app after password is set
    navigation.navigate('Home');
  };

  return null;
}