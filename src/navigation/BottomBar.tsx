import { TouchableOpacity, View, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useBottomBar } from './BottomBarContext';

export const CustomBottomBar = ({ navigation, activeTab = 'Home' }: any) => {
    const { translateY } = useBottomBar();

    // Mock data for notification indicators - ACTIVE FOR TESTING
    const hasNewMessages = true;

    const tabs = [
        { name: 'Saved', icon: 'favorite', screen: 'Saved' },
        { name: 'Search', icon: 'search', screen: 'SearchPage', withProps: { autoFocusSearch: true } },
        { name: 'Home', icon: 'home', screen: 'Home' },
        { name: 'Messages', icon: 'message', screen: 'Messages', hasIndicator: hasNewMessages },
        { name: 'Dashboard', icon: 'account-circle', screen: 'Dashboard' },
    ];

    const handleNavigation = (tab: any) => {
        if (tab.withProps) {
            navigation.navigate(tab.screen, tab.withProps);
        } else {
            navigation.navigate(tab.screen);
        }
    };

    return (
        <Animated.View
            style={{
                transform: [{ translateY }],
            }}
            className="absolute bottom-0 left-0 right-0 pb-8 px-6"
        >
            <View className="bg-gray-900 rounded-full mx-4 px-2 py-3 flex-row justify-around items-center shadow-lg">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.name;

                    if (isActive) {
                        return (
                            <TouchableOpacity
                                key={tab.name}
                                onPress={() => handleNavigation(tab)}
                                className="w-14 h-14 bg-white rounded-full items-center justify-center shadow-md relative"
                            >
                                <MaterialIcons
                                    name={tab.icon}
                                    size={24}
                                    color="#1f2937"
                                />
                                {tab.hasIndicator && (
                                    <View className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />
                                )}
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={tab.name}
                            onPress={() => handleNavigation(tab)}
                            className="w-12 h-12 items-center justify-center relative"
                        >
                            <MaterialIcons
                                name={tab.icon}
                                size={22}
                                color="#9ca3af"
                            />
                            {tab.hasIndicator && (
                                <View className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full" />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </Animated.View>
    );
};
