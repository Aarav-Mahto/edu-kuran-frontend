import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const CoursesScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title="All Courses" showBackButton={true} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-4xl font-bold text-gray-900">All Courses</Text>
        <Text className="text-gray-600 mt-4">Course catalog coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}
export default CoursesScreen;