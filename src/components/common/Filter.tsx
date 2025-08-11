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
  Image,
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

  const validateMinPrice = (value: string) => {
    const numValue = parseFloat(value);
    const max = parseFloat(maxPrice) || 0;
    if (value === '') {
      setMinPrice('');
    } else if (isFinite(numValue) && numValue >= 0) {
      if (maxPrice !== '' && numValue > max) {
        Alert.alert('Invalid Input', 'Minimum price cannot exceed maximum price.');
        setMinPrice('');
      } else {
        setMinPrice(value);
      }
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid minimum price.');
      setMinPrice('');
    }
  };

  const validateMaxPrice = (value: string) => {
    const numValue = parseFloat(value);
    const min = parseFloat(minPrice) || 0;
    if (value === '') {
      setMaxPrice('');
    } else if (isFinite(numValue) && numValue >= 0) {
      if (minPrice !== '' && numValue < min) {
        Alert.alert('Invalid Input', 'Maximum price cannot be less than minimum price.');
        setMaxPrice('');
      } else {
        setMaxPrice(value);
      }
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid maximum price.');
      setMaxPrice('');
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
    'Currently Online',
  ];

  const languageOptions = ['Hindi', 'English', 'Urdu', 'Arabic'];
  const genderOptions = ['Male', 'Female'];

  const displayMax = 5000;

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-blue-50 px-3 py-1 rounded-full"
      >
        <View className="text-blue-600 font-medium flex flex-row items-center justify-center gap-1">
          <Ionicons name="filter-sharp" size={20} color="#374151" />
          <Text>Filters</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"
          onPress={() => setModalVisible(false)}
        />

        <View className="absolute top-32 self-center w-[90%] bg-white rounded-xl p-4 shadow-xl z-50">
          <View className="flex flex-row justify-between items-center border-b-0 border-[#0090004f] pb-1">
            <Text className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">Filter</Text>
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
                  className={`me-2 px-2.5 py-0.5 rounded-sm ${gender === option ? 'bg-[#009000] border border-green-600' : 'bg-gray-100 border-gray-300'
                    }`}
                >
                  <Text
                    className={`text-md font-normal ${gender === option ? 'text-neutral-50' : 'text-blue-800'
                      }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* PRICE RANGE */}
            <Text className="text-lg font-semibold mt-4 text-gray-800">
              Price Range (₹{minPrice || 0} - ₹{maxPrice || '...'})
            </Text>
            <View className="flex flex-row items-start justify-between mb-4 mx-3">
              <View className="w-24">
                <Text className="text-sm font-semibold text-gray-600 mb-1">Min Price</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={setMinPrice} // Update state while typing without validation
                  onEndEditing={(e) => validateMinPrice(e.nativeEvent.text)} // Validate on blur
                  keyboardType="numeric"
                  placeholder="0"
                  className="rounded border py-1 leading-0 border-green-100 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
              <View className="flex-1 mx-3 mt-2 max-w-full">
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
                  onChangeText={setMaxPrice} // Update state while typing without validation
                  onEndEditing={(e) => validateMaxPrice(e.nativeEvent.text)} // Validate on blur
                  keyboardType="numeric"
                  placeholder="No Limit"
                  className="rounded py-1 leading-0 border border-green-100 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
            </View>

            {/* RESPONSE TIME */}
            <Text className="text-lg font-semibold text-gray-800">Response Time</Text>
            <View className="flex flex-row flex-wrap gap-2 mt-2">
              {responseOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setResponse(option)}
                  className={`me-2 px-2.5 py-0.5 rounded-sm ${response === option ? 'bg-[#009000] border border-green-600' : 'bg-gray-100 border-gray-300'
                    }`}
                >
                  <Text
                    className={`text-md font-normal ${response === option ? 'text-neutral-50' : 'text-blue-800'
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
                  className={`me-2 px-2.5 py-0.5 rounded-sm ${languages.includes(lang) ? 'bg-[#009000] border border-green-600' : 'bg-gray-100 border-gray-300'
                    }`}
                >
                  <Text
                    className={`text-[13px] ${languages.includes(lang) ? 'text-neutral-50' : 'text-blue-800'
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
              className={`flex-row items-center w-24 me-2 px-2.5 py-0.5 rounded-sm ${country === 'India' ? 'bg-[#009000] border border-green-600' : 'border-gray-300 bg-gray-100'
                }`}
            >
              <Image
                source={{ uri: 'https://flagcdn.com/w40/in.png' }}
                style={{ width: 20, height: 14, marginRight: 6, borderRadius: 2 }}
                resizeMode="contain"
              />
              <Text
                className={`text-[13px] ${country === 'India' ? 'text-neutral-50' : 'text-gray-700'}`}
              >
                India
              </Text>
            </TouchableOpacity>

            {/* CLEAR AND APPLY BUTTONS */}
            <View className="flex flex-row justify-end gap-3 mt-6">
              <TouchableOpacity
                onPress={clearFilters}
                className="border border-gray-200 rounded-sm py-1.5 px-4"
              >
                <Text className="text-gray-700 text-center font-semibold">Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={applyFilters}
                className="border border-green-600 rounded-sm py-1.5 px-4"
              >
                <Text className="text-green-600 text-center font-semibold">Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default FilterButton;