import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, usNavit } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dreamboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backText} onPress={() => navigation.goBack()}>Back</Text>
        </TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="#6a1b9a" />
      </View>

      {/* Title Section */}
      <Text style={styles.title}>Craft Your Dreamboard</Text>
      <Text style={styles.subtitle}>How would you want to see yourself in the future?</Text>

      {/* Question Section */}
      <Text style={styles.question}>What would be an ideal life for you?</Text>
      <View style={styles.promptBox}>
        <Text style={styles.promptText}>
          Try to imagine your best possible self 20 years later:
          {"\n"}- What are you doing?
          {"\n"}- What is important to you?
          {"\n"}- What do you really care about, and why?
        </Text>
      </View>

      {/* Design Your Life Section */}
      <Text style={styles.designText}>Design Your Life: fill in the blank</Text>
      <Image
        source={{ uri: 'https://example.com/path/to/your/image.png' }} // Replace with the actual image URL or local asset
        style={styles.dreamboardImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1bee7",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4a148c",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#4a148c",
    textAlign: "center",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  promptBox: {
    backgroundColor: "#d1c4e9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  promptText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  designText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  dreamboardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default Dreamboard;
