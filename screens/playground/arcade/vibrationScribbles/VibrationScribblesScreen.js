import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Help icon
import Slider from '@react-native-community/slider';


const VibrationScribblesScreen = () => {
  const navigation = useNavigation();
  const [vibrationLevel, setVibrationLevel] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHelpPress = () => {
    alert("Adjust the vibration level and start or stop the vibration effect.");
  };

  const handlePlayPress = () => {
    setIsPlaying(true);
    alert("Vibration Started!");
  };

  const handleStopPress = () => {
    setIsPlaying(false);
    alert("Vibration Stopped!");
  };

  return (
    <View style={styles.container}>
      
      {/* Top Row (Back & Help Button) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Vibration Scribbles</Text>
        <TouchableOpacity onPress={handleHelpPress}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Vibration Visual Representation */}
      <View style={styles.vibrationBox}>
        {/* <Image source={require('../../../assets/image/arcade/vibration_scribbles.png')} style={styles.vibrationImage} /> */}
      </View>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={vibrationLevel}
        minimumTrackTintColor="#4B0082"
        maximumTrackTintColor="#D3D3D3"
        thumbTintColor="#4B0082"
        onValueChange={(value) => setVibrationLevel(value)}
      />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.playButton, !isPlaying && styles.disabledButton]} disabled={isPlaying} onPress={handlePlayPress}>
          <Text style={[styles.playText, !isPlaying && styles.disabledText]}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton} onPress={handleStopPress}>
          <Text style={styles.stopText}>Stop</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // Yellow background
    paddingTop: 50,
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  vibrationBox: {
    width: 250,
    height: 250,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  vibrationImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  slider: {
    width: '80%',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  playButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  stopButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  playText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  stopText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  disabledButton: {
    backgroundColor: 'transparent',
  },
  disabledText: {
    color: '#D3D3D3',
  },
});

export default VibrationScribblesScreen;
