import React, { useRef, useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    Pressable,
    GestureResponderEvent,
    Animated,
} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const CustomBanner1 = () => {
    return (
        <Pressable className="h-full w-full bg-green-100 flex justify-center items-center">
            <Text className="text-2xl font-bold text-green-800">
                Hello Custom Banner -1
            </Text>
        </Pressable>
    );
};

const CustomBanner2 = () => {
    return (
        <Pressable className="h-full w-full bg-green-100 flex justify-center items-center">
            <Text className="text-2xl font-bold text-green-800">
                Hello Custom Banner -2
            </Text>
        </Pressable>
    );
};

const originalBanners = [
    {
        id: 1,
        image: require('../assets/bannerImg/banner1.webp'),
        title: 'Innovate with Us',
        subtitle: 'Join our cutting-edge tech revolution',
        onBannerClicked: () => alert('Clicked Slide 1'),
    },
    {
        id: 2,
        image: require('../assets/bannerImg/banner2.jpg'),
        title: 'Join Our Mission',
        subtitle: 'Be part of something bigger',
        onBannerClicked: () => alert('Clicked Slide 2'),
    },
    {
        id: 3,
        customBanner: <CustomBanner2 />,
        onBannerClicked: () => alert('Clicked Slide 3'),
    },
    {
        id: 4,
        image: require('../assets/bannerImg/banner3.webp'),
        title: 'Build the Future',
        subtitle: 'Shape tomorrow with us',
        onBannerClicked: () => alert('Clicked Slide 3'),
    },
    {
        id: 5,
        image: require('../assets/bannerImg/banner4.jpg'),
        title: 'Work with Experts',
        subtitle: 'Collaborate with industry leaders',
        onBannerClicked: () => alert('Clicked Slide 5'),
    },
    {
        id: 6,
        customBanner: <CustomBanner1 />,
        onBannerClicked: () => alert('Clicked Slide 6'),
    },
    {
        id: 7,
        image: require('../assets/bannerImg/banner5.jpg'),
        title: 'Discover Innovation',
        subtitle: 'Explore new possibilities',
        onBannerClicked: () => alert('Clicked Slide 7'),
    },
];

// Create an extended array with duplicates for infinite scrolling
const banners = [
    originalBanners[originalBanners.length - 1], // Duplicate last banner at start
    ...originalBanners,
    originalBanners[0], // Duplicate first banner at end
];
type HeroBannerProps = {
    onBannerClicked?: (bannerId: number) => void;
};

export default function HeroBanner({ onBannerClicked }: HeroBannerProps) {
    const scrollRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (first real banner)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isProgrammaticScroll = useRef(false);

    useEffect(() => {
        // Fade in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        const interval = setInterval(() => {
            const nextIndex = currentIndex + 1;
            isProgrammaticScroll.current = true;
            scrollRef.current?.scrollTo({
                x: nextIndex * (SCREEN_WIDTH - 16),
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, fadeAnim]);

    const handleTouchStart = (e: GestureResponderEvent) => {
        touchStartX.current = e.nativeEvent.pageX;
    };

    const handleTouchEnd = (e: GestureResponderEvent, bannerId?: number) => {
        touchEndX.current = e.nativeEvent.pageX;
        const distance = Math.abs(touchEndX.current - touchStartX.current);

        if (distance < 10 && bannerId !== undefined && onBannerClicked) {
            onBannerClicked(bannerId);
        }
    };

    const handleScroll = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / (SCREEN_WIDTH - 16));
        setCurrentIndex(index);

        // Handle infinite scroll boundaries
        if (index === 0) {
            // Jump to the last real banner silently
            setTimeout(() => {
                isProgrammaticScroll.current = true;
                scrollRef.current?.scrollTo({
                    x: (banners.length - 2) * (SCREEN_WIDTH - 16),
                    animated: false,
                });
                setCurrentIndex(banners.length - 2);
            }, 0);
        } else if (index === banners.length - 1) {
            // Jump to the first real banner silently
            setTimeout(() => {
                isProgrammaticScroll.current = true;
                scrollRef.current?.scrollTo({
                    x: 1 * (SCREEN_WIDTH - 16),
                    animated: false,
                });
                setCurrentIndex(1);
            }, 0);
        }
    };

    const handleMomentumScrollEnd = () => {
        if (isProgrammaticScroll.current) {
            isProgrammaticScroll.current = false;
            return;
        }
        // Ensure correct index after manual scroll
        const adjustedIndex = currentIndex === 0 ? banners.length - 2 : currentIndex === banners.length - 1 ? 1 : currentIndex;
        setCurrentIndex(adjustedIndex);
    };

    return (
        <View className="relative mt-4">
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                className="rounded-2xl overflow-hidden"
                style={{ width: SCREEN_WIDTH - 16, height: SCREEN_HEIGHT * 0.3 }}
                snapToInterval={SCREEN_WIDTH - 16}
                decelerationRate="fast"
                onScroll={handleScroll}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                scrollEventThrottle={16}
                contentOffset={{ x: (SCREEN_WIDTH - 16) * 1, y: 0 }} // Start at first real banner
            >
                {banners.map((banner, index) => (
                    <View
                        key={`${banner.id}-${index}`}
                        style={{ width: SCREEN_WIDTH - 16, height: SCREEN_HEIGHT * 0.3 }}
                        className="overflow-hidden"
                    >
                        {banner.customBanner ? (
                            <Pressable 
                                onTouchStart={handleTouchStart}
                                onTouchEnd={(e) => handleTouchEnd(e, banner.id)}
                                style={{ width: SCREEN_WIDTH - 16, height: SCREEN_HEIGHT * 0.3 }}
                                className="overflow-hidden"
                            >
                                <Animated.View style={{ opacity: fadeAnim }} className="flex-1">
                                    {banner.customBanner}
                                </Animated.View>
                            </Pressable>
                        ) : (
                            <Pressable
                                onTouchStart={handleTouchStart}
                                onTouchEnd={(e) => handleTouchEnd(e, banner.id)}
                                style={{ width: SCREEN_WIDTH - 16, height: SCREEN_HEIGHT * 0.3 }}
                                className="overflow-hidden"
                            >
                                <Animated.View style={{ opacity: fadeAnim }} className="flex-1">
                                    <Image
                                        source={banner.image}
                                        resizeMode="cover"
                                        className="w-full h-full absolute"
                                    />
                                    <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                                        <Text className="text-white text-xl font-bold mb-1">
                                            {banner.title}
                                        </Text>
                                        <Text className="text-white text-sm font-medium opacity-90">
                                            {banner.subtitle}
                                        </Text>
                                    </View>
                                </Animated.View>
                            </Pressable>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}