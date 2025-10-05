import { View, TouchableOpacity, Text } from 'react-native';
import { Entypo, EvilIcons, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/src/types/navigation';

type HeaderNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface HeaderWithIconsProps {
  title: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  notificationCount?: number;
  messageCount?: number;
}

const HeaderWithIcons = ({ 
  title, 
  showBackButton = false, 
  showMenuButton = true,
  notificationCount = 3,
  messageCount = 20
}: HeaderWithIconsProps) => {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <View className="flex-row items-center flex-1">
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <MaterialIcons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-[#009000]">{title}</Text>
      </View>
      
      <View className="flex-row items-center space-x-3">
        {/* Notification Icon with Badge */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Notifications')}
          className="p-2 relative"
        >
          <Ionicons name="notifications" size={24} color="#009000" />
          {notificationCount > 0 && (
            <View className="absolute top-2.5 right-2.5 bg-red-500 rounded-full min-w-[8px] h-[8px] items-center justify-center">
              {/* <Text className="text-white text-xs font-bold">
                {notificationCount > 99 ? '99+' : notificationCount}
              </Text> */}
            </View>
          )}
        </TouchableOpacity>
        
        {/* Heart/Saved Icon */}
        {/* <TouchableOpacity 
          onPress={() => navigation.navigate('Saved')}
          className="p-2"
        >
          <MaterialIcons name="favorite" size={24} color="#374151" />
        </TouchableOpacity> */}
        
        {/* Messages Icon with Badge */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Messages')}
          className="p-2 relative"
        >
          <MaterialIcons name="message" size={24} color="#009000" />
          {messageCount > 0 && (
            <View className="absolute top-1.5 right-1.5 bg-red-500 rounded-full min-w-[8px] h-[8px] items-center justify-center">
              {/* <Text className="text-white text-xs font-bold">
                {messageCount > 99 ? '99+' : messageCount}
              </Text> */}
            </View>
          )}
        </TouchableOpacity>
        
        {/* Menu Icon */}
        {showMenuButton && (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Menu')}
            className="p-2"
          >
            <Foundation name="indent-more" size={24} color="#009000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderWithIcons;