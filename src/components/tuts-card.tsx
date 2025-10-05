import { View, Text, TouchableOpacity, ScrollView, Image, Pressable, LayoutChangeEvent } from "react-native";
import { TutsTutorProps } from "../types/tuts-type";
import TutsCaredBackground from '../assets/custom-svg/tutscard-svg';
import TeachingSubjects from "../components/ui/subjects";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

type TutsCardProps = {
    data: TutsTutorProps[];
    onTutsTutorClicked: (id: string, tutsType: string) => void;
};

export default function TutsCard({ data, onTutsTutorClicked }: TutsCardProps) {
    return (
        <View className="w-full">

            {/* Horizontal Scroll of Cards */}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 10 }}
                className="py-3 mx-auto"
            >
                <View className="flex flex-col gap-2">
                    {data.map((item, index) =>
                        item.tutsType === "tutsCard" ? (
                            <Card key={index} {...item} onTutsTutorClicked={onTutsTutorClicked} />
                        ) : (
                            <ProfileCard key={index} {...item} onTutsTutorClicked={onTutsTutorClicked} />
                        )
                    )}
                </View>
                <TouchableOpacity
                    className="w-full h-[70px] mt-5 relative mr-4 bg-white shadow-md border border-gray-200 overflow-hidden">
                    <View className='h-full w-full flex flex-row items-center justify-center'>
                        <View className="h-[120px] px-2 flex flex-row gap-2 items-center justify-center">
                            <FontAwesome name="plus" size={40} color="#047857" />
                            <Text>...More</Text>
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
    onTutsTutorClicked,
}: TutsTutorProps) {
    return (
        <Pressable
            onPress={() => onTutsTutorClicked(tutsId, tutsType)}
            className="w-full h-fit relative bg-white shadow-md border border-gray-200 overflow-hidden"
            style={{ elevation: 5 }}
        >
            <View className="flex flex-row">
                <View className="flex-2 flex items-center justify-center">
                    <TutsCaredBackground
                        imageSource={tutsCard?.tutsImage}
                        word={tutsCard?.tutsCategory}
                    />
                </View>


                {/* Content */}
                <View className="flex-1 flex flex-col justify-between">
                    <View className="px-3 py-2">
                        {/* Title */}
                        <Text className="text-green-700 text-justify text-lg font-bold leading-snug line-clamp-3">
                            {tutsCard?.tutsTitle}
                        </Text>

                        {/* Short Description */}
                        {/* <Text className="text-gray-500 text-sm mt-1 line-clamp-2">
                            {tutsCard?.tutsDescription}
                        </Text> */}
                    </View>

                    <View>

                    </View>

                    {/* Footer */}
                    <View className="relative flex flex-row items-center justify-between px-3 py-2 border-t border-t-neutral-300">
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
                </View>
            </View>

        </Pressable>
    );
}

function ProfileCard({
    tutsId,
    tutsType,
    tutor,
    tutsProfile,
    onTutsTutorClicked,
}: TutsTutorProps) {
    return (
        <Pressable
            onPress={() => onTutsTutorClicked(tutsId, tutsType)}
            className="w-full h-[270px] p-6 relative bg-white shadow-md border border-gray-300 overflow-hidden"
            style={{ elevation: 5 }}
        >
            {tutsProfile?.userShortBio && (
                <Text className="text-neutral-800 text-lg leading-tight font-bold text-justify line-clamp-3 mt-1">
                    {tutsProfile.userShortBio}
                </Text>
            )}
            <View className="my-1">
                <TeachingSubjects subjects={tutsProfile?.userTeaching || []} maxLines={2} size="sm" />
            </View>
            {/* {tutsProfile?.userAbout && (
                <Text className="text-neutral-600 text-sm font-bold text-justify line-clamp-3 my-1">
                    {tutsProfile.userAbout}
                </Text>
            )} */}


            {/* Footer */}
            <View className="flex flex-row items-center justify-between px-3 relative py-2 mt-2 border-t border-t-neutral-300">
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
    )
}
