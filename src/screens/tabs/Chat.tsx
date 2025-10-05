import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title="Chat" showBackButton={true} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-900">Chat</Text>
        <Text className="mt-4 text-gray-600">Chat functionality will be implemented here</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;