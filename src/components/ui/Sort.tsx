import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SORT_OPTIONS, SortOption } from "@/src/types/sort";

type SortProps = {
  value: SortOption;
  onChange: (option: { label: string; value: SortOption }) => void;
};

const Sort: React.FC<SortProps> = ({ value, onChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (option: { label: string; value: SortOption }) => {
    onChange(option);
    setDropdownVisible(false);
  };

  return (
    <View className="p-2">
      {/* Sort Button */}
      <TouchableOpacity
        className="flex-row items-center px-5 py-1 rounded-2xl bg-blue-100"
        onPress={() => setDropdownVisible(prev => !prev)}
      >
        <MaterialCommunityIcons name="sort-ascending" size={16} color="black" />
        <Text className="ml-1 text-black font-medium">Sort</Text>
      </TouchableOpacity>

      {/* Dropdown as Modal */}
      {dropdownVisible && (
        <Modal transparent animationType="fade" visible={dropdownVisible}>
          {/* Overlay: clicking closes dropdown */}
          <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
            <View className="flex-1 bg-transparent" />
          </TouchableWithoutFeedback>

          {/* Dropdown menu */}
          <View className="absolute top-[23%] right-2 w-52 bg-white rounded-lg border shadow-lg z-50">
            <Text className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase border-b">
              Sort By
            </Text>
            {SORT_OPTIONS.map((item) => {
              const isActive = value === item.value;
              return (
                <TouchableOpacity
                  key={item.value}
                  className={`flex-row items-center px-4 py-3 ${isActive ? "bg-blue-50" : ""}`}
                  onPress={() => handleSelect(item)}
                >
                  <Ionicons
                    name={isActive ? "radio-button-on" : "radio-button-off"}
                    size={20}
                    color={isActive ? "#3b82f6" : "gray"}
                  />
                  <Text className={`ml-2 ${isActive ? "text-blue-800 font-semibold" : "text-gray-800"}`}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Sort;
