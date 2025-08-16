import React from "react";
import { View, Text, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const features = [
  {
    id: "1",
    icon: "book-outline",
    title: "Comprehensive Courses",
    description: "Learn Tajweed, Recitation, Hifz, Arabic, and Islamic Studies from certified tutors.",
  },
  {
    id: "2",
    icon: "person-outline",
    title: "Expert Tutors",
    description: "Qualified male and female teachers with verified profiles and teaching experience.",
  },
  {
    id: "3",
    icon: "chatbubble-ellipses-outline",
    title: "1-on-1 Interaction",
    description: "Private classes, doubt-solving, and dedicated sessions to improve your skills.",
  },
  {
    id: "4",
    icon: "calendar-outline",
    title: "Flexible Scheduling",
    description: "Choose class timings that fit your lifestyle with easy rescheduling options.",
  },
  {
    id: "5",
    icon: "shield-checkmark-outline",
    title: "Safe & Secure",
    description: "OTP-based login, verified tutors, secure payments, and privacy-focused learning.",
  },
  {
    id: "6",
    icon: "cash-outline",
    title: "Affordable Learning",
    description: "Pay hourly or weekly as per your budget with transparent pricing.",
  },
];

export default function WhyChooseUs() {
  return (
    <View className="bg-white rounded-xl p-5 my-4 shadow-md mx-2">
      <Text className="text-2xl font-bold text-[#088000] mb-4">
        Why Choose Us?
      </Text>
      
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-start mb-4">
            <Ionicons
              name={item.icon}
              size={28}
              color="#088000"
              style={{ marginRight: 12, marginTop: 2 }}
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
              <Text className="text-gray-600 text-sm">{item.description}</Text>
            </View>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}
