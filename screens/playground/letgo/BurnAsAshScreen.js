import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const BurnAsAshScreen = ({navigation}) => {
  const handleBurnThoughts = () => {
    console.log("Burn thoughts clicked");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Exit</Text>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Burn them as ash</Text>
      <Text style={styles.description}>
        Everyone has down times and negative thoughts. These thoughts cannot define who you are. Let them go by clicking on the 🔥 button!
      </Text>

      {/* Negative Thoughts List */}
      <ScrollView style={styles.thoughtsContainer}>
        <Text style={styles.thoughtText}>
          "I’m not good enough to succeed at anything."
        </Text>
        <Text style={styles.thoughtText}>
          "Everyone else is more talented than I am."
        </Text>
        <Text style={styles.thoughtText}>
          "I’ll never find someone who truly loves me."
        </Text>
        <Text style={styles.thoughtText}>
          "Everything I do is pointless."
        </Text>
        <Text style={styles.thoughtText}>
          "The world is against me."
        </Text>
        <Text style={styles.thoughtText}>
          "My life will never get better."
        </Text>
        <Text style={styles.thoughtText}>
          "I’m too broken to be fixed."
        </Text>
      </ScrollView>

      {/* Burn Button */}
      <TouchableOpacity style={styles.burnButton} onPress={handleBurnThoughts}>
        {/* <Image 
          source={require('./assets/fire-icon.png')} 
          style={styles.fireIcon}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Light grey background
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
  },
  thoughtsContainer: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  thoughtText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  burnButton: {
    alignItems: 'center',
    marginTop: 16,
  },
  fireIcon: {
    width: 60,
    height: 60,
  },
});

export default BurnAsAshScreen;
