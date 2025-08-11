import { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilterButton from './Filter';

const SubHeader = () => {
  const [search, setSearch] = useState('');
  const tabs = ['Tajweed', 'Recitation', 'Hifz', 'Arabic', 'Islamic Studies'];

  const handleFilterApply = (filters: any) => {
    console.log('Applied Filters:', filters);
  };

  return (
    <View className="bg-white shadow-sm relative">
      {/* Search Bar */}
      <View className='flex flex-row items-center justify-between w-full box-border'>
        <View className="w-[80%] mx-2 flex flex-row items-center px-2 py-2 my-2 border border-neutral-400 rounded-lg">
          <Ionicons name="search-outline" size={22} color="gray" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search courses"
            className="flex-1 py-1.5 px-2 text-[14px] text-gray-800"
          />
          {/* <TouchableOpacity>
            <Ionicons name="mic-outline" size={22} color="gray" />
          </TouchableOpacity> */}
        </View>
        <View>
          {/* <View className='m-3 h-10 w-10 border-2 border-[#009000] rounded-full flex items-center justify-center'>
            <Ionicons name="heart-outline" size={22} color="#009000"
              className='' />
          </View> */}
          <View className='flex items-center justify-center'>
            <Ionicons name="heart-circle-outline" size={36} color="#009000"
              className='m-3' />
          </View>
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="px-2 py-1 h-36 flex flex-col flex-wrap items-start gap-2 relative">
        <FilterButton onApply={handleFilterApply} />

        {/* <View className="flex-1 flex flex-row flex-wrap justify-start">
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} className="bg-blue-100 hover:bg-blue-200 my-1 mx-1 py-0.5 rounded-sm border border-blue-400 inline-flex items-center justify-center">
              <Text className=" text-blue-800 text-sm font-semibold me-2 px-1.5 py-0.5">{tab}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
        <ScrollView
          contentContainerStyle={{ justifyContent: 'center', flexGrow: 1, flexDirection: 'row' }}
          className="flex-1 flex flex-row">
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} className="bg-transparent h-20 w-20 hover:bg-blue-200 my-1 mx-1 py-0.5 rounded-sm border border-blue-400 flex flex-col items-center justify-between">
              <View className='w-full h-12'>
                <Image
                  source={require('../../assets/CoursesImage/tajweed.png')}
                  className="w-full h-full object-contain"
                  resizeMode="contain"
                />
              </View>
              <Text
                numberOfLines={1}
                className={`text-blue-800 font-semibold me-2 px-0.5 py-0.5 ${tab == "Islamic Studies" ? "text-[7px]" : "text-xs"} `}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </View>
  );
};

export default SubHeader;
