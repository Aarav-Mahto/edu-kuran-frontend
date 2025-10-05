import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CustomBottomBar } from '@/src/navigation/BottomBar';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';

const Saved = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <HeaderWithIcons title="Saved" />

        {/* Content */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-600">Your saved content will appear here</Text>
        </View>
      </SafeAreaView>

      {/* Bottom Bar */}
      <CustomBottomBar navigation={navigation} activeTab="Saved" />
    </>
  );
}

export default Saved