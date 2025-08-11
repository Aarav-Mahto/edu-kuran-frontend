import React, { useRef, useEffect } from 'react';
import {
  Modal,
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface RightSideModalProps {
    profileVisible: boolean;
    setProfileVisible: (visible: boolean) => void;
    navigation: any;
}
const RightSideModal = ({ profileVisible, setProfileVisible, navigation }: RightSideModalProps) => {
  const slideAnim = useRef(new Animated.Value(300)).current; // initial X offset (off-screen)

  useEffect(() => {
    if (profileVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [profileVisible]);

  const menuItems = [
    { title: 'My Profile', icon: 'person' },
    { title: 'Saved Lists', icon: 'bookmark' },
    { title: 'Help & Support', icon: 'help-outline' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Logout', icon: 'logout' },
  ];

  return (
    <Modal
      transparent
      visible={profileVisible}
      animationType="none"
      onRequestClose={() => setProfileVisible(false)}>
      <Pressable
        onPress={() => setProfileVisible(false)}
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Animated.View
          style={{
            transform: [{ translateX: slideAnim }],
          }}
          className="absolute right-0 top-0 bottom-0 h-full w-[50%] bg-[#dce8f1] px-4 py-10">
          {/* User Info */}
          <View className="mb-4 flex flex-row items-center gap-2 border-b border-gray-300 pb-4">
            <Image
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
              }}
              className="h-16 w-16 rounded-full"
            />
            <View>
              <Text className="text-md font-semibold">Alice John</Text>
              <Text className="text-sm text-gray-600">India</Text>
            </View>
          </View>

          {/* Menu Options */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="mb-4"
              onPress={() => {
                setProfileVisible(false);
                switch (item.title) {
                  case 'My Profile':
                    navigation.navigate('Profile');
                    break;
                  case 'Help & Support':
                    navigation.navigate('Support');
                    break;
                  case 'Settings':
                    navigation.navigate('Settings');
                    break;
                  case 'Saved Lists':
                    navigation.navigate('Saved');
                    break;
                  case 'Logout':
                    console.log('Logout pressed');
                    break;
                }
              }}>
              <View className="flex flex-row items-center gap-2">
                <Icon name={item.icon} size={20} color="#4B5563" />
                <Text className="text-sm text-gray-600">{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default RightSideModal;
