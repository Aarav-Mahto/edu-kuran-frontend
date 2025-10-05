import React, { useState } from "react";
import { View, Text, LayoutChangeEvent } from "react-native";

type Props = {
  subjects: string[];
  maxLines?: number; // optional
  size?: "xs" | "sm" | "md" | "lg"; // new prop
};

export default function TeachingSubjects({
  subjects,
  maxLines,
  size = "sm", // default size
}: Props) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [chipWidths, setChipWidths] = useState<number[]>([]);
  const [ready, setReady] = useState(false);

  const gap = 8;

  const handleChipLayout = (index: number, e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setChipWidths((prev) => {
      const next = [...prev];
      next[index] = width;
      if (next.filter(Boolean).length === subjects.length) {
        setReady(true);
      }
      return next;
    });
  };

  let visible: string[] = [];
  let hasMore = false;
  let remainingCount = 0;

  if (ready && containerWidth > 0) {
    if (!maxLines) {
      visible = [...subjects];
    } else {
      let lines: string[][] = [[]];
      let currentLineWidth = 0;
      const moreChipWidth = 60;

      for (let i = 0; i < subjects.length; i++) {
        const chipWidth = chipWidths[i] + gap;

        if (currentLineWidth + chipWidth > containerWidth && lines.length < maxLines) {
          lines.push([]);
          currentLineWidth = 0;
        }

        if (
          lines.length > maxLines ||
          (lines.length === maxLines &&
            currentLineWidth + chipWidth + moreChipWidth > containerWidth)
        ) {
          hasMore = true;
          remainingCount = subjects.length - i;
          break;
        }

        lines[lines.length - 1].push(subjects[i]);
        currentLineWidth += chipWidth;
      }

      if (lines.length === 1 && lines[0].length > 0 && hasMore) {
        lines.push([lines[0].pop()!]);
      }

      visible = lines.flat();

      if (hasMore && lines[lines.length - 1]) {
        lines[lines.length - 1][lines[lines.length - 1].length - 1] = `+${remainingCount} More`;
        visible = lines.flat();
      }
    }
  }

  // map sizes to tailwind classes
  const sizeMap: Record<typeof size, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <View
      className="flex flex-row flex-wrap items-center gap-2 mt-3"
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      {ready
        ? visible.map((subject, index) => (
            <Text
              key={index}
              className={`${sizeMap[size]} px-1 rounded border ${
                subject.startsWith("+")
                  ? "bg-gray-100 border-gray-200 text-neutral-500"
                  : "bg-green-50 border-green-100 text-neutral-700"
              }`}
            >
              {subject}
            </Text>
          ))
        : subjects.map((subject, index) => (
            <Text
              key={index}
              onLayout={(e) => handleChipLayout(index, e)}
              style={{ position: "absolute", opacity: 0 }}
            >
              {subject}
            </Text>
          ))}
    </View>
  );
}
