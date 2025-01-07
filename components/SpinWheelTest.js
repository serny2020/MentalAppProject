import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
} from 'react-native';
import Svg, { Path, Text as SvgText } from 'react-native-svg';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.8; // Adjust if needed
const ONE_TURN = 360;
const SLICE_COUNT = 6;         // Number of slices
const RADIUS = WHEEL_SIZE / 2; // For easier reference

// Define each slice with label & color
const slices = [
  { label: 'Prize 1', color: '#e74c3c' },
  { label: 'Prize 2', color: '#8e44ad' },
  { label: 'Prize 3', color: '#3498db' },
  { label: 'Prize 4', color: '#27ae60' },
  { label: 'Prize 5', color: '#f1c40f' },
  { label: 'Prize 6', color: '#d35400' },
];

/**
 * Creates an SVG arc Path for a slice.
 * @param centerX - x coordinate of circle center
 * @param centerY - y coordinate of circle center
 * @param startAngle - starting angle (degrees)
 * @param endAngle - ending angle (degrees)
 * @param radius - radius of the circle
 */
function makeArcPath(
  centerX,
  centerY,
  startAngle,
  endAngle,
  radius
) {
  // Convert angles to radians
  const startRad = (Math.PI / 180) * startAngle;
  const endRad = (Math.PI / 180) * endAngle;

  // Calculate start point on the circle
  const startX = centerX + radius * Math.cos(startRad);
  const startY = centerY + radius * Math.sin(startRad);

  // Calculate end point on the circle
  const endX = centerX + radius * Math.cos(endRad);
  const endY = centerY + radius * Math.sin(endRad);

  // If the arc is > 180 degrees, largeArcFlag is 1, else 0
  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    `M ${centerX} ${centerY}`,          // Move to center
    `L ${startX} ${startY}`,            // Line to start of arc
    `A ${radius} ${radius} 0 ${arcSweep} 1 ${endX} ${endY}`, // Arc
    'Z',                                // Close path
  ].join(' ');
}

const SpinWheelNoD3 = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);

  // Spin function
  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // 1) Stop any ongoing animation & reset rotation to 0
    rotation.stopAnimation(() => {
      rotation.setValue(0);

      // 2) Random slice index
      const randomIndex = Math.floor(Math.random() * SLICE_COUNT);
      const sliceAngle = ONE_TURN / SLICE_COUNT;
      const chosenSliceAngle = randomIndex * sliceAngle;

      // e.g., 3 full rotations + final angle
      const fullRotations = 3;
      const targetAngle = fullRotations * ONE_TURN + (ONE_TURN - chosenSliceAngle);
      console.log('Next spin targetAngle:', targetAngle);

      Animated.timing(rotation, {
        toValue: targetAngle,
        duration: 4000,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        setIsSpinning(false);
        setSelectedPrize(slices[randomIndex].label);
      });
    });
  };

  // Render the slices
  const renderSlices = () => {
    const sliceAngle = ONE_TURN / SLICE_COUNT;

    return slices.map((slice, index) => {
      const startAngle = index * sliceAngle;
      const endAngle = (index + 1) * sliceAngle;

      const path = makeArcPath(0, 0, startAngle, endAngle, RADIUS);

      // Label position (roughly the midpoint of the slice)
      const midAngle = (startAngle + endAngle) / 2;
      const midRad = (Math.PI / 180) * midAngle;
      const labelX = (RADIUS / 1.5) * Math.cos(midRad);
      const labelY = (RADIUS / 1.5) * Math.sin(midRad);

      return (
        <React.Fragment key={`slice-${index}`}>
          <Path d={path} fill={slice.color} />
          <SvgText
            x={labelX}
            y={labelY}
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            {slice.label}
          </SvgText>
        </React.Fragment>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, ONE_TURN],
                outputRange: ['0deg', `${ONE_TURN}deg`],
              }),
            },
          ],
        }}
      >
        <Svg
          width={WHEEL_SIZE}
          height={WHEEL_SIZE}
          viewBox={`-${RADIUS} -${RADIUS} ${WHEEL_SIZE} ${WHEEL_SIZE}`}
        >
          {renderSlices()}
        </Svg>
      </Animated.View>

      <TouchableOpacity
        style={styles.button}
        onPress={spinWheel}
        disabled={isSpinning}
      >
        <Text style={styles.buttonText}>
          {isSpinning ? 'Spinning...' : 'Spin'}
        </Text>
      </TouchableOpacity>

      {selectedPrize && !isSpinning && (
        <Text style={styles.prizeText}>You won: {selectedPrize}!</Text>
      )}
    </View>
  );
};

export default SpinWheelNoD3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2980b9',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  prizeText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});
