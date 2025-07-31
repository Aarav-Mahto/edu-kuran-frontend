import { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import { apiTest } from "~/data/api";

// Convert Unix timestamp (in seconds) to human-readable format
const formatTime = (unixTime?: number): string => {
  if (!unixTime) return "N/A";
  const date = new Date(unixTime * 1000);
  return date.toLocaleString(); // e.g., "7/31/2025, 10:12:38 PM"
};

const HeroPage = () => {
  const [name, setName] = useState('');
  const [apiData, setApiData] = useState<{ message?: string; success?: string; time?: number; error?: string }>({});

  const handleClick = async () => {
    const data = await apiTest(name);
    setApiData(data);
    console.log("Api Response:", data);
  };

  return (
    <View className='w-full my-[10%] flex flex-col gap-5 items-center justify-center'>
      {apiData.message && (
        <View className='w-fit mx-auto border h-fit p-6'>
          <Text className='text-gray-700'>Status: {apiData.success}</Text>
          <Text className='text-gray-700'>Message: {apiData.message}</Text>
          <Text className='text-gray-700'>Time: {formatTime(apiData.time)}</Text>
        </View>
      )}
      <TextInput
        className='px-4 py-1.5 border'
        placeholder='Enter Your name'
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        className="bg-green-600 rounded-md h-fit p-4 mx-5 my-2"
        activeOpacity={0.6}
        onPress={handleClick}
      >
        <Text className="text-white text-center">Api Testing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeroPage;
