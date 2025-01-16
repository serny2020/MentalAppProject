import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing from Expo

const TipOfTheDay = ({ handleSettingsPress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tips = [
    {
      title: "Can't Sleep? 8 Techniques You Can Do",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      source:
        "https://www.sleepfoundation.org/insomnia/treatment/what-do-when-you-cant-sleep",
    },
    // Add more tips here if needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tips.length) % tips.length);
  };

  const openSource = (url) => {
    Linking.openURL(url);
  };

  const currentTip = tips[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tip of the Day</Text>
        <TouchableOpacity
          onPress={() => handleSettingsPress("Tip of the Day")}
        >
          <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>{currentTip.title}</Text>
          {/* <Image source={{ uri: currentTip.image }} style={styles.image} /> */}
          <Text style={styles.tipDescription}>{currentTip.description}</Text>
          {/* <Text
            style={styles.source}
            onPress={() => openSource(currentTip.source)}
          >
            Source: {currentTip.source}
          </Text> */}

          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => openSource(currentTip.source)}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageIndicator}>{`${currentIndex + 1}/${
        tips.length
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9", // Same background color
    borderRadius: 15, // Updated to match affirmationSectionBox
    padding: 20, // Same padding
    marginBottom: 20, // Consistent margin
    shadowColor: "#000",
    shadowOpacity: 0.2, // Updated shadow opacity
    shadowOffset: { width: 0, height: 3 }, // Consistent shadow offset
    shadowRadius: 5, // Same shadow radius
    elevation: 4, // Elevation matched
    height: 280, // Kept height consistent
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10, // Matched to sectionHeader
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#800080", // Updated to match sectionTitle color
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  arrowButton: {
    padding: 10,
  },
  tipBox: {
    backgroundColor: "#d3d3d3",
    width: 250, // Fixed width
    height: 150, // Fixed height
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    color: "#555", // Updated for consistency
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  tipDescription: {
    fontSize: 14,
    color: "#555", // Same as instructions color
    textAlign: "center",
    marginBottom: 10,
  },
  source: {
    fontSize: 12,
    color: "#800080", // Updated to match sectionTitle
    textAlign: "left",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  readMoreButton: {
    backgroundColor: "#800080", // Matched to sectionTitle color
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    width: 110,
    alignItems: "center",
  },
  readMoreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  pageIndicator: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

export default TipOfTheDay;
