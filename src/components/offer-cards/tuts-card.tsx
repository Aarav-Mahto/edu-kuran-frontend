import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    Dimensions,
    GestureResponderEvent,
    TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type TutsCardProps = {
    image: any;
    imageText: any;
    overlayText: string;
    title: string;
    price: string;
    rateType: 'hourly' | 'weekly';
    tutor: {
        name: string;
        avatar: any;
        rating: number;
        totalRatings: number;
        tutorLevel: string;
        onPress: () => void;
    };
    onPressDetails: () => void;
};

const TutsCard = ({
    image = null,
    imageText = null,
    overlayText,
    title,
    price,
    rateType,
    tutor,
    onPressDetails,
}: TutsCardProps) => {
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    const handleTouchStart = (e: GestureResponderEvent) => {
        touchStartY.current = e.nativeEvent.pageY;
    };

    const handleTouchEnd = (e: GestureResponderEvent) => {
        touchEndY.current = e.nativeEvent.pageY;
        const delta = Math.abs(touchEndY.current - touchStartY.current);
        if (delta < 8) {
            onPressDetails(); // It's a tap, not a scroll
        }
    };

    return (
        <View className="bg-white rounded-xl shadow-md overflow-hidden mx-auto my-2 mb-4" style={{ width: SCREEN_WIDTH * 0.95 }}>

            {/* Image + Overlay (Safe Tap) */}
            <Pressable
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                android_ripple={{ color: '#00000020' }}
            >
                {/* Conditional image/text rendering */}
                {image ? (
                    <Image source={image} className="w-full h-64" resizeMode="cover" />
                ) : (
                    <View className="relative w-full h-64 items-center justify-center bg-[#009000]">
                        <View className="w-full h-full">
                            <Image source={require('../../assets/islamic-flag.png')}
                                   className='object-cover h-full w-full'
                            />
                        </View>
                        <View className="absolute top-0 left-0 p-3 right-0 bottom-0 bg-black/70 items-center justify-center">
                            <Text className="text-xl text-center font-bold text-white">{imageText ? imageText : title}</Text>
                        </View>
                    </View>
                )}






                {/* <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 items-center justify-center">
                    <Text className="text-white font-bold text-lg px-4 text-center">{overlayText}</Text>
                </View> */}
            </Pressable>

            {/* Title & Price (Safe Tap) */}
            <Pressable
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="px-4 py-2 relative"
                android_ripple={{ color: '#00000010' }}
            >
                <Text className="text-lg font-semibold text-gray-800">{title}</Text>
                <View className="mt-1 flex flex-row items-center justify-end">
                    <MaterialIcons name="currency-rupee" size={18} style={{ color: '#009000', fontWeight: 'bold' }} />
                    <Text className="text-md text-[#009000]">{price} / {rateType}</Text>
                </View>
            </Pressable>

            {/* Tutor Info (Simple tap, not scroll sensitive) */}
            <Pressable
                onPress={tutor.onPress}
                className="flex-row items-center px-4 py-2 flex justify-between"
            // android_ripple={{ color: '#00000005' }}
            >
                <View className='flex flex-row'>
                    <Image source={tutor.avatar} className="w-10 h-10 rounded-full mr-3" />
                    <View className=''>
                        <Text className="text-md font-medium text-gray-900">{tutor.name}</Text>
                        <Text className="text-xs text-gray-500">⭐ {tutor.rating.toFixed(1)} ({tutor.totalRatings})</Text>
                    </View>
                </View>
                <View>
                    <Text className="text-md font-medium text-gray-900">{tutor.tutorLevel}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default TutsCard;
