import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

type TutorCardProps = {
  name: string;
  subject: string;
  hourlyRate: number;
  country: string;
  rating: number;
  profileImage: string;
  onPressDetails: () => void;
  onPressProfile: () => void;
};

const TutorCard: React.FC<TutorCardProps> = ({
  name,
  subject,
  hourlyRate,
  country,
  rating,
  profileImage,
  onPressDetails,
  onPressProfile,
}) => {
  // To prevent accidental tap on scroll
  const startY = useRef(0);

  const handleStart = (e: GestureResponderEvent) => {
    startY.current = e.nativeEvent.pageY;
  };

  const handleEnd = (e: GestureResponderEvent, callback: () => void) => {
    const endY = e.nativeEvent.pageY;
    if (Math.abs(endY - startY.current) < 5) {
      // Real click, not scroll
      callback();
    }
  };

  return (
    <Pressable
      onTouchStart={handleStart}
      onTouchEnd={(e) => handleEnd(e, onPressDetails)}
      className="bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-4 mb-4 mx-3"
    >
      {/* Top Section */}
      <View className="flex-row items-center gap-4">
        <Image
          source={{ uri: profileImage }}
          className="w-16 h-16 rounded-full bg-gray-200"
          resizeMode="cover"
        />

        <View className="flex-1">
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              onPressProfile();
            }}
          >
            <Text className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </Text>
          </TouchableOpacity>
          <Text className="text-sm text-gray-600 dark:text-gray-300">
            📍 {country}
          </Text>
        </View>

        <View className="flex-row items-center">
          <FontAwesome name="star" size={16} color="#facc15" />
          <Text className="text-sm ml-1 text-yellow-500 font-medium">
            {rating}
          </Text>
        </View>
      </View>

      {/* Subject */}
      <Text className="mt-3 text-base text-gray-800 dark:text-gray-200">
        {subject}
      </Text>

      {/* Footer */}
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-green-600 dark:text-green-400">
          ${hourlyRate}/hr
        </Text>

        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-lg">
          <Text className="text-white text-sm font-medium">View Profile</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default TutorCard;
