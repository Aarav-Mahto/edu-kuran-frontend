import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  Animated,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type FilterValues = {
  minPrice: number;
  maxPrice: number;
  response: string;
  languages: string[];
  country: string;
  gender: string | null;
};

type FilterButtonProps = {
  onApply: (filters: FilterValues) => void;
};

const FilterButton = ({ onApply }: FilterButtonProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [country, setCountry] = useState<string | null>('India');
  const [gender, setGender] = useState<string | null>(null);

  const toggleLanguage = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const validateAndSetMinPrice = (value: string) => {
    const numValue = parseFloat(value);
    const max = parseFloat(maxPrice) || 0;
    if (value === '' || (isFinite(numValue) && numValue >= 0 && (maxPrice === '' || numValue <= max))) {
      setMinPrice(value);
    } else if (isFinite(numValue) && numValue > max && maxPrice !== '') {
      Alert.alert('Invalid Input', 'Minimum price cannot exceed maximum price.');
    }
  };

  const validateAndSetMaxPrice = (value: string) => {
    const numValue = parseFloat(value);
    const min = parseFloat(minPrice) || 0;
    if (value === '' || (isFinite(numValue) && numValue >= 0 && (minPrice === '' || numValue >= min))) {
      setMaxPrice(value);
    } else if (isFinite(numValue) && numValue < min && minPrice !== '') {
      Alert.alert('Invalid Input', 'Maximum price cannot be less than minimum price.');
    }
  };

  const applyFilters = () => {
    let min = parseFloat(minPrice) || 0;
    let max = parseFloat(maxPrice) || Infinity;
    if (min > max && maxPrice !== '') {
      Alert.alert('Invalid Range', 'Minimum price was greater than maximum price. Swapping values.');
      [min, max] = [max, min];
      setMinPrice(min.toString());
      setMaxPrice(max.toString());
    }
    min = Math.max(0, min);
    max = Math.max(0, max);
    onApply({
      minPrice: min,
      maxPrice: max,
      response: response || '',
      languages,
      country: country || '',
      gender: gender || '',
    });
    setModalVisible(false);
  };

  const clearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setResponse(null);
    setLanguages([]);
    setCountry('India');
    setGender(null);
  };

  const responseOptions = [
    'Fast Response',
    'In Few Minutes',
    'Within One Hour',
    'In Few Hours',
    'Currently Online',
  ];

  const languageOptions = ['Hindi', 'English', 'Urdu', 'Arabic'];
  const genderOptions = ['Male', 'Female'];

  const displayMax = 20000;

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-blue-50 px-3 py-1 rounded-full"
      >
        <Text className="text-blue-600 font-medium">Filters</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"
          onPress={() => setModalVisible(false)}
        />

        <View className="absolute top-32 self-center w-[90%] bg-white rounded-xl p-4 shadow-xl z-50">
          <View className="flex flex-row justify-between items-center border-b border-[#0090004f] pb-1">
            <Text className="text-xl font-semibold text-[#009000b0]">Filter Options</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="#374151" />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            {/* GENDER */}
            <Text className="text-lg font-semibold mt-2 text-gray-800">Gender</Text>
            <View className="flex flex-row flex-wrap gap-2 mt-2">
              {genderOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setGender(option === gender ? null : option)}
                  className={`px-3 py-1 rounded-full border ${
                    gender === option ? 'bg-green-100 border-green-600' : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <Text
                    className={`text-[13px] ${
                      gender === option ? 'text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* PRICE RANGE */}
            <Text className="text-lg font-semibold mt-4 text-gray-800">
              Price Range (₹{minPrice || 0} - ₹{maxPrice || 'No Limit'})
            </Text>
            <View className="flex flex-row items-end justify-between mb-4 mx-3">
              <View className="w-24">
                <Text className="text-sm font-semibold text-gray-600 mb-1">Min Price</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={validateAndSetMinPrice}
                  keyboardType="numeric"
                  placeholder="0"
                  className="rounded border py-2 leading-0 border-gray-200 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
              <View className="flex-1 mx-3 mb-4 max-w-full">
                <View
                  className="max-w-full"
                  style={{
                    height: 6,
                    backgroundColor: '#ddd',
                    borderRadius: 3,
                  }}
                />
                <Animated.View
                  style={{
                    position: 'absolute',
                    height: 6,
                    backgroundColor: '#009000',
                    borderRadius: 3,
                    width: `${((parseFloat(maxPrice) || 0) / displayMax) * 100}%`,
                  }}
                />
              </View>
              <View className="w-24">
                <Text className="text-sm font-semibold text-gray-600 mb-1">Max Price</Text>
                <TextInput
                  value={maxPrice}
                  onChangeText={validateAndSetMaxPrice}
                  keyboardType="numeric"
                  placeholder="No Limit"
                  className="rounded py-2 leading-0 border border-gray-200 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
            </View>

            {/* RESPONSE TIME */}
            <Text className="text-lg font-semibold mt-4 text-gray-800">Response Time</Text>
            <View className="flex flex-row flex-wrap gap-2 mt-2">
              {responseOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setResponse(option)}
                  className={`px-3 py-1 rounded-full border ${
                    response === option ? 'bg-green-100 border-green-600' : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <Text
                    className={`text-[13px] ${
                      response === option ? 'text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* LANGUAGES */}
            <Text className="text-lg font-semibold mt-4 text-gray-800">Languages</Text>
            <View className="flex flex-row flex-wrap gap-2 mt-2">
              {languageOptions.map((lang) => (
                <TouchableOpacity
                  key={lang}
                  onPress={() => toggleLanguage(lang)}
                  className={`px-3 py-1 rounded-full border ${
                    languages.includes(lang) ? 'bg-green-100 border-green-600' : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <Text
                    className={`text-[13px] ${
                      languages.includes(lang) ? 'text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {lang}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* COUNTRY */}
            <Text className="text-lg font-semibold mt-4 text-gray-800">Country</Text>
            <TouchableOpacity
              onPress={() => setCountry('India')}
              className={`mt-2 px-4 py-2 border rounded-full ${
                country === 'India' ? 'border-green-600 bg-green-100' : 'border-gray-300 bg-gray-100'
              }`}
            >
              <Text
                className={`text-[13px] ${
                  country === 'India' ? 'text-green-700 font-semibold' : 'text-gray-700'
                }`}
              >
                India
              </Text>
            </TouchableOpacity>

            {/* CLEAR AND APPLY BUTTONS */}
            <View className="flex flex-row justify-between mt-6">
              <TouchableOpacity
                onPress={clearFilters}
                className="bg-gray-200 rounded-full py-2 px-4"
              >
                <Text className="text-gray-700 text-center font-semibold">Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={applyFilters}
                className="bg-green-600 rounded-full py-2 px-4"
              
              >
                <Text className="text-white text-center font-semibold">Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default FilterButton;