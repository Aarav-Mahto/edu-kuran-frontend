import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Modal, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const SubHeader = () => {
  const [search, setSearch] = useState('');
  const [genderModal, setGenderModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const tabs = ['Tajweed', 'Recitation', 'Hifz', 'Arabic', 'Islamic-Studies'];

  return (
    <SafeAreaView className="bg-white border-b border-gray-200 shadow-sm">
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
      <View className="px-2 py-1">
        <TouchableOpacity
          onPress={() => setGenderModal(true)}
          className="bg-blue-50 px-4 py-1 rounded-full mr-2"
        >
          <Text className="text-blue-600 font-medium">Gender</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilterModal(true)}
          className="bg-blue-50 px-4 py-1 rounded-full mr-2"
        >
          <Text className="text-blue-600 font-medium">Filters</Text>
        </TouchableOpacity>

        {tabs.map((tab) => (
          <TouchableOpacity key={tab} className="bg-gray-100 px-4 py-1 rounded-full mr-2">
            <Text className="text-gray-700">{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Gender Modal */}
      <Modal visible={genderModal} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/30 justify-center items-center"
          onPress={() => setGenderModal(false)}
        >
          <View className="bg-white w-56 rounded-lg p-4 shadow-md">
            <Text className="text-lg font-semibold mb-2">Select Gender</Text>
            {['Male', 'Female'].map((gender) => (
              <TouchableOpacity key={gender} className="py-2">
                <Text className="text-gray-700">{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Filters Modal */}
      <Modal visible={filterModal} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/30 justify-center items-center"
          onPress={() => setFilterModal(false)}
        >
          <View className="bg-white w-72 rounded-lg p-4 shadow-md">
            <Text className="text-lg font-semibold mb-2">Filter Options</Text>
            {['Price', 'Online', 'Languages', 'Time Slot', 'Country'].map((item) => (
              <TouchableOpacity key={item} className="py-2">
                <Text className="text-gray-700">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default SubHeader;
