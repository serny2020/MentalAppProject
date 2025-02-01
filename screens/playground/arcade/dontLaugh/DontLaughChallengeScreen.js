import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Icons for Help & Camera
import { Video } from 'expo-av'; // For video playback

const DontLaughChallengeScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHelpPress = () => {
    navigation.navigate("DontLaughHelpScreen");
  };  

  const handleStartPress = () => {
    Alert.alert("Game Started", "The challenge will begin!");
  };

  return (
    <View style={styles.container}>

      {/* Top Row (Back & Help Buttons) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.topButton}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Don’t Laugh Challenge</Text>

      {/* Video Placeholder */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Replace with real source
          style={styles.video}
          resizeMode="contain"
          useNativeControls
        />
      </View>

      {/* Camera Button (Disabled) */}
      <TouchableOpacity style={styles.cameraButton} disabled={true}>
        <Feather name="camera" size={50} color="black" />
        <Text style={styles.cameraText}>Camera</Text>
      </TouchableOpacity>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // Yellow background
    alignItems: 'center',
    paddingTop: 50,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 40,
  },
  topButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
  },
  videoContainer: {
    width: '90%',
    height: 200,
    backgroundColor: 'black', // Video border color
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  video: {
    width: '95%',
    height: '95%',
  },
  cameraButton: {
    backgroundColor: '#D3D3D3', // Light grey background
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cameraText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  startText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DontLaughChallengeScreen;
