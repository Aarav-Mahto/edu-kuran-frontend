import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { RootStackParamList } from '~/types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import TutsCard from '../tuts-card'; 

const tutData = [
  {
    id: 1,
    image: require('../../../assets/banner/banner5.jpg'),
    imageText: "Tajweed Certified Course available from beginner to advanced level.",
    overlayText: "Master Tajweed in 30 Days",
    title: "1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in detail and improve fluency.",
    price: "500",
    rateType: "hourly",
    tutor: {
      name: "Ustadh Ahmad",
      avatar: require("../../../assets/userImg.avif"),
      rating: 4.8,
      totalRatings: 42,
      tutorLevel: "Level 2✦",
      onPress: () => alert("Go to Ahmad's profile"),
    },
    onPressDetails: () => alert("Go to Tajweed Gig 1 details"),
  },
  {
    id: 2,
    image: require('../../../assets/banner/banner1.webp'),
    imageText: "Special Tajweed training for kids and adults with interactive sessions.",
    overlayText: "Learn Tajweed with Ease",
    title: "Group & Individual Tajweed Classes – Improve pronunciation and Quran recitation accuracy.",
    price: "1200",
    rateType: "weekly",
    tutor: {
      name: "Ustadhah Fatimah",
      avatar: require("../../../assets/userImg.avif"),
      rating: 4.9,
      totalRatings: 58,
      tutorLevel: "Level 3✦",
      onPress: () => alert("Go to Fatimah's profile"),
    },
    onPressDetails: () => alert("Go to Tajweed Gig 2 details"),
  },
  {
    id: 3,
    image: null,
    imageText: "Personalized Tajweed coaching for advanced learners and Hifz students.",
    overlayText: "Perfect Your Makharij",
    title: "Advanced Tajweed Classes – Focus on Qira’at, Makharij & fluency under expert guidance.",
    price: "800",
    rateType: "hourly",
    tutor: {
      name: "Sheikh Yusuf",
      avatar: require("../../../assets/userImg.avif"),
      rating: 4.7,
      totalRatings: 33,
      tutorLevel: "Level 1✦",
      onPress: () => alert("Go to Yusuf's profile"),
    },
    onPressDetails: () => alert("Go to Tajweed Gig 3 details"),
  },
];

export default function EachCourseCard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="rounded-xl border border-[#088000] py-3 mt-3">
      {/* Header */}
      <View className="mb-2 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold text-[#088000]">Recitation Courses</Text>
        <TouchableOpacity
          className="rounded-lg bg-green-700 px-3 py-1.5"
          onPress={() => navigation.navigate('AllCourses')}
        >
          <Text className="font-semibold text-white">Browse all</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal scroll of TutsCard */}
      <FlatList
        data={tutData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginRight: 12 }}>  
            <TutsCard
              image={item.image}
              imageText={item.imageText}
              overlayText={item.overlayText}
              title={item.title}
              price={item.price}
              rateType={item.rateType}
              tutor={item.tutor}
              onPressDetails={item.onPressDetails}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      />
    </View>
  );
}
