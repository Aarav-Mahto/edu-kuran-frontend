import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const basicData = [
  { icon: 'location-pin', Label: 'From', value: 'New Delhi, India' },
  { icon: 'user', Label: 'Member Since', value: 'Aug 2025' },
  { icon: 'message', Label: 'Avg. Study hour', value: '4 hours' },
  { icon: 'eye', Label: 'Last active', value: '2 days ago' },
];

const langData = [
  { icon: 'language', Label: 'English', value: 'Fluent' },
  { icon: 'language', Label: 'Hindi (हिन्दी)', value: 'Native' },
  { icon: 'language', Label: 'Urdu', value: 'Intermediate' },
  { icon: 'language', Label: 'Arabic', value: 'Basic' },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const MyProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Alice John',
    username: '@alice_john',
    bio: 'MTech 2024 | Java Developer Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  });
  const [langInfo, setLangInfo] = useState([
    { language: 'English', level: 'Fluent' },
    { language: 'Hindi (हिन्दी)', level: 'Native' },
    { language: 'Urdu', level: 'Intermediate' },
    { language: 'Arabic', level: 'Basic' },
  ]);

  const [educationInfo, setEducationInfo] = useState([
    {
      degree: 'Bachelor of Technology',
      institution: 'Delhi University',
      duration: '2018 - 2022',
      score: '85%',
    },
    {
      degree: 'Masters of Computer Application',
      institution: 'IIT Delhi',
      duration: '2021 - 2024',
    },
  ]);

  const handleUpdateProfile = (updatedUserProfile: any, updatedLangInfo: any, updatedEducation: any) => {
    setUserInfo(updatedUserProfile);
    setLangInfo(updatedLangInfo);
    setEducationInfo(updatedEducation);
  }

  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 bg-[#1A1A1A] px-4 pt-5">
      {/* Top Buttons (Back and Edit) */}
      <View className="flex-row items-center justify-between">
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Edit Button */}
        <TouchableOpacity
          className="rounded-lg bg-blue-500 p-2"
          onPress={() => navigation.navigate('EditProfile', {
            userInfo,
            langInfo,
            educationInfo,
            onSave: handleUpdateProfile,
          })
          }>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Header */}
      <View className="mb-2 items-center border-b border-gray-700 pb-4">
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          className="h-24 w-24 rounded-full border border-gray-500"
        />
        <Text className="mt-1 text-lg font-semibold text-gray-300">{userInfo.name}</Text>
        <Text className="text-sm text-gray-400">{userInfo.username}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bio Section */}
        <View className="mb-6">
          <Text className="mb-4 text-2xl font-bold text-white">User Information</Text>
          <Text className="p-2 text-sm text-white">
            {userInfo.bio}
          </Text>

          {basicData.map((item, index) => (
            <View key={index} className="mt-6 flex-row items-center gap-4">
              <Icon name={item.icon} size={24} color={'#2e2e2e'} />
              <View className="flex-1">
                <Text className="text-sm text-gray-500">{item.Label}</Text>
                <Text className="text-md text-gray-100">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Languages */}
        <View className="mb-4 mt-2">
          <Text className="text-2xl font-semibold text-white">Languages Spoken</Text>
          {langData.map((item, index) => (
            <View key={index} className="mt-6 flex-row items-center gap-4">
              <Icon name={item.icon} size={24} color={'#2e2e2e'} />
              <View className="flex-1">
                <Text className="text-sm text-gray-500">{item.Label}</Text>
                <Text className="text-md text-gray-100">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View className="mb-6 mt-6">
          <Text className="mb-1 text-2xl font-semibold text-white">Education</Text>
          <View className="p-2">
            <Text className="text-gray-100">
              Bachelor of Technology at Delhi University (2018 - 2022) | Score: 85%
            </Text>
            <Text className="mt-2 text-gray-100">
              Masters of Computer Application at IIT Delhi (2021 - 2024)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
