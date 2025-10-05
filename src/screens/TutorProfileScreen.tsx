import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, type RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';
import type { RootStackParamList } from '@/src/types/navigation';

type TutorProfileRouteProp = RouteProp<RootStackParamList, 'TutorProfile'>;

const TutorProfileScreen = () => {
  const route = useRoute<TutorProfileRouteProp>();
  const { id } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title="Tutor Profile" showBackButton={true} />
      
      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="bg-blue-600 px-6 py-8">
          <View className="items-center">
            <View className="w-24 h-24 bg-white rounded-full items-center justify-center mb-4">
              <Text className="text-blue-600 text-3xl font-bold">T</Text>
            </View>
            <Text className="text-white text-2xl font-bold mb-2">Tutor Name</Text>
            <Text className="text-blue-100 text-center">Quran & Islamic Studies Expert</Text>
            <Text className="text-blue-200 text-sm mt-1">Tutor ID: {id}</Text>
          </View>
        </View>

        <View className="px-6 py-6 space-y-6">
          {/* Stats */}
          <View className="flex-row justify-around bg-gray-50 rounded-lg py-4">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">150+</Text>
              <Text className="text-gray-600 text-sm">Students</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">4.9</Text>
              <Text className="text-gray-600 text-sm">Rating</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">5+</Text>
              <Text className="text-gray-600 text-sm">Years Exp.</Text>
            </View>
          </View>

          {/* About */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">About</Text>
            <Text className="text-gray-600 leading-6">
              Experienced Islamic scholar with over 5 years of teaching experience. Specializes in Quran recitation, 
              Tajweed, and Islamic studies. Passionate about helping students develop a deep understanding of Islamic teachings.
            </Text>
          </View>

          {/* Specializations */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">Specializations</Text>
            <View className="flex-row flex-wrap gap-2">
              {['Quran Recitation', 'Tajweed', 'Arabic Language', 'Islamic History', 'Hadith Studies'].map((skill) => (
                <View key={skill} className="bg-blue-100 px-3 py-1 rounded-full">
                  <Text className="text-blue-800 text-sm">{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Contact Actions */}
          <View className="space-y-3">
            <TouchableOpacity className="bg-blue-600 py-4 rounded-lg flex-row items-center justify-center">
              <MaterialIcons name="message" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Send Message</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="border border-blue-600 py-4 rounded-lg flex-row items-center justify-center">
              <MaterialIcons name="schedule" size={20} color="#2563eb" />
              <Text className="text-blue-600 font-semibold ml-2">Schedule Session</Text>
            </TouchableOpacity>
          </View>

          {/* Reviews Preview */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">Recent Reviews</Text>
            <View className="bg-gray-50 rounded-lg p-4">
              <View className="flex-row items-center mb-2">
                <View className="flex-row">
                  {[1,2,3,4,5].map((star) => (
                    <MaterialIcons key={star} name="star" size={16} color="#fbbf24" />
                  ))}
                </View>
                <Text className="text-gray-600 text-sm ml-2">by Ahmad K.</Text>
              </View>
              <Text className="text-gray-700">
                "Excellent teacher! Very patient and knowledgeable. My Quran recitation has improved significantly."
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorProfileScreen;