import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { RootStackParamList } from '~/types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Course = {
  id: string;
  title: string;
  image?: string;
  courseClick?: () => void;
};

const courses: Course[] = [
  { 
    id: '1', 
    title: 'Tajweed', 
    image: 'https://static.vecteezy.com/system/resources/previews/011/414/257/non_2x/islamic-banner-with-green-background-and-holy-quran-vector.jpg', 
    courseClick: () => alert('Tajweed Course Selected') 
 },
  { id: '2', 
    title: 'Quran Recitation', 
    image: 'https://static.vecteezy.com/system/resources/previews/011/414/257/non_2x/islamic-banner-with-green-background-and-holy-quran-vector.jpg', 
    courseClick: () => alert('Quran Recitation Course Selected') 
 },
  { id: '3', 
    title: 'Hifz', 
    image: 'https://static.vecteezy.com/system/resources/previews/011/414/257/non_2x/islamic-banner-with-green-background-and-holy-quran-vector.jpg', 
    courseClick: () => alert('Hifz Course Selected') 
},
  { id: '4', 
    title: 'Arabic', 
    image: 'https://static.vecteezy.com/system/resources/previews/011/414/257/non_2x/islamic-banner-with-green-background-and-holy-quran-vector.jpg', 
    courseClick: () => alert('Arabic Course Selected') 
},
  { id: '5', 
    title: 'Islamic Studies', 
    image: 'https://static.vecteezy.com/system/resources/previews/011/414/257/non_2x/islamic-banner-with-green-background-and-holy-quran-vector.jpg', 
    courseClick: () => alert('Islamic Studies Course Selected') 
},
];

export default function CourseFeature() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AllCourses'>>();

  const { width } = Dimensions.get('window');
  const cardWidth = width * 0.6;
  const cardHeight = cardWidth * 1.1;

  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={{ width: cardWidth, height: cardHeight }}
      className="mx-2 items-center justify-between rounded-xl bg-white p-3 shadow-2xl border border-gray-200"
      onPress={item.courseClick}
      activeOpacity={0.8}
    >
      {item.image && (
        <Image
          source={{ uri: item.image }}
          className="mb-2 h-3/4 w-full rounded-lg"
          resizeMode="cover"
        />
      )}
      <Text className="text-center text-base font-semibold">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="rounded-xl py-3 border border-[#088000]">
      {/* Header */}
      <View className="mb-2 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold text-[#088000]">Featured Courses</Text>
        <TouchableOpacity
          className="rounded-lg bg-green-700 px-3 py-1.5"
          onPress={() => navigation.navigate('AllCourses')}
        >
          <Text className="font-semibold text-white">Browse All</Text>
        </TouchableOpacity>
      </View>

      {/* Course list */}
      <FlatList
        data={[...courses, { id: 'view-all', title: 'View All' }]}
        renderItem={({ item }) =>
          item.id === 'view-all' ? (
            <TouchableOpacity
              style={{ width: cardWidth, height: cardHeight }}
              className="mx-2 items-center justify-center rounded-xl bg-gray-100 p-3 border border-gray-300 shadow-xl"
              onPress={() => navigation.navigate('AllCourses')}
            >
              <Text className="text-lg font-bold text-blue-500">View All →</Text>
            </TouchableOpacity>
          ) : (
            renderItem({ item })
          )
        }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4 }}
      />
    </View>
  );
}
