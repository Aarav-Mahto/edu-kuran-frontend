import { Ionicons } from "@expo/vector-icons";
import { useState, useRef, useEffect } from "react";
import { View, TextInput } from "react-native";

type HeroSearchBoxProps = {
  autoFocusSearch?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

const HeroSearchBox = ({
  autoFocusSearch = false,
  onFocus,
  onBlur,
}: HeroSearchBoxProps) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocusSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocusSearch]);

  return (
    <View className="bg-white shadow-sm relative pr-5">
      <View className="flex flex-row items-center justify-between w-full box-border">
        <View className="w-[80%] mx-2 flex flex-row items-center px-2 py-2 my-2 border border-neutral-400 rounded-lg">
          <Ionicons name="search-outline" size={22} color="gray" />
          <TextInput
            ref={inputRef}
            value={search}
            onChangeText={setSearch}
            placeholder="Search courses"
            className="flex-1 py-1.5 px-2 text-[14px] text-gray-800"
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>
        <View>
          <View className="flex items-center justify-center">
            <Ionicons name="heart-circle-outline" size={36} color="#009000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeroSearchBox;
