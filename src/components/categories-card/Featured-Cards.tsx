import { View, Text, TouchableOpacity, ScrollView, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Courses } from "../../types/courses";

type FeaturedCardsProps = {
  onViewAll?: () => void;
  onCourseCardClick?: (id: string) => void; // callback when a card is pressed
};

export default function FeaturedCards({ onViewAll, onCourseCardClick }: FeaturedCardsProps) {
  const coursesArray = Object.values(Courses);

  return (
    <View className="w-[95.5%]">
      {/* Header */}
      <View className="flex flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity 
          className="w-full flex flex-row justify-between items-center gap-2"
          onPress={onViewAll || (() => alert("View All Featured Courses"))}
        >
          <Text className='font-bold text-xl text-neutral-700'>Featured Courses</Text>
          <Entypo name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll of Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        className="py-3"
      >
        {coursesArray.map((course) => (
          <Card 
            key={course.id} 
            id={course.id} 
            title={course.title} 
            image={course.coverImg} 
            onCourseCardClick={onCourseCardClick} // pass the callback
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Card({
  id,
  image,
  title,
  onCourseCardClick,
}: {
  id: string;
  title: string;
  image: any;
  onCourseCardClick?: (id: string) => void;
}) {
  return (
    <Pressable
      onPress={() => onCourseCardClick ? onCourseCardClick(id) : alert(`Go to ${id}`)}
      className="w-[120px] h-[150px] flex flex-col justify-between mr-4 rounded-xl bg-white border border-neutral-100 shadow-lg overflow-hidden"
      style={{ elevation: 5 }}
    >
      {/* Image */}
      <View className="relative z-0">
        <Image source={image} className="w-full h-[125px] object-contain" resizeMode="contain" />
      </View>

      {/* Card Content */}
      <View className="p-3 py-1 bg-yellow-300 relative z-1">
        <Text className="font-bold text-xs text-center text-neutral-800 mb-1" numberOfLines={1}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
