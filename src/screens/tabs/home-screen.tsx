import { Pressable, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollViewWithBottomBar } from "@/src/navigation/BottomBarContext";
import { CustomBottomBar } from "@/src/navigation/BottomBar";
import type { RootStackParamList } from "@/src/types/navigation";
import HeaderWithIcons from "@/src/components/HeaderWithIcons";
import HeroBanner from "@/src/components/HeroSlides";
import FeaturedCards from "@/src/components/categories-card/Featured-Cards";
import CourseCards from "@/src/components/categories-card/Course-Cards";
import HeroCategoryCards from "@/src/components/HeroCategoryCards";
import { CourseData } from "../../data/tutsData";
import { Courses } from "../../types/courses";
import { Ionicons } from '@expo/vector-icons';
import { CoursesCategoryId } from '../../types/courses';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleCategories = (category: any) => {
    if (category === "courses") {
      navigation.navigate("AllCourses");
    } else {
      navigation.navigate("SearchPage", { autoFocusSearch: false, selectedCategoryId: category });
    }
  };

  const onCourseCardClick = (id: CoursesCategoryId) => {
    navigation.navigate("SearchPage", { autoFocusSearch: false, selectedCategoryId: id });
  };

  const onTeachesCardClicked = (id: string, tutsType: string) => {
    if (tutsType === "tutsCard") {
      // Redirect to tutsDetails page
      navigation.navigate("TutsDetails", { id });
    } else if (tutsType === "tutsProfile") {
      // Redirect to tutorProfile page
      navigation.navigate("TutorProfile", { id });
    } else {
      console.log("Tuts type: " + tutsType + "\nTuts Id: " + id);
    }
  };

  const onBannerClicked = (bannerId: number) => {
    alert("Clicked banner id is: " + bannerId);
  };

  const handleSearchClick = () => {
    navigation.navigate("SearchPage", { autoFocusSearch: true });
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header with Icons */}
        <HeaderWithIcons title="Kuran Learning" />

        <ScrollViewWithBottomBar className="flex-1">
            <View className="flex flex-row items-center justify-between w-full box-border">
              <Pressable 
                onPress={handleSearchClick}
                className="w-[80%] mx-2 flex flex-row items-center px-2 py-2 my-2 border border-neutral-400 rounded-lg">
                <Ionicons name="search-outline" size={22} color="gray" />
                <Text className="py-1.5 text-gray-500 px-2">Search</Text>
              </Pressable>
            </View>

          <HomePageComponents
            onCategorySelect={handleCategories}
            onCourseCardClick={onCourseCardClick}
            onTeachesCardClicked={onTeachesCardClicked}
            onBannerClicked={onBannerClicked}
          />

          {/* Bottom padding for bottom bar */}
          <View className="h-20" />
        </ScrollViewWithBottomBar>
      </SafeAreaView>

      {/* Bottom Bar */}
      <CustomBottomBar navigation={navigation} activeTab="Home" />
    </>
  );
};

export default HomeScreen;

// Home page components
type HomePageProps = {
  onCategorySelect: (category: string) => void;
  onCourseCardClick: (id: string) => void;
  onTeachesCardClicked: (id: string, tutsType: string) => void;
  onBannerClicked: (bannerId: number) => void;
};

const HomePageComponents = ({
  onCategorySelect,
  onCourseCardClick,
  onTeachesCardClicked,
  onBannerClicked
}: HomePageProps) => (
  <>
    <HeroCategoryCards
      onCourseCardClick={(id: any) => onCourseCardClick(id)}
    />
    <HeroBanner onBannerClicked={(bannerId: any) => onBannerClicked(bannerId)} />

    <FeaturedCards
      onViewAll={() => onCategorySelect("courses")}
      onCourseCardClick={(id: any) => onCourseCardClick(id)}
    />

    {Object.values(Courses).map((course) => (
      <CourseCards
        key={course.id}
        course={course.title}
        data={CourseData}
        onViewAll={() => onCategorySelect(course.id)}
        onTeachesCardClicked={(id: any, tutsType: any) => onTeachesCardClicked(id, tutsType)}
      />
    ))}
  </>
);


