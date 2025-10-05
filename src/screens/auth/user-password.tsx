import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface UserRegistrationScreenProps {
  phoneNumber: string;
  onRegistrationComplete: () => void;
  onBack: () => void;
}

type UsernameStatus =
  | "idle"
  | "checking"
  | "available"
  | "taken"
  | "error"
  | "invalid";

export default function UserRegistrationScreen({
  phoneNumber,
  onRegistrationComplete,
  onBack,
}: UserRegistrationScreenProps) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usernameStatus, setUsernameStatus] =
    useState<UsernameStatus>("idle");
  const [usernameError, setUsernameError] = useState("");

  const checkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (checkTimeoutRef.current) {
        clearTimeout(checkTimeoutRef.current);
      }
    };
  }, []);

  const validateUsername = (text: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9._]{4,20}$/;
    const cleanText = text.toLowerCase().replace(/\s/g, "");

    if (!cleanText) {
      setUsernameError("");
      setUsernameStatus("idle");
      return false;
    }

    if (cleanText.length < 4) {
      setUsernameError("Username must be at least 4 characters long");
      setUsernameStatus("invalid");
      return false;
    }

    if (!usernameRegex.test(cleanText)) {
      setUsernameError(
        "Username can only contain letters, numbers, dots, and underscores (4-20 characters)"
      );
      setUsernameStatus("invalid");
      return false;
    }

    if (/[._]{2,}/.test(cleanText)) {
      setUsernameError("Username cannot have consecutive dots or underscores");
      setUsernameStatus("invalid");
      return false;
    }

    if (/^[._]|[._]$/.test(cleanText)) {
      setUsernameError("Username cannot start or end with dots or underscores");
      setUsernameStatus("invalid");
      return false;
    }

    setUsernameError("");
    return true;
  };

  const handleUsernameChange = (text: string) => {
    const cleanText = text.toLowerCase().replace(/\s/g, "");
    setUsername(cleanText);

    if (checkTimeoutRef.current) {
      clearTimeout(checkTimeoutRef.current);
    }

    if (!validateUsername(cleanText)) return;

    setUsernameStatus("checking");
    setUsernameError("");

    checkTimeoutRef.current = setTimeout(() => {
      // Fake availability check
      if (cleanText === "test") {
        setUsernameStatus("taken");
        setUsernameError("This username is already taken.");
      } else {
        setUsernameStatus("available");
      }
    }, 800);
  };

  const handleRegister = () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return;
    }
    if (!username.trim()) {
      Alert.alert("Error", "Please enter a username");
      return;
    }
    if (usernameStatus !== "available") {
      Alert.alert("Error", "Please choose an available username");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Please enter a password");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "Welcome 🎉",
        `Hi ${fullName.split(" ")[0]}! Your account has been created successfully.`,
        [{ text: "Start Learning", onPress: onRegistrationComplete }]
      );
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="mb-8 items-center">
          <TouchableOpacity onPress={onBack} className="absolute left-0 top-0 p-2">
            <Text className="text-lg text-emerald-600">← Back</Text>
          </TouchableOpacity>

          <View className="mb-4 mt-8 h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Text className="text-2xl text-emerald-600">👤</Text>
          </View>
          <Text className="mb-2 text-2xl font-bold text-gray-800">
            Create Account
          </Text>
          <Text className="text-center text-base text-gray-600">
            Enter your information
          </Text>
        </View>

        {/* Form */}
        <View className="mb-8">
          {/* Full Name */}
          <View className="mb-6">
            <Text className="mb-2 text-sm font-medium text-gray-700">
              Full Name
            </Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg text-gray-800"
              placeholder="Enter your full name"
              placeholderTextColor="#9CA3AF"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
          </View>

          {/* Username */}
          <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-700">
              Username
            </Text>
            <View className="relative">
              <TextInput
                className={`rounded-lg border bg-white px-4 py-3 pr-12 text-lg text-gray-800 ${
                  usernameStatus === "available"
                    ? "border-green-500"
                    : usernameStatus === "taken" || usernameStatus === "invalid"
                    ? "border-red-500"
                    : usernameStatus === "checking"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                placeholder="Choose a unique username"
                placeholderTextColor="#9CA3AF"
                value={username}
                onChangeText={handleUsernameChange}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <View className="absolute right-3 top-3">
                {usernameStatus === "checking" && (
                  <ActivityIndicator size="small" color="#3B82F6" />
                )}
                {usernameStatus === "available" && (
                  <Text className="text-lg font-bold text-green-500">✓</Text>
                )}
                {usernameStatus === "taken" && (
                  <Text className="text-lg font-bold text-red-500">✗</Text>
                )}
              </View>
            </View>
            {usernameStatus === "available" && (
              <Text className="mt-1 text-sm text-green-600">
                ✅ Username is available
              </Text>
            )}
            {(usernameStatus === "taken" || usernameError) && (
              <Text className="mt-1 text-sm text-red-500">
                {usernameError || "❌ Username is taken"}
              </Text>
            )}
          </View>

          {/* Password */}
          <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-700">
              Password
            </Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg text-gray-800"
              placeholder="Enter password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Confirm Password */}
          <View className="mb-6">
            <Text className="mb-2 text-sm font-medium text-gray-700">
              Confirm Password
            </Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg text-gray-800"
              placeholder="Confirm password"
              placeholderTextColor="#9CA3AF"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            onPress={handleRegister}
            disabled={
              isLoading || !fullName.trim() || !username.trim() || usernameStatus !== "available"
            }
            className={`flex-row items-center justify-center rounded-lg py-4 ${
              fullName.trim() && username.trim() && usernameStatus === "available" && !isLoading
                ? "bg-emerald-600"
                : "bg-gray-300"
            }`}
          >
            {isLoading ? (
              <>
                <ActivityIndicator color="white" size="small" />
                <Text className="ml-2 text-lg font-semibold text-white">
                  Creating Account...
                </Text>
              </>
            ) : (
              <Text className="text-lg font-semibold text-white">Create Account 🎆</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
