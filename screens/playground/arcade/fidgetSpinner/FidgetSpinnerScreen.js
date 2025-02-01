import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Help icon

const FidgetSpinnerScreen = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(5); // Default time 5s
  const [isHapticEnabled, setIsHapticEnabled] = useState(false);
  const [isSmileEnabled, setIsSmileEnabled] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHelpPress = () => {
    navigation.navigate("FidgetSpinnerHelpScreen");
  };
  
  const handleSpinPress = () => {
    alert(`Spinning for ${selectedTime} seconds!`);
  };

  const handle3DSpinnerPress = () => {
    alert("Switching to 3D Spinner!");
  };

  return (
    <View style={styles.container}>
      
      {/* Top Row (Back & Help Button) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Fidget Spinner</Text>
        <TouchableOpacity onPress={handleHelpPress}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Spinner Section */}
      <Text style={styles.subTitle}>2D Spinner</Text>
      <View style={styles.spinnerContainer}>
        <Image source={require('../../../../assets/image/arcade/spinner.png')} style={styles.spinnerImage} />
        <TouchableOpacity style={styles.fullscreenIcon}>
          <Ionicons name="expand-outline" size={20} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Spin Button */}
      <TouchableOpacity style={styles.spinButton} onPress={handleSpinPress}>
        <Text style={styles.spinText}>Spin</Text>
      </TouchableOpacity>

      {/* Timer Selection */}
      <Text style={styles.timerLabel}>Set a timer for each spin:</Text>
      <View style={styles.timerOptions}>
        {[5, 15, 30, 45, 60].map((time) => (
          <TouchableOpacity
            key={time}
            style={[styles.timerButton, selectedTime === time && styles.selectedTimer]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={styles.timerText}>{time}s</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Toggle Switches */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Enable Haptic:</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#6a0dad' }}
          thumbColor={isHapticEnabled ? 'white' : '#666'}
          onValueChange={setIsHapticEnabled}
          value={isHapticEnabled}
        />
      </View>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Add smile face:</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#4169E1' }}
          thumbColor={isSmileEnabled ? 'white' : '#666'}
          onValueChange={setIsSmileEnabled}
          value={isSmileEnabled}
        />
      </View>

      {/* Change to 3D Spinner Button */}
      <TouchableOpacity style={styles.changeButton} onPress={handle3DSpinnerPress}>
        <Text style={styles.changeText}>Change it to 3D spinner</Text>
      </TouchableOpacity>

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
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  spinnerContainer: {
    marginTop: 10,
    position: 'relative',
  },
  spinnerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  fullscreenIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  spinButton: {
    backgroundColor: '#D8BFD8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  spinText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerLabel: {
    fontSize: 16,
    marginTop: 20,
  },
  timerOptions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timerButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedTimer: {
    backgroundColor: '#D8BFD8',
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: '80%',
    justifyContent: 'space-between',
  },
  toggleText: {
    fontSize: 16,
  },
  changeButton: {
    backgroundColor: '#D8BFD8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  changeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FidgetSpinnerScreen;
