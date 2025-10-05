import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const MyCourses = () => {
  const courses = [
    { id: 1, title: 'Quran Recitation Basics', progress: 75 },
    { id: 2, title: 'Tajweed Rules', progress: 40 },
    { id: 3, title: 'Surah Memorization', progress: 20 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title="My Courses" showBackButton={true} />
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-6">My Courses</Text>
        {courses.map((course) => (
          <View key={course.id} className="mb-4 rounded-lg bg-gray-50 p-4 shadow-sm">
            <Text className="font-bold text-lg text-gray-900">{course.title}</Text>
            <View className="mt-3 h-2 w-full rounded-full bg-gray-200">
              <View
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${course.progress}%` }}
              />
            </View>
            <Text className="mt-2 text-sm text-gray-600">{course.progress}% Complete</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCourses;