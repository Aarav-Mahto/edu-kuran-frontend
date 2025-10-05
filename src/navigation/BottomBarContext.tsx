import React, { useRef, createContext, useContext } from 'react';
import { Animated } from 'react-native';

// Context for managing bottom bar visibility
const BottomBarContext = createContext({
    hideBottomBar: () => { },
    showBottomBar: () => { },
    onScroll: (event: any) => { },
    translateY: new Animated.Value(0),
});

export const useBottomBar = () => useContext(BottomBarContext);

// Global Bottom Bar Provider
export function BottomBarProvider({ children }: any) {
    const translateY = useRef(new Animated.Value(0)).current;
    const lastScrollY = useRef(0);
    const scrollDirection = useRef('');

    const hideBottomBar = () => {
        Animated.timing(translateY, {
            toValue: 100, // Hide by moving down
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const showBottomBar = () => {
        Animated.timing(translateY, {
            toValue: 0, // Show by moving to original position
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const onScroll = (event: any) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;
        const scrollDiff = currentScrollY - lastScrollY.current;

        // Only trigger if scroll difference is significant (avoid micro-scrolls)
        if (Math.abs(scrollDiff) > 5) {
            if (scrollDiff > 0 && scrollDirection.current !== 'up') {
                // Scrolling up - hide bottom bar
                scrollDirection.current = 'up';
                hideBottomBar();
            } else if (scrollDiff < 0 && scrollDirection.current !== 'down') {
                // Scrolling down - show bottom bar
                scrollDirection.current = 'down';
                showBottomBar();
            }
        }

        lastScrollY.current = currentScrollY;
    };

    const contextValue = {
        hideBottomBar,
        showBottomBar,
        onScroll,
        translateY, // Expose translateY for the tab bar
    };

    return (
        <BottomBarContext.Provider value={contextValue}>
            {children}
        </BottomBarContext.Provider>
    );
}

// ScrollView wrapper that connects to bottom bar
export const ScrollViewWithBottomBar = ({ children, ...props }: any) => {
    const { onScroll } = useBottomBar();

    return (
        <Animated.ScrollView
            {...props}
            onScroll={onScroll}
            scrollEventThrottle={16}
        >
            {children}
        </Animated.ScrollView>
    );
};