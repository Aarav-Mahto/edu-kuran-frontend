import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

export default function Support() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <HeaderWithIcons title="Help & Support" showBackButton={true} />
            <View className="flex-1 items-center justify-center">
                <Text className="text-4xl font-bold text-gray-900">Support</Text>
                <Text className="text-gray-600 mt-4">Help and support options coming soon...</Text>
            </View>
        </SafeAreaView>
    );
}
