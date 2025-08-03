import { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
  LayoutRectangle,
  findNodeHandle,
  UIManager,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilterButton from './Filter';

const SubHeader = () => {
  const [search, setSearch] = useState('');
  const [genderVisible, setGenderVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [genderLayout, setGenderLayout] = useState<LayoutRectangle | null>(null);
  const [filterLayout, setFilterLayout] = useState<LayoutRectangle | null>(null);

  const genderRef = useRef(null);
  const filterRef = useRef(null);

  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const tabs = ['Tajweed', 'Recitation', 'Hifz', 'Arabic', 'Islamic Studies'];

  const toggleFilter = (item: string) => {
    setSelectedFilters((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );
  };

  const measureDropdown = (
    ref: any,
    setter: (rect: LayoutRectangle) => void,
    onReady: () => void
  ) => {
    setTimeout(() => {
      if (ref.current && typeof ref.current.measure === 'function') {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
          // y is relative to the parent (not screen)
          setter({ x: pageX, y: pageY + height, width, height });
          onReady();
        });
      }
    }, 0);
  };

  const [appliedFilters, setAppliedFilters] = useState(null);

  const handleFilterApply = (filters) => {
    console.log('Applied Filters:', filters);
    setAppliedFilters(filters);
  };

  return (
    <SafeAreaView className="bg-white border-b border-gray-200 shadow-sm relative">
      {/* Search Bar */}
      <View className="flex flex-row items-center px-2 py-2 space-x-2 border border-neutral-300 mx-2 rounded-3xl">
        <Ionicons name="search-outline" size={22} color="gray" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search courses"
          className="flex-1 py-1.5 px-2 text-[16px] text-gray-800"
        />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={22} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View className="px-2 py-1 flex flex-row flex-wrap items-center gap-2 relative">
        <View className="flex flex-row">
          <View className="relative">
            <TouchableOpacity
              onPress={() => {
                setGenderVisible(!genderVisible);
                setFilterVisible(false);
              }}
              className="bg-blue-50 px-2 py-1 rounded-full mr-2"
            >
              <Text className="text-blue-600 font-medium">
                Gender{selectedGender ? `: ${selectedGender}` : ''}
              </Text>
            </TouchableOpacity>

            {/* Dropdown Modal for Gender */}
            {genderVisible && (
              <Modal transparent animationType="fade">
                <Pressable
                  onPress={() => setGenderVisible(false)}
                  className="absolute top-0 left-0 right-0 bottom-0 bg-black/10"
                />
                <View
                  className="absolute z-50 bg-white rounded-md border shadow-md w-40"
                  style={{
                    top: 200, // ⬅️ adjust this manually to fit under the button
                    left: 16, // ⬅️ adjust left to align under the button
                  }}
                >
                  {['Male', 'Female'].map((gender) => (
                    <TouchableOpacity
                      key={gender}
                      onPress={() => {
                        setSelectedGender(gender);
                        setGenderVisible(false);
                      }}
                      className="px-4 py-2"
                    >
                      <Text className="text-gray-800">{gender}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </Modal>
            )}
          </View>
          <FilterButton onApply={handleFilterApply} />
          
        </View>

        <View className="flex-1 flex flex-row flex-wrap justify-end">
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} className="bg-gray-100 px-2 my-1 py-0.5 rounded mr-2">
              <Text className="text-gray-700 text-[11px]">{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </SafeAreaView>
  );
};

export default SubHeader;
