import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const HereAndNowScreen = () => {
  const navigation = useNavigation();

  const handleHelpPress = () => {
    Alert.alert("Help", "This game helps with focus and mindfulness.\n\nFollow the instructions to complete the session.");
  };

  const handleDonePress = () => {
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <LinearGradient colors={['#E3F3E3', '#B000B5']} style={styles.container}>
      
      {/* Help Button (Center) */}
      <TouchableOpacity style={styles.helpButton} onPress={handleHelpPress}>
        <Text style={styles.helpIcon}>?</Text>
      </TouchableOpacity>

      {/* Done Button (Top-Right) */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Instructions</Text>

      {/* Game Rules */}
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesTitle}>Game rules:</Text>
        <Text style={styles.ruleText}>
          1. Each player has to watch the ball bouncing back and forth for 5 minutes without stopping it or changing the app into another app.
        </Text>
        <Text style={styles.ruleText}>
          2. If the player clicks on the “exit” button, the time will not be added to the meditation record.
        </Text>
      </View>

      {/* Disclaimer */}
      <View style={styles.disclaimerContainer}>
        <Text style={styles.disclaimerTitle}>Disclaimer</Text>
        <Text style={styles.sourceText}>
          <Text style={styles.boldText}>Title:</Text> SELF-ADMINISTERED EMDR BILATERAL MEDIATION
        </Text>
        <Text style={styles.sourceText}>
          <Text style={styles.boldText}>Source:</Text> https://www.youtube.com/watch?v=q1YVvndNyqM&t=319s
        </Text>
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
  helpButton: {
    position: 'absolute',
    top: 40,
    left: '55%',
    transform: [{ translateX: -15 }],
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  doneButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  doneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
  },
  rulesContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  rulesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ruleText: {
    fontSize: 16,
    marginBottom: 10,
  },
  disclaimerContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sourceText: {
    fontSize: 14,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HereAndNowScreen;
