import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import type { RootStackParamList } from '@/src/types/navigation';

type FavoritesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Favorites'>;

const FavoritesScreen = () => {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <MaterialIcons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Favorites</Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Empty State */}
        <View className="flex-1 items-center justify-center py-20">
          <MaterialIcons name="favorite-border" size={80} color="#d1d5db" />
          <Text className="text-xl font-semibold text-gray-600 mt-4 mb-2">No Favorites Yet</Text>
          <Text className="text-gray-500 text-center px-8">
            Start adding courses and tutorials to your favorites to see them here
          </Text>
          
          <TouchableOpacity 
            className="bg-blue-600 px-6 py-3 rounded-lg mt-6"
            onPress={() => navigation.navigate('Home')}
          >
            <Text className="text-white font-semibold">Browse Courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;