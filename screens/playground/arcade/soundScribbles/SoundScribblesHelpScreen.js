import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Help icon

const SoundScribblesHelpScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      
      {/* Top Row (Back & Centered Help Icon) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <View style={styles.centerIcon}>
          <Ionicons name="help-circle" size={30} color="black" />
        </View>
      </View>

      {/* Instructions Section */}
      <Text style={styles.sectionTitle}>Introduction:</Text>
      <Text style={styles.sectionText}>
        There is a collection of random scribbles made from various sound.
      </Text>

      <Text style={styles.sectionTitle}>How-to-play:</Text>
      <Text style={styles.sectionText}>
        Tap anywhere inside of the items to hear and feel the sound and vibration from each key.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // Yellow background
    padding: 20,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  centerIcon: {
    flex: 1, // Pushes the help icon to center
    // alignItems: 'center',
    marginLeft: 120,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  sectionText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default SoundScribblesHelpScreen;
