import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Help icon

const FidgetSpinnerHelpScreen = () => {
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
      <Text style={styles.introTitle}>Introduction:</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.bulletPoint}>• Click anywhere on the spinner to stop spinning.</Text>
        <Text style={styles.bulletPoint}>• You can change from 2D spinner to 3D spinner.</Text>
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
  introTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  instructionsContainer: {
    marginTop: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FidgetSpinnerHelpScreen;
