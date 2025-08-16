import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const steps = [
  { id: "1", title: "Sign Up", desc: "Create your account by simply using Phone Number.", icon: "person-add-outline" },
  { id: "2", title: "Explore Courses", desc: "Browse Quran, Tajweed, Hifz & more.", icon: "book-outline" },
  { id: "3", title: "Select Tutor", desc: "Choose from certified tutors and best rated Gigs.", icon: "school-outline" },
  { id: "4", title: "Start Learning", desc: "Begin interactive sessions anytime according to your time.", icon: "play-circle-outline" },
];

export default function HowItWorksVertical() {
  return (
    <View className="bg-white rounded-xl p-5 my-4 shadow-md mx-2">
      <Text className="text-2xl font-bold text-[#088000] mb-6 text-center">
        How to Start Learning?
      </Text>

      {steps.map((step, index) => (
        <View key={step.id} className="flex-row items-start mb-6">
          {/* Circle with Icon */}
          <View className="w-12 h-12 rounded-full bg-[#088000] flex items-center justify-center mr-4">
            <Ionicons name={step.icon} size={22} color="white" />
          </View>

          {/* Step Info */}
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-800">{step.title}</Text>
            <Text className="text-sm text-gray-600">{step.desc}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
