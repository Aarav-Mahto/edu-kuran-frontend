import { View, Text, TouchableOpacity, ScrollView, Image, Pressable, LayoutChangeEvent } from "react-native";
import { CourseDataProps } from "../../types/tuts-type";
import TajweedCardBackground from '../../assets/custom-svg/quran-svg';
import TeachingSubjects from "../ui/subjects";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

type CourseCardsProps = {
    course: string;
    data: CourseDataProps[];
    onViewAll?: () => void;
    onTeachesCardClicked: (id: string, tutsType: string) => void;
};

export default function CourseCards({ course, data, onViewAll, onTeachesCardClicked }: CourseCardsProps) {
    return (
        <View className="w-[95.5%] rounded">
            {/* Header */}
            <View className="flex flex-row justify-between items-center px-4 py-3">
                <TouchableOpacity
                    className="w-full flex flex-row items-center justify-between gap-2"
                    onPress={onViewAll}>
                    <View className='flex flex-row items-center gap-2'>
                        <FontAwesome name="book" size={20} color="gray" />
                        <Text className="text-xl font-bold text-neutral-700">{course}</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color="gray" />
                </TouchableOpacity>
            </View>

            {/* Horizontal Scroll of Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 12 }}
                className="py-3 mx-auto"
            >
                {data.map((item, index) =>
                    item.tutsType === "tutsCard" ? (
                        <Card key={index} {...item} onTeachesCardClicked={onTeachesCardClicked} />
                    ) : (
                        <ProfileCard key={index} {...item} onTeachesCardClicked={onTeachesCardClicked} />
                    )
                )}
                <TouchableOpacity
                    onPress={onViewAll}
                    className="w-[80px] h-[200px] relative mr-4 rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">
                    <View className='h-full w-full flex flex-row items-center justify-center'>
                        <View className="h-[120px] px-2 flex items-center justify-center">
                            <FontAwesome name="plus" size={40} color="#047857" />
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function Card({
    tutsId,
    tutsType,
    tutor,
    tutsCard,
    onTeachesCardClicked,
}: CourseDataProps) {
    return (
        <Pressable
            onPress={() => onTeachesCardClicked(tutsId, tutsType)}
            className="w-[220px] h-[230px] relative mr-4 rounded-lg bg-white shadow-md border border-gray-100 overflow-hidden"
            style={{ elevation: 5 }}
        >
            <View className="h-[110px] w-[260px] bg-green-50 flex items-center justify-center">
                <TajweedCardBackground imageSource={tutsCard?.tutsImage} word={tutsCard?.tutsCategory} />
            </View>


            {/* Content */}
            <View className="px-3 mt-1 py-2 flex-1">
                {/* Title */}
                <Text className="text-green-700 text-sm font-bold leading-snug line-clamp-3">
                    {tutsCard?.tutsTitle}
                </Text>

                {/* Short Description */}
                {/* <Text className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {tutsCard?.tutsDescription}
                </Text> */}
            </View>

            {/* Footer */}
            <View className="relative flex flex-row items-center justify-between px-3 py-2 border-t border-t-neutral-100">
                <View className="flex flex-row items-center gap-2">
                    <Image source={tutor.avatar} className="w-10 h-10 rounded-full" />
                    <View>
                        <Text className="text-sm font-semibold text-gray-800 capitalize">
                            {tutor.username}
                        </Text>
                        <Text className="text-xs text-gray-500">
                            {tutor.language.join(", ")}
                        </Text>
                    </View>
                </View>

                {/* Rating */}
                {tutor.rating && (
                    <View className="flex flex-row items-center gap-1 absolute top-2 right-3">
                        <Ionicons name="star" size={16} color="#facc15" />
                        <Text className="text-xs font-medium text-gray-600">
                            {tutor.rating}
                        </Text>
                        {tutor.totalRatings && (
                            <Text className="text-xs text-gray-400">
                                ({tutor.totalRatings})
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </Pressable>
    );
}

function ProfileCard({
    tutsId,
    tutsType,
    tutor,
    tutsProfile,
    onTeachesCardClicked,
}: CourseDataProps) {
    return (
        <Pressable
            onPress={() => onTeachesCardClicked(tutsId, tutsType)}
            className="w-[220px] h-[230px] p-3 relative mr-4 flex items-center justify-center rounded-lg bg-white shadow-md border border-gray-100 overflow-hidden"
            style={{ elevation: 5 }}
        >
            <View className="">
                {/* Header */}
                <View className="flex flex-row items-center justify-between px-3 relative py-2 mb-2 border-b border-b-neutral-300">
                    <View className="flex flex-row items-center gap-2">
                        <Image source={tutor.avatar} className="w-10 h-10 rounded-full" />
                        <View>
                            <Text className="text-sm font-semibold text-gray-800 capitalize">
                                {tutor.username}
                            </Text>
                            <Text className="text-xs text-gray-500">
                                {tutor.language.join(", ")}
                            </Text>
                        </View>
                    </View>

                    {/* Rating */}
                    {tutor.rating && (
                        <View className="flex flex-row items-center gap-1 absolute top-2 right-3">
                            <Ionicons name="star" size={16} color="#facc15" />
                            <Text className="text-xs font-medium text-gray-600">
                                {tutor.rating}
                            </Text>
                            {tutor.totalRatings && (
                                <Text className="text-xs text-gray-400">
                                    ({tutor.totalRatings})
                                </Text>
                            )}
                        </View>
                    )}
                </View>

                {tutsProfile?.userShortBio && (
                    <Text className="text-neutral-800 text-sm leading-tight font-bold text-justify line-clamp-3 mt-1">
                        {tutsProfile.userShortBio}
                    </Text>
                )}
                <View className="my-1">
                    <TeachingSubjects subjects={tutsProfile?.userTeaching || []} maxLines={3} size="sm" />
                </View>
            </View>

        </Pressable>
    )
}
