import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ScrollViewWithBottomBar } from '@/src/navigation/BottomBarContext';
import { CustomBottomBar } from '@/src/navigation/BottomBar';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="flex-1 bg-gray-100">
        {/* Header with icons */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-900">Dashboard</Text>
          <View className="flex-row items-center space-x-3">
            {/* Notification Icon with Badge */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Notifications' as any)}
              className="p-2 relative"
            >
              <MaterialIcons name="notifications" size={24} color="#374151" />
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[18px] h-[18px] items-center justify-center">
                <Text className="text-white text-xs font-bold">3</Text>
              </View>
            </TouchableOpacity>
            
            {/* Heart/Saved Icon */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Saved' as any)}
              className="p-2"
            >
              <MaterialIcons name="favorite" size={24} color="#374151" />
            </TouchableOpacity>
            
            {/* Messages Icon with Badge */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Messages' as any)}
              className="p-2 relative"
            >
              <MaterialIcons name="message" size={24} color="#374151" />
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[18px] h-[18px] items-center justify-center">
                <Text className="text-white text-xs font-bold">2</Text>
              </View>
            </TouchableOpacity>
            
            {/* Menu Icon */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Menu' as any)}
              className="p-2"
            >
              <MaterialIcons name="menu" size={24} color="#374151" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <ScrollViewWithBottomBar className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="py-6">
            {/* Quick Actions Card */}
            <View className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <Text className="text-lg font-bold text-gray-900 mb-4">Quick Actions</Text>
              
              {/* Order Card */}
              <TouchableOpacity 
                onPress={() => navigation.navigate('Orders' as any)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 flex-row items-center justify-between"
                style={{ backgroundColor: '#3b82f6' }}
              >
                <View className="flex-row items-center flex-1">
                  <View className="w-12 h-12 bg-white bg-opacity-20 rounded-lg items-center justify-center mr-4">
                    <MaterialIcons name="shopping-bag" size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-white font-bold text-lg">My Orders</Text>
                    <Text className="text-blue-100 text-sm">View your course orders and progress</Text>
                  </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
              </TouchableOpacity>
            </View>

            {/* Stats Cards */}
            <View className="flex-row justify-between mb-6">
              <View className="bg-white rounded-lg shadow-sm p-4 flex-1 mr-2">
                <View className="flex-row items-center justify-between mb-2">
                  <MaterialIcons name="school" size={24} color="#10b981" />
                  <Text className="text-2xl font-bold text-gray-900">3</Text>
                </View>
                <Text className="text-gray-600 text-sm">Active Courses</Text>
              </View>
              
              <View className="bg-white rounded-lg shadow-sm p-4 flex-1 ml-2">
                <View className="flex-row items-center justify-between mb-2">
                  <MaterialIcons name="schedule" size={24} color="#f59e0b" />
                  <Text className="text-2xl font-bold text-gray-900">12</Text>
                </View>
                <Text className="text-gray-600 text-sm">Hours Studied</Text>
              </View>
            </View>

            {/* Recent Activity */}
            <View className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <Text className="text-lg font-bold text-gray-900 mb-4">Recent Activity</Text>
              
              <View className="space-y-3">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-green-100 rounded-full items-center justify-center mr-3">
                    <MaterialIcons name="check" size={16} color="#10b981" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-medium">Completed Tajweed Lesson 5</Text>
                    <Text className="text-gray-500 text-sm">2 hours ago</Text>
                  </View>
                </View>
                
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center mr-3">
                    <MaterialIcons name="play-arrow" size={16} color="#3b82f6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-medium">Started Quran Recitation Course</Text>
                    <Text className="text-gray-500 text-sm">1 day ago</Text>
                  </View>
                </View>
                
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-purple-100 rounded-full items-center justify-center mr-3">
                    <MaterialIcons name="star" size={16} color="#8b5cf6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-medium">Earned "Consistent Learner" badge</Text>
                    <Text className="text-gray-500 text-sm">3 days ago</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
          {/* Bottom padding for bottom bar */}
          <View className="h-20" />
        </ScrollViewWithBottomBar>
      </SafeAreaView>

      {/* Bottom Bar */}
      <CustomBottomBar navigation={navigation} activeTab="Dashboard" />
    </>
  );
};

export default Dashboard;