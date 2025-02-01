import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather } from '@expo/vector-icons'; // Icons for help & settings

const HereAndNowGameScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState("05:00");

  const handleExit = () => {
    navigation.goBack();
  };

  const handleRecord = () => {
    Alert.alert("Record", "Show meditation record or history.");
  };

  const handleStart = () => {
    Alert.alert("Game Started", "The game will begin!");
    // Here you can start a countdown timer or initiate the animation
  };

  const handleHelp = () => {
    navigation.navigate("HelpScreen");
  };

  const handleSettings = () => {
    Alert.alert("Settings", "Modify game preferences.");
  };

  return (
    <LinearGradient colors={['#E3F3E3', '#B000B5']} style={styles.container}>
      
      {/* Top Buttons */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleExit}>
          <Text style={styles.topButton}>Exit</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Here & Now</Text>
        <TouchableOpacity onPress={handleRecord}>
          <Text style={styles.topButton}>Record</Text>
        </TouchableOpacity>
      </View>

      {/* Timer Row */}
      <View style={styles.timerRow}>
        <Text style={styles.timerText}>Counting down: {timeLeft}</Text>
        <Text style={styles.timerText}>Time left: {timeLeft}</Text>
      </View>

      {/* Bouncing Ball Placeholder */}
      {/* <ImageBackground source={require('../../../assets/image/arcade/bouncing_ball.png')} style={styles.ballArea}> */}
        {/* Replace with actual animation later */}
      {/* </ImageBackground> */}

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>

      {/* Bottom Buttons */}
      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={handleHelp} style={styles.iconButton}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={styles.iconButton}>
          <Feather name="sliders" size={30} color="black" />
        </TouchableOpacity>
      </View>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  topButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  timerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  ballArea: {
    width: '100%',
    height: 150,
    backgroundColor: '#222', // Placeholder if no image
    borderRadius: 10,
    marginTop: 20,
  },
  startButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  startText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomRow: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconButton: {
    padding: 10,
  },
});

export default HereAndNowGameScreen;
