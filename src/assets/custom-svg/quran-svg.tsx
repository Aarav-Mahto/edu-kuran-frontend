import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import Svg, {
  Defs,
  Rect,
  LinearGradient,
  Stop,
  Pattern,
  Circle,
  Path,
  G,
  RadialGradient,
  Text as SvgText,
  TSpan,
} from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  imageSource?: ImageSourcePropType;
  imageStyle?: any;
  word?: string; // 👈 word to render
};

export default function TajweedCardBackground({
  width = 260,
  height = 120,
  imageSource,
  imageStyle,
  word = "",
}: Props) {
  return (
    <View style={{ width, height, borderRadius: 14, overflow: "hidden" }}>
      <Svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <Defs>
          {/* Gradient background */}
          <LinearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#064e3b" />
            <Stop offset="1" stopColor="#115e59" />
          </LinearGradient>

          {/* Dot pattern */}
          <Pattern
            id="dotPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <Circle cx="3" cy="3" r="1.4" fill="#fff" opacity="0.08" />
            <Circle cx="13" cy="13" r="1.4" fill="#fff" opacity="0.08" />
          </Pattern>

          {/* Glow for crescent */}
          <RadialGradient id="crescentGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor="#fde047" stopOpacity="0.75" />
            <Stop offset="1" stopColor="#fde047" stopOpacity="0" />
          </RadialGradient>

          {/* Gradient for text */}
          <LinearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#fde68a" />
            <Stop offset="1" stopColor="#fff" />
          </LinearGradient>

          {/* Glow for text */}
          <RadialGradient id="textGlow" cx="50%" cy="50%" r="70%">
            <Stop offset="0" stopColor="#facc15" stopOpacity="0.6" />
            <Stop offset="1" stopColor="#facc15" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        {/* Background */}
        <Rect width={width} height={height} rx="12" fill="url(#bgGradient)" />
        <Rect width={width} height={height} fill="url(#dotPattern)" />

        {/* Crescent + star */}
        <G transform={`translate(${width * 0.7}, ${height * 0.28})`}>
          <Circle r={26} fill="url(#crescentGlow)" opacity={0.7} />
          <Circle cx="0" cy="0" r={18} fill="#f6d365" />
          <Circle cx={6} cy="0" r={18} fill="url(#bgGradient)" />
          <Path
            d="M26 -4 L28.4 1.6 L34 1.6 L29.2 5.2 L31 10 L26 7 L21 10 L22.8 5.2 L18 1.6 L23.6 1.6 Z"
            fill="#fde047"
            transform="scale(0.8) translate(-12,-2)"
          />
        </G>

        {/* Word below crescent */}
        {word ? (
          <>
            {/* Glow behind text */}
            <Circle
              cx={width * 0.7}
              cy={height * 0.62}
              r={28}
              fill="url(#textGlow)"
              opacity={0.45}
            />
            {/* Gradient text */}
            <SvgText
              x={width * 0.7}
              y={height * 0.65}
              fontSize={16}
              fontWeight="bold"
              textAnchor="middle"
              fill="url(#textGradient)"
              stroke="#000"
              strokeWidth={0.4}
            >
              <TSpan>{word}</TSpan>
            </SvgText>
          </>
        ) : null}
      </Svg>

      {/* Foreground image */}
      {imageSource && (
        <Image
          source={imageSource}
          style={[
            {
              position: "absolute",
              width: width * 0.46,
              height: height * 0.72,
              left: width * 0.08,
              top: height * 0.14,
              resizeMode: "contain",
            },
            imageStyle,
          ]}
        />
      )}
    </View>
  );
}
