import React from 'react';
import { View, Text } from 'react-native';

const ScheduleCard = ({ subject, time, tutor, status }: { subject: string; time: string; tutor: string; status: string }) => {
  return (
    <View className="mb-4 rounded-lg bg-white p-4 shadow">
      <Text className="font-bold">{subject}</Text>
      <Text className="text-gray-600">{time}</Text>
      <Text className="text-gray-600">Tutor: {tutor}</Text>
      <Text className={`mt-2 font-semibold ${status === 'Upcoming' ? 'text-blue-500' : 'text-green-500'}`}>
        {status}
      </Text>
    </View>
  );
};

export default ScheduleCard;