import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CourseCard from './CourseCard';

type CourseCategory = 'Active' | 'Completed' | 'Cancelled' | 'Saved';

interface Course {
  id: number | string;
  title: string;
  instructor?: string;
  progress: number;
}

const data: Record<CourseCategory, Course[]> = {
  Active: [
    { id: 1, title: 'Tajweed Mastery Level 1', instructor: 'Mufti Nadeem', progress: 0.75 },
    { id: 2, title: 'Seerah Course', instructor: 'ustaad Musa Ali', progress: 0.50 },
  ],
  Completed: [
    { id: 3, title: 'Quran Hifz', instructor: 'Mufti Salman', progress: 1.0 },
    { id: 4, title: 'Tafseer Course', instructor: 'ustaad Shaadi', progress: 1.0 },
  ],
  Cancelled: [
    { id: '4', title: 'Advanced Arabic Course', progress: 0.2 },
  ],
  Saved: [
    { id: '5', title: 'Complete Namaz Course', progress: 0 },
  ],
};

const MyCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseCategory>('Active');
  const [modalVisible, setModalVisible] = useState(false);
  const courseOptions: CourseCategory[] = ['Active', 'Completed', 'Cancelled', 'Saved'];
  const courses = data[selectedCourse];

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      {/* Dropdown Modal Trigger */}
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          height: 50,
          justifyContent: 'center',
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: '#9AE6B4',
          borderRadius: 8,
          backgroundColor: '#F7FAF9',
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 16 }}>{selectedCourse}</Text>
      </Pressable>

      {/* Dropdown Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
          <View style={{
            width: '80%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            elevation: 5,
          }}>
            {courseOptions.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setSelectedCourse(option);
                  setModalVisible(false);
                }}
                style={{
                  paddingVertical: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee',
                }}
              >
                <Text style={{ fontSize: 16 }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* Course List */}
      <FlatList scrollEnabled={false}
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            instructor={item.instructor}
            progress={item.progress}
          />
        )}
        ListEmptyComponent={
          <Text className="text-center text-gray-500 mt-4">No courses found.</Text>
        }
      />
    </View>
  );
};

export default MyCourses;
