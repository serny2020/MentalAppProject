import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text as RNText, Animated, Easing } from "react-native";
import Svg, { G, Path, Text as SvgText, Circle, Polygon } from "react-native-svg";

const segments = [
  { id: 1, title: "Professional Therapist", color: "#FFEEAD" },
  { id: 2, title: "Emergency Line", color: "#395E36" },
  { id: 3, title: "Emergency Toolkit", color: "#55734C" },
  { id: 4, title: "Your Loved Ones", color: "#A0A861" },
  { id: 5, title: "Your Community", color: "#D8A348" },
];

const SpinWheel = ({ onSelection }) => {
  const radius = 180; // Radius for the wheel
  const center = 200; // Center point of the wheel
  const rotation = useRef(new Animated.Value(0)).current; // Animated rotation value
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);

  const createPieSlicePath = (startAngle, endAngle) => {
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    const startX = center + radius * Math.cos(startAngle);
    const startY = center + radius * Math.sin(startAngle);

    const endX = center + radius * Math.cos(endAngle);
    const endY = center + radius * Math.sin(endAngle);

    return `M ${center},${center} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
  };

  let cumulativeAngle = 0;

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // 1) Stop any ongoing animation & reset rotation to 0
    rotation.stopAnimation(() => {
      rotation.setValue(0);

      // 2) Random segment selection
      const segmentCount = segments.length;
      const segmentAngle = 360 / segmentCount;
      const randomIndex = Math.floor(Math.random() * segmentCount);
      const chosenSegmentAngle = randomIndex * segmentAngle;

      // 3) Calculate target angle: multiple full spins + the angle to the selected segment
      const fullRotations = 3;
      const targetAngle = fullRotations * 360 + (360 - chosenSegmentAngle);

      Animated.timing(rotation, {
        toValue: targetAngle,
        duration: 4000,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        setIsSpinning(false);
        setSelectedSegment(segments[randomIndex]);

        if (onSelection) {
          onSelection(segments[randomIndex])
        }
      });
    });
  };

  // Interpolating rotation to degrees for the wheel
  const spinStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 360],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Static Arrow Indicator */}
      <Svg height={400} width={400} style={styles.arrowContainer}>
        <Polygon
          points="200,50 190,70 210,70"
          fill="red"
          stroke="black"
          strokeWidth={2}
          transform=" translate(150, 250) rotate(-45, 200, 60)"
        />
      </Svg>

      {/* Spinning Wheel */}
      <Animated.View style={spinStyle}>
        <Svg height={400} width={400}>
          {segments.map((segment) => {
            const sliceAngle = (2 * Math.PI) / segments.length; // Equal slice for each segment
            const startAngle = cumulativeAngle;
            const endAngle = cumulativeAngle + sliceAngle;
            cumulativeAngle += sliceAngle;

            // Create the path for each slice
            const path = createPieSlicePath(startAngle, endAngle);

            // Calculate label position and rotation
            const midAngle = (startAngle + endAngle) / 2;
            const labelX = center + (radius / 1.8) * Math.cos(midAngle);
            const labelY = center + (radius / 1.8) * Math.sin(midAngle);
            const rotationAngle = (midAngle * 180) / Math.PI + 180; // Convert to degrees and add 180 to point to the center

            return (
              <G key={segment.id}>
                {/* Render Pie Slice */}
                <Path d={path} fill={segment.color} />

                {/* Render Label */}
                <SvgText
                  x={labelX}
                  y={labelY}
                  fontSize={12}
                  fill="black"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  transform={`rotate(${rotationAngle}, ${labelX}, ${labelY})`}
                >
                  {segment.title}
                </SvgText>
              </G>
            );
          })}
        </Svg>
      </Animated.View>

      {/* Static Spin Circle in the Center */}
      <Svg height={400} width={400} style={styles.centerCircle}>
        <Circle cx={center} cy={center} r={30} fill="black" />
        <SvgText
          x={center}
          y={center}
          fontSize={14}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          SPIN
        </SvgText>
      </Svg>

      {/* Spin Button */}
      <TouchableOpacity
        style={styles.spinButton}
        onPress={handleSpin}
        disabled={isSpinning}
      >
        <RNText style={styles.spinButtonText}>{isSpinning ? "Spinning..." : "SPIN"}</RNText>
      </TouchableOpacity>

      {/* Result Text */}
      {/* {selectedSegment && (
        <RNText style={styles.resultText}>
          Selected: {selectedSegment.title}
        </RNText>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10, // Ensures it is above other elements
  },  
  centerCircle: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  spinButton: {
    marginTop: 30,
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  spinButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SpinWheel;
