import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

type TutorCardProps = {
  name: string;
  bio: string;
  level: string;
  totalRatings: number;
  hourlyRate: number;
  country: string;
  rating: number;
  profileImage: string;
  Teaches: Array<{ id: number; subject: string }>;
  onPressDetails: () => void;
  onPressProfile: () => void;
};

const TutorCard: React.FC<TutorCardProps> = ({
  name,
  bio,
  level,
  totalRatings,
  hourlyRate,
  country,
  rating,
  profileImage,
  onPressDetails,
  onPressProfile,
  Teaches,
}) => {
  const [expandedBio, setExpandedBio] = useState(false);

  return (
    <View className="bg-white dark:bg-neutral-900 shadow-md rounded-2xl p-4 mb-4 mx-3">
      {/* Top Section */}
      <View className="flex-row items-center gap-4">
        <Image
          source={{ uri: profileImage }}
          className="w-12 h-12 rounded-full bg-gray-200"
          resizeMode="cover"
        />

        <View className="flex-1">
          <TouchableOpacity onPress={onPressProfile}>
            <Text className="text-md font-medium text-gray-900">
              {name}
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center">
            <FontAwesome name="star" size={16} color="#facc15" />
            <Text className="text-sm text-gray-600 dark:text-gray-300">
              {rating} ({totalRatings})
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-md font-medium text-gray-900">{level}</Text>
        </View>
      </View>

      {/* Bio with See More / Less inside the same 4 lines */}
      <View className="mb-2" style={{ marginTop: 12 }}>
        {expandedBio ? (
          <Text className="text-neutral-950">
            {bio}
            <Text
              className="text-blue-300 font-bold"
              onPress={() => setExpandedBio(false)}
            >
              {" ...See less"}
            </Text>
          </Text>
        ) : (
          <Text className="text-neutral-800">
            {bio.slice(0, 120)}
            <Text
              className="text-blue-300 font-bold"
              onPress={() => setExpandedBio(true)}
            >
              {" ...See more"}
            </Text>
          </Text>
        )}
      </View>

      {/* Tags */}
      <View className="flex flex-row flex-wrap gap-2 mt-2">
        {Teaches.map((item) => (
          <Text
            key={item.id}
            className="bg-green-100 text-neutral-600 text-md font-medium px-1.5 py-0.5 rounded-sm"
          >
            {item.subject}
          </Text>
        ))}
      </View>

      {/* Footer */}
      <View className="mt-4 flex-row items-center justify-between">
        <View className="ml-2 border border-teal-600 rounded-full p-1">
          <Ionicons name="chatbox-ellipses-outline" size={24} color="#0d9488" />
        </View>
        <View className="border border-[#00900088] flex-row items-center rounded-md overflow-hidden">
          <Text className="text-md text-teal-600 font-bold pl-2 pr-1 py-1.5">
            ${hourlyRate}/hr
          </Text>
          <TouchableOpacity
            onPress={onPressDetails}
            className="bg-teal-600 pl-4 pr-1.5 py-1.5 flex flex-row gap-2 items-center"
          >
            <Text className="text-white text-md font-semibold">Continue</Text>
            <View className="flex flex-row">
              <FontAwesome name="angle-right" size={20} color="white" />
              <FontAwesome name="angle-right" size={20} color="pink" />
              <FontAwesome name="angle-right" size={20} color="#E9967A" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TutorCard;
