import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TutsScreen from './tuts-screen';
import { ScrollViewWithBottomBar } from '@/src/navigation/BottomBarContext';
import HeaderWithIcons from '@/src/components/HeaderWithIcons';
import type { RootStackParamList } from '@/src/types/navigation';

type TutorialCategoryRouteProp = RouteProp<RootStackParamList, 'TutorialCategory'>;
type TutorialCategoryNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TutorialCategory'>;

interface TutorialCategoryPageProps {
  route: TutorialCategoryRouteProp;
  navigation: TutorialCategoryNavigationProp;
}

const TutorialCategoryPage = ({ route, navigation }: TutorialCategoryPageProps) => {
  const { category } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderWithIcons title={`${category} Tutorials`} showBackButton={true} />
      <ScrollViewWithBottomBar className="flex-1">
        <TutsScreen />
      </ScrollViewWithBottomBar>
    </SafeAreaView>
  );
};

export default TutorialCategoryPage;