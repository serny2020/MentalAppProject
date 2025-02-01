import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Icons for Help

const SoundScribblesScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleHelpPress = () => {
    navigation.navigate("SoundScribblesHelpScreen");
  };
  
  return (
    <View style={styles.container}>
      
      {/* Top Row (Back & Help Button) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sound Scribbles</Text>
        <TouchableOpacity onPress={handleHelpPress}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <Text style={styles.stepText}>1</Text>
      </View>

      {/* Instruction */}
      <Text style={styles.instruction}>Tap the keyboard however you want!</Text>

      {/* Scrollable Keyboard Images */}
      <ScrollView contentContainerStyle={styles.imageContainer}>
        <Image source={require('../../../../assets/image/arcade/keyboard1.png')} style={styles.keyboardImage} />
        <Image source={require('../../../../assets/image/arcade/keyboard2.png')} style={styles.keyboardImage} />
        <Image source={require('../../../../assets/image/arcade/keyboard3.png')} style={styles.keyboardImage} />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // Yellow background
    paddingTop: 50,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  stepIndicator: {
    backgroundColor: '#D8BFD8', // Light purple circle
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  stepText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  instruction: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  keyboardImage: {
    width: '90%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default SoundScribblesScreen;
