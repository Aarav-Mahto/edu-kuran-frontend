import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import type { RootStackParamList } from '@/src/types/navigation';

type NotificationsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notifications'>;

const NotificationsScreen = () => {
  const navigation = useNavigation<NotificationsScreenNavigationProp>();

  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: 'New Course Available',
      message: 'Advanced React Native course is now available',
      time: '2 hours ago',
      read: false,
      type: 'course'
    },
    {
      id: 2,
      title: 'Assignment Due',
      message: 'Your JavaScript fundamentals assignment is due tomorrow',
      time: '1 day ago',
      read: true,
      type: 'assignment'
    },
    {
      id: 3,
      title: 'Welcome!',
      message: 'Welcome to Kuran Learning. Start your learning journey today!',
      time: '3 days ago',
      read: true,
      type: 'welcome'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'course':
        return 'school';
      case 'assignment':
        return 'assignment';
      case 'welcome':
        return 'celebration';
      default:
        return 'notifications';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <MaterialIcons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Notifications</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-blue-600 font-semibold">Mark all read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              className={`px-4 py-4 border-b border-gray-100 ${!notification.read ? 'bg-blue-50' : 'bg-white'}`}
            >
              <View className="flex-row items-start">
                <View className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${
                  notification.type === 'course' ? 'bg-green-100' :
                  notification.type === 'assignment' ? 'bg-orange-100' :
                  'bg-blue-100'
                }`}>
                  <MaterialIcons 
                    name={getNotificationIcon(notification.type)} 
                    size={20} 
                    color={
                      notification.type === 'course' ? '#059669' :
                      notification.type === 'assignment' ? '#ea580c' :
                      '#2563eb'
                    }
                  />
                </View>
                
                <View className="flex-1">
                  <View className="flex-row items-center justify-between mb-1">
                    <Text className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </Text>
                    {!notification.read && (
                      <View className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </View>
                  <Text className="text-gray-600 text-sm mb-2">
                    {notification.message}
                  </Text>
                  <Text className="text-gray-400 text-xs">
                    {notification.time}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View className="flex-1 items-center justify-center py-20">
            <MaterialIcons name="notifications-none" size={80} color="#d1d5db" />
            <Text className="text-xl font-semibold text-gray-600 mt-4 mb-2">No Notifications</Text>
            <Text className="text-gray-500 text-center px-8">
              You're all caught up! New notifications will appear here
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;