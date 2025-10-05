import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CustomBottomBar } from '@/src/navigation/BottomBar';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const Message = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <HeaderWithIcons title="Messages" />

        {/* Content */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-2xl font-bold text-gray-900">Messages</Text>
          <Text className="mt-4 text-gray-600">Chat functionality will be implemented here</Text>
        </View>
      </SafeAreaView>

      {/* Bottom Bar */}
      <CustomBottomBar navigation={navigation} activeTab="Messages" />
    </>
  );
};

export default Message;