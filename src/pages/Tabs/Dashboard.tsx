import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleCard from '~/pages/student/ScheduleCard';
import MyCourses from '../student/MyCourses';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-6 mt-4 flex-row items-center justify-between border-b border-gray-200 pb-4">
          <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <Feather name="settings" size={24} color="#4B5563" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="person-circle-outline" size={28} color="#4B5563" />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Courses Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold mb-4 text-blue-600 text-center">My Courses</Text>
          <MyCourses />
        </View>

        {/* Today's Schedule Section */}
        <View className="mb-4">
          <Text className="text-xl font-bold mb-4 text-center">Today's Schedule</Text>

          <ScheduleCard
            subject="Tajweed Class"
            time="5:00 PM - 6:00 PM"
            tutor="Ustaad Ahmed"
            status="Upcoming"
          />

          <ScheduleCard
            subject="Surah Al-Baqarah Tafsir"
            time="6:30 PM - 7:15 PM"
            tutor="Ustaad Musa"
            status="Ongoing"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
