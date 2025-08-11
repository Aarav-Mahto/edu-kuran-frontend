import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Pressable, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleCard from '~/pages/student/ScheduleCard';
import MyCourses from '../student/MyCourses';
import { RootStackParamList } from '~/types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import RightSideModal from '../student/RightSideModel';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Dashboard = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const navigation = useNavigation<NavigationProp>();


  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Profile Slide-Out Menu */}
      <RightSideModal
        profileVisible={profileVisible}
        setProfileVisible={setProfileVisible}
        navigation={navigation} 
      />

      {/* Main Content */}
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-6 mt-4 flex-row items-center justify-between border-b border-gray-200 pb-4">
          <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity>
              <Feather name="settings" size={24} color="#4B5563" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setProfileVisible(true)}>
              <Image
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                }}
                className="h-10 w-10 rounded-full"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Courses Section */}
        <View className="mb-6">
          <Text className="mb-4 text-center text-2xl font-bold text-blue-600">My Courses</Text>
          <MyCourses />
        </View>

        {/* Today's Schedule Section */}
        <View className="mb-4">
          <Text className="mb-4 text-center text-xl font-bold">Today's Schedule</Text>

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

export default Dashboard;
