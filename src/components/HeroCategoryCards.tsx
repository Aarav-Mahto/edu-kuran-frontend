import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Courses } from "../types/courses"; // your Courses object
import type { CoursesCategoryId, CoursesMap } from "../types/courses";

type HeroCategoryCardsProps = {
  data?: CoursesMap;
  onCourseCardClick?: (id: string) => void;
  enableSelection?: boolean;
  selectedId?: CoursesCategoryId | null; // 👈 NEW PROP to preselect or control externally
};

const HeroCategoryCards = ({
  onCourseCardClick,
  enableSelection = false,
  selectedId: controlledSelectedId,
}: HeroCategoryCardsProps) => {
  const coursesArray = Object.values(Courses);

  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(
    controlledSelectedId ?? null
  );

  // ✅ Sync internal state with prop if passed
  useEffect(() => {
    if (controlledSelectedId !== undefined) {
      setInternalSelectedId(controlledSelectedId);
    }
  }, [controlledSelectedId]);

  const handlePress = (id: string) => {
    if (enableSelection) {
      setInternalSelectedId(id);
    }
    onCourseCardClick?.(id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
      }}
    >
      {coursesArray.map((course) => {
        const isSelected = enableSelection && internalSelectedId === course.id;

        return (
          <TouchableOpacity
            key={course.id}
            onPress={() => handlePress(course.id)}
            className={`h-20 w-20 overflow-hidden my-1 mx-1 pt-0.5 rounded-lg flex flex-col items-center justify-between 
              ${isSelected ? "border-2 border-yellow-400 bg-yellow-100" : "border border-green-400 bg-transparent"}`}
          >
            <View className="w-full h-12">
              <Image
                source={course.coverImg}
                className="w-full h-full object-contain"
                resizeMode="contain"
              />
            </View>
            <Text
              numberOfLines={1}
              className={`text-neutral-100 text-center font-semibold w-full bg-green-700 px-0.5 py-0.5 ${
                course.title === "Islamic Studies" ? "text-[7px]" : "text-[10px]"
              }`}
            >
              {course.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default HeroCategoryCards;
