import { TouchableOpacity, View, Text, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const Tabs = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // listen for keyboard show/hide
  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  if (keyboardVisible) return null; // hide tab bar when keyboard is open

  const getTabProps = (name: string) => {
    const index = state.routes.findIndex((r) => r.name === name);
    const route = state.routes[index];
    const { options } = descriptors[route.key];

    const label =
      typeof options.tabBarLabel === "string"
        ? options.tabBarLabel
        : typeof options.title === "string"
        ? options.title
        : route.name;

    const isFocused = state.index === index;
    const color = isFocused ? "#009000" : "#9e9e9e";

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    return { onPress, isFocused, color, label };
  };

  const saved = getTabProps("Saved");
  const search = getTabProps("SearchPage");
  const home = getTabProps("Home");
  const message = getTabProps("Message");
  const dashboard = getTabProps("Dashboard");

  // Mock data for notification indicators - ACTIVE FOR TESTING
  const hasNewMessages = true;

  return (
    <View
      className="flex-row justify-between px-2 rounded-xl bg-white border-t border-[#00990012] h-[60px] shadow-sm"
      style={{ paddingBottom: insets.bottom }}
    >
      <TabBtn {...dashboard} iconName="dashboard" IconSet={MaterialIcons} />
      <TabBtn {...search} iconName="search" IconSet={FontAwesome} />
      <TabBtn {...home} iconName="home" IconSet={FontAwesome} />
      <TabBtn {...message} iconName="chatbox-ellipses-outline" IconSet={Ionicons} hasIndicator={hasNewMessages} />
      <TabBtn {...saved} iconName="heart" IconSet={FontAwesome} />
    </View>
  );
};

export default Tabs;



interface TabBtnProps {
  onPress: () => void;
  isFocused: boolean;
  color: string;
  label: string;
  iconName: string;
  IconSet: typeof FontAwesome | typeof MaterialIcons | typeof Ionicons;
  hasIndicator?: boolean;
}

export const TabBtn = ({ onPress, isFocused, color, label, iconName, IconSet, hasIndicator = false }: TabBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 items-center justify-center z-10 rounded-xl mx-1 py-1 relative ${isFocused ? "bg-transparent" : ""}`}
    >
      <IconSet
        name={iconName}
        size={25}
        color={color}
        style={
          isFocused
            ? {
                backgroundColor: "#fff",
                borderRadius: 999,
                padding: 6,
                shadowColor: "#009000",
                shadowOpacity: 0.1,
                elevation: 4,
                transform: [{ scale: 1.5 }, { translateY: -10 }],
              }
            : undefined
        }
      />

      {hasIndicator && (
        <View className="absolute top-2 right-3 w-3 h-3 bg-red-500 rounded-full" />
      )}

      {!isFocused && (
        <Text
          className={`text-[9px] font-semibold ${
            isFocused ? "text-[#009000]" : "text-gray-500"
          }`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};