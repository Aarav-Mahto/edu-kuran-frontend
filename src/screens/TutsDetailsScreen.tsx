import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, type RouteProp } from "@react-navigation/native";
import HeaderWithIcons from "@/src/components/HeaderWithIcons";
import type { RootStackParamList } from "@/src/types/navigation";
import TajweedCardBackground from "../assets/custom-svg/quran-svg";
import { tutsDetailsData } from "../data/tutsDetails";
import type { TutsDetailsProps } from "../types/tuts-type";

type TutsDetailsRouteProp = RouteProp<RootStackParamList, "TutsDetails">;

const TutsDetailsScreen: React.FC = () => {
  const route = useRoute<TutsDetailsRouteProp>();
  const { id } = route.params;

  const tutorial: TutsDetailsProps | undefined = tutsDetailsData.find(
    (item) => item.tutsId === id
  );

  if (!tutorial) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-gray-600">Tutorial not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white/80">
      <HeaderWithIcons title="Tutorial Details" showBackButton={true} />

      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          <View className="h-[160px] w-full bg-green-50 flex items-center justify-center rounded-lg mb-4">
            <TajweedCardBackground
              imageSource={tutorial.tutsCourseImg}
              word={tutorial.tutsCourse}
            />
          </View>

          <View className="bg-gray-50 rounded-lg p-4 mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              {tutorial.tutsTitle}
            </Text>
            <Text className="text-gray-600">{tutorial.tutsDescription}</Text>
            <Text className="text-indigo-600 font-bold mt-2">
              Price: {tutorial.tutsPrice}
            </Text>
          </View>

          {/* Continue Order button */}
          <View className="mb-8">
            <TouchableOpacity
              accessibilityLabel="Continue Order"
              onPress={() => tutorial.continueOrder(tutorial.tutsId)}
              className="bg-indigo-600 rounded-md px-4 py-3 items-center"
            >
              <Text className="text-white font-semibold">Continue ({tutorial.tutsPrice})</Text>
            </TouchableOpacity>
          </View>

          {tutorial.tutsRattings && (
            <View className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <Text className="font-semibold text-gray-900 mb-2">Ratings</Text>
              <Text className="text-gray-700">
                ⭐ {tutorial.tutsRattings.stars} by{" "}
                {tutorial.tutsRattings.userName}
              </Text>
              {tutorial.tutsRattings.review && (
                <Text className="text-gray-600 mt-1">
                  "{tutorial.tutsRattings.review}"
                </Text>
              )}
            </View>
          )}

          <View className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Tutor</Text>
            <Text className="text-gray-700">{tutorial.tutorInfo.tutorName}</Text>
            <Text className="text-gray-600">
              @{tutorial.tutorInfo.tutorUsername}
            </Text>
            <Text className="text-gray-600 mt-1">
              Languages: {tutorial.tutorInfo.tutorLang.join(", ")}
            </Text>
          </View>

          <View className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <Text className="font-semibold text-gray-900 mb-2">Available Slots</Text>
            <Text className="text-gray-600">
              Days: {tutorial.tutorCalender.days.join(", ")}
            </Text>
            <Text className="text-gray-600">
              Times: {tutorial.tutorCalender.times.join(", ")}
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutsDetailsScreen;
