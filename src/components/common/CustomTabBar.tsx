
import { TouchableOpacity, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

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
  const search = getTabProps("Search");
  const home = getTabProps("Home");
  const message = getTabProps("Message");
  const profile = getTabProps("Profile");

  return (
    <View
      className="flex-row justify-between px-2 rounded-xl bg-white border-t border-[#00990012] h-[60px] shadow-sm"
      style={{ paddingBottom: insets.bottom }}
    >
      <TabBtn {...saved} iconName="heart" IconSet={Icon} />
      <TabBtn {...search} iconName="search" IconSet={Icon} />
      <TabBtn {...home} iconName="home-outline" IconSet={Icon} />
      <TabBtn {...message} iconName="chatbox-ellipses-outline" IconSet={Icon} />
      <TabBtn {...profile} iconName="account-circle" IconSet={MaterialCommunityIcons} />
    </View>
  );
};

export default CustomTabBar;


interface TabBtnProps {
  onPress: () => void;
  isFocused: boolean;
  color: string;
  label: string;
  iconName: string;
  IconSet: typeof Icon;
}

export const TabBtn = ({ onPress, isFocused, color, label, iconName, IconSet }: TabBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 items-center justify-center z-10 rounded-xl mx-1 py-1 ${isFocused ? "bg-transparent" : ""}`}
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

