import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import TutsScreen from "./tuts-screen";
import HeaderWithIcons from "@/src/components/HeaderWithIcons";

const TutorialsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title="Tutorials" showBackButton={true} />
      <View className="flex-1">
        <TutsScreen />
      </View>
    </SafeAreaView>
  );
};

export default TutorialsScreen;