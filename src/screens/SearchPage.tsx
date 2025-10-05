import { View, Text, TextInput, Pressable, Keyboard, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollViewWithBottomBar } from "@/src/navigation/BottomBarContext";
import HeaderWithIcons from "@/src/components/HeaderWithIcons";
import FilterButton from "@/src/components/Filter";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "@/src/types/navigation";
import { SORT_OPTIONS, SortOption } from "../types/sort";
import Sort from "../components/ui/Sort";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CustomBottomBar } from "../navigation/BottomBar";
import TutsScreen from "./tuts-screen";
import HeroCategoryCards from "../components/HeroCategoryCards";
import TutsCard from "../components/tuts-card";
import { TutsTutorData } from "../data/tutsData";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type SearchRoute = RouteProp<RootStackParamList, "SearchPage">;

const SearchPage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<SearchRoute>();
  const { autoFocusSearch } = route.params;
  const { selectedCategoryId } = route.params
  const [sortedBy, setSortedBy] = useState<{ label: string; value: SortOption }>(
    SORT_OPTIONS[0]
  );
  const [search, setSearch] = useState("");
  const inputRef = useRef<TextInput>(null);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(autoFocusSearch ? 0 : 1)).current;

  useEffect(() => {
    if (autoFocusSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocusSearch]);

  // Keyboard listeners with fade - Hide & show Bottombar
  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      // wait a bit for keyboard to finish hiding
      setTimeout(() => {
        setKeyboardVisible(false);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 500);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };

  }, []);

  const handleFilterApply = (filters: any) => {
    alert("Applied Filters:" + filters);
  };

  const openSavedItem = () => {
    navigation.navigate("Saved");
  };

  function onCourseCardClick(id: any): void {
    //alert("Function not implemented: "+id);
  }

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

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <HeaderWithIcons title="Search" showBackButton={true} />
        <ScrollViewWithBottomBar className="flex-1">
          <View className="p-4">
            {/* Search Bar */}
            <View className="flex flex-row items-center justify-between w-full box-border">
              <View className="w-[80%] mx-2 flex flex-row items-center px-2 py-2 my-2 border border-neutral-400 rounded-lg">
                <Ionicons name="search-outline" size={22} color="gray" />
                <TextInput
                  ref={inputRef}
                  value={search}
                  onChangeText={setSearch}
                  placeholder="Search courses"
                  className="flex-1 py-1.5 px-2 text-[14px] text-gray-800"
                  autoFocus={autoFocusSearch}
                />
              </View>
              <Pressable onPress={openSavedItem} className="flex items-center justify-center">
                <Ionicons name="heart-circle-outline" size={36} color="#009000" />
              </Pressable>
            </View>

            <View>
              <HeroCategoryCards
                onCourseCardClick={(id: any) => onCourseCardClick(id)}
                enableSelection={true}
                selectedId={selectedCategoryId}
              />
            </View>

            {/* Sort & Filter */}
            <View className="w-full flex flex-row items-start justify-between">
              <View className="">
                <FilterButton onApply={handleFilterApply} />
              </View>
              <View className="bg-white flex flex-col items-end justify-end">
                <Sort
                  value={sortedBy.value}
                  onChange={(option) => {
                    setSortedBy(option);
                    console.log("Selected sort:", option.label, option.value);
                  }}
                />
                <Text className="text-base text-gray-800">{sortedBy.label}</Text>
              </View>
            </View>
          </View>
          {/* Cards */}
          <View>
            {/* <TutsScreen /> */}
            <TutsCard
              data={TutsTutorData}
              onTutsTutorClicked={(id: string, tutsType: string) =>onTeachesCardClicked(id, tutsType)}
            />
          </View>

        </ScrollViewWithBottomBar>
      </SafeAreaView>

      {/* Fade-in Bottom Bar when keyboard is hidden */}
      {!isKeyboardVisible && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <CustomBottomBar navigation={navigation} activeTab="Search" />
        </Animated.View>
      )}
    </>
  );
};

export default SearchPage;
