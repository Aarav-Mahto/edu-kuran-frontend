import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const OrderScreen = () => {
  const orderItems = [
    {
      id: 1,
      title: 'Quran Recitation Course',
      instructor: 'Ustaad Ahmed',
      price: 99.99,
      duration: '3 months',
      image: '📖'
    },
    {
      id: 2,
      title: 'Tajweed Mastery',
      instructor: 'Ustaad Musa',
      price: 149.99,
      duration: '6 months',
      image: '🎵'
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <HeaderWithIcons title="My Orders" showBackButton={true} />
      
      <ScrollView className="flex-1">
        {/* Order Summary Card */}
        <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm">
          <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold text-gray-900">Order #12345</Text>
              <View className="bg-green-100 px-3 py-1 rounded-full">
                <Text className="text-green-800 text-sm font-medium">Active</Text>
              </View>
            </View>
            <Text className="text-gray-500 text-sm mt-1">Placed on March 15, 2024</Text>
          </View>

          {/* Order Items */}
          <View className="p-4">
            {orderItems.map((item) => (
              <View key={item.id} className="flex-row items-center py-3 border-b border-gray-50 last:border-b-0">
                <View className="w-12 h-12 bg-blue-100 rounded-lg items-center justify-center mr-4">
                  <Text className="text-2xl">{item.image}</Text>
                </View>
                
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900">{item.title}</Text>
                  <Text className="text-gray-500 text-sm">{item.instructor}</Text>
                  <Text className="text-gray-500 text-sm">{item.duration}</Text>
                </View>
                
                <Text className="font-bold text-gray-900">${item.price}</Text>
              </View>
            ))}
          </View>

          {/* Order Total */}
          <View className="p-4 bg-gray-50 rounded-b-lg">
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Subtotal</Text>
              <Text className="text-gray-900">${subtotal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Tax</Text>
              <Text className="text-gray-900">${tax.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between pt-2 border-t border-gray-200">
              <Text className="font-bold text-gray-900">Total</Text>
              <Text className="font-bold text-gray-900">${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Order Status */}
        <View className="bg-white mx-4 mt-4 rounded-lg shadow-sm p-4">
          <Text className="text-lg font-bold text-gray-900 mb-4">Order Status</Text>
          
          <View className="space-y-4">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center mr-4">
                <MaterialIcons name="check" size={16} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">Order Confirmed</Text>
                <Text className="text-gray-500 text-sm">March 15, 2024 at 10:30 AM</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center mr-4">
                <MaterialIcons name="check" size={16} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">Payment Processed</Text>
                <Text className="text-gray-500 text-sm">March 15, 2024 at 10:35 AM</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center mr-4">
                <MaterialIcons name="play-arrow" size={16} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">Course Access Granted</Text>
                <Text className="text-gray-500 text-sm">March 15, 2024 at 11:00 AM</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-gray-300 rounded-full items-center justify-center mr-4">
                <MaterialIcons name="schedule" size={16} color="white" />
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-500">Course Completion</Text>
                <Text className="text-gray-400 text-sm">Estimated: June 15, 2024</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="mx-4 mt-4 space-y-3">
          <TouchableOpacity className="bg-blue-600 py-4 rounded-lg flex-row items-center justify-center">
            <MaterialIcons name="play-circle-filled" size={20} color="white" />
            <Text className="text-white font-semibold ml-2">Continue Learning</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="border border-gray-300 py-4 rounded-lg flex-row items-center justify-center">
            <MaterialIcons name="support-agent" size={20} color="#374151" />
            <Text className="text-gray-700 font-semibold ml-2">Contact Support</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom padding */}
        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;