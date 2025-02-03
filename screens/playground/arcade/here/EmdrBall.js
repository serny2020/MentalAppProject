import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions, Image } from 'react-native';

const EmdrBall = ({ start, ballColor = '#ff4081', ballImage, bumpSpeed = 2 }) => {
  const ballAnimation = useRef(new Animated.Value(0)).current;
  const ballSize = 50;
  const screenWidth = Dimensions.get('window').width;
  const horizontalMargin = 20;
  const ballTravelDistance = screenWidth - ballSize - horizontalMargin * 2;

  // Calculate animation speed dynamically
  const animationDuration = 3000 / bumpSpeed; // Faster speed = shorter duration

  useEffect(() => {
    if (start) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(ballAnimation, {
            toValue: ballTravelDistance,
            duration: animationDuration,
            useNativeDriver: true,
          }),
          Animated.timing(ballAnimation, {
            toValue: 0,
            duration: animationDuration,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      ballAnimation.setValue(0); // Reset position when stopped
    }
  }, [start, bumpSpeed, ballTravelDistance]); // Added bumpSpeed as a dependency

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          { transform: [{ translateX: ballAnimation }] },
          ballImage ? {} : { backgroundColor: ballColor }, // If no image, use color
        ]}
      >
        {ballImage && (
          <Image
            source={ballImage}
            style={{ width: ballSize, height: ballSize, borderRadius: ballSize / 2 }}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default EmdrBall;
