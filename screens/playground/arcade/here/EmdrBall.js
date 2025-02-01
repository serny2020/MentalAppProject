// EmdrBall.js
import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions, Image } from 'react-native';

const EmdrBall = ({ start, ballColor = '#ff4081', ballImage }) => {
  const ballAnimation = useRef(new Animated.Value(0)).current;
  const ballSize = 50;
  const screenWidth = Dimensions.get('window').width;
  const horizontalMargin = 20;
  const ballTravelDistance = screenWidth - ballSize - horizontalMargin * 2;

  useEffect(() => {
    if (start) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(ballAnimation, {
            toValue: ballTravelDistance,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(ballAnimation, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      ballAnimation.setValue(0); // Reset position when stopped
    }
  }, [start, ballTravelDistance]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          { transform: [{ translateX: ballAnimation }] },
          // If no image is passed, use the background color.
          ballImage ? {} : { backgroundColor: ballColor },
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
    backgroundColor: '#F0F0F0',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default EmdrBall;
