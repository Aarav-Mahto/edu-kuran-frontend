import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '~/types/navigation';

type EditProfileRouteProps = RouteProp<RootStackParamList, 'EditProfile'>;

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute<EditProfileRouteProps>();
  const { userInfo, langInfo, educationInfo, onSave } = route.params;

  // User Info States
  const [name, setName] = useState(userInfo.name);
  const [username, setUsername] = useState(userInfo.username);
  const [bio, setBio] = useState(userInfo.bio);

  // Language Info States
  const [label, setLabel] = useState(langInfo.label);
  const [value, setValue] = useState(langInfo.value);

  // Education Info States
  const [degree, setDegree] = useState(educationInfo.degree);
  const [institution, setInstitution] = useState(educationInfo.institution);
  const [startYear, setStartYear] = useState(educationInfo.startYear || '');
  const [endYear, setEndYear] = useState(educationInfo.endYear || '');
  const [score, setScore] = useState(educationInfo.score || '');

  const handleSave = () => {
    const updatedUserProfile = { name, username, bio };
    const updatedLangInfo = { label, value };
    const updatedEducation = {
      degree,
      institution,
      startYear,
      endYear,
      score,
    };

    console.log('Updated Profile:', updatedUserProfile);
    Alert.alert('Profile Updated', 'Your profile information has been saved.');

    if (onSave) {
      onSave(updatedUserProfile, updatedLangInfo, updatedEducation);
    }

    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Edit Profile</Text>

      {/* Name */}
      <Text className="text-sm font-semibold text-gray-600 mb-1">Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Username */}
      <Text className="text-sm font-semibold text-gray-600 mb-1">Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Bio */}
      <Text className="text-sm font-semibold text-gray-600 mb-1">Bio</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        placeholder="Write something about yourself"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Languages */}
      <Text className="text-lg font-semibold text-gray-700 mt-6 mb-2">Languages</Text>

      {/* Language Label */}
      <Text className="text-sm font-semibold text-gray-600 mb-1">Language Name</Text>
      <TextInput
        value={label}
        onChangeText={setLabel}
        placeholder="Enter language name"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Language Value */}
      <Text className="text-sm font-semibold text-gray-600 mb-1">Fluency/Native</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter language fluency or native status"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Education Section */}
      <Text className="text-lg font-semibold text-gray-700 mt-6 mb-2">Education</Text>

      <Text className="text-sm font-semibold text-gray-600 mb-1">Degree Name</Text>
      <TextInput
        value={degree}
        onChangeText={setDegree}
        placeholder="e.g. B.Tech in Computer Science"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      <Text className="text-sm font-semibold text-gray-600 mb-1">University / College Name</Text>
      <TextInput
        value={institution}
        onChangeText={setInstitution}
        placeholder="e.g. IIT Delhi"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      <Text className="text-sm font-semibold text-gray-600 mb-1">Start Year</Text>
      <TextInput
        value={startYear}
        onChangeText={setStartYear}
        placeholder="e.g. 2021"
        keyboardType="numeric"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      <Text className="text-sm font-semibold text-gray-600 mb-1">End Year</Text>
      <TextInput
        value={endYear}
        onChangeText={setEndYear}
        placeholder="e.g. 2024"
        keyboardType="numeric"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      <Text className="text-sm font-semibold text-gray-600 mb-1">Score (CGPA / Percentage)</Text>
      <TextInput
        value={score}
        onChangeText={setScore}
        placeholder="e.g. 8.5 CGPA or 85%"
        className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
      />

      {/* Save Button */}
      <TouchableOpacity
        onPress={handleSave}
        className="bg-blue-600 rounded-lg p-3 mt-6"
      >
        <Text className="text-center text-white font-semibold">Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;
