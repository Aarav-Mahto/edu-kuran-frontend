import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

type HeaderProps = {
  onSelectItem: (item: string) => void;
};

const mainCourses = ['Tajweed', 'Recitation', 'Hifz', 'Arabic', 'Islamic Studies'];

const islamicStudiesChildren = [
  'Prophet’s Life',
  'Companion’s Life',
  'Women Seerah',
];

export default function Header({ onSelectItem }: HeaderProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showIslamicStudiesChildren, setShowIslamicStudiesChildren] = useState(false);

  return (
    <SafeAreaView>
      <View className="bg-white border-b border-neutral-200 shadow-md px-4 py-1 flex-row items-center justify-between">
        {/* Left: Logo and Home */}
        <View className="flex-row items-center gap-1">
          <View className="w-40 h-16">
            <Image
              source={require('../../assets/my-logo.png')}
              className="w-full h-full object-contain"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Center: Courses Dropdown */}
        <View className="relative px-3 py-1">
          <TouchableOpacity
            onPress={() => setDropdownVisible(!dropdownVisible)}
            className="flex-row items-center gap-1"
          >
            <Text className="text-gray-700 font-medium">Courses</Text>
            <Ionicons
              name={dropdownVisible ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="gray"
            />
          </TouchableOpacity>

          {dropdownVisible && (
            <Modal transparent animationType="fade" visible={dropdownVisible}>
              <Pressable
                onPress={() => {
                  setDropdownVisible(false);
                  setShowIslamicStudiesChildren(false);
                }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-black/10"
              />
              <View className="absolute top-16 right-4 bg-white rounded-md border shadow-md z-50 w-72 py-5 self-end">
                <ScrollView style={{ maxHeight: 250 }} className="p-2">
                  {mainCourses.map((course) => {
                    if (course === 'Islamic Studies') {
                      return (
                        <View key="Islamic Studies">
                          <TouchableOpacity
                            onPress={() =>
                              setShowIslamicStudiesChildren(
                                !showIslamicStudiesChildren
                              )
                            }
                            className="flex-row justify-between items-center px-3 py-2"
                          >
                            <Text className="text-gray-800">Islamic Studies</Text>
                            <Ionicons
                              name={
                                showIslamicStudiesChildren
                                  ? 'chevron-up'
                                  : 'chevron-down'
                              }
                              size={16}
                              color="gray"
                            />
                          </TouchableOpacity>
                          {showIslamicStudiesChildren &&
                            islamicStudiesChildren.map((child) => (
                              <Pressable
                                key={child}
                                onPress={() => {
                                  onSelectItem(child);
                                  setDropdownVisible(false);
                                  setShowIslamicStudiesChildren(false);
                                }}
                                className="pl-6 pr-3 py-2"
                              >
                                <Text className="text-gray-700">{child}</Text>
                              </Pressable>
                            ))}
                        </View>
                      );
                    } else {
                      return (
                        <Pressable
                          key={course}
                          onPress={() => {
                            onSelectItem(course);
                            setDropdownVisible(false);
                          }}
                          className="px-3 py-2"
                        >
                          <Text className="text-gray-800">{course}</Text>
                        </Pressable>
                      );
                    }
                  })}
                </ScrollView>
              </View>
            </Modal>
          )}
        </View>

        {/* Right: Profile */}
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={() => onSelectItem('Profile')}>
            <Ionicons name="person-circle-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
