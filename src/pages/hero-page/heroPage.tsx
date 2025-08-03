import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "~/components/common/hero-header";
import SubHeader from "~/components/common/hero-subHeader";

const HeroPage = () => {
  const handleItemClick = (item: string) => {
    Alert.alert('Selected', item);
    // You can replace content based on item here
  };

  return (
    <>
        <View className="">
          <Header onSelectItem={handleItemClick} />
          <SubHeader />
          {/* Your homepage content */}
        </View>
    </>
  );
};

export default HeroPage;
