import { View, Text } from 'react-native';
import React from 'react';

interface ScheduleCardProps {
  subject: string;
  time: string;
  tutor: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

const statusColors = {
  Upcoming: 'bg-yellow-100 text-yellow-700',
  Ongoing: 'bg-green-100 text-green-700',
  Completed: 'bg-gray-100 text-gray-500',
};

const ScheduleCard = ({ subject, time, tutor, status }: ScheduleCardProps) => {
  return (
    <View className="bg-white p-4 mb-4 rounded-2xl shadow-md w-full">
      <Text className="text-lg font-bold mb-1">{subject}</Text>
      <Text className="text-sm text-gray-600">{time}</Text>
      <Text className="text-sm text-gray-600 mb-2">With: {tutor}</Text>
      <Text className={`px-3 py-1 text-xs rounded-full w-24 text-center ${statusColors[status]}`}>
        {status}
      </Text>
    </View>
  );
}

export default ScheduleCard;