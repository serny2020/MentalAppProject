import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Help icon

const DontLaughHelpScreen = () => {
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

      {/* Title */}
      <Text style={styles.title}>Instructions</Text>

      {/* Instructions Section */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.bulletPoint}>• Open your front camera, make sure your entire face is included in the circle.</Text>
        <Text style={styles.bulletPoint}>• When you are ready, click on the “Start” button.</Text>
        <Text style={styles.bulletPoint}>• While watching the funny videos, if you laugh, the game will be over automatically.</Text>
        <Text style={styles.bulletPoint}>• The system will keep your highest score for this challenge.</Text>
      </View>

      {/* Note Section */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Note:</Text>
        <Text style={styles.bulletPoint}>• Each challenge should last for 2-3 minutes.</Text>
      </View>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  instructionsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
  },
  noteContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default DontLaughHelpScreen;
