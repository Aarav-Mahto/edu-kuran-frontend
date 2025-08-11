import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ChatMessage = {
  id: string;
  text: string;
  createdAt: number; // epoch ms
  senderId: string;
  senderName?: string;
  status?: 'sent' | 'delivered' | 'read';
};

type ChatProps = {
  title?: string;
  currentUserId?: string;
  initialMessages?: ChatMessage[];
};

const defaultMessages: ChatMessage[] = [
  {
    id: 'm3',
    text: 'Welcome to Edu-Kuran! How can we help you today? 😊',
    createdAt: Date.now() - 1000 * 60 * 60,
    senderId: 'support',
    senderName: 'Support',
    status: 'delivered',
  },
  {
    id: 'm2',
    text: 'Assalamu Alaikum! I have a question about Tajweed classes.',
    createdAt: Date.now() - 1000 * 60 * 30,
    senderId: 'me',
    senderName: 'You',
    status: 'read',
  },
  {
    id: 'm1',
    text: 'Wa Alaikum Assalam! Sure, feel free to ask. ✨',
    createdAt: Date.now() - 1000 * 60 * 28,
    senderId: 'support',
    senderName: 'Support',
    status: 'delivered',
  },
];

function formatTime(epochMs: number): string {
  const date = new Date(epochMs);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const normalizedHours = hours % 12 || 12;
  return `${normalizedHours}:${minutes} ${ampm}`;
}

export default function Chat({
  title = 'Messages',
  currentUserId = 'me',
  initialMessages,
}: ChatProps) {
  const insets = useSafeAreaInsets();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(
    (initialMessages && initialMessages.length > 0
      ? initialMessages
      : defaultMessages
    ).sort((a, b) => b.createdAt - a.createdAt) // newest first for FlatList inverted
  );
  const flatListRef = useRef<FlatList<ChatMessage>>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    const newMessage: ChatMessage = {
      id: `${Date.now()}`,
      text,
      createdAt: Date.now(),
      senderId: currentUserId,
      senderName: 'You',
      status: 'sent',
    };
    setMessages((prev) => [newMessage, ...prev]);
    setInput('');

    // optional demo auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        {
          id: `${Date.now()}-reply`,
          text: 'Thanks for your message! Our tutor will reply shortly. 📚',
          createdAt: Date.now(),
          senderId: 'support',
          senderName: 'Support',
          status: 'delivered',
        },
        ...prev,
      ]);
    }, 500);
  }, [currentUserId, input]);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      // With inverted list, positive y means scrolled away from latest
      setShowScrollToBottom(y > 150);
    },
    []
  );

  const scrollToBottom = useCallback(() => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, []);

  const renderTicks = (status?: ChatMessage['status']) => {
    if (!status) return null;
    const color = status === 'read' ? '#34B7F1' : '#8b8b8b';
    const name = status === 'sent' ? 'checkmark' : 'checkmark-done';
    return <Ionicons name={name} size={14} color={color} />;
  };

  const isSameDay = (a: number, b: number) => {
    const da = new Date(a);
    const db = new Date(b);
    return (
      da.getFullYear() === db.getFullYear() &&
      da.getMonth() === db.getMonth() &&
      da.getDate() === db.getDate()
    );
  };

  const humanDate = (epochMs: number) => {
    const d = new Date(epochMs);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (isSameDay(epochMs, today.getTime())) return 'Today';
    if (isSameDay(epochMs, yesterday.getTime())) return 'Yesterday';
    return d.toLocaleDateString();
  };

  const renderItem = useCallback(
    ({ item, index }: { item: ChatMessage; index: number }) => {
      const isMe = item.senderId === currentUserId;
      const showDate = index === 0 || !isSameDay(item.createdAt, messages[index - 1].createdAt);
      return (
        <View className="w-full">
          {showDate && (
            <View className="items-center my-2">
              <View className="bg-[#E1F5FE] px-3 py-1 rounded-full border border-[#cfe9ff]">
                <Text className="text-[12px] text-[#3c3c3c]">{humanDate(item.createdAt)}</Text>
              </View>
            </View>
          )}
          <View className={`px-3 py-1 w-full`}>
            <View
              className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                isMe ? 'self-end' : 'self-start'
              }`}
              style={{ backgroundColor: isMe ? '#DCF8C6' : '#FFFFFF', borderWidth: 1, borderColor: isMe ? '#BEE4A8' : '#EDEDED' }}
            >
              {!!item.senderName && !isMe && (
                <Text className="text-[11px] text-neutral-600 mb-0.5">{item.senderName}</Text>
              )}
              <Text className={`text-[15px] ${isMe ? 'text-[#303030]' : 'text-[#222]'} leading-5`}>{item.text}</Text>
              <View className="flex-row items-center self-end gap-1 mt-1">
                <Text className="text-[10px] text-[#888]">{formatTime(item.createdAt)}</Text>
                {isMe && renderTicks(item.status)}
              </View>
            </View>
          </View>
        </View>
      );
    },
    [currentUserId, messages]
  );

  const HeaderBar = useMemo(
    () => (
      <View
        className="flex-row items-center gap-3 px-3 py-2 border-b border-neutral-300"
        style={{ backgroundColor: '#075E54', paddingTop: insets.top }}
      >
        <TouchableOpacity accessibilityLabel="Go back">
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Image source={require('~/assets/userImg.avif')} style={{ width: 36, height: 36, borderRadius: 18 }} />
        <View className="flex-1">
          <Text className="text-white font-semibold">Support</Text>
          <Text className="text-[#d7f2ed] text-[12px]">online</Text>
        </View>
        <TouchableOpacity className="px-2">
          <Ionicons name="videocam" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity className="px-2">
          <Ionicons name="call" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity className="px-2">
          <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    ),
    [insets.top]
  );

  return (
    <SafeAreaView className="flex-1" edges={['bottom']}>
      <StatusBar style="light" backgroundColor="#075E54" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 56 : 0}
        className="flex-1"
      >
        <View className="flex-1" style={{ backgroundColor: '#ECE5DD' }}>
          {HeaderBar}
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(m) => m.id}
              renderItem={renderItem}
              inverted
              keyboardShouldPersistTaps="handled"
              onScroll={onScroll}
              scrollEventThrottle={16}
              contentContainerStyle={{ paddingTop: 8, paddingBottom: 8 }}
            />
          </View>

          <View
            className="flex-row items-end gap-2 px-2 py-2"
            style={{ backgroundColor: '#ECE5DD', paddingBottom: Math.max(insets.bottom, 8) }}
          >
            <View className="flex-row items-end bg-white rounded-3xl px-3 py-1 flex-1 border border-[#E0E0E0]">
              <TouchableOpacity className="py-2 pr-2">
                <Ionicons name="happy-outline" size={22} color="#7a7a7a" />
              </TouchableOpacity>
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type a message"
                placeholderTextColor="#888"
                multiline
                blurOnSubmit={false}
                returnKeyType="send"
                onSubmitEditing={input.trim().length > 0 ? handleSend : undefined}
                keyboardAppearance={Platform.OS === 'ios' ? 'dark' : undefined}
                className="flex-1 max-h-32 min-h-10 px-1 text-neutral-900"
              />
              <TouchableOpacity className="py-2 px-2">
                <Ionicons name="attach" size={22} color="#7a7a7a" />
              </TouchableOpacity>
              <TouchableOpacity className="py-2 pl-1">
                <Ionicons name="camera" size={22} color="#7a7a7a" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={input.trim().length > 0 ? handleSend : undefined}
              className="rounded-full w-12 h-12 items-center justify-center"
              style={{ backgroundColor: '#075E54' }}
              accessibilityLabel={input.trim().length > 0 ? 'Send message' : 'Voice message'}
            >
              {input.trim().length > 0 ? (
                <Ionicons name="send" size={20} color="#fff" />
              ) : (
                <Ionicons name="mic" size={22} color="#fff" />
              )}
            </TouchableOpacity>

            {showScrollToBottom && (
              <TouchableOpacity
                onPress={scrollToBottom}
                className="absolute right-3 -top-10 rounded-full p-3 bg-white border border-[#e5e5e5]"
                accessibilityLabel="Scroll to latest"
              >
                <Ionicons name="arrow-down" size={18} color="#555" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


