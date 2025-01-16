import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Updated import from Expo

const AffirmationSection = ({ handleCollapsePress }) => {
  return (
    <View style={styles.affirmationSectionBox}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Practice Affirmation</Text>
        <TouchableOpacity onPress={handleCollapsePress}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <Text style={styles.instructions}>
        {`Step 1: Pick one affirmation from your Affirmation Collection
Step 2: Read it out loud for at least 3 times!`}
      </Text>
      <View style={styles.affirmationGrid}>
        <Image
          source={{ uri: "https://example.com/affirmation1.png" }}
          style={styles.affirmationImage}
        />
        <Image
          source={{ uri: "https://example.com/affirmation2.png" }}
          style={styles.affirmationImage}
        />
        <Image
          source={{ uri: "https://example.com/affirmation3.png" }}
          style={styles.affirmationImage}
        />
        <Image
          source={{ uri: "https://example.com/affirmation4.png" }}
          style={styles.affirmationImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  affirmationSectionBox: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    height: 280,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#800080",
  },
  instructions: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  affirmationGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  affirmationImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default AffirmationSection;
