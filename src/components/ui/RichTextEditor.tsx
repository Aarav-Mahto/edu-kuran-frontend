import React, { useRef, useState } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const CustomHeading1 = ({ tintColor }: { tintColor?: string }) => (
  <Text style={{ color: tintColor, fontWeight: "bold", fontSize: 18 }}>H</Text>
);

type TempScreenProps = {
  onSubmit: (html: string) => void;
};

const TempScreen: React.FC<TempScreenProps> = ({ onSubmit }) => {
  const richText = useRef<RichEditor>(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 100;

  const handleTextChange = (html: string) => {
    const plain = html.replace(/<[^>]+>/g, "").trim();
    setCharCount(plain.length);
    setHtmlContent(html);
  };

  const handleBlur = () => {
    if (htmlContent.trim()) {
      onSubmit(htmlContent);
    }
  };

  const handleAddClick = () => {
    if (htmlContent.trim()) {
      onSubmit(htmlContent);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
      style={{ flex: 1 }}
    >
      <View className="flex-1 px-4 pb-4">
        <Text className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
          Description:
        </Text>

        <View style={{ flexDirection: "column", gap: 8 }}>
          <RichToolbar
            editor={richText}
            iconTint="#1f2937"
            selectedIconTint="#2563eb"
            iconSize={18}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
            ]}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 4,
              gap: 4,
              backgroundColor: "#f3f4f6",
              borderRadius: 8,
            }}
            iconStyle={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            selectedButtonStyle={{
              backgroundColor: "#e0f2fe",
              borderRadius: 6,
            }}
          />

          <RichToolbar
            editor={richText}
            iconTint="#1f2937"
            selectedIconTint="#2563eb"
            iconSize={18}
            actions={[
              actions.heading1,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.blockquote,
              actions.code,
              actions.undo,
              actions.redo,
            ]}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 4,
              gap: 4,
              backgroundColor: "#f3f4f6",
              borderRadius: 8,
            }}
            iconStyle={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
            selectedButtonStyle={{
              backgroundColor: "#e0f2fe",
              borderRadius: 6,
            }}
            iconMap={{
              [actions.heading1]: CustomHeading1,
            }}
          />
        </View>

        <RichEditor
          ref={richText}
          onChange={handleTextChange}
          onBlur={handleBlur}
          placeholder="Start writing here..."
          initialHeight={180}
          editorStyle={{
            backgroundColor: "#ffffff",
            color: "#111827",
            placeholderColor: "#9ca3af",
            contentCSSText: "font-size: 16px; padding: 10px;",
          }}
          style={{
            borderWidth: 1,
            borderColor: "#d1d5db",
            borderRadius: 8,
            minHeight: 180,
          }}
        />

        <Text
          className={`mt-2 text-right text-sm ${
            charCount > maxChars ? "text-red-500" : "text-gray-500"
          }`}
        >
          {maxChars - charCount} characters remaining
        </Text>

        {/* ✅ Add Button */}
        <TouchableOpacity
          onPress={handleAddClick}
          className="mt-4 bg-blue-600 rounded-lg py-2 px-4 self-end"
        >
          <Text className="text-white font-semibold text-sm">Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TempScreen;
