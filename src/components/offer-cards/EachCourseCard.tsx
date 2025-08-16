import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { RootStackParamList } from '~/types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import TutsCard from './tuts-card';

export default function EachCourseCard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { width } = Dimensions.get('window');
  const cardWidth = width * 0.55; // smaller so multiple fit in row

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const data = [
    {
      id: '1',
      image: null,
      imageText:
        'Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert',
      overlayText: 'Master Tajweed in 30 Days',
      title:
        '1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert',
      price: '500',
      rateType: 'hourly' as const,
      tutor: {
        name: 'Ustadh Ahmad',
        avatar: require('../../assets/userImg.avif'),
        rating: 4.8,
        totalRatings: 42,
        tutorLevel: 'Level 2✦',
        onPress: () => alert('Go to tutor profile'),
      },
      onPressDetails: () => alert('Go to gig details'),
    },
    {
      id: '2',
      image: require('../../assets/banner/banner1.webp'),
      imageText:
        'Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert',
      overlayText: 'Master Tajweed in 30 Days',
      title:
        '1-on-1 Quran Recitation with Certified Tutor, Learn Tajweed in Details With Become Expert',
      price: '500',
      rateType: 'hourly' as const,
      tutor: {
        name: 'Ustadh Ahmad',
        avatar: require('../../assets/userImg.avif'),
        rating: 4.8,
        totalRatings: 42,
        tutorLevel: 'Level 2✦',
        onPress: () => alert('Go to tutor profile'),
      },
      onPressDetails: () => alert('Go to gig details'),
    },
  ];

  return (
    <View className="rounded-xl border border-[#088000] py-3">
      {/* Header */}
      <View className="mb-2 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold text-[#088000]">Tajweed Course</Text>
        <TouchableOpacity
          className="rounded-lg bg-green-700 px-3 py-1.5"
          onPress={() => navigation.navigate('AllCourses')}
        >
          <Text className="font-semibold text-white text-sm">Browse all</Text>
        </TouchableOpacity>
      </View>

      {/* Gigs list */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          alignItems: 'flex-start',
        }}
        renderItem={({ item }) => {
          const isExpanded = expandedId === item.id;
          const displayTitle =
            !isExpanded && item.title.length > 40
              ? item.title.slice(0, 40) + '...'
              : item.title;

          return (
            <View style={{ width: cardWidth, marginRight: 10 }}>
              <View style={{ transform: [{ scale: 0.9 }] }}>
                <TutsCard {...item} title={displayTitle} />
              </View>

              {!isExpanded && item.title.length > 40 && (
                <TouchableOpacity onPress={() => setExpandedId(item.id)}>
                  <Text style={{ fontSize: 12, color: 'blue', marginTop: 2 }}>See more</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}
