import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ProgressBar } from 'react-native-paper';

interface CourseCardProps {
  title: string;
  instructor?: string;
  progress: number; // value between 0 and 1
}

const CourseCard = ({ title, instructor, progress }: CourseCardProps) => {
  return (
    <View className="mb-4 w-full rounded-2xl bg-white p-4 shadow-md border border-gray-200">
      <Text className="mb-1 text-lg font-bold">{title}</Text>
      <Text className="mb-3 text-sm text-gray-600">Instructor: {instructor}</Text>

      <ProgressBar progress={progress} color="#10B981" style={{ height: 8, borderRadius: 5 }} />

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-sm text-gray-700">
          {progress === 0 ? `0% Completed` : `${Math.round(progress * 100)}% Completed`}
        </Text>
        <TouchableOpacity className="rounded-xl bg-green-600 px-4 py-2">
          <Text className="text-sm font-semibold text-white">
            {progress === 0 ? 'Start Course' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseCard;
